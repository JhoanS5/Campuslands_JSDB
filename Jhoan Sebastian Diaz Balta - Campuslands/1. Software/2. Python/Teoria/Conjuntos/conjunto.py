"""
¿Que es un conjunto?
Un conjunto es una colección sin elementos duplicados y sin orden específico.
"""

conjunto = {1, 2, 3, 3, 4}
print(conjunto)


#Operaciones con conjuntos

#Unión de conjuntos:

A = {1, 2, 3}
B = {3, 4, 5}
print(A | B) # {1, 2, 3, 4, 5}

#Interseccion de conjuntos:
print(A & B) # {3}

#Diferencia:
print(A - B) # {1,2}