/*
    {Operadores, condicionales y estructuras repetitivas}

En JavaScript, son simbolos especiales que se utilizan para realizar operaciones

Operadores Aritmeticos:
    Permiten realizar operaciónes matematicas entre valores númericos.
    + , - , * , / , % modulo, **exponente.

    let a = 30;
    let b = 3;
    Nota: el operador + tambien concatena cadenas:
    La división entre cero no lanza error pero devuelve Infinity.

Operadores de Asignación:
    Se usan para asignar valores a variables. Tambien pueden realizar una operacion al mismo tiempo.

    =: Asignacion simple
    +=: Suma y asigna.
    -=: Resta y asigna.
    *=: Multiplica y asigna.
    /=: Divide y asigna.
    %=: Modulo y asigna.
    **=: Exponente y asigna.

Operadores de Comparacion:
    Compara dos valores y devuelve true o false.
    parseInt.

    ==: Igual (no estricta), puedo tener una variable numerica que vale 5 y una de tipo texto con numero 5 y como no es estricta lo compara como algo igual.
    ===: Igual (estricta);
    !=: Distinto (no estricta)
    !==: Distinto (estricta)
    >: Mayor que
    <: Menor que
    >=: Mayor o igual.
    <=: Menor o igual.

    Usar siempre === para evitar errores por convensión implícita

Operadores Lógicos:
    Se usan para combinar expresiones booleanas.

    Lista de Operadores

    &&: AND lógico
    ||: OR lógico
    !: NOT lógico.

********Estructuras de Decisión********:

    Estructura if, else if, else
    Permite ejecutar diferentes bloques de código dependiendo de una condición.
    

    let edad = 30;

    if (edad < 13){
        console.log("Niño");
    }else if(edad < 18){
        console.log("Adolescente");
    }else{
        console.log("Adulto");
    }


    Estructura switch

    let fruta = 'manzana';
    
    switch(fruta){
        case 'manzana':
            logica
            break;
        case 'banana':
            logica
            break;
        default:
            logica.
    }

    Estructura Repetitivas
    Sirven para repetir un bloque de código varias veces.

    for:
    for (let i = 0; i < 5; i++){
        logica al iniciar desde 0 hace 5 recorridos, al hacer desde 1 toca colocar <=
    }

    while:

    let i = 0;
    while(i < 5){
        logica
        i++;
    }

    do...while (Hacer mientras)
    let i = 0;
    do{ 
        logica;
        i++;
    }while (1 < 5);


    *******Control de Flujo con break y continue.
    break: Termina el bucle inmediatamente.
    for(let i = 0; i < 10; i++){
        if(i === 5) break;
        console.log(i); // Imprime del 0 al 4
    }

    continue: Salta a la siguiente iteración.
    for (let i = 0; i < 10; i++){
        if (i % 2 === 0) continue;
        console.log(i); //Imprime solo impares.
    }
*/