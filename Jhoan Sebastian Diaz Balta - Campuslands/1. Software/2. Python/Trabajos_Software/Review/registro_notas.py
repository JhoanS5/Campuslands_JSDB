#Registro de Notas de Estudiantes

for i in range(3):
    suma = 0
    promedio = 0
    nombre = input(f"Ingrese el nombre del estudiante #{i+1}: ")
    
    for j in range(3):
        nota = float(input(f"Ingrese la {j+1} nota: "))
        suma += nota

    promedio = suma / 3
    promedio_redondeado = round(promedio, 2)
    
    if promedio >= 60:
        print(f"{nombre} aprobo con un promedio de {promedio_redondeado}")
    else:
        print(f"{nombre} reprobo con un promedio de {promedio_redondeado}")
    
    print("-----------------------------------------------------")
