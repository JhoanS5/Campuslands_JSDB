def calcular_factorial(num):
    contador = num
    factorial = 1

    while contador != 0:
        factorial = factorial * contador
        contador -= 1
    
    print(f"El factorial de {num} es: {factorial}")

#*CODE MAIN*#
print("-PROGRAMA CALCULA FACTORIAL DE UN NUMERO-")

num = int(input("Ingrese un numero: "))

calcular_factorial(num)