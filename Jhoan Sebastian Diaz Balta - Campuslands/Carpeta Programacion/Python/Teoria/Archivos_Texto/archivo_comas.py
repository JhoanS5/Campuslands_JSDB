import csv as excel

with open("datos.csv", "w", newline = "") as Archivo:
    escritor = excel.writer(Archivo) #Obligatorio abrir escritor.
    escritor.writerow(["Nombre", "Edad", "Ciudad"]) #Escribe columna con row
    escritor.writerow(["Ana", 25, "Manizales"])
    escritor.writerow(["Luis", 35, "Barcelona"])
    escritor.writerow(["Sofia", 22, "Valencia"])

    print("Información modificada.\n")

with open("datos.csv", "r") as Archivo:
    lector = excel.reader(Archivo)

    for linea in lector:
        print(linea)
    
    for linea in lector:
        print(', '.join(linea))


with open("datos.csv", "r") as Archivo:
    lector = excel.DictReader(Archivo)
    for fila in lector:
        print(f"{fila['Nombre']}, tiene {fila['Edad']} años y vive en la ciudad de {fila['Ciudad']}")

