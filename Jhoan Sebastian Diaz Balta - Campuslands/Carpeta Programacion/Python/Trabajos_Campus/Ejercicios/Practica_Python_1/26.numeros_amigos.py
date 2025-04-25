def suma_divisores_propios(numero):
    suma = 0
    for i in range(1, numero):
        if numero % i == 0:
            suma += i
    return suma

def son_numeros_amigos(num1, num2):
    suma1 = suma_divisores_propios(num1)
    suma2 = suma_divisores_propios(num2)
    return suma1 == num2 and suma2 == num1

# *CODE MAIN* #
print("-PROGRAMA: NUMEROS AMIGOS-")

num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

if son_numeros_amigos(num1, num2):
    print(f"{num1} y {num2} son numeros amigos.")
else:
    print(f"{num1} y {num2} no son numeros amigos.")