def imprimir_multiplicacion(num, limite):
    for i in range(limite):
        rta = num * (i+1)
        print(f"{num} * {i+1} = {rta}")

#*CODE MAIN*#
print("-PROGRAMA IMPRIME LA TABLA DE MULTIPLICAR-")

num = int(input("Ingrese el numero: "))
limite = int(input("Ingrese el limite para multiplicar: "))

imprimir_multiplicacion(num, limite)