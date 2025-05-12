"""
¿Que es una tupla?
Es una estructura de datos similar a una lista, pero inmutable(no se puede modificar despues de su creacion)
Se usa cuando queremos asegurarnos de que los datos no cambien.
Es heterogenea con los datos.
"""

tupla = (1, 2, 3, "Hola")

print(tupla)

#Operacion con Tuplas.

#Acceso a elementos:
print(tupla[0]) # 1

#Conversión de listas a tuplas:
lista = [1, 2, 3]
tupla = tuple(lista)
print(tupla)

#Desempaquetado:
x, y, z, mensaje = tupla
print(mensaje) #Hola