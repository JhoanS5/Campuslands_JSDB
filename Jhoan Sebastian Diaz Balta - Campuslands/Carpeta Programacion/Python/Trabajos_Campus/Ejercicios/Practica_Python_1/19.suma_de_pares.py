def suma_pares(limite):
    suma = 0
    for i in range(limite): 
        if (i + 1) % 2 == 0:  
            suma += (i + 1)
    return suma

#*CODE MAIN*#
print("-PROGRAMA: SUMA DE NUMEROS PARES-")

limite = int(input("Ingrese el limite: "))
rta = suma_pares(limite)
print(f"La suma de los numeros pares del 1 al {limite} es: {rta}")