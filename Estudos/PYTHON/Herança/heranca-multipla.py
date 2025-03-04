class Animal :
    def __init__(self, nome, cor, peso, idade):       
        self.nome = nome
        self.cor = cor
        self.peso = peso
        self.idade = idade
        
    def get_nome(self):
        return self.nome
    
    def comer(self):
        return f"{self.get_nome()} esta comendo"
    
    def dormir(self):
        return f"{self.get_nome()} esta dormindo"
    
    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"
        
class Mamifero(Animal):
    def __init__(self, amamentando, **kwargs):
        super().__init__(**kwargs)
        self.amamentando = amamentando
    def amamentando(self):
        return f"{'Sim' if self.amamentando else 'Nao'} estou amamentando"

class Ave(Animal):
    def __init__(self, nadando, **kwargs):
        super().__init__(**kwargs)
        self.nadando = nadando
    def voando(self):
        return f"{self.get_nome()} esta voando"
    def nadando(self):
        return f"{'Sim' if self.nadando else 'Nao'} esta nadando"


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

class Onitorrinco(Mamifero,Ave):
    def __init__(self, nome, cor, peso, idade, amamentando, nadando):  
        # print(Onitorrinco.__mro__)
        print(Onitorrinco.mro())
        
        super().__init__(amamentando=amamentando, nadando=nadando, nome=nome, cor=cor, peso=peso, idade=idade)
        


cachorro1 = Cachorro(nome="Cachorro", cor="Branco", peso=10, idade=5,amamentando='Sim')

gato1 = Gato(nome="Gato", cor="Preto", peso=10, idade=5, amamentando='Nao')

pinguim1 = Pinguim(nome="Pinguim", cor="Branco", peso=10, idade=5,nadando='Nao')

pato1 = Pato(nome="Pato", cor="Preto", peso=10, idade=5,nadando='Sim')

onitorrinco = Onitorrinco(nome="Onitorrinco", cor="Branco", peso=10, idade=5,amamentando='Sim', nadando='Sim')

print(cachorro1)
print(gato1)
print(pinguim1)
print(pato1)
print(onitorrinco)

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

