"use strict";
let numero = 20;
const pi = 3.14;
let nome = 'Thalia';
let verdadeira = true;
let resultado = numero * pi;
// const nomeDoUsuario = prompt('Qual seu nome?');
// console.log('Olá, ' + nomeDoUsuario?.toLowerCase);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes = [];
const idades = [];
idades.push(20);
idades.push(30);
idades.push(16);
idades.push(18);
idades.push(12);
const menorDeIdade = idades.filter((idade) => idade < 18);
console.log(menorDeIdade);
const pessoa = ['Thalia', 23, true];
const pessoa2 = {
    nome: 'Thalia',
    idade: 23,
    estudante: true,
};
pessoa2.altura = 1.58;
console.log(pessoa2);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'grande':
            return numero1 > numero2 ? numero1 : numero2;
        case 'pequeno':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio < 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(20, 10, 'grande');
console.log(numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const pessoas = {
    '111.111.111-01': {
        nome: 'Thalia',
        idade: 23,
        estudante: true
    },
    '222.222.222-02': {
        nome: 'Paulo',
        idade: 18,
        estudante: true
    }
};
//Evitar any
