<?php
    session_start();
    
    echo "Usuário: " . $_SESSION['usuario'] . "<br>";
    echo "Idade: " . $_SESSION['idade'] . "<br>";
?>