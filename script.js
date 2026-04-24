// Статические конфигурации
const STATIC_CONFIGS = {
    FI: `[Interface]
PrivateKey = aG1Lg0PM/8ebyFq9fQaOBIbaKIKRaOhBNp5rdoj9snM=
Address = 10.8.0.10/24
DNS = 1.1.1.1
Jc = 4
Jmin = 40
Jmax = 70
S1 = 97
S2 = 137
H1 = 206835555
H2 = 1798466344
H3 = 291743724
H4 = 2035958533

[Peer]
PublicKey = 0DyNEKF2bF9qNaZtUrwpJuJbVxRmEClyFoBzkIvd3VY=
PresharedKey = Qwr+6NoQ+zFApzdU7COx3aweQ+bzA9ctFkecRu9P9M8=
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 0
Endpoint = gw-fin1.itvhost.ru:51820`,

    DE: `[Interface]
PrivateKey = KDuUWx4YXXhSsFOYN1ccfvZs3HSGgOXErBpy08imHU4=
Address = 172.16.0.2/32, 2606:4700:110:8b62:c21c:b9a5:5182:86fb/128
DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001
MTU = 1280
S1 = 0
S2 = 0
Jc = 4
Jmin = 40
Jmax = 70
H1 = 1
H2 = 2
H3 = 3
H4 = 4
I1 = <b 0xce000000010897a297ecc34cd6dd000044d0ec2e2e1ea2991f467ace4222129b5a098823784694b4897b9986ae0b7280135fa85e196d9ad980b150122129ce2a9379531b0fd3e871ca5fdb883c369832f730e272d7b8b74f393f9f0fa43f11e510ecb2219a52984410c204cf875585340c62238e14ad04dff382f2c200e0ee22fe743b9c6b8b043121c5710ec289f471c91ee414fca8b8be8419ae8ce7ffc53837f6ade262891895f3f4cecd31bc93ac5599e18e4f01b472362b8056c3172b513051f8322d1062997ef4a383b01706598d08d48c221d30e74c7ce000cdad36b706b1bf9b0607c32ec4b3203a4ee21ab64df336212b9758280803fcab14933b0e7ee1e04a7becce3e2633f4852585c567894a5f9efe9706a151b615856647e8b7dba69ab357b3982f554549bef9256111b2d67afde0b496f16962d4957ff654232aa9e845b61463908309cfd9de0a6abf5f425f577d7e5f6440652aa8da5f73588e82e9470f3b21b27b28c649506ae1a7f5f15b876f56abc4615f49911549b9bb39dd804fde182bd2dcec0c33bad9b138ca07d4a4a1650a2c2686acea05727e2a78962a840ae428f55627516e73c83dd8893b02358e81b524b4d99fda6df52b3a8d7a5291326e7ac9d773c5b43b8444554ef5aea104a738ed650aa979674bbed38da58ac29d87c29d387d80b526065baeb073ce65f075ccb56e47533aef357dceaa8293a523c5f6f790be90e4731123d3c6152a70576e90b4ab5bc5ead01576c68ab633ff7d36dcde2a0b2c68897e1acfc4d6483aaaeb635dd63c96b2b6a7a2bfe042f6aed82e5363aa850aace12ee3b1a93f30d8ab9537df483152a5527faca21efc9981b304f11fc95336f5b9637b174c5a0659e2b22e159a9fed4b8e93047371175b1d6d9cc8ab745f3b2281537d1c75fb9451871864efa5d184c38c185fd203de206751b92620f7c369e031d2041e152040920ac2c5ab5340bfc9d0561176abf10a147287ea90758575ac6a9f5ac9f390d0d5b23ee12af583383d994e22c0cf42383834bcd3ada1b3825a0664d8f3fb678261d57601ddf94a8a68a7c273a18c08aa99c7ad8c6c42eab67718843597ec9930457359dfdfbce024afc2dcf9348579a57d8d3490b2fa99f278f1c37d87dad9b221acd575192ffae1784f8e60ec7cee4068b6b988f0433d96d6a1b1865f4e155e9fe020279f434f3bf1bd117b717b92f6cd1cc9bea7d45978bcc3f24bda631a36910110a6ec06da35f8966c9279d130347594f13e9e07514fa370754d1424c0a1545c5070ef9fb2acd14233e8a50bfc5978b5bdf8bc1714731f798d21e2004117c61f2989dd44f0cf027b27d4019e81ed4b5c31db347c4a3a4d85048d7093cf16753d7b0d15e078f5c7a5205dc2f87e330a1f716738dce1c6180e9d02869b5546f1c4d2748f8c90d9693cba4e0079297d22fd61402dea32ff0eb69ebd65a5d0b687d87e3a8b2c42b648aa723c7c7daf37abcc4bb85caea2ee8f55bec20e913b3324ab8f5c3304f820d42ad1b9f2ffc1a3af9927136b4419e1e579ab4c2ae3c776d293d397d575df181e6cae0a4ada5d67ecea171cca3288d57c7bbdaee3befe745fb7d634f70386d873b90c4d6c6596bb65af68f9e5121e67ebf0d89d3c909ceedfb32ce9575a7758ff080724e1ab5d5f43074ecb53a479af21ed03d7b6899c36631c0166f9d47e5e1d4528a5d3d3f744029c4b1c190cbfbad06f5f83f7ad0429fa9a2719c56ffe3783460e166de2d8>

[Peer]
PublicKey = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25
Endpoint = 89.22.237.214:4500`
};

