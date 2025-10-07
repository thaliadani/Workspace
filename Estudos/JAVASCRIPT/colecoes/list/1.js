// Crie uma lista de números inteiros com valores entre 1 e 10. Em seguida, exiba apenas os números pares da lista.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);