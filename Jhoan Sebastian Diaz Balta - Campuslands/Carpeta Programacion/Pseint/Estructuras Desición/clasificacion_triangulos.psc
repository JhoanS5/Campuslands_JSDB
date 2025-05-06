Proceso clasificacion_triangulos
	Definir long1, long2, long3 Como Real;
	Definir es_equilatero, es_isosceles, es_escaleno Como Logico;
	
	es_equilatero <- Falso;
	es_isosceles <- Falso;
	es_escaleno <- Falso;
	
	Escribir "Ingrese la longitud 1: ";
	Leer long1;
	Escribir "Ingrese la longitud 2: ";
	Leer long2;
	Escribir "Ingrese la longitud 3: ";
	Leer long3;
	
	Si (long1 == long2) Y long2 == Long3 Entonces
		es_equilatero <- Verdadero;
	SiNo
		Si (long1 <> long2) Y long2 <> Long3 Entonces
			es_escaleno <- Verdadero;
		SiNo
			es_isosceles <- Verdadero;
		FinSi
	FinSi
	
	Si es_equilatero Entonces
		Escribir "El triangulo es equilatero.";
	SiNo
		Si es_escaleno Entonces
			Escribir "El triangulo es escaleno";
			
		SiNo
			Escribir "El triangulo es isoceles.";
		FinSi
	FinSi
	
FinProceso
