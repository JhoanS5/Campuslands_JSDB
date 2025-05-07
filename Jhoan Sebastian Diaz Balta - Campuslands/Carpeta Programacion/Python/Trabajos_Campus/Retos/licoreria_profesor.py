import getpass

nombre_tienda = 'LICORES YUSTIN'

# Credenciales del administrador
usuarios_admin = {
    "admin": "1234",
    "justin": "yustin123",
    "sofia": "sofi2024"
}


productos = {
    'Poker': {"Precio": 6000, "Cantidad": 30},
    'Aguardiente': {"Precio": 21000, "Cantidad": 5},
    'Vodka': {"Precio": 45000, "Cantidad": 2}
}

def menu_principal():
    print("--------BIENVENIDO A LICORES YUSTIN----------")
    print('1. Administrador\n2. Comprador\n3. Salir')

def menu_comprador():
    print("--------MENU DE COMPRAS - LICORES YUSTIN----------")
    print('1. Comprar\n2. Salir')

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

def menu_administrador():
    print('---------MENU ADMINISTRADOR-----------')
    print('1. Agregar productos\n2. Actualizar productos\n3. Eliminar productos\n4. Ver productos\n5. Salir')

def agregar_productos():
    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre in productos:
        print(f'El producto {nombre} ya se encuentra registrado.')
    else:
        precio = int(input('Ingrese el precio del producto: '))
        cantidad = int(input('Ingrese la cantidad del prodcuto: '))

        productos[nombre]={"Precio": precio, "Cantidad": cantidad}
        print(f'El producto {nombre} fue registrado de manera exitosa.')

def actualizar_producto():
    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre not in productos:
        print(f'El producto {nombre} no existe.')
    else:
        precio = int(input('Ingrese el precio del producto: '))
        cantidad = int(input('Ingrese la cantidad del prodcuto: '))

        productos[nombre]={"Precio": precio, "Cantidad": cantidad}
        print(f'El producto {nombre} fue actualizado de manera exitosa.')

def eliminar_producto():
    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre in productos:
        del productos[nombre]
        print(f'El producto {nombre} fue eliminado exitosamente.')
    else:
        print(f'El producto {nombre} no existe.')

def ver_productos():
    if not productos:
        print('No hay productos registrados')
    else:
        mostrar_productos()

def autenticar_admin():
    intentos = 3

    while intentos > 0:
        usuario = input('Ingrese el nombre de usuario: ')
        clave = input('Digite la clave: ')

        if usuario in usuarios_admin and usuarios_admin[usuario] == clave:
            print(f'Login correcto. Bienvenido {usuario}')
            return True
        else:
            intentos -= 1
            print(f'Credenciales incorrectas. Intentos restantes: {intentos}')
    print("Acceso denegado. Intenten mas tarde.")
    return False

def modo_administrador():
    if not autenticar_admin():
        return

    while True:
        menu_administrador()

        opcion = int(input('Ingrese una opcion: '))

        if opcion==1:
            agregar_productos()
        elif opcion == 2:
            actualizar_producto()
        elif opcion == 3:
            eliminar_producto()
        elif opcion == 4:
            ver_productos()
        elif opcion == 5:
            print(f'Vaya siga trabajando. Cordialmente {nombre_tienda}')
            break
        else:
            print('Opcion no valida. Intente de nuevo.')

def main():
    while True:
        menu_principal()
        opcion = int(input('Ingrese una opcion: '))

        if opcion == 1:
            modo_administrador()
        elif opcion == 2:
            modo_comprador()
        elif opcion == 3:
            print(f'Gracias por visitar {nombre_tienda}')
            break
        else:
            print('Opcion no valida.')