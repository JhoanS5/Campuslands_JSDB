def calcular_potencia(base, exponente):
    return base ** exponente

#*CODE MAIN*#
print("-CALCULAR POTENCIA NUMERO-")
base = float(input("Ingrese un numero: "))
exponente = float(input("Ingrese su exponente: "))

rta = calcular_potencia(base, exponente)
print(f"{base}**{exponente} = {rta}")