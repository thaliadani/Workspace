<?php
    session_start(); // Inicia a sessão 
    $_SESSION['usuario'] = 'João'; // variável super global de sessão
    $_SESSION['idade'] = '30';

    echo"Sessão criada com sucesso!";
?>