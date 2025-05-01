"""
1. Crea un programa en python que haga lo siguiente:

2. Registrar Estudiantes:
    *Cada estudiante se representará con una tupla que almacene: (nombre, edad, curso_inscrito)
    *Los estudiantes se guardarán en una lista.

3. Mostrar la lista de estudiantes registrados.

4. Buscar un estudiante por nombre y mostrar su información.

5. Mostrar los cursos únicos a los que estan inscritos los estudiantes (sin repetir) usando un conjunto.
"""

def registrar_estudiante(nombre, edad, curso_inscrito):
    tupla_estudiante = (nombre, edad, curso_inscrito)
    info_estudiantes.append(tupla_estudiante)

    print("Estudiante registrado con exito...")

def estudiantes_Registrados(lista_estudiantes):
    print("\nEstudiantes registrados: ")
    
    for estudiante in lista_estudiantes:
        print(estudiante)

def buscar_Estudiante(lista_estudiantes):
    nombre = input("Ingresa el nombre del estudiante que deseas buscar: ").title()

    resultado = [estudiante for estudiante in lista_estudiantes if estudiante[0] == nombre]
    print("Informacion del estudiante: ")
    print(resultado)

def mostrar_Cursos(lista_estudiantes):
    conjunto_real = set(conjunto)
    for estudiante in lista_estudiantes:
        print(estudiante[2])
        conjunto_real.add(estudiante[2])

    print("Cursos Registrados: ")
    print(conjunto)

#*CODE MAIN*#
info_estudiantes = []
conjunto = {}
while True:
    print("""--------REGISTRO ESTUDIANTES---------
1. Registrar Estudiante
2. Mostrar Estudiantes Registrados.
3. Buscar Estudiante.
4. Mostrar Cursos.
0. Salir.
""")
    
    opcion = int(input("Ingrese una opción: "))

    if (opcion == 0):
        print("\mSaliendo del pograma...")
    
    elif (opcion == 1):
        nombre = input("Ingrese el nombre del estudiante: ")
        edad = int(input(f"Ingrese la edad de {nombre}: "))
        curso_inscrito = input(f"Ingrese el curso del estudiante: ").title()

        registrar_estudiante(nombre, edad, curso_inscrito)

    elif (opcion == 2):
        estudiantes_Registrados(info_estudiantes)

    elif (opcion == 3):
        buscar_Estudiante(info_estudiantes)

    elif (opcion == 4):
        mostrar_Cursos(info_estudiantes)
    else:
        print("\nOpción invalida, digita una opción valida.")
