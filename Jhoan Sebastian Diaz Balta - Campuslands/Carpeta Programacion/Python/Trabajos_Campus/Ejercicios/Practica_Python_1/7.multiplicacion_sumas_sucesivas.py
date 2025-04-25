def multiplicacion_por_sumas(num1, num2):
    resultado = 0
    contador = 0
    while contador < num2:
        resultado += num1
        contador += 1
    return resultado

#*CODE MAIN*#
print("-PROGRAMA: MULTIPLICACION POR SUMAS SUCESIVAS-")

num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

resultado = multiplicacion_por_sumas(num1, num2)
print(f"{num1} * {num2} es: {resultado}")