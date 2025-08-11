//onclick
function mostrarMensagem() {
    document.getElementById("botao")
    alert("Você clicou no botão")
}

//onmouseover
function mostrarTexto() {
    document.getElementById("mensagem").innerText = "Entrou na div";
}

//onmouseout
function esconderTexto() {
    document.getElementById("mensagem").innerText = "Saiu da div";
}

//onchange
function mostrarEscolha(fruta) {
    document.getElementById("resultado").innerText = "Você escolheu: " + fruta;
}

function mostrarTextoDigitado(texto) {
    document.getElementById("texto").innerText = texto;
}

//onkeydown
function teclaPressionada(event) {
    document.getElementById("tecla").innerText = "Tecla pressionada: " + event.key;
}

//onkeyup
function teclaLiberada(event) {
    document.getElementById("tecla-up").innerText = "Tecla pressionada: " + event.key;
}

//onsubmit
function validarFormulario() {
    const nome = document.getElementById("nome").value;;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome === "") {
        alert("Por favor, preencha o nome");
        return false;
    }

    if (idade === "") {
        alert("Por favor, preencha a idade");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o email");
        return false;
    }

    if (senha === "") {
        alert("Por favor, preencha a senha");
        return false;
    }

    alert("Formulário enviando com sucesso");
    return true;
}

///////////////////////////////////////

//addEventListener click
function mostrarAlerta() {
    const buttonOla = document.getElementById("ola");
    buttonOla.addEventListener("click", function () {
        alert("Olá")
    })

    const buttonTchau = document.getElementById("tchau");
    buttonTchau.addEventListener("click", function () {
        alert("Tchau")
    })
}

mostrarAlerta();

//addEventListener mouseover e mouseout
function mudarCorFundo() {
    const caixa = document.getElementById("caixa");

    caixa.addEventListener("mouseover", function(){
        caixa.style.backgroundColor = "#f34";
    })

    caixa.addEventListener("mouseout", function(){
        caixa.style.backgroundColor = "";
    })
}

mudarCorFundo();

