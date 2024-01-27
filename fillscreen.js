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
});
