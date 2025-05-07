# archivo = open("miArchivo.txt", "r") #Metodo de apertura
# contenido = archivo.read() #Lee el contenido del archivo
# print(contenido)
# archivo.close() #Siempre cerrar el archivo.

"""
Escribir Archivo. No recomendado

archivo_lec = open("miArchivo.txt", "w")
archivo_lec.write("Titulo\n")
archivo_lec.write("Sub-titulo.")
archivo_lec.close()
"""

"""
With Open()
Es una forma más segura y eficiente de manejar archivos en Python. Se usa para abrir un archivo y cerrarlo automaticamente cuando ya no se necesita.

r+ -> abre archivo para lectura como escritura.
w -> crea archivo si no existe, sobreescribe.
r -> lee el archivo
    with open("miArchivo.txt","r") as Archivo:
        for linea in Archivo:
            print(linea.strip()) #Elimina espacios y saltos de lineas extra.

a -> Escribe dentro del archivo
"""
with open("miArchivo.txt", "r+") as Archivo:
    contenido = Archivo.read()
    Archivo.write("\nNueva linea en el archivo de texto.")

"""
CSV
    Un CSV(Comma-Separated Values) es un archivo de texto donde los datos están separados por comas(,)
    Se usa para almacenar datos estructurados en formato de tabla (como en Excel).

    reader()
    writer()
    Dictwriter()
    Dictreader
"""

