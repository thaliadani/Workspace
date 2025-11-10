<?php
    if(isset($_COOKIE['usuario'])) {
        echo "Olá, " . $_COOKIE['usuario'] . "!";
    } else {
        echo "Bem-vindo, visitante!";
    }
?>