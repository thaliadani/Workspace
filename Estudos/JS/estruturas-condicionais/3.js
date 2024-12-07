const nomeDoAluno = 'Bruno';
const primeiroSemestre = 10;
const segundoSemestre = 5;
const terceiroSemestre = 7;

const mediaDasNotas = (primeiroSemestre + segundoSemestre + terceiroSemestre) / 3;

if (mediaDasNotas < 5) {
    console.log(nomeDoAluno + ' Reprovado')
} else if (mediaDasNotas >= 5 && mediaDasNotas <= 7) {
    console.log(nomeDoAluno + ' Recuperação')
} else {
    console.log(nomeDoAluno + ' Aprovado')
}