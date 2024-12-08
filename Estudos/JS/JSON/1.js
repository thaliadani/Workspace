const fs = require('fs');

//* Lendo um arquivo JSON

fs.readFile('Estudos/JS/JSON/pessoas.json', (erro, dados) => {
    if (erro) {
    console.log('Ocorreu um erro ao ler o arquivo', erro);
    } else {
    const dadosObjeto = JSON.parse(dados);
    console.log(typeof dados);
    }
});
