const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeNumeros = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeNumeros; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);