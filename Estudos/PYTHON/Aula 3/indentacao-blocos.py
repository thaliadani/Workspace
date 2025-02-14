def sacar (valor):
    saldo = 500
    if saldo >= valor:
        saldo -= valor
        print("Saque realizado com sucesso")
    else:
        print("Saldo insuficiente")
        
    print("Obrigado por utilizar nossos serviços")

sacar(1000)
    