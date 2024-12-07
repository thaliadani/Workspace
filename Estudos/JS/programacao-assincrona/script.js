const fs = require("fs")

fs.readFile("./programacao-assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro", erro)
    }else{
        console.log(String(conteudoDoArquivo))
    }

})