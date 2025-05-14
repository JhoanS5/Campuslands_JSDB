def devolver_numero_mayor(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2
    
    
#*CODE MAIN*#
print("-PROGRAMA: RECIBE DOS NUMEROS MUESTRA CUAL ES EL MAYOR-")
num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

rta = devolver_numero_mayor(num1, num2)
print(f"{num1} / {num2} : El mayor es -> {rta}")