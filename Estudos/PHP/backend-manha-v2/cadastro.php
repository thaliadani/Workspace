<?php
include "conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if(empty($nome) || empty($email) || empty($senha)){
        $msg = "⚠️ Preencha todos os campos!";
    } else {
        // Criptografa a senha
        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

        // Verifica se já existe o e-mail
        $check = $conn->prepare("SELECT * FROM usuarios WHERE email=?");
        $check->bind_param("s", $email);
        $check->execute();
        $result = $check->get_result();

        if($result->num_rows > 0){
            $msg = "⚠️ E-mail já cadastrado!";
        } else {
            $sql = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
            $sql->bind_param("sss", $nome, $email, $senhaHash);
            if($sql->execute()){
                $msg = "✅ Usuário cadastrado com sucesso!";
            } else {
                $msg = "❌ Erro ao cadastrar usuário.";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Cadastro de Usuário</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header><h1>👤 Cadastro de Usuário</h1></header>

<main>
<form method="POST">
    <label>Nome:</label>
    <input type="text" name="nome" required>

    <label>E-mail:</label>
    <input type="email" name="email" required>

    <label>Senha:</label>
    <input type="password" name="senha" required>

    <button type="submit">Cadastrar</button>
</form>

<?php if(isset($msg)) echo "<p style='margin-top:10px;font-weight:bold;'>$msg</p>"; ?>

<p style="margin-top:15px;">
    Já tem conta? <a href="login.php">Fazer login</a>
</p>
</main>

</body>
</html>
