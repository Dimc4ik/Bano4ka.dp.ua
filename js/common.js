$(document).ready(function(){
    $("#form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
        e.preventDefault();
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "telegram.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено! Спасибо за заявку - мы обязательно с Вами свяжемся!");
                   $('#form')[0].reset();
            }
        });
    });
});