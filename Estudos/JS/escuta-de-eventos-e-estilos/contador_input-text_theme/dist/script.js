"use strict";
const contador = document.querySelector("#contador");
const botaoDiminuir = document.querySelector("#diminuir");
const botaoAumentar = document.querySelector("#aumentar");
botaoAumentar === null || botaoAumentar === void 0 ? void 0 : botaoAumentar.addEventListener("click", () => {
    const valorAtual = Number(contador === null || contador === void 0 ? void 0 : contador.textContent);
    contador.textContent = (valorAtual + 1).toString();
    botaoAumentar === null || botaoAumentar === void 0 ? void 0 : botaoAumentar.classList.add("btn");
    botaoDiminuir === null || botaoDiminuir === void 0 ? void 0 : botaoDiminuir.classList.remove("btn");
});
botaoDiminuir === null || botaoDiminuir === void 0 ? void 0 : botaoDiminuir.addEventListener("click", () => {
    const valorAtual = Number(contador === null || contador === void 0 ? void 0 : contador.textContent);
    contador.textContent = (valorAtual - 1).toString();
    botaoAumentar === null || botaoAumentar === void 0 ? void 0 : botaoAumentar.classList.remove("btn");
    botaoDiminuir === null || botaoDiminuir === void 0 ? void 0 : botaoDiminuir.classList.add("btn");
});
////////////////////////////////////////////
const input = document.querySelector("#campo-texto");
input === null || input === void 0 ? void 0 : input.addEventListener("input", () => {
    console.log(input.value);
});
/////////////////////////////////////////////////////
//Adicionando estilos no contador
if (contador) {
    contador.style.color = "red";
    contador.style.padding = "0 2rem";
    contador.style.backgroundColor = "#FF8400";
    contador.style.border = "5px solid red";
    contador.style.borderRadius = "50%";
}
///////////////////////////////////////////////////////////
//Manipular classes
// botaoAumentar?.classList.add("btn");
// botaoDiminuir?.classList.remove("btn");
const themeButton = document.querySelector("#theme");
let darkTheme;
function alterarTema() {
    const body = document.querySelector("body");
    if (darkTheme) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
//Definindo uma funcao que sera executada quando a pagina for carregada
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem("isDarkTheme");
    darkTheme = isDarkThemeStorage === "true";
    alterarTema();
};
themeButton === null || themeButton === void 0 ? void 0 : themeButton.addEventListener("click", () => {
    darkTheme = !darkTheme;
    localStorage.setItem("isDarkTheme", String(darkTheme));
    alterarTema();
});
