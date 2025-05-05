productos ={
    'Poker':{"Precio":6000,"Cantidad":30},
    'Aguardiente':{"Precio":21000,"Cantidad":5},
    'Vodka':{"Precio":45000,"Cantidad":2}
    }

mensaje_menu = "TIPO DE USUARIO"
def menu():
    print(f"||||||{mensaje_menu}||||||\n1. Administrador\n2. Comprador\n3. Salir")

mensaje_admin = "MENU ADMINISTRADOR"
def menu_administrador():
    print(f"\n||||||{mensaje_admin}||||||\n1. Crear Producto\n2. Ver Productos\n3.Actualizar Producto\n4. Eliminar Producto\n5. Salir")

PASSWORD = "1234"

mensaje_usuario = "MENU USUARIO"
def menu_usuario():
    print(f"\n||||||{mensaje_usuario}||||||\n1. Comprar\n2. Salir")

def crear_producto():
    print("|||PRODUCTO NUEVO|||")
    nombre_producto = input("Ingrese el nombre del producto: ").title()

    if nombre_producto in productos:
        print("El producto ya existe.")
        return

    precio = int(input(f"Ingrese el precio de {nombre_producto}: "))
    cantidad = int(input(f"Ingrese la cantidad de {nombre_producto}: "))

    productos[nombre_producto] = {"Precio": precio, "Cantidad": cantidad}
    print(f"Producto: {nombre_producto}. Agregado...")

def read_productos():
    print("\n|||VER PRODUCTOS|||\n")
    
    for nombre, dato in productos.items():
        print(f"{nombre} -> Precio: {dato['Precio']}, Cantidad: {dato['Cantidad']}")

def actualizar_producto():
    print("\n|||ACTUALIZAR PRODUCTO|||\n")
    nombre_producto = input("Ingrese el nombre del producto que desea actualizar: ").title()

    if nombre_producto not in productos:
        print("El producto que desea actualizar no existe.")
    
    else:
        nuevo_precio = int(input("Ingrese el nuevo precio: "))
        nueva_cantidad = int(input("Ingrese la nueva cantidad: "))

        productos[nombre_producto]['Precio'] = nuevo_precio
        productos[nombre_producto]['Cantidad'] = nueva_cantidad

        print(f"{nombre_producto}: Actualizado correctamente...")

def eliminar_producto():
    print("\n|||ELIMINAR PRODUCTO|||")
    nombre_producto = input("Ingrese el nombre del producto que desea eliminar: ").title()
    if nombre_producto in productos:
        productos.pop(nombre_producto)
        print(f"Producto: {nombre_producto} Eliminado...")

    else:
        print(f"Producto: {nombre_producto} No existe...")

#*CODE MAIN*#
while True:
    menu()
    opcion = int(input("Seleccione una opcion: "))

    if opcion == 1:    
        password_usuario = input("Ingrese la contraseña del administrador: ")

        if password_usuario == PASSWORD:
            print("\nAcceso permitido.\n")
            while True:
                menu_administrador()
                opcion_administrador = int(input("Ingrese una opcion: "))

                if opcion_administrador == 1:
                    crear_producto()

                elif opcion_administrador == 2:
                    read_productos()

                elif opcion_administrador == 3:
                    actualizar_producto()
                
                elif opcion_administrador == 4:
                    eliminar_producto()
                
                elif opcion_administrador == 5:
                    print("\nSaliendo del programa...")
                    break
                else:
                    print("\nOpcion invalida...\n")
        else:
            print("\nContraseña incorrecta.\n")

    elif opcion == 2:
        while True:
            menu_usuario()
            opcion_usuario = int(input("Ingrese una opcion: "))

            if opcion_usuario == 1:
                edad = int(input("Que edad tienes: "))

                if edad >= 18:
                    print('---------PRODUCTOS DISPONIBLES----------')
                    for clave,valor in productos.items():
                        print(clave,":",valor)
                    nombre = input('Ingrese el producto: ').title()

                    if nombre not in productos:
                        print("No hay, busque a Justin para que le consiga.")
                    else:
                        cantidad = int(input('Ingrese la cantidad: '))

                    if cantidad <= 0:
                        print('Ingrese un numero mayor a cero')
                    elif productos[nombre]["Cantidad"] < cantidad:
                        print("No hay producto suficiente. Justin resuelve.")
                    else:
                        total = cantidad * productos[nombre]["Precio"]
                        print(f'El valor a pagar por el producto {nombre} es de {total} pesos por la cantidad de {cantidad} unidades.')
                        productos[nombre]["Cantidad"] -= cantidad

            elif opcion_usuario == 2:
                print("\nSaliendo del MENU USUARIO.\n")
                break

            else:
                print("\nIngrese una opcion valida\n")

    elif opcion == 3:
        print("\nSaliendo del programa...\n")

    else:
        print("\nIngrese una opcion valida.\n")
    

