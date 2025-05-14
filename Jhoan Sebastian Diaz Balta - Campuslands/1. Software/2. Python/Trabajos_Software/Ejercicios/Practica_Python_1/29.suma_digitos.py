def suma_digitos(num):
    suma = 0
    for numero in num:
        suma += int(numero)

    
    print(f"{num} la suma de sus digitos es: {suma}")
        



#*CODE MAIN*#
print("-PROGRAMA SUMA DIGITOS DE UN NUMERO-")

num = int(input("Ingrese un numero: "))
num_string = str(num)

suma_digitos(num_string)