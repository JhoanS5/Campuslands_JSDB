def calculadora_basica():
    opcion = 0

    while opcion != 5:
        print("-MENU CALCULADORA BASICA-")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicacion")
        print("4. Division")
        print("5. Salir")
        opcion = int(input("Ingrese la operacion que desea: "))
        if opcion == 5:
            print("Saliendo de la calculadora...")
        elif opcion >= 1 and opcion <= 4:
            num1 = float(input("Dame el primer numero: "))
            num2 = float(input("Dame el segundo numero: "))
            if opcion == 1:
                print(f"Resultado: {num1 + num2}")
            elif opcion == 2:
                print(f"Resultado: {num1 - num2}")
            elif opcion == 3:
                print(f"Resultado: {num1 * num2}")
            elif opcion == 4:
                if num2 != 0:
                    print(f"Resultado: {num1 / num2}")
                else:
                    print("No dividas por cero")
        else:
            print("Esa opcion no sirve.")

#*CODE MAIN*#
calculadora_basica()