curso = "pYtHon"

print(curso.upper())

print(curso.lower())

print(curso.title())

#---------------------------------------

# Eliminado espacos em branco

texto = "  Ola Mundo!   "

print(texto.strip()+ ".")

print(texto.lstrip()+ ".")

print(texto.rstrip()+ ".")

#---------------------------------------

# Junçoes e centralizacao

curso = "Python"

print(curso.center(14, "#"))
print(curso.center(14, " "))
print(curso.center(14, "-"))

print(".".join(curso))
print("-".join(curso))