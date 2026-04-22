import nacl from "tweetnacl";
import { Buffer } from "buffer";

class CloudflareWarpClient {
  static BASE_URL = 'https://api.cloudflareclient.com/v0i1909051800';
  static DEFAULT_HEADERS = {
    'User-Agent': 'okhttp/3.12.1',
    'Content-Type': 'application/json',
  };

  async registerClient(publicKey) {
    const requestBody = {
      install_id: '',
      tos: new Date().toISOString(),
      key: publicKey,
      fcm_token: '',
      type: 'ios',
      locale: 'en_US',
    };

    const response = await this.makeRequest('POST', 'reg', requestBody);
    
    if (!response.result?.id || !response.result?.token) {
      throw new Error('Invalid registration response structure');
    }

    return {
      id: response.result.id,
      token: response.result.token,
    };
  }

  async enableWarp(clientId, token) {
    const headers = {
      ...CloudflareWarpClient.DEFAULT_HEADERS,
      'Authorization': `Bearer ${token}`,
    };

    const response = await this.makeRequest('PATCH', `reg/${clientId}`, { warp_enabled: true }, headers);

    if (!response.result?.config?.peers?.[0] || !response.result?.config?.interface) {
      throw new Error('Invalid WARP configuration response structure');
    }

    return response;
  }

  async makeRequest(method, endpoint, body = null, customHeaders = null) {
    const url = `${CloudflareWarpClient.BASE_URL}/${endpoint}`;
    const headers = customHeaders || CloudflareWarpClient.DEFAULT_HEADERS;

    const options = { method, headers };

    if (body && (method === 'POST' || method === 'PATCH')) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  }
}

class CryptoUtils {
  static generateKeyPair() {
    const keyPair = nacl.box.keyPair();
    
    return {
      privateKey: Buffer.from(keyPair.secretKey).toString('base64'),
      publicKey: Buffer.from(keyPair.publicKey).toString('base64'),
    };
  }

  static stringToBase64(str) {
    return Buffer.from(str).toString('base64');
  }
}

class WarpConfigBuilder {
  static DEVICE_PROFILES = {
    computer: { jc: 4, jmin: 40, jmax: 70 },
    phone: { jc: 120, jmin: 23, jmax: 911 },
    awg15: { jc: 120, jmin: 23, jmax: 911 },
  };

  static build(params) {
    const interfaceSection = this.buildInterfaceSection(params);
    const peerSection = this.buildPeerSection(params);
    return `${interfaceSection}\n\n${peerSection}`;
  }

  static buildInterfaceSection(params) {
    const { privateKey, clientIPv4, clientIPv6, deviceType } = params;
    const profile = this.DEVICE_PROFILES[deviceType];

    let lines = [
      '[Interface]',
      `PrivateKey = ${privateKey}`,
      `Address = ${clientIPv4}, ${clientIPv6}`,
      'DNS = 1.1.1.1, 2606:4700:4700::1111, 1.0.0.1, 2606:4700:4700::1001',
      'MTU = 1280',
      `Jc = ${profile.jc}`,
      `Jmin = ${profile.jmin}`,
      `Jmax = ${profile.jmax}`,
      'S1 = 0',
      'S2 = 0',
      'H1 = 1',
      'H2 = 2',
      'H3 = 3',
      'H4 = 4',
    ];

    return lines.join('\n');
  }

  static buildPeerSection(params) {
    const { publicKey, endpoint } = params;

    return [
      '[Peer]',
      `PublicKey = ${publicKey}`,
      'AllowedIPs = 0.0.0.0/0, ::/0',
      `Endpoint = ${endpoint}`,
      'PersistentKeepalive = 25',
    ].join('\n');
  }
}

// 4 фиксированных конфига с разными параметрами
const CONFIG_TYPES = {
  1: { deviceType: 'computer', endpoint: '162.159.195.1:500', name: 'AmneziaWG (Стандарт)' },
  2: { deviceType: 'phone', endpoint: '162.159.192.1:500', name: 'AmneziaWG (Мобильный)' },
  3: { deviceType: 'awg15', endpoint: '162.159.193.1:500', name: 'AmneziaWG (AWG)' },
  4: { deviceType: 'computer', endpoint: '162.159.194.1:500', name: 'AmneziaWG (Альтернатива)' }
};

export async function handler(event, context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Обработка preflight запросов
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  try {
    // Получаем тип конфига из URL или тела запроса
    let configType = 1;
    
    if (event.httpMethod === 'GET') {
      configType = parseInt(event.queryStringParameters?.type || '1');
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      configType = body.type || 1;
    }

    const config = CONFIG_TYPES[configType];
    if (!config) {
      throw new Error('Invalid config type');
    }

    console.log(`Generating config type ${configType}: ${config.name}`);

    // Генерация ключей
    const keyPair = CryptoUtils.generateKeyPair();

    // Регистрация клиента в Cloudflare
    const cloudflareClient = new CloudflareWarpClient();
    const { id: clientId, token } = await cloudflareClient.registerClient(keyPair.publicKey);
    const warpConfig = await cloudflareClient.enableWarp(clientId, token);

    // Извлечение параметров
    const peer = warpConfig.result.config.peers[0];
    const interfaceConfig = warpConfig.result.config.interface;

    // Построение финального конфига
    const finalConfig = WarpConfigBuilder.build({
      privateKey: keyPair.privateKey,
      publicKey: peer.public_key,
      clientIPv4: interfaceConfig.addresses.v4,
      clientIPv6: interfaceConfig.addresses.v6,
      deviceType: config.deviceType,
      endpoint: config.endpoint,
    });

    const configBase64 = CryptoUtils.stringToBase64(finalConfig);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: true,
        content: configBase64,
        configName: config.name,
        type: configType
      }),
    };
  } catch (error) {
    console.error('Error generating config:', error);
    
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        message: error.message || 'Ошибка при генерации конфигурации',
      }),
    };
  }
}