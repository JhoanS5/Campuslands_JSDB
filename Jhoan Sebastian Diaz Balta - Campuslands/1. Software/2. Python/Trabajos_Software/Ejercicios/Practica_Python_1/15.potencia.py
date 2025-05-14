def calcular_potencia(base, exponente):
    resultado = 1
    for i in range(exponente):
        resultado *= base
    return resultado

#*CODE MAIN*#
print("-PROGRAMA: POTENCIA (SIN USAR **)-")

base = int(input("Ingrese la base: "))
exponente = int(input("Ingrese el exponente: "))

resultado = calcular_potencia(base, exponente)
print(f"El resultado de {base} elevado a {exponente} es: {resultado}")