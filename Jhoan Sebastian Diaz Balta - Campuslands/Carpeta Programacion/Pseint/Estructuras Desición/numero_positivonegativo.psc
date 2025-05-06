Proceso numero_positivo
	Definir num Como Real;
	
	Escribir "Ingrese el numero: ";
	Leer num;
	
	Si num < 0 Entonces
		Escribir "El numero es negativo";
	SiNo
		Si num == 0 Entonces
			Escribir "El numero es 0";
		SiNo
			Escribir "El numero es positivo";
		FinSi
		
	FinSi
FinProceso