// Функция для получения текущего времени по Москве (UTC+3) в формате часы_минуты
function getMoscowTimeString() {
    const now = new Date();
    // Устанавливаем время по Москве (UTC+3)
    const moscowTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
    
    const hours = String(moscowTime.getUTCHours()).padStart(2, '0');
    const minutes = String(moscowTime.getUTCMinutes()).padStart(2, '0');
    
    return `${hours}_${minutes}`;
}

// Универсальная функция для скачивания файла (работает на всех устройствах)
function downloadFile(content, fileName, mimeType = 'application/text') {
    // Пытаемся использовать атрибут download (работает на большинстве ПК)
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Для iOS: если не сработало, показываем инструкцию
    setTimeout(() => {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // На iOS иногда не срабатывает download, показываем альтернативный способ
            const iosMessage = document.createElement('div');
            iosMessage.style.position = 'fixed';
            iosMessage.style.bottom = '20px';
            iosMessage.style.left = '20px';
            iosMessage.style.right = '20px';
            iosMessage.style.backgroundColor = 'rgba(0,0,0,0.9)';
            iosMessage.style.color = '#00ff64';
            iosMessage.style.padding = '12px';
            iosMessage.style.borderRadius = '12px';
            iosMessage.style.textAlign = 'center';
            iosMessage.style.fontSize = '12px';
            iosMessage.style.zIndex = '9999';
            iosMessage.style.backdropFilter = 'blur(10px)';
            iosMessage.style.border = '1px solid rgba(0,255,100,0.3)';
            iosMessage.innerHTML = `📁 Файл ${fileName} сохранён<br>Нажмите и удерживайте, чтобы сохранить, если скачивание не началось`;
            document.body.appendChild(iosMessage);
            setTimeout(() => {
                iosMessage.remove();
            }, 3000);
        }
    }, 100);
}

// Функция для скачивания статического конфига
function downloadStaticConfig(countryCode, countryName) {
    const config = STATIC_CONFIGS[countryCode];
    
    if (!config) {
        console.error('Config not found');
        return;
    }
    
    try {
        // Имя файла: AWG_DE.conf или AWG_FI.conf
        const fileName = `AWG_${countryCode}.conf`;
        
        // Используем универсальную функцию скачивания с правильным MIME-типом
        downloadFile(config, fileName, 'application/x-wireguard-profile');
    } catch (error) {
        console.error('Error downloading config:', error);
    }
}

// Функция для генерации динамического конфига
async function generateConfig(configType, buttonId) {
    const button = document.getElementById(buttonId);
    const buttonText = button.querySelector('.button__text');
    const originalText = buttonText.textContent;
    
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        const response = await fetch('/api/warp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: configType })
        });

        const data = await response.json();

        if (data.success) {
            // Получаем текущее время по Москве в формате часы_минуты
            const moscowTime = getMoscowTimeString();
            
            // Формируем имя файла: AWG_PC_15_30.conf или AWG_Mob_15_30.conf
            const devicePrefix = configType === 1 ? 'PC' : 'Mob';
            const fileName = `AWG_${devicePrefix}_${moscowTime}.conf`;
            
            // Декодируем base64 и скачиваем
            const configContent = atob(data.content);
            downloadFile(configContent, fileName, 'application/x-wireguard-profile');

            buttonText.textContent = `✅ Скачано!`;
            setTimeout(() => {
                buttonText.textContent = originalText;
            }, 2000);
        } else {
            console.error('Generation error:', data.message);
            buttonText.textContent = `❌ Ошибка`;
            setTimeout(() => {
                buttonText.textContent = originalText;
            }, 2000);
        }
    } catch (error) {
        console.error('Error:', error);
        buttonText.textContent = `❌ Ошибка`;
        setTimeout(() => {
            buttonText.textContent = originalText;
        }, 2000);
    } finally {
        button.disabled = false;
        button.classList.remove("button--loading");
    }
}

// Назначаем обработчики
document.getElementById('staticFI').onclick = () => downloadStaticConfig('FI', 'Finland');
document.getElementById('staticDE').onclick = () => downloadStaticConfig('DE', 'Germany');
document.getElementById('generateButton1').onclick = () => generateConfig(1, 'generateButton1');
document.getElementById('generateButton2').onclick = () => generateConfig(2, 'generateButton2');
