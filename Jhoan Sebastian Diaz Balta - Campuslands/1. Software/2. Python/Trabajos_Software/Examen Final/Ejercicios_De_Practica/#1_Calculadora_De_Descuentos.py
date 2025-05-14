def calcular_monto_descuento(precio, descuento):
    descuento_decimal = descuento / 100
    rebaja = precio * descuento_decimal
    print(f"El precio es: {precio}$, tiene un descuento de: {descuento}%")
    print(f"Se le rebajan: {rebaja}$")
    return rebaja

def calcular_total_pago(precio, rebaja):
    total = precio - rebaja
    return total

def dividir_total(total, personas):
    if personas <= 0:
        print("El numero de personas debe ser mayor que cero.")
        return None
    else:
        total_por_persona = total / personas
        return total_por_persona

def mostrar_resultados(descuento, total_con_descuento, total_por_persona):
    print("\n------ RESULTADO DE LA COMPRA ------")
    print(f"Monto del descuento: {descuento:.2f}$")
    print(f"Total a pagar despues del descuento: {total_con_descuento:.2f}$")
    if total_por_persona is not None:
        print(f"Total a pagar por cada persona: {total_por_persona:.2f}$")

intentos = 3

#*CODE MAIN*#
print("------ TIENDA JHODANI ------")

while intentos > 0:
    try:
        precio = float(input("Ingrese el precio total del producto: "))
        porcentaje = float(input("Ingrese el porcentaje de descuento (0 a 100): "))

        if not (0 <= porcentaje <= 100):
            print("Ingresaste un porcentaje fuera del rango (0-100).")
            intentos -= 1
            print(f"Intentos disponibles: {intentos}")
            continue

        rebaja = calcular_monto_descuento(precio, porcentaje)
        total = calcular_total_pago(precio, rebaja)

        cantidad_personas = int(input("Ingrese cuantas personas pagarán para dividir la cuenta (si no aplica, ingrese 1): "))

        total_por_persona = dividir_total(total, cantidad_personas)

        mostrar_resultados(rebaja, total, total_por_persona)
        break  

    except ValueError:
        print("El valor que ingresaste no es un número. Inténtalo de nuevo.")
        intentos -= 1
        print(f"Intentos disponibles: {intentos}")
    except Exception as e:
        print(f"Error inesperado: {e}")
        intentos -= 1
        print(f"Intentos disponibles: {intentos}")

if intentos == 0:
    print("\nSe han agotado los intentos. El programa ha finalizado.")