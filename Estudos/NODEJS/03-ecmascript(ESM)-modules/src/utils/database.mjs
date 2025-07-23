const databaseType ={
    userType : "admin",
    typeData: "mysql"
}
async function connectToDatabase(dataname) {
    console.log(`Conectado ao banco de dados ${dataname}`)
}

async function disconnectFromDatabase() {
    console.log("Desconectado do banco de dados")
}

//export default connectToDatabase;

export { 
    connectToDatabase, disconnectFromDatabase ,
    databaseType
};