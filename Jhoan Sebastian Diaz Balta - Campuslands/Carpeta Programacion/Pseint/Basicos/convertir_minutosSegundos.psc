Proceso convertir_minutosSegundos
	Definir min, resultado, seg Como Real;
	
	seg <- 60;
	Escribir "Escriba la cantidad de minutos para pasarla a segundos: ";
	Leer min;
	
	resultado <- min * seg;
	
	Escribir "La cantidad de minutos convertidos a segundos es: ", resultado, " seg";
	
FinProceso
