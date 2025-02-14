saldo = 1000
saque = 200
limite = 100
conta_especial = True

validar_saque = saldo >= saque and saque <= limite
print(validar_saque)

validar_saque = saldo >= saque or saque <= limite
print(validar_saque)

validar_saque = (saldo >= saque and saque <= limite ) or (conta_especial and saldo >= saque)
print(validar_saque)

contatos_emergencia =[]

print(not 1000 > 1500)

print(not contatos_emergencia)

print(not "saque 1500;")

print(not "")


