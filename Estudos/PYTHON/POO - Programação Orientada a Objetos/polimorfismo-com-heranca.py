class Passaro:
    def __init__(self, voar):
        self._voar = voar
        
    def _voar(self):
        print('Passaro voando...')
        
class Pardal(Passaro):
    def __init__(self):
        super().__init__('Pardal')
    def voar(self):
        print('Pardal voando...')

class Pinguim(Passaro):
    def __init__(self):
        super().__init__('Pinguim')
    def voar(self):
        print('Pinguim não voa')
        

class Aviao(Passaro):
    def __init__(self):
        super().__init__('Avião')
    def voar(self):
        print('Avião voando...')

def plano_voo(obj):
    obj.voar(Passaro)
    

plano_voo(Pardal)
plano_voo(Pinguim)
plano_voo(Aviao)