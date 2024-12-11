// console.log(document.title)
// console.log(document.body)
// console.log(document.head)
// console.log(document.URL)

//Selecionar elementos HTML da nossa pagina utilizando o document

//Pega o primeiro h1 da pagina
const h1 = document.getElementsByTagName("h1");

//Pega o nome da classe
const titulo = document.getElementsByClassName("title");

//Pelo nome
const email = document.getElementsByName("email");

//Pelo Id
const emailInput = document.getElementById("email-input");

//Apenas um Seletor(mais usado e recomendado)
const paragraph = document.querySelector(".paragraph");

//Todos os Seletores(mais usado e recomendado)
const paragraphs = document.querySelectorAll(".paragraph");

//Acessando/Alterando o conteudo HTML das tags

const primeiroParagrafo = document.querySelector("p.paragraph");

// console.log(primeiroParagrafo?.textContent);
// console.log(primeiroParagrafo?.innerHTML)

(primeiroParagrafo as HTMLElement).innerHTML = "<strong>Novo paragrafo<strong>";

(emailInput as HTMLInputElement).value = "nome@gmail.com";

(emailInput as HTMLInputElement).addEventListener("input", () => {
    console.log((emailInput as HTMLInputElement).value);
});


//Criando elementos no HTML

const listaUl = document.querySelector('ul#list') as HTMLUListElement;
const novaTagLi = document.createElement('li'); //criando uma tag li vazia

novaTagLi.textContent = "Item 2"; //adicionando um texto dentro da tag li


//Inserir um elemento no final da lista
// listaUl.appendChild(novaTagLi);


//Inserir um elemento antes de outro
const listaLis = document.querySelectorAll('li');

listaUl.insertBefore(novaTagLi, listaLis[0]);


//Remover um elemento
listaUl.removeChild(listaLis[0]);