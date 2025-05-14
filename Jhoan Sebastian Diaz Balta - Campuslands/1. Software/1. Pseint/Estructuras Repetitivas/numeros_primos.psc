Proceso numeros_primos
	Definir num,i,cantidad_numeros Como Entero;
	
	Escribir  "Ingrese la cantidad de numeros que desea comprobar si es primo o no: ";
	Leer cantidad_numeros;
	
	Para i<-1 Hasta cantidad_numeros Con Paso 1 Hacer
		Escribir "Ingrese el ","[",i,"]","Numero: ";
		Leer num;
		Escribir "---------------------------------";
		Si (num % 2 <> 0) Entonces
			Escribir "El Numero: ",num," ES PRIMO";
			Escribir "---------------------------------";
			
		SiNo
			Escribir "El Numero: ",num," NO ES PRIMO";
			Escribir "---------------------------------";
		FinSi
	FinPara
	
	
	
FinProceso
