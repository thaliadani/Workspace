interface IPessoa {
    nome: string;
    idade: number;
    altura: number;

    dormir: () => void
}

interface IProfessor extends IPessoa {
    disciplina: string;

    ensinar: () => void;
}

//Classe: abstração

class Pessoa implements IPessoa{
    
    //atributos:caracteristicas(variaveis)
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    //metodos: ações(funcoes)
    
    //metodo construtor
    constructor(nome:string, idade:number,altura:number, cpf:string){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log('Estou dormindo');
    }

    //acessor:getter (consegue visualizar)
    get cpf(): string {
        return this._cpf;
    }

    //acessor:setter (consegue alterar)
    set cpf(newCpf: string) {
        if(newCpf.length !== 14){
            throw new Error('CPF inválido');
        }
        this._cpf = newCpf;
    }

}

class professor extends Pessoa {
    disciplina: string;

    constructor(nome: string, idade: number, altura: number, cpf: string, disciplina: string) {
        super(nome, idade, altura, cpf);
        this.disciplina = disciplina;
    }

    ensinar (){
        console.log('Estou ensinando ' + this.disciplina);
    }
}

//Criando/instanciando um objeto a partir de uma classe

//Objeto da Classe Pessoa
const pessoa1 = new Pessoa('Thalia', 23, 1.58,'111.111.111-11');
const pessoa2 = new Pessoa('Pedro', 21, 1.75,'222.222.222-22');

console.log(pessoa1);
console.log(pessoa1.dormir());

console.log(pessoa2.nome);
console.log(pessoa2.cpf);

pessoa1.cpf = '333.333.333-33';

console.log(pessoa1.cpf);

//Objeto da Classe Professor

const professor1 = new professor('Thalia', 23, 1.58, '111.111.111-11', 'Matemática');

console.log(professor1);
console.log(professor1.dormir());
console.log(professor1.ensinar());

//Poliforfismo

console.log(pessoa1 instanceof Pessoa); //true

console.log(pessoa1 instanceof professor); //false

console.log(professor1 instanceof Pessoa); //true

console.log(professor1 instanceof professor); //true