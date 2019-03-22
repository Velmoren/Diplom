<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

if (!isset($_POST['name']) or empty($_POST['name'])) {
  $error1 = "name?<br>";
} else $error1 = NULL;

if (!isset($_POST['phone']) or empty($_POST['phone'])) {
  $error2 = "phone?<br>";
} else $error2 = NULL;

// Переменные
if (empty($error1) and empty($error2)) {
  $user = $_POST['name'];
  $number = $_POST['phone'];
} else {
  echo $error1.$error2;
}

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.mail.ru'; 
$mail->SMTPAuth = true; 
$mail->Username = 'velmo'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '2210DomVelmoren'; // Ваш пароль
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom('velmo@mail.ru', 'Ильясов Александр'); // Ваш Email
$mail->addAddress('velmoren@yahoo.com'); // Email получателя
$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.
// Прикрепление файлов
 for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
 $filename = $_FILES['userfile']['name'][$ct];
 if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= 'Failed to move file to ' . $uploadfile;
 }
 } 
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Заявка с webstart'; // Заголовок письма
$mail->Body = '
  --Заявка на обратную связь от:<br>
  <br>
  Имя: ' . $user . ' <br>
  Телефон: ' . $number . '';
// Результат
if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 echo 'ok';
}
?>