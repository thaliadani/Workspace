from datetime import datetime

d= datetime.now()
mascara_ptbr = '%d/%m/%Y %a %H:%M'
mascara_en = '%Y-%m-%d, %H:%M'

#Formatando data e hora
print(d.strftime(mascara_ptbr))

#Convertendo string para datetime
data_str= '2022-5-10, 12:00'
data_convertida = datetime.strptime(data_str, mascara_en)

print(data_convertida)
print(data_convertida.strftime(mascara_ptbr))