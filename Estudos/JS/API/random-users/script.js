async function getUsers() {
    const resposta = await fetch('https://dummyapi.io/data/v1/user?limit=10', {
        headers: {
            "app-id": "6756eda9a4f6789ad0f20702"
        }
    })
    const users = await resposta.json()
    console.log(users)
}

getUsers()

async function createUser() {
    const userData = {
        firstName: "Paul2",
        lastName: "Fabricio1",
        email: "j313141DyX221a3@test.com"
    }

    try {
        await fetch('https://dummyapi.io/data/v1/user/create', {
            method: 'POST',
            headers: {
                "app-id": "6756eda9a4f6789ad0f20702",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
    } catch (erro) {
        console.log("Deu erro:", erro)
    }
}

//createUser()

async function getUser() {
    const resposta = await fetch('https://dummyapi.io/data/v1/user/6757005ee2833b19ec2cd1d2', {
        headers: {
            "app-id": "6756eda9a4f6789ad0f20702"
        }
    })
    const user = await resposta.json()
    console.log(user)
}

getUser()