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

//---------------------- addEventListener ---------------------

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
        caixa.style.backgroundColor = "#860f19ff";
    })

    caixa.addEventListener("mouseout", function(){
        caixa.style.backgroundColor = "";
    })
}
mudarCorFundo();

function mudarCorBotao() {
    const botao = document.getElementById("botao-mudar-cor");

    botao.addEventListener("mouseover", function(){
        botao.style.backgroundColor = "#f3f033ff";
        botao.style.color= "#000"
    })

    botao.addEventListener("mouseout", function(){
        botao.style.backgroundColor = "#000";
        botao.style.color= "#fff"
    })
}
mudarCorBotao();

function botoes(){
    const botoes = document.querySelectorAll('.botao');

    botoes.forEach(function(botao){
        botao.addEventListener("click", function(){
            alert("Você clicou: " + botao.innerText);
        })
    })
}

botoes();

function textos(){
    const textos = document.querySelectorAll('.texto');

    textos.forEach(function(texto){
        texto.addEventListener("click", function(){
            alert("Você clicou: " + texto.innerText);
            texto.style.color = "#1ecae0ff";
            texto.style.fontSize = "14px";
        })

    })
}

textos();