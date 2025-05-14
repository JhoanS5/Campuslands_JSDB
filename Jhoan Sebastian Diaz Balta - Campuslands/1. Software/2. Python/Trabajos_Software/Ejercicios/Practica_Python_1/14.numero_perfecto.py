def es_numero_perfecto(numero):
    suma_divisores = 0
    for i in range(1, numero):
        if numero % i == 0:
            suma_divisores += i
    if suma_divisores == numero:
        return True
    else:
        return False

#*CODE MAIN*#
print("-PROGRAMA: NUMERO PERFECTO-")

numero = int(input("Ingrese un numero: "))

if es_numero_perfecto(numero):
    print(f"El numero {numero} es perfecto.")
else:
    print(f"El numero {numero} no es perfecto.")