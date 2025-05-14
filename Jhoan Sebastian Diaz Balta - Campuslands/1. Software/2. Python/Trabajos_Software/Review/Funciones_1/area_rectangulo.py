def area_rectangulo(base, altura):
    return base * altura

#*CODE MAIN*#
print("-CALCULAR AREA RECTANGULO-")

base = float(input("Ingrese la base del rectangulo: "))
altura = float(input("Ingrese la altura del rectangulo: "))

rta = area_rectangulo(base, altura)
print("El area del rectangulo es: ",rta)