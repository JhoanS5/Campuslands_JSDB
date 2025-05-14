"""
x.add(valor) -> Agrega un elemento al conjunto.
    conjunto = {1,2,3}
    conjunto.add(4)
    print(conjunto) # {1,2,3,4}

x.remove(valor) -> Elimina un elemento (da error si no existe)
    conjunto = {1,2,3}
    conjunto = remove(2)
    print(conjunto) #{1,3}

x.discard(valor) -> Elimina un elemento sin error si no existe.
    conjunto = {1,2,3}
    conjunto.discard(5) #No da error

x.pop() -> Elimina y devuelve un elemento aleatorio
    conjunto = {1,2,3}
    print(conjunto.pop()) #Puede devolver 1, 2, 3

x.clear() -> Vacia el conjunto
    conjunto = {1,2,3}
    conjunto.clear()
    prin(conjunto) # set() cuando muestre set es un conjunto

x.union(set2) -> Une dos conjuntos.
    A = {1,2,3}
    B = {3,4,5}
    print(A.union(B)) # {1,2,3,4,5}

x.intersection(set2) -> Devuelve la interseccion
    print(A.intersection(B)) #{3}

x.difference(set2) -> Elementos que estan en A, pero no en B.
    print(A.difference(B)) #{1,2}
"""