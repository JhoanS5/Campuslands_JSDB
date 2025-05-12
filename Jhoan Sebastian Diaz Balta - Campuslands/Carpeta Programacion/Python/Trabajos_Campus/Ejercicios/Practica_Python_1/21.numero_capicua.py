def numero_capicua(numero):
    if numero == numero[::-1]:
        return True
    else:
        return False
    
#*CODE MAIN*#
print("-PROGRAMA: Verifica si un numero es CAPICUA-")

numero = str(input("Ingrese el numero para verificar: "))

rta = numero_capicua(numero)
if rta:
    print(f"{numero} Es CAPICUA")
else:
    print(f"{numero} No es CAPICUA")