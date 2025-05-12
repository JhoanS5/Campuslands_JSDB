def contar_digitos_pares(numero):
    cantidad_pares = 0
    for digito in str(numero):
        if int(digito) % 2 == 0: 
            cantidad_pares += 1
    return cantidad_pares

#*CODE MAIN*#
print("-PROGRAMA: CONTAR DIGITOS PARES-")

numero = int(input("Ingrese un numero: "))
resultado = contar_digitos_pares(numero)
print(f"El numero {numero} tiene {resultado} digitos pares.")