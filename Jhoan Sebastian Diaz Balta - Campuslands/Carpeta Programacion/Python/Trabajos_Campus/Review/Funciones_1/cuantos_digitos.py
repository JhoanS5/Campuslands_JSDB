def cuantos_digitos_numero(num):
    cantidad = len(num)

    print(f"{num} Tiene: {cantidad} digitos.")


#*CODE MAIN*#
print("-PROGRAMA CALCULA CUANTOS DIGITOS TIENE UN NUMERO-")

num = int(input("Ingrese un numero: "))
num_strin = str(num)
cuantos_digitos_numero(num_strin)