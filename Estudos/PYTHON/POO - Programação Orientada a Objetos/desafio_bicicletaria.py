class Bicicleta:
    def __init__(self, cor, modelo, ano, valor):
        self.cor = cor
        self.modelo = modelo
        self.ano = ano
        self.valor = valor

    def buzinar(self):
        print("Plim Plim")
        
    def parar(self):
        print("Bicicleta parou")
        
    def correr(self):
        print("Bicicleta correndo")
    
    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"
        

b1 = Bicicleta("Vermelha", "Caloi", 2015, 1000)
b2 = Bicicleta("Azul", "Caloi", 2015, 1000)
b3 = Bicicleta("Preto", "Caloi", 2015, 1000)

b1.buzinar()
b1.correr()
b1.parar()

print(b2.cor)

print(b3)


