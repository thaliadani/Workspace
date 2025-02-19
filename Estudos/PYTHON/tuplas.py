frutas = ("laranja", "banana", "maca",)

letras = tuple("python")

numeros = tuple([1,2,3,4])

pais = ("Brasil", 200, True,)

print(frutas)
print(letras)
print(numeros)
print(pais)

#Acesso direto

print(frutas[0])
print(frutas[-1])
print(pais[2])

#Aninhamento

matriz=(
    (1,"a",2),
    ("b",3,4),
    (6,5,"c")
)
   
print(matriz[0])
print(matriz[0][2])
print(matriz[0][-1])
print(matriz[2][2])

#Fatiamento

lista= (1,2,3,4,5,6,7,8,9,10)

print(lista[2:])
print(lista[:2])
print(lista[0:3])
print(lista[0:1:2])
print(lista[::])
print(lista[::-1])

#Interar

for fruta in frutas:
    print(fruta)

#Enumerate

for indice, fruta in enumerate(frutas):
    print(indice, fruta)
    
#-------------------------------------------------------
#-------------------------------------------------------
#-------------------------------------------------------

#Metodos

#.count() - Conta o número de ocorrências de um item na tupla

print(frutas.count("banana"))

#.index() - Retorna o índice da primeira ocorrência de um item na tupla

print(frutas.index("banana"))

#len() - Retorna o número de elementos na tupla

print(len(frutas))
