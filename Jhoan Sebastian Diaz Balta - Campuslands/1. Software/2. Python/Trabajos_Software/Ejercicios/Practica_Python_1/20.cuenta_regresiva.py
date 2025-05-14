import time

def cuenta_regresiva(inicio):
    for i in range(inicio, 0, -1):
        print(i)
        time.sleep(1)
    print("TERMINO")

#*CODE MAIN*#
print("-PROGRAMA: CUENTA REGRESIVA CON PAUSA-")

inicio = int(input("Ingrese el numero inicial para la cuenta regresiva: "))
cuenta_regresiva(inicio)