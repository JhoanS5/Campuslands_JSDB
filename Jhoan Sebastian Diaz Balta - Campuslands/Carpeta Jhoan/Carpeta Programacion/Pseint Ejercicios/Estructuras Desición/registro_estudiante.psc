Proceso sin_titulo
	Definir nombre, genero, beca_texto Como Cadena;
	Definir edad, promedio Como Entero;
	Definir tiene_beca Como Logico;
	
	Escribir "Ingrese el nombre del estudiante:";
    Leer nombre;
    
    Escribir "Ingrese la edad del estudiante:";
    Leer edad;
    
    Mientras edad < 12 o edad > 18 Hacer
        Escribir "La edad debe estar entre 12 y 18 años. Ingrese nuevamente la edad:";
        Leer edad;
    FinMientras
    
    Escribir "Ingrese el genero del estudiante (Masculino/Femenino):";
    Leer genero;
    
    Escribir "Ingrese el promedio del estudiante (0 - 10):";
    Leer promedio;
    
	
    Mientras promedio < 0 o promedio > 10 Hacer
        Escribir "El promedio debe estar entre 0 y 10. Ingrese nuevamente el promedio:";
        Leer promedio;
    FinMientras
    
    Escribir "El estudiante tiene beca previa? (Si/No):";
    Leer beca_texto;
    
    Si Minusculas(beca_texto) = "si" Entonces
        tiene_beca <- Verdadero;
    Sino
        tiene_beca <- Falso;
    FinSi
    
    Si promedio >= 9 y tiene_beca == Falso Entonces
        Escribir "El estudiante es apto para una beca academica.";
    Sino
        Escribir "El estudiante no es apto para una beca academica.";
    FinSi
	
    Escribir "Resumen de los datos del estudiante:";
    Escribir "Nombre: ", nombre;
    Escribir "Edad: ", edad;
    Escribir "Genero: ", genero;
    Escribir "Promedio: ", promedio;
    Escribir "Tiene beca previa: ", beca_texto;
FinProceso

