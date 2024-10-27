const KmPorLitro = 10;
const distanciaEmKm = 1000;
const litrosConsumidos = (distanciaEmKm / KmPorLitro);

const precoGasolina = 6.66;
const precoEtanol = 5.79;

const tipoDeCombustivel= 'Gasolina';

if(tipoDeCombustivel == 'Etanol'){
    let totalGastoEmReais= litrosConsumidos * precoEtanol;
    console.log('Sera gasto para realizar esta viagem de ' + distanciaEmKm + 'km ' + ', ' + 'R$' + totalGastoEmReais.toFixed(2) + ' de etanol');

}else{
    let totalGastoEmReais= litrosConsumidos * precoGasolina;
    console.log('Sera gasto para realizar esta viagem de ' + distanciaEmKm + 'km ' + ', ' + 'R$' + totalGastoEmReais.toFixed(2) + ' de gasolina');
}
