async function generateConfig(configType, buttonId) {
    const button = document.getElementById(buttonId);
    const buttonText = button.querySelector('.button__text');
    const status = document.getElementById('status');
    const info = document.getElementById('info');

    // Сохраняем оригинальный текст кнопки
    const originalText = buttonText.textContent;
    
    // Показываем загрузку
    button.disabled = true;
    button.classList.add("button--loading");

    try {
        // Отправляем запрос к Netlify Function
        const response = await fetch('/.netlify/functions/warp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type: configType })
        });

        const data = await response.json();

        if (data.success) {
            // Создаём файл для скачивания
            const randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
            const fileName = `AmneziaWG_${configType}_${randomNumber}.conf`;
            
            const link = document.createElement('a');
            link.href = 'data:application/octet-stream;base64,' + data.content;
            link.download = fileName;
            link.click();

            // Обновляем текст кнопки
            buttonText.textContent = `✅ Скачано!`;
            setTimeout(() => {
                buttonText.textContent = originalText;
            }, 2000);
            
            status.innerHTML = '✅ <strong>Успешно!</strong> Конфигурация сгенерирована и скачана.';
            status.style.color = '#4caf50';
        } else {
            status.innerHTML = '❌ <strong>Ошибка:</strong> ' + data.message;
            status.style.color = '#f44336';
        }
    } catch (error) {
        console.error('Error:', error);
        status.innerHTML = '❌ <strong>Ошибка:</strong> Не удалось сгенерировать конфигурацию. Проверьте соединение.';
        status.style.color = '#f44336';
    } finally {
        // Убираем загрузку
        button.disabled = false;
        button.classList.remove("button--loading");
        
        // Очищаем статус через 5 секунд
        setTimeout(() => {
            if (status.innerHTML !== '') {
                status.innerHTML = '';
            }
        }, 5000);
    }
}

// Назначаем обработчики для кнопок
document.getElementById('generateButton1').onclick = () => generateConfig(1, 'generateButton1');
document.getElementById('generateButton2').onclick = () => generateConfig(2, 'generateButton2');
document.getElementById('generateButton3').onclick = () => generateConfig(3, 'generateButton3');
document.getElementById('generateButton4').onclick = () => generateConfig(4, 'generateButton4');