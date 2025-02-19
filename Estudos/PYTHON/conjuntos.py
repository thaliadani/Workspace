numeros = set([1,2,3,1,3,4])
print(numeros)

fruta = set("abacate")
print(fruta)

carros= set(("palio", "gol", "celta", "palio"))
print(carros)

#--------------------------------------------------------------

linguagens = {"python", "java", "c", "c++", "python"}
print(linguagens)

#---------------------------------------------------------------
#Converter para lista

linguagens= list(linguagens)

print(linguagens[0])

#---------------------------------------------------------------

carros={"palio", "gol", "celta", "palio"} 

for carro in carros:
    print(carro)
    
#---------------------------------------------------------------

for indice, carro in enumerate(carros):
    print(indice, carro)

#---------------------------------------------------------------

#Metodos

#union() - Une dois conjuntos

conjunto_a = {1,2,3,4}
conjunto_b = {5,6,7,8}

conjunto_c = conjunto_a.union(conjunto_b)

print(conjunto_c)

#intersection() - Retorna a interseção entre dois conjuntos

conjunto_a = {1,2,3}
conjunto_b = {2,3,4}

conjunto_d = conjunto_a.intersection(conjunto_b)

print(conjunto_d)

#difference() - Retorna a diferenca entre dois conjuntos

conjunto_a = {1,2,3}
conjunto_b = {2,3,4}

conjunto_e = conjunto_a.difference(conjunto_b)
conjunto_f = conjunto_b.difference(conjunto_a)

print(conjunto_e)
print(conjunto_f)

#symmetric_difference() - Retorna a diferenca simétrica entre dois conjuntos
conjunto_a = {1,2,3}
conjunto_b = {2,3,4}

conjunto_g = conjunto_a.symmetric_difference(conjunto_b)

print(conjunto_g)

#issubset() - Retorna True se um conjunto for subconjunto de outro conjunto

conjunto_a = {1,2,3}
conjunto_b = {1,2,3,4,5}

print(conjunto_a.issubset(conjunto_b))
print(conjunto_b.issubset(conjunto_a))

#issuperset() - Retorna True se um conjunto for superconjunto de outro conjunto

conjunto_a = {1,2,3}
conjunto_b = {1,2,3,4,5}

print(conjunto_a.issuperset(conjunto_b))
print(conjunto_b.issuperset(conjunto_a))

#isdisjoint() - Retorna True se dois conjuntos nao tiverem elementos em comum

conjunto_a = {1,2,3,4,5}
conjunto_b = {6,7,8,9}
conjunto_c = {1,0}

print(conjunto_a.isdisjoint(conjunto_b))
print(conjunto_b.isdisjoint(conjunto_a))
print(conjunto_c.isdisjoint(conjunto_a))

#add() - Adiciona um elemento ao conjunto

conjunto_a = {1,2,3}
conjunto_a.add(4)

print(conjunto_a)

#clear() - Limpa o conjunto

conjunto_a = {1,2,3}
conjunto_a.clear()

print(conjunto_a)

#copy() - Cria uma copia do conjunto

conjunto_a = {1,2,3}
conjunto_b = conjunto_a.copy()

print(conjunto_b)

#discard() - Remove um elemento do conjunto

conjunto_a = {1,2,3}
conjunto_a.discard(2)

print(conjunto_a)

#pop() - Remove um elemento da frente

conjunto_a = {1,2,3}
conjunto_a.pop()

print(conjunto_a)

#remove() - Remove um elemento do conjunto

conjunto_a = {1,2,3}
conjunto_a.remove(2)

print(conjunto_a)

#len - Retorna o tamanho do conjunto

conjunto_a = {1,2,3}
print(len(conjunto_a))

#in - Retorna True se um elemento estiver no conjunto

conjunto_a = {1,2,3}
print(1 in conjunto_a)
print(4 in conjunto_a)

#---------------------------------------------------------------