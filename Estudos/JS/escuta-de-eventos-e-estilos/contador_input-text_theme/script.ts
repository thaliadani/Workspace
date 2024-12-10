const contador = document.querySelector("#contador");

const botaoDiminuir = document.querySelector("#diminuir");
const botaoAumentar = document.querySelector("#aumentar");

botaoAumentar?.addEventListener("click", () => {
  const valorAtual = Number(contador?.textContent);

  contador!.textContent = (valorAtual + 1).toString();

  botaoAumentar?.classList.add("btn");
  botaoDiminuir?.classList.remove("btn");
});

botaoDiminuir?.addEventListener("click", () => {
  const valorAtual = Number(contador?.textContent);

  contador!.textContent = (valorAtual - 1).toString();

  botaoAumentar?.classList.remove("btn");
  botaoDiminuir?.classList.add("btn");
});

////////////////////////////////////////////

const input = document.querySelector("#campo-texto") as HTMLInputElement;

input?.addEventListener("input", () => {
  console.log(input.value);
});

/////////////////////////////////////////////////////

//Adicionando estilos no contador

if (contador) {
  (contador as HTMLElement).style.color = "red";

  (contador as HTMLElement).style.padding = "0 2rem";

  (contador as HTMLElement).style.backgroundColor = "#FF8400";

  (contador as HTMLElement).style.border = "5px solid red";

  (contador as HTMLElement).style.borderRadius = "50%";
}

///////////////////////////////////////////////////////////

//Manipular classes

// botaoAumentar?.classList.add("btn");
// botaoDiminuir?.classList.remove("btn");

const themeButton = document.querySelector("#theme") as HTMLButtonElement;

let darkTheme: boolean;

function alterarTema() {
  const body = document.querySelector("body") as HTMLElement;

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
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

themeButton?.addEventListener("click", () => {
  darkTheme = !darkTheme;

  localStorage.setItem("isDarkTheme", String(darkTheme));

  alterarTema();
  
});


