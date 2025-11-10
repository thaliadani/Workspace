<?php
    setcookie("usuario", "", time() - 3600); // Apaga o cookie definindo um tempo de expiração no passado

    echo"Cookie apagado!";
?>