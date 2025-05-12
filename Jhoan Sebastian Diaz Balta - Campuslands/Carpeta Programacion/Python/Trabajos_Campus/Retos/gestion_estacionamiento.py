#Gestión de Estacionamiento 

#Objetivo: Simular la administracion de un estacionamiento con capacidad limitada.

estacionamientos_max = 10
opcion = 0
contador = 3
menu = """-----GESTIÓN ESTACINAMIENTO-----
1. Ingresar Auto.
2. Retirar Auto.
3. Espacios Disponibles.
4. Salir."""

while True:
    print(menu)
    opcion = int(input("Ingrese una opcion: "))

    if opcion < 0 or opcion > 4:
        print(f'Intentos: {contador-1}')
        contador -= 1
        if contador == 0:
            print("Intentos Agotados")
            break
    
    elif opcion == 1:
        num_autos = int(input('Cuantos autos desea ingresar: '))
        if num_autos > estacionamientos_max:
            print("Excediste el limite")
        else:
            estacionamientos_max = estacionamientos_max - num_autos
            print("Auto ingresado.")
    
    elif opcion == 2:
        num_autos = int(input('Cuantos autos desea retirar: '))
        if num_autos > 0 and num_autos <= estacionamientos_max:
            estacionamientos_max = estacionamientos_max + num_autos
            print("Auto retirado")
        else:
            print("Exediste el numero de autos posibles a retirar.")
    
    elif opcion == 3:
        print(f"Espacio disponible: {estacionamientos_max}")
    
    elif opcion == 4:
        print('Saliendo del programa.')
        break

        