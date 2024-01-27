// Установка цвета для полосы статуса на устройствах iOS
document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#252525");

document.addEventListener("DOMContentLoaded", function () {
    const fullscreenButton = document.getElementById('fullscreenButton');

    // Проверяем, сохранено ли состояние fullscreen в localStorage
    const isFullscreen = localStorage.getItem('isFullscreen') === 'true';

    // Если состояние fullscreen сохранено, применяем его
    if (isFullscreen) {
        document.documentElement.requestFullscreen();
    }

    // Обработчик клика по кнопке
    fullscreenButton.addEventListener('click', function () {
        // Переключаем состояние fullscreen
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            localStorage.setItem('isFullscreen', 'true');
        } else {
            document.exitFullscreen();
            localStorage.setItem('isFullscreen', 'false');
        }
    });

    // Обработчик события выхода из fullscreen
    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement) {
            localStorage.setItem('isFullscreen', 'false');
        }
    });

    // Обработчик события загрузки страницы
    window.onload = function() {
        const savedTheme = localStorage.getItem('theme');
        const isSwitchOn = localStorage.getItem('theme1');
        console.log("is", isSwitchOn);
        console.log(savedTheme);
        let switchElement = document.getElementById('checkboxswitcher');
        if (savedTheme === 'light') {
            document.body.setAttribute('light', '');
            switchElement.checked = true;
        } else {
            document.body.removeAttribute('light');
            switchElement.checked = false;
        }
    };

    // Обработчик изменения состояния переключателя темы
    const handleChange = (isChecked) => {
        let switchElement = document.getElementById('checkboxswitcher');
        if (isChecked) {
            localStorage.setItem('theme', 'light');
            localStorage.setItem('theme1', true);
            document.body.setAttribute('light', '');
            localStorage.setItem('isON', 'true');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('light');
            localStorage.setItem('theme1', false);
        }
    };
});
