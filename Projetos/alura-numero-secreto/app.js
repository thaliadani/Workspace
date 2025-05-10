alert("Bem-vindo ao jogo de número secreto! Você tem 3 tentativas para acertar o número secreto entre 1 e 10.");

let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10
let tentativas = 3;

// Loop para permitir até 3 tentativas

while (tentativas > 0) {
    // Solicitar ao usuário que adivinhe o número
    let palpite = prompt("Adivinhe o número secreto (você tem " + tentativas + " tentativas restantes):");
    
    // Verificar se o palpite está correto
    if (palpite == numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto!");
        break; // Sair do loop se o usuário acertar
    } else {
        alert("Errado! Tente novamente.");
        tentativas--; // Reduzir o número de tentativas restantes
    }
}


