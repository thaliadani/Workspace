// Criar uma função que recebe uma lista de números inteiros (parâmetro nomeado mas obrigatório) e dois parâmetros nomeados minimo e maximo que representam os limites inferior e superior, respectivamente, para os números da lista. Se os parâmetros minimo e maximo não forem especificados, a função deve retornar a lista original. A função deve retornar uma nova lista contendo apenas os números da lista original que estão dentro do intervalo especificado pelos parâmetros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minimo = 3;
const maximo = 7;

function filtrarLista(numeros, minimo, maximo) {
    return numeros.filter(numero => numero >= minimo && numero <= maximo);
}

const listaFiltrada = filtrarLista(numeros, minimo, maximo);

console.log(listaFiltrada);