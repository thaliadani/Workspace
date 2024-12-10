## Fetch API

A Fetch API é uma interface moderna que permite fazer requisições HTTP (como obter ou enviar dados) de uma maneira mais simples e poderosa do que o antigo XMLHttpRequest. É usada frequentemente em aplicações web para interagir com servidores, especialmente para obter dados de APIs.

## Como Funciona?

A Fetch API usa Promises, uma maneira moderna de lidar com operações assíncronas. Em vez de usar callbacks, você trabalha com .then() e .catch() para tratar as respostas e erros.

## Sintaxe Básica

Aqui está um exemplo básico de como usar a Fetch API para obter dados de uma URL:

` fetch('<https://api.exemplo.com/dados>')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
        console.log(data); // Manipula os dados recebidos
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    }); `

## Exemplo com Post

Aqui está um exemplo de como enviar dados para um servidor usando a Fetch API:

` fetch('<https://api.exemplo.com/enviar>', {
    method: 'POST', // Define o método HTTP como POST
    headers: {
        'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify({
        nome: 'João',
        idade: 30
    }) // Envia os dados no corpo da requisição
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
})
.then(data => {
    console.log('Resposta do servidor:', data);
})
.catch(error => {
    console.error('Ocorreu um erro:', error);
}); `

## Características Chave

- Simples de usar: A sintaxe da Fetch API é mais simples e clara comparada a XMLHttpRequest.

- Baseada em Promises: Usa Promises, que tornam o código assíncrono mais legível e fácil de trabalhar.

- Múltiplos Métodos: Suporta todos os métodos HTTP como GET, POST, PUT, DELETE, etc.

- Manuseio de Erros: Fácil de lidar com erros usando .catch().
