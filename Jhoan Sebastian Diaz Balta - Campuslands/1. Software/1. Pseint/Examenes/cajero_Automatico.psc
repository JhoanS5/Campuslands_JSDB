SubProceso mostrarMenu
	Escribir "----------------------";
	Escribir "**CAJERO AUTOMATICO**";
	Escribir "----------------------";
	Escribir "1. Consultar Saldo";
	Escribir "2. Depositar Dinero";
	Escribir "3. Retirar Dinero";
	Escribir "0. Salir";
	Escribir "----------------------";
	
	
FinSubProceso

SubProceso saldoActual <- consultarSaldo(saldoInicial)
	Definir saldoActual Como Entero;
	saldoActual <- saldoInicial;
FinSubProceso

SubProceso deposito <- depositar(saldoActual)
	Definir deposito, cantidadDeposito Como Entero;
	
	Escribir "Ingrese el monto a depositar: ";
	Leer cantidadDeposito;
	
	Si cantidadDeposito > 0 Entonces
		deposito <- saldoActual + cantidadDeposito;
		Escribir "Deposito exitoso. Nuevo saldo: ", "$",deposito;
		
	SiNo
		Escribir "Cantidad Ingresada Invalida... Vuelve a intentarlo.";
	FinSi
FinSubProceso

SubProceso retirarSaldo <- Retirar(saldoInicial)
	Definir retirarSaldo Como Entero;
	
	Escribir "Ingrese el monto a retirar:";
	Leer retirarSaldo;
	
	Si (retirarSaldo <= saldoInicial) Y (retirarSaldo > 0) Entonces
		retirarSaldo <- saldoInicial - retirarSaldo;
		Escribir "Retiro exitoso. Nuevo saldo: $", retirarSaldo;
		
	SiNo
		retirarSaldo <- saldoInicial;
		Escribir "Error: Fondos insuficientes. Su saldo es: $", retirarSaldo;
	FinSi
	
FinSubProceso
Proceso cajero_Automatico
	Definir opcion, retirarSaldo, saldoInicial, saldoActual, deposito Como Entero;
	
	saldoInicial <- 1000;
	
	Repetir
		mostrarMenu();
		Escribir "Seleccione una opcion: ";
		Leer opcion;
		
		Si (opcion >= 0 Y opcion <= 3) Entonces
			Segun opcion Hacer
				opcion 1:
					saldoActual <- consultarSaldo(saldoInicial);
					Escribir saldoActual;
					
				opcion 2:
					Escribir "Depositar Dinero";
					deposito <- depositar(saldoInicial);
					saldoInicial <- deposito;
					
				opcion 3:
					retirarSaldo <- Retirar(saldoInicial);
					saldoInicial <- retirarSaldo;
					
				De Otro Modo:
					Escribir "Gracias por usar el cajero, ¡Hasta Luego!";
			FinSegun
		SiNo
			Escribir "Ingresaste un numero no valido, por favor vuelve a ingresarlo.";
		FinSi
	Hasta Que opcion == 0; 
	
	
FinProceso
