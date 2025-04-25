def calcular_edad(year_actual, year_nacimiento):
    return year_actual - year_nacimiento

# *CODE MAIN* #
print("-PROGRAMA: CALCULADORA DE EDAD-")

year_actual = int(input("Ingrese el año actual: "))
year_nacimiento = int(input("Ingrese su año de nacimiento: "))

edad = calcular_edad(year_actual, year_nacimiento)
print(f"Tienes {edad} años.")