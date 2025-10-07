// Crie um sistema de lista de compras. Nesse sistema, o usuário terá disponível um menu que conterá as seguintes opções:

// 1 - Cadastrar produto

// Deverá ser solicitado para o usuário as seguintes informações: nome, valor e quantidade. Se no carrinho de compras já existir o produto que o usuário está informando, deve ser somada a quantidade que ele está adicionando agora com a quantidade que já tinha no carrinho

// 2 - Listar produtos

// Deverá ser mostrado de forma organizada as informações do produto que estão no carrinho de compras.

// 3 - Remover produto

// Deverá solicitar o nome do produto e remover ele do carrinho de compras

// 4 - Finalizar compra

// Deverá listar todos os produtos de forma organizada e no final mostrar o total a pagar. Depois deve ser finalizado o programa.

// Cada produto no carrinho de compras deverá ter as seguintes informações: Nome, valor e quantidade.

const prompt = require('prompt-sync')();

let listaProdutos = [];

function exibirMenu() {

    console.log('\n================== Menu ===================');
    console.log('1 - Cadastrar produto');
    console.log('2 - Listar produtos');
    console.log('3 - Remover produto');
    console.log('4 - Finalizar compra');
    console.log('===========================================\n');

    opcao = parseInt(prompt('Escolha uma opção: '));
    console.log('\n===========================================\n');

    switch (opcao) {
        case 1:
            cadastrarProduto();
            return exibirMenu();
        case 2:
            listarProdutos();
            return exibirMenu();
        case 3:
            removerProduto();
            return exibirMenu();
        case 4:
            finalizarCompra();
            break;
        default:
            console.log('Opção inválida.');
    }
}

function cadastrarProduto() {
    const nome = prompt('Nome do produto: ');
    const valor = parseFloat(prompt('Valor do produto: '));
    const quantidade = parseInt(prompt('Quantidade do produto: '));

    const produto = {
        nome,
        valor,
        quantidade,
    };

    const produtoExistente = listaProdutos.find((item) => item.nome.toLowerCase() === nome.toLowerCase());

    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
        console.log('\n===========================================\n');
        console.log('Produto já existe. Quantidade atualizada!');
    } else {
        listaProdutos.push(produto);
        console.log('Produto cadastrado com sucesso!');
    }

}

function listarProdutos() {
    if (listaProdutos.length === 0) {
        console.log('Nenhum produto cadastrado.');
    } else {
        console.log('Lista de produtos:');
        console.log('\n');
        listaProdutos.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.valor.toFixed(2)} - Quantidade: ${item.quantidade}`);
            console.log('-------------------------------------------\n');
        });
    }
}

function removerProduto() {
    const nome = prompt('Nome do produto a ser removido: ');
    const index = listaProdutos.findIndex((item) => item.nome.toLowerCase() === nome.toLowerCase());

    if (index !== -1) {
        listaProdutos.splice(index, 1);
        console.log('Produto removido com sucesso!');
    } else {
        console.log('Produto não encontrado.');
    }
}

function finalizarCompra() {
    if (listaProdutos.length === 0) {
        console.log('Nenhum produto cadastrado.');
    } else {
        let total = 0;
        console.log('Produtos no carrinho:');
        console.log('\n');
        listaProdutos.forEach((item, index) => {
            const subtotal = item.valor * item.quantidade;
            total += subtotal;
            console.log(`${index + 1}. ${item.nome} - R$ ${item.valor.toFixed(2)} - Quantidade: ${item.quantidade} - Subtotal: R$ ${subtotal.toFixed(2)}`);
            console.log('-------------------------------------------\n');
        });
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
    }
}

exibirMenu();