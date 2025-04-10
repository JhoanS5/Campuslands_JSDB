Proceso dia_semana
	Definir num Como Entero;
	
	Escribir "MENU DIA SEMANA";
	Escribir "1. LUNES";
	Escribir "2. MARTES";
	Escribir "3. MIERCOLES";
	Escribir "4. JUEVES";
	Escribir "5. VIERNES";
	Escribir "6. SABADO";
	Escribir "7. DOMINGO";
	Escribir "0. Salir";
	Leer num;
	
	Si num <> 0 Entonces
		Segun num Hacer
			1:
				Escribir "Es LUNES";
			2:
				Escribir "Es MARTES";
			3:
				Escribir "Es MIERCOLES";
			4:
				Escribir "Es JUEVES";
			5:
				Escribir "Es VIERNES";
			6:
				Escribir "Es SABADO";
			7:
				Escribir "Es DOMINGO";
		De Otro Modo:
			Escribir "Numero fuera del rango.";
		FinSegun
	SiNo
		Escribir "Saliendo...";
	FinSi
	
FinProceso
