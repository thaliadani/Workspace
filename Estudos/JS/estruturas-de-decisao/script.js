//switch -  uma estrutura de controle que permite executar um bloco de codigo diferente dependendo do valor de uma variavel, evitando o uso de varios if/else encadeados
//case - executa um bloco de codigo dependendo do valor de uma variavel
//break- para a execução de um bloco de codigo
//default- executa um bloco de codigo caso nenhum dos cases seja executado

let fruta = "morango"

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        console.log("muito bom")
        break

    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
        break

    case "abacaxi":
        console.log("suco de abacaxi")
        break

    default:
        console.log("nao tem esse suco")
}