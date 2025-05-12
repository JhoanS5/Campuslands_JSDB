def numero_es_par(num):
    if num % 2 == 0:
        print(f"{num} ES PAR")
    else:
        print(f"{num} ES IMPAR")

#*CODE MAIN*#
print("-VERIFICAR SI ES PAR O IMPAR-")
num = int(input("Ingrese un numero para verificar si es PAR O IMPAR: "))

numero_es_par(num)