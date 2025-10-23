<?php
session_start();
include "conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if(empty($email) || empty($senha)){
        $msg = "⚠️ Preencha todos os campos!";
    } else {
        $sql = $conn->prepare("SELECT * FROM usuarios WHERE email=?");
        $sql->bind_param("s", $email);
        $sql->execute();
        $result = $sql->get_result();

        if($result->num_rows == 1){
            $usuario = $result->fetch_assoc();

            if(password_verify($senha, $usuario["senha"])){
                $_SESSION["usuario"] = $usuario["nome"];
                header("Location: listar.php");
                exit;
            } else {
                $msg = "❌ Senha incorreta!";
            }
        } else {
            $msg = "❌ Usuário não encontrado!";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header><h1>🔐 Login</h1></header>

<main>
<form method="POST">
    <label>E-mail:</label>
    <input type="email" name="email" required>

    <label>Senha:</label>
    <input type="password" name="senha" required>

    <button type="submit">Entrar</button>
</form>

<?php if(isset($msg)) echo "<p style='margin-top:10px;font-weight:bold;'>$msg</p>"; ?>

<p style="margin-top:15px;">
    Não tem conta? <a href="cadastro.php">Cadastre-se</a>
</p>
</main>

</body>
</html>