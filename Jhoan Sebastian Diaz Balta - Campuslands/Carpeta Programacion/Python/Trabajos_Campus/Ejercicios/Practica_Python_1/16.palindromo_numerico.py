def palindromo_numerico(numero):
    if numero == numero[::-1]:
        return True
    else:
        return False
    
#*CODE MAIN*#
print("-PROGRAMA: Verifica si un numero es PALINDROMO-")

numero = str(input("Ingrese el numero para verificar: "))

rta = palindromo_numerico(numero)
if rta:
    print(f"{numero} Es PALINDROMO")
else:
    print(f"{numero} No es PALINDROMO")