class Pessoa:
    ano_atual = 2022

    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade

    # Método de classe serve para criar um objeto a partir de um metodo da classe sem precisar instanciar a classe com o __init__ 
    @classmethod
    def por_ano_nascimento(cls, nome, ano_nascimento):
        idade = cls.ano_atual - ano_nascimento
        return cls(nome, idade)

    # Método estático não tem acesso a classe e nem ao objeto
    @staticmethod
    def maior_idade(idade):
        return idade >= 18

    def __str__(self) -> str:
        return f'{self.nome} tem {self.idade} anos de idade'

    # __add__ é um método especial que permite a soma de objetos
    def __add__(self, other):
        return self.idade + other.idade

    
p1 = Pessoa('Luiz', 32)
p2 = Pessoa.por_ano_nascimento('João', 1990)

print(p1)
print(p2)

print(p1 + p2)

print(Pessoa.maior_idade(32))
print(Pessoa.maior_idade(17))



