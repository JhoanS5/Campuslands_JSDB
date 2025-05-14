def minimo_comun_multiplo(num1, num2):
    while num2 != 0:
        num1, num2 = num2, num1 % num2
    return num1

#*CODE MAIN*
print("-PROGRAMA: CALCULA EL MCM DE DOS NUMEROS-")

num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

rta = abs(num1 * num2) // minimo_comun_multiplo(num1, num2)
print(f"El MCM de {num1} y {num2} es {rta}")