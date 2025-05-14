def contar_pares_impares(limite):
    pares = 0
    impares = 0
    for i in range(0, limite):  
        if (i + 1) % 2 == 0:
            pares += 1
        else:
            impares += 1
    print(f"Pares: {pares}")
    print(f"Impares: {impares}")

#*CODE MAIN*#
print("-PROGRAMA: CONTAR PARES E IMPARES-")

limite = int(input("Ingrese el limite: "))
contar_pares_impares(limite)