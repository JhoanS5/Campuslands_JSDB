Proceso validacion_fecha
	Definir dia, ano, mes Como Entero;
	
	Escribir "Ingrese el dia de hoy: (1 - 31): ";
	Leer dia;
	
	Escribir "Ingrese el mes: (1 - 12): ";
	Leer mes;
	
	Escribir "Ingrese el año: (1900 - 2100) ";
	Leer ano;
	
	
	Si dia >= 1 Y dia <= 31 Entonces
		Escribir "Dia Validado.";
	SiNo
		Escribir "Dia Invalido.";
	FinSi
	
	Si mes >= 1 Y mes <= 12 Entonces
		Escribir "Mes Validado.";
		
	SiNo
		Escribir "Mes Invalido";
	FinSi
	
	Si ano >= 1900 Y ano <= 2100 Entonces
		Escribir "Año Validado.";
	SiNo
		Escribir "Año Invalidado.";
	FinSi
	
FinProceso
