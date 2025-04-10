Proceso adivinar_numero
	Definir num_aleatorio, num, maximo, intentos Como Entero;
	
	intentos <- 3;
	
	maximo <- 5;
	num_aleatorio <- Azar(maximo + 1);
	
	Repetir
		Escribir "Ingrese el numero secreto: ";
		Leer num;
		
		Escribir "Te quedan ", intentos - 1, " Intentos Validos";
		intentos <- intentos - 1;
		
	Hasta Que (intentos == 0) o (num == num_aleatorio);
	
	Si intentos == 0 Entonces
		Escribir "No tienes mas intentos disponibles.";
		
	SiNo
		
		Escribir "Adivinaste el numero, era: ",num;
	FinSi
	
	
	
FinProceso
