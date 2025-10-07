// Criar uma função que recebe uma lista de números inteiros e um parâmetro opcional chamado multiplicador que representa o fator de multiplicação para cada número da lista. Se o parâmetro multiplicador não for especificado, a função deve retornar a lista original.

const numeros = [1, 2, 3, 4, 5];

const multiplicador = 3;

function multiplicarLista(numeros, multiplicador) {
    return numeros.map(numero => numero * multiplicador);
}

const listaMultiplicada = multiplicarLista(numeros, multiplicador);

console.log(listaMultiplicada);