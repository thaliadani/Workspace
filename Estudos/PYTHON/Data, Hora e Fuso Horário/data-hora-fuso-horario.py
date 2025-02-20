from datetime import date, time, datetime

# Criando uma data
hoje = date.today()
print("Data atual:", hoje) 

# Criando uma hora
hora = time(14, 30, 0)
print("Hora:", hora)  # Saída: Hora: 14:30:00

# Criando uma data e hora
agora = datetime.now()
print("Data e hora atuais:", agora)
