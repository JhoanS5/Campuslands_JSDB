"""
Un archivo de texto es un documento que almacena datos en formato de texto plano, sin formatos especiales (como los de word o pdf)

extensiones:

- datos.txt
    juan,25
    maria,30
    carlos,40
"""

# Para iniciar la gestion de un archivo en python, utilizamos la función open().

"""
r -> Lectura: Solo lectura, da error si el archivo no existe.

w -> Escritura: Sobrescribe el archivo si existe, crea uno nuevo si no.

x -> Creacion: Crea un archivo nuevo, da erorr si ya existe.

a -> Añadir: Agrega contenido al final del archivo sin sobreescribirlo.

    archivo = open("miArchivo.txt", "r")
    
"""