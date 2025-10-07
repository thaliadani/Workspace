// Criar uma função que recebe uma lista de números inteiros e retorna a soma deles. A função deve permitir que o usuário passe um parâmetro opcional posicional para servir de valor inicial. Se esse parâmetro não for especificado, o valor inicial da soma deve ser zero.

const prompt = require('prompt-sync')();

const numeros = [1, 2, 3, 4, 5];

let valorInicial = prompt('Digite o valor inicial (pressione Enter para usar 0): ');

valorInicial = valorInicial ? parseInt(valorInicial) : 0;

function somarLista(numeros, valorInicial = 0) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, valorInicial);
}

const soma = somarLista(numeros, valorInicial);

console.log(soma);