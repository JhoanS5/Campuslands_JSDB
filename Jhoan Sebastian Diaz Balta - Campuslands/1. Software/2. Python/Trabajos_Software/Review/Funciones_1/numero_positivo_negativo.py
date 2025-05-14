def validacion_numero(num):
    if num < 0:
        print(f"{num} ES NEGATIVO")
    elif num == 0:
        print(f"{num} ES CERO")
    else:
        print(f"{num} ES POSITIVO")


#*CODE MAIN*#
print("-PROGRAMA VALIDA SI UN NUMERO ES POSITIVO NEGATIVO O CERO-")

num = int(input("Ingrese un numero: "))
validacion_numero(num)
