Proceso salario_Semanal
	Definir salario_hora, horas_trabajadas, resultado Como Real;
	
	Escribir "Escriba sus horas trabajadas: ";
	Leer horas_trabajadas;
	
	Escribir "Escriba su salario por hora: ";
	Leer salario_hora;
	
	resultado <- horas_trabajadas * salario_hora;
	
	Escribir "Salario semanal: ", resultado, "$";
	
FinProceso
