Algoritmo calcular_imc
	Definir peso, altura, resultado Como Real;
	
	Escribir "Ingresa su peso en kg: ";
	Leer peso;
	
	Escribir "Ingresa tu altura en metros: ";
	Leer altura;
	
	resultado <- (peso / altura^2);
	
	Escribir "Su IMC es: ", resultado;
	
FinAlgoritmo
