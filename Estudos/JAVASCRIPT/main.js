// parseFloat() - converte para ponto flutuante
// parseInt() - converte para inteiro

// "/" - divisão
// "%" - resto da divisão
// "*" - multiplicação
// "-" - subtração
// "+" - adição
// "**" - exponenciação
// "++" - incremento
// "--" - decremento

// "=" - atribuição da variável
// "==" - comparação de igualdade de valor
// "===" - comparação de igualdade de valor e tipo
// "!==" - comparação de diferença de valor
// ">" - maior
// "<" - menor
// "<=" - maior ou igual
// ">=" - menor ou igual

// || - OR
// && - AND
// ! - NOT

// typeof - tipo da variável
// in - verificar se um elemento faz parte de um array

function soma() {
  let n1 = 20;
  const n2 = "30";

  console.log(`Resultado da soma entre ${n1} e ${n2}: ` + (n1 + parseInt(n2)));
}

soma();

function comparacao() {
  const fruta1 = "maça";
  const fruta2 = "banana";

  if (fruta1 === fruta2) {
    console.log(`${fruta1} e ${fruta2} são iguais`);
  } else if (fruta1 !== fruta2) {
    console.log(`${fruta1} e ${fruta2} são diferentes`);
  }
}

comparacao();

console.log("Tipo da variável fruta1" + typeof fruta1);

const cores = new Array("azul", "laranja", "verde", "amarelo");

console.log(`Lista das cores: ${cores}`);
console.log("azul" in cores); // retorna false pois tem que informar o indice e não o seu valor.
console.log(0 in cores);

function nome() {
  let nome = window.prompt("Digite um nome:");
  switch (nome) {
    case "paulo":
    case "maria":
    case "carla":
      console.log("Olá" + nome);
      break;
    default:
      console.log("Nome não encontrado");
  }
}

nome()


