document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");

    // Показываем preloader
    preloader.style.display = "block";

    // Задержка на 2 секунды
    setTimeout(function () {
        // Скрываем preloader
        preloader.style.display = "none";
    }, 1000);
});

$(document).ready(function () {
    // Обработчик события click
    $('#contactsLink').click(function () {
        alert("Странный ты")
    });
});

$(document).ready(function() {
    // Обработчик события mouseover на все элементы <a>
    $('button').mouseover(function() {
        // Код, который будет выполнен при наведении курсора мыши на элемент <a>
        var $this = $(this);
        $this.data('originalText', $this.text()); // Сохраняем исходный текст в data-атрибуте

        $this.fadeOut(400, function() {
            $this.text('Click!'); // Изменяем текст после плавного исчезания
            $this.fadeIn(400); // Плавно показываем новый текст
        });
    }).mouseout(function() {
        // Код, который будет выполнен при отведении курсора мыши от элемента <a>
        var $this = $(this);
        var originalText = $this.data('originalText'); // Получаем исходный текст из data-атрибута

        $this.fadeOut(200, function() {
            $this.text(originalText); // Восстанавливаем исходный текст после плавного исчезания
            $this.fadeIn(400); // Плавно показываем исходный текст
        });
    });
});


