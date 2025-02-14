function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Thalia') + ' sou maior de idade');
    } else {
        console.log(escrevaMeuNome('Thalia') + ' sou menor de idade');
    }
}

verificarIdade(19);