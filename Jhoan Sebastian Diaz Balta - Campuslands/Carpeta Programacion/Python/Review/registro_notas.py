#Registro de Notas de Estudiantes

for i in range(3):
    nombre = input(f"Ingrese el nombre del estudiante #{i+1}: ")

    nota1 = float(input(f"Ingrese la primer nota de {nombre}: "))
    nota2 = float(input(f"Ingrese la segunda nota de {nombre}: "))
    nota3 = float(input(f"Ingrese la tercera nota de {nombre}: "))

    promedio = (nota1 + nota2 + nota3) / 3
    promedio_redondeado = round(promedio, 2)

    if promedio >= 60:
        print(f"{nombre} aprobo con un promedio de {promedio_redondeado}")
    else:
        print(f"{nombre} reprobo con un promedio de {promedio_redondeado}")
    
    print("-----------------------------------------------------")
