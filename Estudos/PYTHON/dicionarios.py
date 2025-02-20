pessoa ={
    "nome": "Guilherme",
    "idade": 20,
    "profisao": "Programador"
    }

pessoa= dict(nome="Guilherme", idade=20, profisao="Programador")

#Adicionar um valor
pessoa["linguagem"] = "Python"

print(pessoa)
print(pessoa["nome"])

#---------------------------------------------------

#Substituir um valor
pessoa["profisao"] = "Desenvolvedor"

print(pessoa)

#---------------------------------------------------
#Aninhado

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    },
    "thalia@gmail.com":{
        "nome": "Thalia",
        "telefone": "3333-2222"
    },
    "pedro@gmail.com":{
        "nome": "Pedro",
        "telefone": "3333-2223"
    }
}

telefone= contatos["thalia@gmail.com"]["telefone"]

print(telefone)

#-----------------------------------------------------
#Interar
    
for chave, valor in contatos.items():
    print(chave, valor)
    
#-----------------------------------------------------

#Metodos

#clear() - Limpa o dicionario

contatos.clear()

print(contatos)

#copy() - Copia o dicionario

copia = contatos.copy()
print(copia)

copia["guilherme@gmail.com"]= {"nome": "Gui"}
print(copia)

#fromkeys() - Cria um dicionario com as chaves informadas

chaves = ("nome", "telefone", "email")

contatos = {}.fromkeys(chaves, "Nao informado")

print(contatos)

#get() - Retorna o valor da chave informada

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

resultado = contatos.get("chave")
print(resultado)

resultado = contatos.get("chave", {})
print(resultado)

#items() - Retorna uma lista de tuplas com os pares chave/valor

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

print(contatos.items())

#keys() - Retorna uma lista com as chaves do dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

print(contatos.keys())

#pop() - Remove um item do dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

print(contatos.pop("guilherme@gmail.com"))

#popitem() - Remove o ultimo item do dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    },
    "laura2@gmail.com":{
        "nome": "Laura",
        "telefone": "3333-31313"
    }
}

print(contatos.popitem())

#setdefault() - Retorna o valor da chave informada

contato = {"nome": "Guilherme","telefone": "3333-2221"}

contato.setdefault("nome", "Paula")
print(contato)

contato.setdefault("idade", 28) # type: ignore
print(contato)

#update() - Atualiza o dicionario com o outro dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

# contatos.update({"guilherme@gmail.com": {"nome": "Gui"}})
# print(contatos)

contatos.update({"laura2@gmail.com": {"nome": "Laura", "telefone": "3333-31313"}})
print(contatos)

#values() - Retorna uma lista com os valores do dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

print(contatos.values())

#in - Verifica se a chave existe no dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

print("guilherme@gmail.com" in contatos)
print("thalia@gmail.com" in contatos)

#del - Remove um item do dicionario

contatos = {
    "guilherme@gmail.com":{
        "nome": "Guilherme",
        "telefone": "3333-2221"
    }
}

del contatos["guilherme@gmail.com"]["telefone"]
print(contatos)

