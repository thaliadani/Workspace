from datetime import datetime
import pytz

d = datetime.now(pytz.timezone('America/Sao_Paulo'))
d2 = datetime.now(pytz.timezone('Europe/London'))

print(d.date())

print(d)
print(d2)