function mostrarMensagem(){
    alert("Você clicou no botão de teste!");
}

function mostrarTexto(){
    document.getElementById("mensagem").innerText ="Entrou na div";
}

function esconderTexto(){
    document.getElementById("mensagem").innerText ="Saiu da div";
}

function mostrarEscolha(fruta){
    document.getElementById("resultado").innerText="Você escolheu: " + fruta;
}

function mostrarTextoDigitado(texto){
    document.getElementById("texto").innerText= texto;
}

function teclaPressionada(event){
    document.getElementById("tecla").innerText ="Tecla pressionada: " + event.key;
}

function teclaLiberada(event){
    document.getElementById("tecla-up").innerText ="Tecla pressionada: " + event.key;
}