const p = require("../services/products")

async function main() {
    console.log('Carrinho de Compras\n');

    p.getFullName('12345', 'Notebook Dell Inspiron 15');
    p.getFullName('67890', 'Smartphone Samsung Galaxy S21');

    p.getProductLabel('Notebook Dell Inspiron 15');
    p.getProductLabel('Smartphone Samsung Galaxy S21');
}

main();