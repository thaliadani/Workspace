const fs = require("fs");

fs.readFile("./arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro", erro);
    }else{
        console.log(String(conteudoDoArquivo));
    }
})