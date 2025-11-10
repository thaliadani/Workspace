<?php
    session_start();

    if (isset($_SESSION["usuario"]) && $_SESSION["idade"]){
            echo "Usuário: " . $_SESSION['usuario'] . "<br>";
            echo "Idade: " . $_SESSION['idade'] . "<br>";
    }else{
        echo "Nenhum dado de sessão encontrado.";
    }
?>
