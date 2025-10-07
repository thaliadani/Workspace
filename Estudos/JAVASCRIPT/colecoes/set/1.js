// Crie duas variáveis, cada variável deve receber um Set contendo nomes de frutas. Depois, pegue esses Sets e brinque com os seguintes métodos: intersection, union, difference

const frutas1 = new Set(['maçã', 'banana', 'laranja', 'uva']);
const frutas2 = new Set(['banana', 'kiwi', 'manga', 'uva']);

// União (union)
const uniao = new Set([...frutas1, ...frutas2]);

console.log("União:", uniao);

// Interseção (intersection)
const intersecao = new Set([...frutas1].filter(fruta => frutas2.has(fruta)));

console.log("Interseção:", intersecao);

// Diferença (difference)
const diferenca = new Set([...frutas1].filter(fruta => !frutas2.has(fruta)));

console.log("Diferença (frutas1 - frutas2):", diferenca);