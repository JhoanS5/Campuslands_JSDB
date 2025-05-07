"""
JSON (JavaScript Object Notation) es un formato de texto ligero utilizado para estructurar datos y trasmitir información entre sistemas,
como en aplicaciones cliente-servidor o moviles. Se integra en varios lenguajes, incluyendo python.

{ } -> Delimitan objetos.
[] -> Representan listas o arrays.
: -> Separan claves valores.
, -> Separan elementos dentro de un objeto o array.

"""

import json

datos = {
    "nombre": "Juan",
    "edad": 28,
    "ciudad": "México",
    "hobbies": ["fútbol", "lectura", "veisbol"]
}

with open("datos.json", "w") as Archivo:
    json.dump(datos, Archivo, indent= 4)

with open("datos.json", "r") as archivo:
    datos_cargados = json.load(archivo)

print("Datos cargados: ", datos_cargados)
