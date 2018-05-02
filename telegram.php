<?php

/* https://api.telegram.org/bot541426354:AAFsLgN4xnsDUwVtni3AeRvoD6Uk0pAGcno/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$comment = $_POST['user_comment'];
$checkbox = $_POST['user_partner'];
$token = "534803107:AAES63_Oia0-xSJ4LM97xX94e_EyucnkBPU";
//$token = "541426354:AAFsLgN4xnsDUwVtni3AeRvoD6Uk0pAGcno";
$chat_id = "-290600304";
//$chat_id = "-310960744";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Комментарий: ' => $comment,
  'Cотрудничать: ' => $checkbox
    
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>