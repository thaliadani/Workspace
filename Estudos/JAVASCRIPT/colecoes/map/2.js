// Crie um Map contendo o nome e a idade de duas pessoas. Em seguida, exiba o nome e a idade de cada pessoa em uma linha separada.

const pessoas = new Map(
    [
        ['Alice', 30],
        ['Bob', 25]
    ]
);

for (const [nome, idade] of pessoas) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}