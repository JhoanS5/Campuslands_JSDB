Proceso interes_simple
	Definir capital_inicial, tasa_interes, tiempo, resultado Como Real;
	
	tasa_interes <- 0.05;
	
	Escribir "Ingrese el capital inicial: ";
	Leer capital_inicial;
	
	
	Escribir "Ingrese el tiempo en años: ";
	Leer tiempo;
	
	resultado <- capital_inicial * tasa_interes * tiempo;
	
	Escribir "El interes simple es: ", resultado;
FinProceso
