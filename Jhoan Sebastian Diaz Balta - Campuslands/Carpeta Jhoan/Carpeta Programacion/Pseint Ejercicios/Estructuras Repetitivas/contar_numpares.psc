Proceso contador_pares
	Definir i, contador Como Entero;
	contador <- 0;
	
	Para i <- 0 Hasta 20 Con Paso 2 Hacer
		SI i % 2 == 0 Entonces
			contador <- contador + 1;
			Escribir "Numero par: ", i;
		FinSi
	FinPara
	
	Escribir "Los numeros pares del 1 al 20 son: ", contador;
FinProceso
