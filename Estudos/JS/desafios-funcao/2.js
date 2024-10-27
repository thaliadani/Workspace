/*function formaDePagamento(pagamento) {
    if (pagamento == 1) {
        console.log('R$' + ((valorDoProduto * 0.1) - pagamento));

    } else if (pagamento == 2) {
        console.log('R$' + (valorDoProduto - (valorDoProduto * 0.15)));

    } else if (pagamento == 3) {
        console.log('R$' + valorDoProduto);

    } else {
        console.log('R$' + (valorDoProduto + (valorDoProduto * 0.1)));
    }
}

const valorDoProduto = 500;

formaDePagamento(1); */


function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100)));
}

function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros / 100)));
}

const valorDoProduto = 500;
const formaDePagamento = 4;

if (formaDePagamento == 1) {
    console.log('R$' + aplicarDesconto(valorDoProduto, 10));

} else if (formaDePagamento == 2) {
    console.log('R$' + (aplicarDesconto(valorDoProduto, 15)));

} else if (formaDePagamento == 3) {
    console.log('R$' + valorDoProduto);

} else {
    console.log('R$' + (aplicarJuros (valorDoProduto, 10)));
}

