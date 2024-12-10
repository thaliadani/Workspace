const contador = document.querySelector("#contador");

const botaoDiminuir = document.querySelector("#diminuir");

const botaoAumentar = document.querySelector("#aumentar");


botaoAumentar?.addEventListener("click", () => {
    const valorAtual = Number(contador?.textContent);

    contador!.textContent = String(valorAtual + 1);
});

botaoDiminuir?.addEventListener("click", () => {
    const valorAtual = Number(contador?.textContent);

    contador!.textContent = String(valorAtual - 1);
});