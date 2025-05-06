Proceso sumer_numerosUsuario
	Definir i, num, acumulador Como Entero;
	acumulador <- 0;
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese numero para sumarlo: ";
		Leer num;
		
		acumulador <- acumulador + num;
	FinPara
	
	Escribir "La suma de los 5 numeros ingresados es: ",acumulador;
	
FinProceso
