Proceso validacion_usuario
	Definir nombre Como Caracter;
	Definir password, opcion Como Entero;
	Definir confirmacion Como Logico;
	
	Escribir "Ingrese su nombre de usuario: ";
	Leer nombre;
	
	Escribir "Ingrese su contraseña: ";
	Leer password;
	
	Escribir "¿Eres ADMIN?";
	Escribir "1. SI";
	Escribir "2. NO";
	Leer opcion;
	
	Si opcion <> 0 Entonces
		Segun opcion Hacer
			opcion 1:
				Escribir "ERES ADMIN";
				Escribir "Tu contraseña es: ", password;
				
			opcion 2:
				Escribir "ERES USUARIO";
				Escribir "Tu contraseña es: ", password;
				
			De Otro Modo:
				Escribir "Elija Bien!!!";
		FinSegun
	SiNo
		Escribir "Opcion invalida... ";
	FinSi
	
	
FinProceso
