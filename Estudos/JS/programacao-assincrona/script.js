// const prompt = require('readline-sync');

// const name = prompt.question('What is your name? ');
// console.log(`Hello, ${name}!`);

// const idade = prompt.question('How old are you? ');
// const idadeNumber = Number(idade);

// console.log(`You are ${idadeNumber} years old.`, typeof idadeNumber);

const fs = require("fs")

fs.readFile("./arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro", erro)
    }else{
        console.log(String(conteudoDoArquivo))
    }

})