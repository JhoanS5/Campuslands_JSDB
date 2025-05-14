from datos import cargar_usuarios, cargar_productos,encriptar_contraseña,guardar_productos, nombre_tienda
import getpass

usuarios_admin = cargar_usuarios()
productos = cargar_productos()

def mostrar_productos():
    print('-------------PRODUCTOS DISPONIBLES--------------')
    for clave,valor in productos.items():
        print(f'{clave} - Precio: {valor["Precio"]} - Cantidad: {valor["Cantidad"]}')

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
        guardar_productos(productos)
        print(f'El producto {nombre} fue registrado de manera exitosa.')

def actualizar_producto():
    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre not in productos:
        print(f'El producto {nombre} no existe.')
    else:
        precio = int(input('Ingrese el precio del producto: '))
        cantidad = int(input('Ingrese la cantidad del prodcuto: '))

        productos[nombre]={"Precio": precio, "Cantidad": cantidad}
        guardar_productos(productos)
        print(f'El producto {nombre} fue actualizado de manera exitosa.')

def eliminar_producto():
    nombre = input('Ingrese el nombre del producto: ').title()

    if nombre in productos:
        del productos[nombre]
        guardar_productos(productos)
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
        clave = getpass.getpass('Digite la clave: ')
        clave_encriptada = encriptar_contraseña(clave)

        if usuario in usuarios_admin and usuarios_admin[usuario] == clave_encriptada:
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
