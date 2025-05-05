"""
d.clear() Elimina todos los elemetnos del diccionario.

d2 = d.copy() Devuelve una copia superficial del diccionario.

get(key[], default) valor = d.get("clave",Si no existe imprime eso ->"valor_por_defecto") 
    Obtiene el valor asociado a una clave. Si no existe, devuelve default o None

items() Devuelve una vista de pares (clave, valor) del diccionario

keys() Devuelve una vista de claves del diccionario

values() Devuelve una vista de los valores del diccionario.

pop(key[], default) Elimina y devuelve el valor asociado a key. Si no existe, devuelve
    default (o lanza Key error)
    

d.popitem() Elimina y deuvelve un par (clave, valor) arbitrario. Si el diccionario esta vacio, lanza Key Error

d.update({"Clave" : "Valor"}) Actualiza el diccionario con pares clave-valor de other (puede ser otro diccionario o iterable)

d.setdefault("Clave", "valor_por defecto") Devuelve el valor de key si existe; si no, inserta key con default o none y lo devuelve

diccionario2 = dict.fromkeys(["a","b"], 0)
"""