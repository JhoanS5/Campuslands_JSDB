#While

contador = 0

while contador < 5:
    print(contador)
    contador += 1

#Otro Ejemplo

contador1 = 0
control = True
while control:
    print(contador1)
    if contador1 == 5:
        control = False
    contador += 1


#Uso de break en while en python no existe el do-while
x = 5
while True:
    x -= 1
    print(x)
    if x == 0:
        break
    print("FIn del bucle")

contador = 3

while True:
    print('---CAJERO AUTOMATICO---')
    print('''1. Consultar Saldo
    2. Depositar Dinero
    3. Retirar Dinero
    4. Salir''')

    opcion = int(input("Que opcion desea: "))

    if opcion == 4:
        break
    elif opcion == 1:
        print('Su saldo es: 5000')
    elif opcion == 2:
        print('Dinero depositado')
    elif opcion == 3:
        print('Dinero retirado')
    elif opcion < 1 or opcion > 4:
        contador -= 1
        if contador == 0:
            break
        print('Opcion no valida')

print("Saliendo del cajero.")