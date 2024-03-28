<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolher os dados do formulário
    $nome = isset($_POST['Nome']) ? $_POST['Nome'] : "Não Informado";
    $email = isset($_POST['Email']) ? $_POST['Email'] : "Não Informado";
    $telefone = isset($_POST['Telefone']) ? $_POST['Telefone'] : "Não Informado";
    $site = isset($_POST['Site']) ? $_POST['Site'] : "Não Informado";
    $mensagem = isset($_POST['Mensagem']) ? $_POST['Mensagem'] : "Não Informado";

    // Montar o corpo do email
    $to = 'caioss20.cs@gmail.com';
    $subject = 'Novo contato do formulário';
    $message = "Nome: $nome\n";
    $message .= "Email: $email\n";
    $message .= "Telefone: $telefone\n";
    $message .= "Site: $site\n\n";
    $message .= "Mensagem:\n$mensagem";

    // Enviar o email
    $enviado = mail($to, $subject, $message);

    if ($enviado) {
        // Redirecionar de volta para a página do formulário
        header('Location: index.html');
        exit;
    } else {
        // Se houver um erro ao enviar o email, exibir uma mensagem de erro
        echo "Erro ao enviar o formulário. Por favor, tente novamente mais tarde.";
    }
}
?>