Proceso numero_telefono
	Definir i Como Entero;
	Definir num Como Caracter;
	
	Escribir "Escriba su numero de telefono: ";
	Leer num;
	
	Si Longitud(num) = 0 Entonces
		Escribir "Numero invalido. ";
	SiNo
		Si Longitud(num) < 10 Entonces
			Escribir "El numero de telefono tiene menos de 10 digitos. ";
		SiNo
			Si Longitud(num) > 10 Entonces
				Escribir "El numero de telefono tiene mas de 10 digitos. ";
			SiNo
				Escribir "El numero de telefono tiene exactamente 10 digitos. ";
			FinSi
		FinSi
	FinSi

FinProceso
