def criar_carro(*, modelo, ano, placa, marca, motor,combustivel):
    print(modelo,ano,placa,marca,motor,combustivel)
    
criar_carro(modelo = "Palio", ano = 2010, placa = "ABC-1234", marca = "Fiat", motor = "1.0", combustivel = "Gasolina") #valido

# criar_carro("Palio", 2010, "ABC-1234", marca="Fiat", motor="1.0", combustivel="Gasolina") #invalido