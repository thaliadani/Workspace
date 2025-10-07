// Crie um Map contendo o nome e o preço de três produtos. Em seguida, calcule e exiba o preço total dos produtos.

const produtos = new Map(
    [
        ['produto1', { nome: 'Arroz', preco: 20.00 }],
        ['produto2', { nome: 'Feijão', preco: 8.50 }],
        ['produto3', { nome: 'Macarrão', preco: 5.75 }]
    ],
);

let precoTotal = 0;

for (const produto of produtos.values()) {
    precoTotal += produto.preco;
}
console.log(`Nome dos produtos: ${Array.from(produtos.values()).map(produto => produto.nome).join(', ')}`);

console.log(`Preço total dos produtos: R$ ${precoTotal.toFixed(2)}`);

