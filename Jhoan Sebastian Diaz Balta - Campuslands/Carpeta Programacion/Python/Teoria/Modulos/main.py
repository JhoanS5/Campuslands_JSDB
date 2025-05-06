from menu import *

print('Hola')

opcion1 = "Comprar revista |Digite 1|"
opcion2 = "No comprar |Digite 2|"

numeroSeleccionado = menu(opcion1, opcion2)

if numeroSeleccionado == '1':
    print('Haz elegido comprar')
else:
    print('No haz elegido nada.')