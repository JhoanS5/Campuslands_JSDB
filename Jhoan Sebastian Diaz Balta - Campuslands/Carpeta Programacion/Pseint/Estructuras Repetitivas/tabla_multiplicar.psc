Proceso tabla_multiplicar
	Definir i, num, multiplicar Como Entero;
	
	Escribir "Ingrese un numero para multiplicarlo del 1 al 10: ";
	Leer num;
	
	Escribir "/TABLA MULTIPLICAR/";
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		multiplicar <- num * i;
		Escribir num," * ",i ," = ", multiplicar;
	FinPara
	
FinProceso
