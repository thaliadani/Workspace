async function connectToDatabase(user, password) {
    if (
        user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE
    ) {
        console.log("Conectado ao banco de dados");
    } else {
        console.log("Falha ao conectar ao banco de dados: credenciais inválidas");
    }
}

export default connectToDatabase;