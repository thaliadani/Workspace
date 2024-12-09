const fs = require('fs');

//* Lendo um arquivo JSON

fs.readFile('Estudos/JS/JSON/pessoas.json', (erro, dados) => {
    if (erro) {
    console.log('Ocorreu um erro ao ler o arquivo', erro);
    } else {
    const dadosObjeto = JSON.parse(String(dados));
    console.log(dadosObjeto.pessoas[0].nome);
    }
});

//* Converter uma String em um arquivo JSON

const jsonString = '{ "nome": "Thalia", "idade": 23 }';
console.log(JSON.parse(jsonString));

//* Converter um arquivo JSON em String

const pessoa = {
    nome: 'Thalia',
    idade: 23,
};

console.log(JSON.stringify(pessoa));
