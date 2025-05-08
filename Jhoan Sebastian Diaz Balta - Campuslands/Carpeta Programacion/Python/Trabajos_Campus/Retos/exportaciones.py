import json
import csv

estudiantes = {}

def registrar_estudiante():
    id_est = input('ID del estudiante (Sin puntos): ')
    
    if id_est in estudiantes:
        print('El estudiante ya esta registrado')
        return
    
    nombre = input('Ingrese nombre del estudiante: ')
    estudiantes[id_est]={"nombre":nombre,"materias":{}}
    print("Estudiante registrado exitosamente.")
    
def asignar_materias():
    id_est = input('Ingrese el ID del estudiante: ')
    
    if id_est not in estudiantes:
        print('Estudiante no registrado.')
        return
    
    materia = input('Nombre de la materia: ')
    nota = float(input('Nota obtenida en la materia'))
    
    estudiantes[id_est]["materias"][materia]=nota
    
    print('Materia y nota registrada!!')
    
def ver_reporte():
    for id_est, datos in estudiantes.items():
        print(f'ID: {id_est} - Nombre: {datos["nombre"]}')
        for materia, nota in datos["materias"].items():
            print(f'    Materia: {materia} - Calificacion: {nota}')
        print('*'*40)
        
def exportar_txt():
    with open('reporte_texto.txt',"a")as archivo:
        for id_est, datos in estudiantes.items():
            archivo.write(f'ID: {id_est} - Nombre: {datos["nombre"]}\n')
            for materia, nota in datos["materias"].items():
                archivo.write(f'    Materia: {materia} - Calificacion: {nota}\n')
            archivo.write('*'*40+'\n')
        
def exportar_csv():
    with open('reporte_csv.csv',"a", newline='') as archivo2:
        escritor = csv.writer(archivo2)
        
        escritor.writerow(['ID','Nombre','Materia','Nota'])
        for id_est, datos in estudiantes.items():
            for materia, nota in datos["materias"].items():
                escritor.writerow([id_est,datos["nombre"],materia,nota])
    print('Exportado a csv de manera exitosa')
    
def exportar_json():
    with open('reporte_json.json', "a") as archivo3:
        json.dump(estudiantes,archivo3,indent=4)
    
    print("Exportado a json exitosamente")
    
while True:
    print("\n--- Sistema de Registro ---")
    print("1. Registrar estudiante")
    print("2. Asignar materia y nota")
    print("3. Ver reporte")
    print("4. Exportar a TXT")
    print("5. Exportar a CSV")
    print("6. Exportar a JSON")
    print("7. Salir")
    opcion = input("Selecciona una opción: ")

    if opcion == '1':
        registrar_estudiante()
    elif opcion == '2':
        asignar_materias()
    elif opcion == '3':
        ver_reporte()
    elif opcion == '4':
        exportar_txt()
    elif opcion == '5':
        exportar_csv()
    elif opcion == '6':
        exportar_json()
    elif opcion == '7':
        print("Hasta luego.")
        break
    else:
        print("Opción inválida.")
