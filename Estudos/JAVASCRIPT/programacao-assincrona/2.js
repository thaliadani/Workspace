const fs = require("fs")

function lerArquivo() {
    return new Promise((resolve, reject) => {
        fs.readFile("Estudos/JS/programacao-assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
            if (erro) {
                reject("Ocorreu um erro ao ler o arquivo", erro)
            } else {
                resolve(String(conteudoDoArquivo))
            }
        })
    })
}

// lerArquivo()
//     .then((retornoDoResolve) => {
//         console.log("Deu certo:", retornoDoResolve);
//     }).catch((erro) => {
//         console.log("Deu errado:", erro);
//     }).finally(() => {
//         console.log("Fim");
//     })

//////////////////////////////////////

// * async/await

async function leituraDeDados() {
    console.log("ANTES da promise")

    try {
        const retornoDaPromessa = await lerArquivo()

        console.log(retornoDaPromessa)
        console.log("DEPOIS da promise")
    }catch (err) {
        console.log(err)
    }finally {
        console.log("FIM")
    }
}

leituraDeDados()