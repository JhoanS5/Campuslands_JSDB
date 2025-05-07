from datos import nombre_tienda, productos


def menu_comprador():
    print("--------MENU DE COMPRAS - LICORES YUSTIN----------")
    print('1. Comprar\n2. Salir')

def modo_comprador():
    while True:
        menu_comprador()

        opcion = int(input('Ingrese una opcion: '))

        if opcion == 1:
            if validar_edad():
                procesar_compra()
            else:
                print('No tienes edad para comprar licor.')
                break
        elif opcion == 2:
            print(F'Gracias por visitar la tienda de {nombre_tienda}')
            break
        else:
            print(f'La opcion {opcion} no es valida. Intente de nuevo')

def validar_edad():
    edad = int(input('Que edad tienes: '))
    return edad >= 18

def mostrar_productos():
    print('-------------PRODUCTOS DISPONIBLES--------------')
    for clave,valor in productos.items():
        print(f'{clave} - Precio: {valor["Precio"]} - Cantidad: {valor["Cantidad"]}')

def procesar_compra():
    mostrar_productos()

    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre not in productos:
        print('Producto no disponible.')
        return
    
    cantidad = int(input('Cantidad que desea comprar: '))

    if cantidad <= 0:
        print('Debe ingresar un numero mayor a cero')
    elif productos[nombre]["Cantidad"] < cantidad:
        print(f'No hay suficiente producto para vender {cantidad} unidades')
    else:
        total = cantidad * productos[nombre]["Precio"]

        print(f'El valor a pagar por el producto {nombre} es de {total} pesos, por la cantidad de {cantidad} unidades')

        productos[nombre]["Cantidad"] -= cantidad
        print(f'Venta exitosa, ahora la nueva cantidad del producto {nombre} es de {productos[nombre]["Cantidad"]} unidades')