class pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def __del__(self):
        print("A pessoa {} foi apagada".format(self.nome))
        
    def falar(self):
        print(f"{self.nome} esta falando")
    
    def comer(self):
        print(f"{self.nome} esta comendo")      
        
p1 = pessoa("Guilherme", 20)
p2 = pessoa("Paulo", 30)

print(p1.nome, p1.idade)

del p1

p2.comer()

