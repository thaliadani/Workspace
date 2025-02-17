#for
texto = input("Digite um texto: ")
VOGAIS = "AEIOU"

for letra in texto:
    if letra.upper() in VOGAIS:
        print(letra, end="")

print()


#range
for numero in range(1, 12):
    print(numero, end="")
    
for numero in range(0, 10, 2):
    print(numero, end="")
    


for numero in range(10):
    if numero % 2 == 0:
        continue
    print(numero, end="")
    

#while
contador = 0
while contador < 20:
    print(contador, end="")
    contador += 1


opcao = 1

while opcao != 0:
    opcao = int(input("Informe uma opcao: [1]Sacar [2]Extrato [0]Sair:"))
    
    if opcao == 1:
        print("Sacando...")
    elif opcao == 2:
        print("Exibindo extrato...")
    else:
        print("Obrigado por utilizar nossos serviços")
        
#break e continue
while True:
    numero = int(input("Informe um numero:"))
    
    if numero == 10:
        break
    
    if numero % 2 == 0:
        continue

    print(numero)

