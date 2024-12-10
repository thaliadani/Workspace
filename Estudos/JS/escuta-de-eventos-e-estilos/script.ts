const contador = document.querySelector("#contador");

const botaoDiminuir = document.querySelector("#diminuir");
const botaoAumentar = document.querySelector("#aumentar");


botaoAumentar?.addEventListener("click", () => {
    const valorAtual = Number(contador?.textContent);

    contador!.textContent = (valorAtual + 1).toString();
});

botaoDiminuir?.addEventListener("click", () => {
    const valorAtual = Number(contador?.textContent);

    contador!.textContent = (valorAtual - 1).toString();
});

////////////////////////////////////////////

const input = document.querySelector("#campo-texto") as HTMLInputElement;

input?.addEventListener("input", () => {
    console.log(input.value);
});