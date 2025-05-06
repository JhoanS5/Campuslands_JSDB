Proceso factorial_numero
	Definir i, num, acumulador Como Entero;
	
	acumulador <- 1;
	i <- 0;
	
	Escribir "Ingrese un numero para calcularle su factorial: ";
	Leer num;
	
	Mientras i < num Hacer
		i <- i + 1;
		acumulador <- acumulador * i;
	FinMientras
	
	Escribir "El factorial de: ", num," Es: ",acumulador;
FinProceso
