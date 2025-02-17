# MAIOR_IDADE = 18

# idade = int(input("Informe sua idade: "))

# if idade >= MAIOR_IDADE:
#     print("Maior de idade, pode tirar a CNH")
# else:
#     print("Menor de idade, nao pode tirar a CNH")  

#------------------------------------------------------------

# GELADEIRA = ["maca", "banana", "laranja"]
# MERCADO = ["abacate", "goiaba", "limao"]

# fruta = input("Informe uma fruta: ")

# if fruta in GELADEIRA :
#     print("A fruta esta na geladeira")
# elif fruta in MERCADO:
#     print("A fruta esta no mercado")
# else:
#     print("A fruta nao esta no mercado nem na geladeira")    

#------------------------------------------------------------

# conta_normal = False
# conta_universitaria = False

# saldo = 2000
# saque = 2500
# cheque_especial = 450

# if conta_normal:
#     if saldo >= saque:
#         print("Saque realizado com sucesso")
#     elif saque <= (saldo + cheque_especial):
#         print("Saldo realizado com uso do cheque especial")
#     else:
#         print("Saldo insuficiente")
# elif conta_universitaria:
#     if saldo >= saque:
#         print("Saque realizado com sucesso")
#     else:
#         print("Saldo insuficiente")
# else:
#     print("Conta invalida")

#------------------------------------------------------------

saldo = 2000
saque = 500

status = "Sucesso" if saldo >= saque else "Saldo insuficiente"

print(f"O status da transacao foi: {status}!")