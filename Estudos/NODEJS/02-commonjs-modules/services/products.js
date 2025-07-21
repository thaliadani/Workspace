//todas as funcoes que lidam com produtos
async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " - " + productName);
    console.log("------------------");
}

async function getProductLabel(productName){
    console.log("Product Label: " + productName);
    console.log("------------------");
}

module.exports={
    getFullName,
    getProductLabel
};