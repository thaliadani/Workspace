"use strict";
const contador = document.querySelector("#contador");
const botaoDiminuir = document.querySelector("#diminuir");
const botaoAumentar = document.querySelector("#aumentar");
botaoAumentar === null || botaoAumentar === void 0 ? void 0 : botaoAumentar.addEventListener("click", () => {
    const valorAtual = Number(contador === null || contador === void 0 ? void 0 : contador.textContent);
    contador.textContent = String(valorAtual + 1);
});
botaoDiminuir === null || botaoDiminuir === void 0 ? void 0 : botaoDiminuir.addEventListener("click", () => {
    const valorAtual = Number(contador === null || contador === void 0 ? void 0 : contador.textContent);
    contador.textContent = String(valorAtual - 1);
});
