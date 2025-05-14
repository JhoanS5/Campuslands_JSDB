def mayor_de_tres(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3

#*CODE MAIN*#
print("-PROGRAMA: MAYOR DE TRES NUMEROS-")

num1 = float(input("Ingrese el primer numero: "))
num2 = float(input("Ingrese el segundo numero: "))
num3 = float(input("Ingrese el tercer numero: "))

mayor = mayor_de_tres(num1, num2, num3)
print(f"El mayor de los tres numeros es: {mayor}")