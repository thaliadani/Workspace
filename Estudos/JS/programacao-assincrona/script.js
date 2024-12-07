const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "arquivo.txt");

console.log(1);

fs.readFile(filePath, "utf8", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.error("Erro ao ler o arquivo:", erro.message);
        return;
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log(2);

setTimeout(() => {
    console.log("Ola mundo");
}, 2000);

console.log(3);

/////////////////////////


