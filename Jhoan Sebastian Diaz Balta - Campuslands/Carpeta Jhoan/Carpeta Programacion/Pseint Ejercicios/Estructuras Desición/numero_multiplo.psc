Proceso numero_multiplo3
	Definir num Como Entero;
	
	Escribir "Ingrese el numero para comprobar si es multiplo de 3 y 5: ";
	Leer num;
	
	Si (num % 3 = 0) y (num % 5 = 0) Entonces
		Escribir "El numero es multiplo de 3 y de 5";
		
	SiNo
		Escribir "El numero no es multiplo de 3 o de 5";
	FinSi
	
FinProceso
