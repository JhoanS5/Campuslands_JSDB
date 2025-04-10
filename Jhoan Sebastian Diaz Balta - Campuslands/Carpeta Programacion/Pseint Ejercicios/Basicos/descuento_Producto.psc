Algoritmo CalcularDescuento
    Definir precio_original, porcentaje_descuento, descuento, precio_final Como Real;
	
    Escribir "Ingresa el precio original del producto: ";
    Leer precio_original;
	
    Escribir "Ingresa el porcentaje de descuento: ";
    Leer porcentaje_descuento;
	
    descuento <- (precio_original * porcentaje_descuento) / 100;
    precio_final <- precio_original - descuento;
	
    Escribir "El precio final del producto con descuento es: ", precio_final;
FinAlgoritmo