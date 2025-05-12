Algoritmo ValidarCorreo
    // Declaramos la variable para el correo electrónico
	Definir i Como Entero;
    Definir correo Como Cadena;
    Definir tiene_arroba, tiene_punto Como Logico;
    tiene_arroba <- Falso;
    tiene_punto <- Falso;
	
    // Pedimos al usuario que ingrese su correo
    Escribir "Introduce tu correo electrónico: ";
    Leer correo;
	
    // Recorrer cada carácter del correo
    Para i <- 1 Hasta Longitud(correo) Hacer
        Si Subcadena(correo, i, 1) = "@" Entonces
            tiene_arroba <- Verdadero;
        FinSi
        Si Subcadena(correo, i, 1) = "." Entonces
            tiene_punto <- Verdadero;
        FinSi
    FinPara
	
    // Si el correo tiene "@" y ".", entonces es válido
    Si tiene_arroba Y tiene_punto Entonces
        Escribir "Correo electrónico válido";
    Sino
        Escribir "Correo electrónico inválido";
    FinSi
FinAlgoritmo

