#Una maquina expendedora permite comprar cafe por 10.

monto_total = 10
valor = 0
while True:
    monto = int(input("Ingrese el dinero: "))
    valor += monto

    if valor == monto_total:
        print('Preparando su café ☕')
        break

    elif valor < monto_total:
        saldo = monto_total - valor
        print(f'Siga depositando dinero. Faltan {saldo}')
    
    elif valor > monto_total:
        saldo = valor - monto_total
        print(f'Te sobran ${saldo}')
        if valor >= monto_total:
            print("Preparando su café ☕")


