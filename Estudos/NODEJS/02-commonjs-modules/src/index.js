const { getFullName, getProductLabel} = require("./services/products");
const config = require("./services/config");

const database = require("./services/database");

async function main() {
    console.log('Carrinho de Compras\n');

    getFullName('12345', 'Notebook Dell Inspiron 15');
    getFullName('67890', 'Smartphone Samsung Galaxy S21');

    getProductLabel('Notebook Dell Inspiron 15');

    console.log(config.devArea.productions);
    console.log(config.client.device);

    database.connectToDatabase("produtos");
}

main();