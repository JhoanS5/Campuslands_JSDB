Proceso promedio_notas
	Definir nota, promedio, acumulador Como Real;
	Definir i Como Entero;
	
	acumulador <- 0;
	
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Ingrese su nota #",i,":";
		Leer nota;
		
		acumulador <- acumulador + nota;
		
	FinPara
	
	promedio <- acumulador / 3;
	
	Escribir "Su promedio de las 3 notas es: ", promedio;
FinProceso
