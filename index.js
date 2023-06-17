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



/*function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}

let song = document.getElementsByTagName('audio')[0];
let played = false;
let tillPlayed = getCookie('timePlayed');
function update() {
    if(!played){
        if(tillPlayed){
            song.currentTime = tillPlayed;
            song.play();
            played = true;
        }
        else {
            song.play();
            played = true;
        }
    }

    else {
        setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update,1000);*/