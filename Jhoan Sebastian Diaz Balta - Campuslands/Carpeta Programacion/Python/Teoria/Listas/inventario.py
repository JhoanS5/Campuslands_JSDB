"""
Ejercicio

*Crea un programa que gestione el inventario de una tienda con las siguientes
opciones:

1. Agregar un producto con nombre y cantidad.
2. Actualizar la cantidad de un producto.
3. Eliminar un producto.
4. Mostrar el inventario.
5. Salir.

"""

#*CODE MAIN*#
nombre_tienda = 'TIENDA WICHO'
productos = []
cantidad =[]

while True:
    print(f"""------------{nombre_tienda}------------
1. Agregar un producto con nombre y cantidad.
2. Actualizar la cantidad de un producto.
3. Eliminar un producto.
4. Mostrar el inventario.
0. Salir.\n
""")
    opcion = int(input("Ingrese una opcion: "))
    if opcion == 0:
        print(f"Gracias por utilizar el sistema de {nombre_tienda}")
        break
    elif opcion == 1:
        producto = input("Nombre del producto: ").lower()
        cantidad_producto = int(input("Cantidad del producto: "))

        productos.append(producto)
        cantidad.append(cantidad_producto)
        print("Producto agregado exitosamente.")

    elif opcion == 2:
        print("Lista de productos:")
        for producto in productos:
            print(producto, end=" ")
        productos_buscado = input("\nQue producto quiere actualizar: ")
        posicion = productos.index(productos_buscado)

        actualizar_cantidad = int(input("Ingrese la nueva cantidad: "))
        cantidad[posicion] = actualizar_cantidad
        print("Cantidad actualizada...")

    elif opcion == 3:
        print("Lista de productos:")
        for producto in productos:
            print(producto, end=" ")

        producto_buscado = input("\n Que producto quiere eliminar: ").lower()
        posicion = productos.index(producto_buscado)

        cantidad.pop(posicion)
        producto_eliminado = productos.pop(posicion)
        print(f"El producto {producto_eliminado} fue eliminado.")
    elif opcion == 4:
        print("Lista de productos:")
        contador = 0
        for producto in productos:
            print(f"{producto}: {cantidad[contador]}")
            contador += 1

    else:
        print("Opcion no valida, intente de nuevo...")