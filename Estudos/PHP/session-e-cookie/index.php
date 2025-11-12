<?php
session_start();
if (isset($_POST["usuario"])) {
    $_SESSION["usuario"] = $_POST["usuario"];
    setcookie("ultimo_usuario", $_POST["usuario"], time() + 3600);
    echo "Bem vindo, " . $_SESSION["usuario"];
} else {
    ?>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            user-select: none;
        }

        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600;
            color: #0a0a0aff;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            background-color: #b9b9b9ff;
            border-radius: .5rem;
            margin-bottom: 1rem;
        }

        label {
            font-size: 1.8rem;
            font-weight: 800;
            padding-bottom: .4rem;
        }

        input {
            border: solid #888686ff .2rem;
            border-radius: .5rem;
            background-color: #cacacaff;
            padding: .5rem;
            font-size: 1rem;
            cursor: text;
        }

        input:last-child {
            background-color: #30c450ff;
            border: solid #6be686ff .2rem;
            font-size: 1.2rem;
            cursor: pointer;
            font-weight: 600;
            margin-top: 2rem;
        }

        input:last-child:hover {
            background-color: #6be686ff;
            border: solid #30c450ff .2rem;
        }

        a {
            color: #0a0a0aff;
            cursor: pointer;
            padding-bottom: 1rem;
        }
    </style>

    <body>
        <form method="POST">
            <label for="usuario">Nome</label>
            <input type="text" name="usuario">
            <input type="submit" value="Entrar">
        </form>

        <a href="apagar.php">Apagar Cookie</a>

    </body>

    <?php
    if (isset($_COOKIE["ultimo_usuario"])) {
        echo "Último usuário logado: " . $_COOKIE["ultimo_usuario"];
    }
}

?>
