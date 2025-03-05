class Veiculo:
    def __init__(self, marca, modelo, cor, placa):
        self.marca = marca
        self.modelo = modelo
        self.cor = cor
        self.placa = placa
        
    def buzinar(self):
        print("Beep Beep")
        
    def __str__(self):
        return f"{self.__class__.__name__}: {', '.join([f'{chave}={valor}' for chave, valor in self.__dict__.items()])}"

class Carro(Veiculo):
    pass

class Motocicleta(Veiculo):
    pass

class Caminhao(Veiculo):
    def __init__(self, marca, modelo, cor, placa,carregando_carga):
        super().__init__(marca, modelo, cor, placa)
        self.carregando_carga = carregando_carga    
    def carregar_carga(self):
        print(f"{'Sim' if self.carregando_carga else 'Nao'} estou carregando")
        

carro1 = Carro("Fiat", "Palio", "Preto", "ABC-1234")
motocicleta1 = Motocicleta("Honda", "CBR", "Vermelha", "DEF-5678")
caminhao1 = Caminhao("Mercedes", "Actros", "Preto", "GHI-9012", 'Sim')

carro1.buzinar()
motocicleta1.buzinar()
caminhao1.buzinar()


print(carro1)
print(motocicleta1)
print(caminhao1)

