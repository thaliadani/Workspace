const fs = require("fs");

console.log("Antes do readfile");

const promessa = new Promise((resolve, reject) => {
    fs.readFile("Estudos/JS/programacao-assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Erro ao ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
});

promessa.then((retornoDoResolve) => {
    console.log("Deu certo:", retornoDoResolve);
}).catch((erro) => {
    console.log("Deu errado:", erro);
})