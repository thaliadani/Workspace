class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel
    }
}

const uno = new Carro('fiat', 'branco', 1 / 12);
const gol = new Carro('volkswagen', 'preto', 1 / 10);

console.log('R$' + uno.calcularGastoDeViagem(70, 5).toFixed(2));
console.log('R$' + gol.calcularGastoDeViagem(70, 5).toFixed(2));