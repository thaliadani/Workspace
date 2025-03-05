let numero = 20;

const pi = 3.14;

let nome = 'Thalia';

let verdadeira = true;

let resultado = numero * pi;

const nomeDoUsuario = prompt('Qual seu nome?');
console.log('Olá, ' + nomeDoUsuario?.toLowerCase);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nomes: string[] = [];

const idades: number[] = [];
idades.push(20);
idades.push(30);
idades.push(16);
idades.push(18);
idades.push(12);

const menorDeIdade = idades.filter((idade) => idade < 18);

console.log(menorDeIdade);

const pessoa: [string, number, boolean] = ['Thalia', 23, true];


//////////////////////////////////////////////////////////////

//* Object Types

//interface (semantico)
interface Person {
    nome: string;
    idade: number;
    estudante: boolean;
    altura?: number; //opcional
}

//type (generico)
type Person2 = {
    nome: string;
    idade: number;
    estudante: boolean;
    altura?: number; //opcional
};

const pessoa2: Person = {
    nome: 'Thalia',
    idade: 23,
    estudante: true,
};

pessoa2.altura = 1.58;

console.log(pessoa2);


/////////////////////////////////////////////////////////////////

type Criterio = 'grande' | 'pequeno';

function chooseNumber(
    numero1: number, 
    numero2: number, 
    criterio?: Criterio)
{
    switch (criterio) {
        case 'grande':
            return numero1 > numero2 ? numero1 : numero2;
        case 'pequeno':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            {
                const numeroAleatorio = Math.random();

                if (numeroAleatorio < 0.5) return numero1; 
                return numero2;
            }
    }   
}

const numeroEscolhido = chooseNumber(20, 10, 'grande');

console.log(numeroEscolhido);

function somar(num1: number, num2: number): number {
    return num1 + num2;
}

//* Utility Types: A ideia deles é criar novos tipos a partir de outros tipos existentes

//Partial (opcional)

type PersonPartial = Partial<Person>;

//Required (obrigatorio)

type PersonRequired = Required<Person>;

//Pick (escolher)

type PersonPick = Pick<Person, 'nome' | 'idade'>;

//Omit (omitir)

type PersonOmit = Omit<Person, 'nome'>;

//Exclude (excluir)

type PersonExclude = Exclude<Criterio, 'grande'>;

//Record (criar um objeto)

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
    '111.111.111-01':{
        nome: 'Thalia',
        idade: 23,
        estudante: true
    },
    '222.222.222-02':{
        nome: 'Paulo',
        idade: 18,
        estudante: true
    }
};

//Evitar any