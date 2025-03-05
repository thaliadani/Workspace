# Encapsulamento 

# Publico : Atributos e métodos que podem ser acessados por qualquer classe

# Privado : Atributos e métodos que só podem ser acessados pela própria classe

# Para tornar um atributo ou método privado, basta adicionar dois underlines antes do nome do atributo ou método

class Conta:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.__saldo = saldo

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        self.__saldo -= valor

    def extrato(self):
        print(f"Saldo: R${self.__saldo}")


conta1 = Conta("João", 300.00)

conta1.depositar(50.23)
conta1.sacar(1)
conta1.extrato()