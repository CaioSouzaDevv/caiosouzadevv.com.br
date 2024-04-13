<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone']; // Correção aqui
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
   
    Nome: $nome
    E-mail: $email
    Telefone: $telefone 
    Mensagem: $mensagem
     Este e-mail foi enviado em $data_envio às $hora_envio<
  
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "caioss20.cs@gmail.com"; // Seu email destinatário
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  header("refresh:5;url=../index.html");
?>