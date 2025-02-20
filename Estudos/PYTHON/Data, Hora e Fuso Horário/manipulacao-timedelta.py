import datetime

# data = datetime.datetime.now()
# print(data)

print(datetime.datetime.now().date())

# data= data + datetime.timedelta(weeks=1)
# print(data)

# resultado = datetime.datetime(2022, 10, 12, 5, 30) - datetime.timedelta(days=30)
# print(resultado.time())

#------------------------------------------------
tipo_carro = 'M'
tempo_pequeno = 30
tempo_medio = 45
tempo_grande = 60
data_atual = datetime.datetime.now()

if tipo_carro == 'P':
    data_estimada = data_atual - datetime.timedelta(minutes=tempo_pequeno)
    print(f'O carro {tipo_carro} vai sair em {data_estimada}')
elif tipo_carro == 'M':
    data_estimada = data_atual - datetime.timedelta(days=tempo_medio)
    print(f'O carro {tipo_carro} vai sair em {data_estimada}')
elif tipo_carro == 'G':
    data_estimada = data_atual - datetime.timedelta(weeks=tempo_grande)
    print(f'O carro {tipo_carro} vai sair em {data_estimada}')


