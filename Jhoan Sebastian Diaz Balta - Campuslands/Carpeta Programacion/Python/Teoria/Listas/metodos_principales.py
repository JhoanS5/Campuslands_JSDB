"""
x.append(e) - Agrega a la lista x el elemento e al final.
x.insert(i, e) - Inserta e en la posición i de la lista x.
x.count(e) - Conteo de instancias de e en la lista x.
x.remove(e) - Elimina el primer elemento e de la lista x.
x.pop(i) - Entrega el elemento en la posición i de la lista y lo elimina (si no se pone i, elimina el último).
x.index(e) - Entrega la posición del primer elemento e en x.
x.sort() - Ordena x en forma creciente. Para que sea descendente se usa x.sort(reverse=True).
x.reverse() - Invierte el orden de la lista x.
x.clear() - Vacía la lista x.
x.copy() - Entrega una copia de la lista x.
x.extend(iterable) - Agrega a la lista x todos los elementos de otro iterable (lista, tupla, etc.).

len(x) - Devuelve la cantidad de elementos en la lista x.
max(x) - Devuelve el elemento de mayor valor en la lista x.
min(x) - Devuelve el elemento de menor valor en la lista x.
sum(x) - Suma todos los elementos numéricos de la lista x.
sorted(x) - Devuelve una nueva lista ordenada sin modificar la original.
list(iterable) - Convierte un iterable (como una cadena o tupla) en una lista.
all(x) - Devuelve True si todos los elementos de la lista x son verdaderos o no vacíos.
any(x) - Devuelve True si al menos un elemento de la lista x es verdadero.
enumerate(x) - Devuelve un iterador que produce tuplas (índice, elemento) de la lista x.
zip(lista1, lista2) - Une los elementos de lista1 y lista2 en pares (tuplas).

"""

numeros = [1,2]

print(numeros.pop(1))

print(numeros)
