class Estudante:
    escola = "IFPI"
    
    def __init__(self, nome, matricula):
        self.nome = nome
        self.matricula = matricula

    def __str__(self):
        return f"{self.nome} ({self.matricula}) - {Estudante.escola}"

def mostrar_estudantes(estudantes):
    for estudante in estudantes:
        print(estudante)
        
estudante1 = Estudante("João", 123)
estudante2 = Estudante("Maria", 456)
mostrar_estudantes([estudante1, estudante2])

Estudante.escola = "PUC"
estudante1.matricula = 100
estudante3 = Estudante("Pedro", 101)
mostrar_estudantes([estudante1, estudante2, estudante3])
