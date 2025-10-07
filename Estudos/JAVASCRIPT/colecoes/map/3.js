// Crie um sistema que peça para a pessoa usuária digitar as seguintes informações: Produto, valor e quantidade. O usuário deverá continuar adicionando produtos enquanto ele quiser.

const prompt = require('prompt-sync')();

let produtos = new Map();
let continuar = 's';

while (continuar.toLowerCase() === 's') {
    let produto = prompt("Digite o nome do produto: ");
    console.log("----------------------");
    let valor = parseFloat(prompt("Digite o valor do produto: "));
    console.log("----------------------");
    let quantidade = parseInt(prompt("Digite a quantidade do produto: "), 10);

    produtos.set(produto, { valor, quantidade });

    console.log("----------------------");
    continuar = prompt("Deseja adicionar mais produtos? (s/n): ");
}   

console.log("----------------------");
console.log("Produtos adicionados:");
console.log("----------------------");

for (let [produto, info] of produtos) {
    console.log(`Produto: ${produto}, Valor: R$${info.valor.toFixed(2)}, Quantidade: ${info.quantidade}`);
}

// Continue a atividade anterior, agora mostrando no final o valor total dos produtos que ele cadastrou.

let valorTotal = 0;

for (let [info] of produtos) {
    valorTotal += info.valor * info.quantidade;
}

console.log("----------------------");
console.log(`Valor total dos produtos: R$${valorTotal.toFixed(2)}`);