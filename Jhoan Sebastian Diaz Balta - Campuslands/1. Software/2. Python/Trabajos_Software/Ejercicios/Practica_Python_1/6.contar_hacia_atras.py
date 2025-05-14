def contador_hacia_atras(num):
    for i in range(num,-1,-1):
        print(i)

#*CODE MAIN¨*#
print("-PROGRAMA: RECIBE UN NUMERO Y CUENTA HASTA CERO-")

num = int(input("Ingrese un numero: "))

contador_hacia_atras(num)