Proceso calcular_precioCompra
	Definir precio, resultado Como Real;;
	Definir cantidad Como Entero;
	
	Escribir "Ingrese el precio del producto: ";
	Leer precio;
	
	Escribir "Ingrese la cantidad comprada: ";
	Leer cantidad;
	
	resultado <- precio * cantidad;
	
	Escribir "Precio total: ",resultado;
	
FinProceso
