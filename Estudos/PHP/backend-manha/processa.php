<?php
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

if(empty($nome) || empty($email) || empty($mensagem)) {
    echo "⚠️ Todos os campos são obrigatórios.";
    exit;
}

echo "✅ Obrigado, <strong>$nome</strong>!<br>";
echo "❤️Recebemos sua mensagem:<br>";
echo "<em>\"$mensagem\"</em><br><br>";
echo "✉️ Entraremos em contato pelo email: <strong>$email</strong>.";

?>