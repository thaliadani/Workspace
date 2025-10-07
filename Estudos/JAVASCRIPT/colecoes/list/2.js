//Crie um programa que peça 5 cores para pessoa usuária. Adicione cada cor em uma lista e no final mostre as cores adicionadas

const prompt = require('prompt-sync')();

let cores = [];

for (let i = 0; i < 5; i++) {
    let cor = prompt(`Digite a cor ${i + 1}:`);
    cores.push(cor);
}

console.log("As cores adicionadas são: " + cores.join(", "));     