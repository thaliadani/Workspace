const prompt = require('readline-sync');

const name = prompt.question('What is your name? ');
console.log(`Hello, ${name}!`);

const idade = prompt.question('How old are you? ');
const idadeNumber = Number(idade);

console.log(`You are ${idadeNumber} years old.`, typeof idadeNumber);