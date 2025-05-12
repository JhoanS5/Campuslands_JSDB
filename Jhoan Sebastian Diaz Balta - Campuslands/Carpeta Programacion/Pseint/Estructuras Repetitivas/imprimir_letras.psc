Proceso imprimir_letras
	Definir i Como Entero;
	Definir palabra, letra Como Caracter;
	
	Escribir "Ingrese una palabra: ";
	Leer palabra;
	
	Para i<-0 Hasta Longitud(palabra) Con Paso 1 Hacer
		letra <- Subcadena(palabra,i,i);
		
		Escribir letra;
	FinPara
FinProceso
