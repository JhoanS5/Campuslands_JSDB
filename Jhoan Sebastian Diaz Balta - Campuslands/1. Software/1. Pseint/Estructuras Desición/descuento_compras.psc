Proceso descuento_compras
	Definir monto, monto_final, descuento Como Real;
	
	Escribir "Ingrese el monto de compra: ";
	Leer monto;
	
	Si monto > 100 Entonces
		descuento <- monto * 0.1;
		monto_final <- monto - descuento;
		Escribir "Descuento del 10% APLICADO";
		Escribir "El monto final es: ", monto_final;
		
	SiNo
		Escribir "Sin DESCUENTO";
		Escribir "El monto final es: ", monto;
	FinSi
	
FinProceso
