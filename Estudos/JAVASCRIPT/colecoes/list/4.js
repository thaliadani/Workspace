// Escreva um algoritmo que solicite para pessoa usuária a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que foi digitado.

const prompt = require('prompt-sync')();

let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome ${i + 1}: `);
    nomes.push(nome);
}

console.log("Lista de nomes digitados:");
console.log(nomes.join(", "));

console.log("Lista de nomes na ordem inversa:");
console.log(nomes.reverse().join(", "));