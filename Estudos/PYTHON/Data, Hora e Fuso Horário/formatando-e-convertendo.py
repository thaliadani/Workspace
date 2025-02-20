from datetime import datetime

d= datetime.now()

#Formatando data e hora
print(d.strftime("%d/%m/%Y, %H:%M"))

#Convertendo string para datetime
data_string = '01/01/2022, 12:00:00'
data_convertida = datetime.strptime(data_string, '%d/%m/%Y, %H:%M:%S')
print(data_convertida)