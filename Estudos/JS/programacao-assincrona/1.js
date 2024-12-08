const fs = require("fs");

console.log(1);

fs.readFile("Estudos/JS/programacao-assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Erro ao ler o arquivo:", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log(2);

setTimeout(() => {
    console.log("Ola mundo");
}, 2000);

console.log(3);