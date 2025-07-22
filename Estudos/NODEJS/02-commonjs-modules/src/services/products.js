const productType = {
    version: "digital",
    tax:"x1"
}

const apiURL ={
    url: "https://api.example.com",
    timeout: 5000
}

async function doBreakLine() {
    console.log("\n")
}

async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " - " + productName);
    await doBreakLine();
}

async function getProductLabel(productName){
    console.log("Product Label: " + productName);
    await doBreakLine();
}

module.exports={
    getFullName,
    getProductLabel,
    productType,
};