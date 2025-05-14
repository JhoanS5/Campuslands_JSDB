Proceso validacion_edad_nacionalidad
	Definir edad Como Entero;
	Definir nacionalidad Como Caracter;
	
	Escribir "Ingrese su edad: ";
	Leer edad;
	
	Escribir "Ingrese su nacionalidad (Colombiana / Ecuatoriana / Venezolana): ";
	Leer nacionalidad;
	
	Si (edad > 18) Y (Minusculas(nacionalidad) == "colombiana" o Minusculas(nacionalidad) == "ecuatoriana" o Minusculas(nacionalidad) == "venezolana") Entonces
		Escribir "Cumple las condiciones, puedes registrar el voto...";
		
	SiNo
		Escribir "No cumples las condiciones no puedes realizar el voto. ";
	FinSi
	
	
	
FinProceso
