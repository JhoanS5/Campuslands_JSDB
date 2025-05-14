
#*CODE MAIN*#

productos = {
    'Poker': {"Precio":3000,"Cantidad":30},
    'Aguardiente': {"Precio":21000,"Cantidad":5},
    'Vodka': {"Precio":45000,"Cantidad":2}
}

edad = int(input("Que edad tienes: "))

if edad >= 18:
    nombre = input("Ingrese el producto: ").title()

    if nombre not in productos:
        print('No hay, busque a Justin para que le consiga.')
    else:
        cantidad = int(input("Ingrese la cantidad: "))
        
        if cantidad <= 0:
            print("Ingrese un numero mayor a cero")
        
        elif productos[nombre]['Cantidad'] < cantidad:
            print("No hay producto suficiente. ")
            
        else:
            total = cantidad * productos[nombre]['Precio']
            
            print(f"El valor a pagar por el producto {nombre} es de {total} pesos por la cantidad de {cantidad} unidades.")
            
else:
    print("No tienes edad para comprar")