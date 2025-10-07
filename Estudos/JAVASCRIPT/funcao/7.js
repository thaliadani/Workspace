// Criar uma função que recebe dois parâmetros obrigatórios, nome e sobrenome, e dois parâmetros nomeados idade e cidade. Se algum dos parâmetros nomeados não for especificado, a função deve usar valores default: 18 para idade e "Desconhecida" para cidade. A função deve retornar uma string formatada com os valores dos parâmetros.

const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
let sobrenome = prompt('Digite seu sobrenome: ');
let idade = prompt('Digite sua idade (pressione Enter para usar 18): ');
let cidade = prompt('Digite sua cidade (pressione Enter para usar "Desconhecida"): ');

idade = idade ? parseInt(idade) : 18;
cidade = cidade || 'Desconhecida';

function criarMensagem(nome, sobrenome, idade, cidade) {
    return `Nome: ${nome} ${sobrenome}, Idade: ${idade}, Cidade: ${cidade}`;
}

const mensagem = criarMensagem(nome, sobrenome, idade, cidade);

console.log(mensagem);