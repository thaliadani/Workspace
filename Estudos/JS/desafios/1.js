const precoCombustivel = 5.79;
const KmPorLitro = 10;
const distanciaEmKm = 1400;

const gastoEmReais = (distanciaEmKm / KmPorLitro) * precoCombustivel;

console.log("Sera gasto para realizar esta viagem de " + distanciaEmKm + "km " + ", " + "R$" + gastoEmReais.toFixed(2) + " de combustivel");

