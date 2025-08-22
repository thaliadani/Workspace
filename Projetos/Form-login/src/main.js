const form = document.getElementById('formLogin');

form.addEventListener("submit", function (event) {
    event.preventDefault(); //Impede o envio do formulário

    let usuario = document.getElementById('nome');
    let senha = document.getElementById('senha');

    let erro = false;

    if (usuario.length < 4) {
        document.getElementById('erroUsuario').innerText = "Usuário deve ter pelo menos 4 letras";

        erro = true;
    } else {
        document.getElementById('erroUsuario').innerText = "Usuário deve ter pelo menos 4 letras";

        erro = false;
    }
})