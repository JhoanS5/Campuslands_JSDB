def digito_mayor(numero):
    maximo = 0
    for digito in str(numero):
        if int(digito) > maximo:
            maximo = int(digito)
    return maximo

#*CODE MAIN*#
print("-PROGRAMA: DIGITO MAYOR-")

numero = int(input("Ingrese un numero: "))
resultado = digito_mayor(numero)
print(f"El digito mayor en el numero {numero} es: {resultado}")