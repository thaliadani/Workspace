<?php
setcookie("ultimo_usuario", "", time() - 3600);
echo "Cookie apagado!";
?>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        cursor: default;
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
        font-size: 1.5rem;
    }

    button {
        background-color: #30c450ff;
        border: solid #6be686ff .2rem;
        border-radius: .5rem;
        font-size: 1rem;
        cursor: pointer;
        font-weight: 600;
        padding: .5rem;
    }

    button:hover {
        background-color: #6be686ff;
        border: solid #30c450ff .2rem;
    }
</style>

<br><br>

<a href="http://localhost/session-e-cookie/">
    <button>Voltar para página inicial</button>
</a>