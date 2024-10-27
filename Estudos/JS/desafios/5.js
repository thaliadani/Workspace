const valorDoProduto = 500;
const formaDePagamento = 4;

if (formaDePagamento == 1) {
    console.log('R$' + (valorDoProduto - (valorDoProduto * 0.1)));

} else if (formaDePagamento == 2) {
    console.log('R$' + (valorDoProduto - (valorDoProduto * 0.15)));

} else if (formaDePagamento == 3) {
    console.log('R$' + valorDoProduto);

} else {
    console.log('R$' + (valorDoProduto + (valorDoProduto * 0.1)));
}