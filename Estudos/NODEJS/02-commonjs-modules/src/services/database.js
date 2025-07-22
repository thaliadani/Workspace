//export default - exporta um modulo padrao

exports.connectToDatabase = async (dataName) =>{
    console.log("Connecting to the database..." + dataName);
}
    
exports.disconnectToDatabase = async() => {
    console.log("Disconnecting from the database...");
}