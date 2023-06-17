document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("preloader");

    // Показываем preloader
    preloader.style.display = "block";

    // Задержка на 2 секунды
    setTimeout(function() {
        // Скрываем preloader
        preloader.style.display = "none";
    }, 1000);
});
