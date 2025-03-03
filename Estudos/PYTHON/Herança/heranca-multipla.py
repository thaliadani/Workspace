class Animal :
    def __init__(self, nome, cor, peso, idade):       
        self.__nome = nome
        self.__cor = cor
        self.__peso = peso
        self.__idade = idade
        
    def get_nome(self):
        return self.__nome
    
    def comer(self):
        return f"{self.get_nome()} esta comendo"
    
    def dormir(self):
        return f"{self.get_nome()} esta dormindo"
    
    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"
        
class Mamifero(Animal):
    def __init__(self, nome, cor, peso, idade, amamentando):
        super().__init__(nome, cor, peso, idade)
        self.amamentando = amamentando
    def amamentando(self):
        return f"{'Sim' if self.amamentando else 'Nao'} estou amamentando"

class Ave(Animal):
    def __init__(self, nome, cor, peso, idade,nadando):
        super().__init__(nome, cor, peso, idade)
        self.nadando = nadando
    def voando(self):
        return f"{self.get_nome()} esta voando"
    def nadando(self):
        return f"{'Sim' if self.voando else 'Nao'} esta nadando"


class Cachorro(Mamifero):
    def latir(self):
        return f"{self.get_nome()} esta latindo"

class Gato(Mamifero):
    def miar(self):
        return f"{self.get_nome()} esta miando"

class Pinguim(Ave):
    pass

class Pato(Ave):
    def grasnando(self):
        return f"{self.get_nome()} esta grasnando"
  

cachorro1 = Cachorro("Cachorro", "Branco", 10, 5,'Sim')

gato1 = Gato("Gato", "Preto", 10, 5,'Nao')

pinguim1 = Pinguim("Pinguim", "Branco", 10, 5,'Nao')

pato1 = Pato("Pato", "Preto", 10, 5,'Sim')

print(cachorro1)
print(gato1)
print(pinguim1)
print(pato1)

print(cachorro1.comer())
print(cachorro1.dormir())
print(cachorro1.latir())

print(gato1.comer())
print(gato1.dormir())
print(gato1.miar())

print(pinguim1.comer())
print(pinguim1.dormir())

print(pato1.comer())
print(pato1.dormir())
print(pato1.grasnando())

