// Crie uma lista de inteiros preenchido com 10 números e peça para pessoa usuária um número. Percorra a lista e verifique se o número que o usuário digitou existe na lista.

const prompt = require('prompt-sync')();    

const numeros = [12, 45, 7, 23, 89, 34, 56, 78, 90, 11];

const numeroUsuario = parseInt(prompt("Digite um número para verificar se ele está na lista: "));   

let encontrado = false; 

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroUsuario) {
        encontrado = true; 
        break; 
    }
}

if (encontrado) {   
    console.log(`O número ${numeroUsuario} foi encontrado na lista.`);
}   else {
    console.log(`O número ${numeroUsuario} não foi encontrado na lista.`);
}