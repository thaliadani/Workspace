<?php
    session_start();
    if(isset($_POST["usuario"])){
        $_SESSION["usuario"] = $_POST["usuario"],time() -3600);
        echo "Bem vindo, ". $_SESSION["usuario"];
    }else{
        ?>
        <form method="POST">
            Nome:<input type="text" name="usuario">
            <input type="submit" value="Entrar">
        </form>

        <?php
        if(isset($_COOKIE["ultimo_usuario"])){
            echo "Ultimo usuario logado" . $_COOKIE["ultimo_usuario"];
        }
        ?>
    }

?>
