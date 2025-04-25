def imprimir_multiplicacion(num):
    for i in range(10):
        rta = num * (i+1)
        print(f"{num} * {i+1} = {rta}")

#*CODE MAIN*#
print("-PROGRAMA IMPRIME LA TABLA DE MULTIPLICAR HASTA 10-")

num = int(input("Ingrese el numero: "))

imprimir_multiplicacion(num)