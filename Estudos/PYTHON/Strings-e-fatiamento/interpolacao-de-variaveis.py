nome = "Guilherme"
idade = 20
profisao = "Programador"
linguagem = "Python"

# Metodo format

print("O {nome} tem {idade} anos e trabalha como {profisao} na linguagem {linguagem}".format(nome=nome, idade=idade, profisao=profisao, linguagem=linguagem))

pessoa ={
    "nome": "Guilherme",
    "idade": 20,
    "profisao": "Programador",
    "linguagem": "Python"}

print("O {nome} tem {idade} anos e trabalha como {profisao} na linguagem {linguagem}".format(**pessoa))

# Metodo f-string

print(f"O {nome} tem {idade} anos e trabalha como {profisao} na linguagem {linguagem}")



PI =3.14159

print(f"O PI vale {PI:.2f}")

print(f"O PI vale {PI:10.1f}")
 