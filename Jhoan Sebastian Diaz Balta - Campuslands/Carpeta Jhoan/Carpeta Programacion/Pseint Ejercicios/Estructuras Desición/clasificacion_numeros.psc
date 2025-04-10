Proceso clasificacion_numeros
	Definir num Como Entero;
	
	Escribir "Ingresa un numero:";
	Leer num;
	
	Si num >= 0 y num <= 9 Entonces
		Escribir "El numero es una unidad.";
	Sino
		Si num >= 10 y num <= 99 Entonces
				Escribir "El numero es una decena.";
		Sino
			Si num >= 100 y num <= 999 Entonces
					Escribir "El numero es una centena.";
			Sino
				Escribir "El numero está fuera del rango esperado 0-999.";
			FinSi
		FinSi
	FinSi


	
FinProceso
