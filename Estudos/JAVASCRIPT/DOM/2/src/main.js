// Aguarda o carregamento completo do DOM para garantir que todos os elementos existam.
document.addEventListener('DOMContentLoaded', () => {

    // --- Evento onclick ---
    const botaoClique = document.getElementById("botao");
    botaoClique?.addEventListener("click", () => {
        alert("Você clicou no botão");
    });

    // --- Eventos onmouseover e onmouseout ---
    const divHover = document.querySelector(".container.hover");
    /** @type {HTMLElement | null} */
    const mensagemHover = document.getElementById("mensagem");

    divHover?.addEventListener("mouseover", () => {
        if (mensagemHover) mensagemHover.innerText = "Entrou na div";
    });

    divHover?.addEventListener("mouseout", () => {
        if (mensagemHover) mensagemHover.innerText = "Passe o mouse aqui!";
    });

    // --- Evento onchange ---
    /** @type {HTMLSelectElement | null} */
    const selectFruta = document.querySelector("select[name='fruta']");
    /** @type {HTMLElement | null} */
    const resultadoFruta = document.getElementById("resultado");

    selectFruta?.addEventListener("change", () => {
        if (resultadoFruta) {
            resultadoFruta.innerText = "Você escolheu: " + selectFruta.value;
        }
    });

    /** @type {HTMLInputElement | null} */
    const inputTexto = document.querySelector("input[name='texto']");
    /** @type {HTMLElement | null} */
    const pTexto = document.getElementById("texto");

    inputTexto?.addEventListener("change", () => {
        if (pTexto) {
            pTexto.innerText = inputTexto.value;
        }
    });

    // --- Evento onkeydown ---
    const inputKeydown = document.querySelector("input[onkeydown]");
    /** @type {HTMLElement | null} */
    const pTecla = document.getElementById("tecla");

    /** @param {KeyboardEvent} event */
    const teclaPressionada = (event) => {
        if (pTecla) pTecla.innerText = "Tecla pressionada: " + event.key;
    };
    inputKeydown?.addEventListener("keydown", teclaPressionada);

    // --- Evento onkeyup ---
    const inputKeyup = document.querySelector("input[onkeyup]");
    /** @type {HTMLElement | null} */
    const pTeclaUp = document.getElementById("tecla-up");

    /** @param {KeyboardEvent} event */
    const teclaLiberada = (event) => {
        if (pTeclaUp) pTeclaUp.innerText = "Tecla liberada: " + event.key;
    };
    inputKeyup?.addEventListener("keyup", teclaLiberada);

    // --- Evento onsubmit ---
    const form = document.querySelector("form");
    form?.addEventListener("submit", (event) => {
        /** @type {HTMLInputElement | null} */
        const nome = document.getElementById("nome");
        /** @type {HTMLInputElement | null} */
        const idade = document.getElementById("idade");
        /** @type {HTMLInputElement | null} */
        const email = document.getElementById("email");
        /** @type {HTMLInputElement | null} */
        const senha = document.getElementById("senha");

        if (nome?.value === "") {
            alert("Por favor, preencha o nome");
            event.preventDefault(); // Impede o envio do formulário
            return;
        }
        if (idade?.value === "") {
            alert("Por favor, preencha a idade");
            event.preventDefault();
            return;
        }
        if (email?.value === "") {
            alert("Por favor, preencha o email");
            event.preventDefault();
            return;
        }
        if (senha?.value === "") {
            alert("Por favor, preencha a senha");
            event.preventDefault();
            return;
        }

        alert("Formulário enviado com sucesso!");
        // Não é necessário `return true` aqui, o comportamento padrão do submit continuará.
    });

    // --- addEventListener click ---
    document.getElementById("ola")?.addEventListener("click", () => alert("Olá"));
    document.getElementById("tchau")?.addEventListener("click", () => alert("Tchau"));

    // --- addEventListener mouseover e mouseout ---
    const caixa = document.getElementById("caixa");
    caixa?.addEventListener("mouseover", () => {
        caixa.style.backgroundColor = "#860f19ff";
    });
    caixa?.addEventListener("mouseout", () => {
        caixa.style.backgroundColor = "";
    });

    const botaoMudarCor = document.getElementById("botao-mudar-cor");
    botaoMudarCor?.addEventListener("mouseover", () => {
        botaoMudarCor.style.backgroundColor = "#f3f033ff";
        botaoMudarCor.style.color = "#000";
    });
    botaoMudarCor?.addEventListener("mouseout", () => {
        botaoMudarCor.style.backgroundColor = "#000";
        botaoMudarCor.style.color = "#fff";
    });

    // --- document.querySelectorAll ---
    /** @type {NodeListOf<HTMLButtonElement>} */
    const botoes = document.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Você clicou: " + botao.innerText);
        });
    });

    /** @type {NodeListOf<HTMLElement>} */
    const textos = document.querySelectorAll('.texto');
    textos.forEach(texto => {
        texto.addEventListener("click", () => {
            alert("Você clicou: " + texto.innerText);
            texto.style.color = "#1ecae0ff";
            texto.style.fontSize = "14px";
        });
    });

    document.getElementById("tag").addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            alert("Você clicou no botão: " + e.target.innerText);
        }
    })

    document.getElementById("lista").addEventListener("click", function (e) {
        // Sempre em maiusculo
        if (e.target.tagName === "LI") {
            alert("Você clicou no item: " + e.target.innerText);
        }
    })
});