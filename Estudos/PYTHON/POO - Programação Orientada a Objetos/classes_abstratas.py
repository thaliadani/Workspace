# Classe abstrata é uma classe que não pode ser instanciada, só pode ser herdada
from abc import ABC, abstractmethod

class ControleRemoto(ABC):
    @abstractmethod
    def ligar(self):
        pass
    
    @abstractmethod
    def desligar(self):
        pass
    
    @property
    @abstractmethod
    def marca(self):
        pass


class Televisao(ControleRemoto):
    def ligar(self):
        print('Ligando a televisão')
    
    def desligar(self):
        print('Desligando a televisão')
    
    def marca(self):
        return 'LG'

controle = Televisao()
controle.ligar()
controle.desligar()
print(controle.marca())