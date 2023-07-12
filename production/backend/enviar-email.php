<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Content-Type: text/html; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

function enviarEmail($email_de, $email_para, $email_nombre, $email_celular, $email_asunto, $email_cuerpo)
{
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mersmith14@gmail.com';
        $mail->Password   = 'qgyzpsnpgocrfbyk';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        
        $mail->setFrom($email_de, 'Transporte Sagitario');
        $mail->addAddress($email_de);
        $mail->addAddress($email_para);
        
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = $email_asunto;
        $mail->Body    = "
        <!doctype html>
        <html lang='es'>
        <head>
            <meta charset='utf-8'>
        </head>
        <body>
            <h2>Detalles del correo</h2>
            <p><strong>Nombre:</strong> $email_nombre</p>
            <p><strong>Celular:</strong> $email_celular</p>
            <p><strong>Asunto:</strong> $email_asunto</p>
            <p><strong>Cuerpo:</strong> $email_cuerpo</p>
        </body>
        </html>
    ";

        $mail->send();
        return  'ok';
    } catch (Exception $e) {
        return  "Error al enviar el correo: {$mail->ErrorInfo}";
    }
}

$email_de = 'mersmith14@gmail.com';
$email_nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$email_para = isset($_POST['correo']) ? $_POST['correo'] : '';
$email_celular = isset($_POST['celular']) ? $_POST['celular'] : '';
$email_asunto = isset($_POST['asunto']) ? $_POST['asunto'] : '';
$email_cuerpo = isset($_POST['cuerpo']) ? $_POST['cuerpo'] : '';

$response = enviarEmail($email_de, $email_para, $email_nombre, $email_celular, $email_asunto, $email_cuerpo);
echo $response;
