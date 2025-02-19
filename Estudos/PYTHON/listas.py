#Declarando

frutas = ["laranja", "banana", "maca"]

frutas =[]

letras = list("python")

numeros = list(range(10))

carro = ["Fiat", "Palio", 2010, "ABC-1234", True]

print(frutas)
print(letras)
print(numeros)
print(carro)
#-------------------------------------------------------

#Acesso direto

frutas = ["laranja", "banana", "maca"]

print(frutas[0])

print(frutas[2])

print(frutas[-1])
#-------------------------------------------------------

#Fatiamento

lista= [1,2,3,4,5,6,7,8,9,10]

print(lista[2:])
print(lista[:2])
print(lista[0:3])
print(lista[0:1:2])
print(lista[::])
print(lista[::-1])
#-------------------------------------------------------

#Interar

carros = ["gol", "celta", "palio", "uno"]

for carro in carros:
    print(carro)
#-------------------------------------------------------

#Compreensão

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pares = [num for num in numeros if num % 2 == 0]

print(pares)
#-------------------------------------------------------

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
quadrados = [num ** 2 for num in numeros]

print(quadrados)
#-------------------------------------------------------

#Enumerate

carros = ["gol", "celta", "palio", "uno"]

for index, carro in enumerate(carros):
    print(index, carro) 
#-------------------------------------------------------


#Aninhamento

matriz=[
    [1,"a",2],
    ["b",3,4],
    [6,5,"c"]
]

print(matriz[0])
print(matriz[0][2])
print(matriz[0][-1])
print(matriz[2][2])
#-------------------------------------------------------
#-------------------------------------------------------
#-------------------------------------------------------

#Metodos

#.append() - Adiciona um item ao final da lista

lista = []

lista.append(1)
lista.append("Python")
lista.append([4,5,6])

print(lista)

#.copy() - Cria uma cópia da lista

lista2 = lista.copy()

print(id(lista), id(lista2))

lista2[0] = 2

print(lista)
print(lista2)

#.count() - Conta o número de ocorrências de um item na lista

cores = ["vermelho", "azul", "verde", "azul"]

print(cores.count("azul"))

#.extend() - Adiciona uma lista ao final da lista

cores.extend(["amarelo", "roxo", "laranja"])

print(cores)

#.index() - Retorna o índice do item na lista

linguagens = ["Python", "Java", "C", "C++", "C#", "Java"]

print(linguagens.index("Java"))

#.pop() - Remove e retorna o último item da lista

linguagens.pop()

print(linguagens)

#.remove() - Remove o primeiro item da lista com o valor informado

linguagens.remove("C")

print(linguagens)

#.reverse() - Inverte a ordem dos elementos da lista

linguagens.reverse()

print(linguagens)

#.sort() - Ordena os elementos da lista

alfabeto = ["A","D", "B", "C"]

alfabeto.sort() 

print(alfabeto)

#ordenando em ordem reversa

alfabeto.sort(reverse=True)

print(alfabeto)

#ordenando por tamanho

palavras = ["panela", "uva", "aluminio", "prato", "bola"]

palavras.sort(key=lambda x: len(x))

print(palavras) 

#ordenando por tamanho em ordem reversa

palavras.sort(key=lambda x: len(x), reverse=True)

print(palavras)

#len() - Retorna o número de elementos na lista

print(len(palavras))

#sorted - ordena os elementos da lista

print(sorted(palavras))

print(sorted(palavras, key=lambda x: len(x)))

print(sorted(palavras,key=lambda x: len(x), reverse=True))

#.clear() - Limpa a lista

linguagens.clear()

print(linguagens)

