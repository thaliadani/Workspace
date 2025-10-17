<?php
//Recebe os dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

//Validação simples
if(empty($nome) || empty($email) || empty($mensagem)) {
    echo "⚠️ Todos os campos são obrigatórios.";
    exit;
}

//Monta o texto a ser salvo
$texto = "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n----------------------------\n";

//Abre o arquivo para escrita (modo append)
$arquivo = fopen("mensagens.txt", "a");

//Escreve no arquivo
fwrite($arquivo, $texto);

//Fecha o arquivo
fclose($arquivo);

//Simulação de processamento (aqui seria o lugar para salvar no banco de dados)
echo "✅ Obrigado, <strong>$nome</strong>!<br>";
echo "❤️Recebemos sua mensagem:<br>";
echo "<em>\"$mensagem\"</em><br><br>";
echo "✉️ Entraremos em contato pelo email: <strong>$email</strong>.";

?>