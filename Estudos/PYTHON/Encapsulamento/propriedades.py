# Propriedades em Python

# Propriedades são métodos que permitem que você acesse, altere e delete atributos de uma classe como se fossem atributos públicos, mas com a possibilidade de adicionar validações e regras de negócio.

# Sintaxe:

# @property: Define uma propriedade.

# @propriedade.setter: Define um método que será chamado quando o atributo for alterado.

# @propriedade.deleter: Define um método que será chamado quando o atributo for deletado.

class Conta:
    def __init__(self, saldo):
        self._saldo = saldo

    @property
    def saldo(self):
        return self._saldo

    @saldo.setter
    def saldo(self, saldo):
        if saldo < 0:
            print('Saldo negativo')
        else:
            self._saldo = saldo

    @saldo.deleter
    def saldo(self):
        self._saldo = 0

conta = Conta(1000)
print(conta.saldo)

conta.saldo = 500
print(conta.saldo)

conta.saldo = -100
print(conta.saldo)

del conta.saldo
print(conta.saldo)
