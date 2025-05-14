def validacion_numero(num):
    if num < 0:
        return "NEGATIVO"
    elif num == 0:
        return "CERO"
    else:
        return "POSITIVO"


#*CODE MAIN*#
print("-PROGRAMA VALIDA SI UN NUMERO ES POSITIVO NEGATIVO O CERO-")

num = int(input("Ingrese un numero: "))
rta = validacion_numero(num)
print(f"{num} ES: {rta}")
