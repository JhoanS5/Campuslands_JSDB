from administrador import modo_administrador
from comprador import modo_comprador
from datos import nombre_tienda


def menu_principal():
    print("--------BIENVENIDO A LICORES YUSTIN----------")
    print('1. Administrador\n2. Comprador\n3. Salir')

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

main()
