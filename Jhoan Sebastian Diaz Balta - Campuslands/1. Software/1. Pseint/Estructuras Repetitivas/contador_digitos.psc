Proceso contador_digitos
	Definir num, digito Como Caracter;
	Definir i Como Entero;
	
	i <- 0;
	
	Escribir "Ingrese un numero para contar sus digitos: ";
	Leer num;
	
	Escribir Longitud(num);
	
	Mientras i < Longitud(num) Hacer
		digito <- Subcadena(num, i,i);
		i <- i + 1;
		
		Escribir "Digito[",i,"]:", digito;
	FinMientras
	Escribir "Tiene ", Longitud(num), " Digitos";
FinProceso
