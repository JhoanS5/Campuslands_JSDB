"""
Los diccionarios son estructuras de datos en python que almacenan información
en pares clave-valor

son dinámicos, indexados y pueden ser anidados.

"""

primer_diccionario = {'color': 'blanco'}
print(primer_diccionario['color']) #Imprime blanco.

usuario = {
    "Nombre": "Sara",
    "Edad": 24,
    "Documento": 1004877505
}

#Usando dict()

usuario = dict(Nombre = "Sara", Edad = 27, Documento = 1004877505)

#Acceso a valores:

# x['Nombre'] = #Sara
# x.get('Nombre') #Sara

#Modificar Valores:
# x['Nombre'] = "Laura"

#Agregar nuevos elementos
# x['Direccion'] = "Calle 123"

"""
Iterar Claves:

    for clave in usuario:
        print(clave)
        

Iterar Valores:
    for valor in usuario.values():
        print(valor)
        
Iterar claves y valores:
    for clave, valor in usuario.items():
        print(clave, valor)
"""