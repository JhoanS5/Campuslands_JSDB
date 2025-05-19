TARIFA_AGUA = 7116;

def obtener_consumo():
    while True:
        try:
            consumo = float(input("Ingrese la cantidad de m^3 que consumio: "))
            if consumo > 0:
                return consumo
            else:
                print("El consumo debe ser un valor positivo.")
        except ValueError:
            print("Por favor, ingrese un valor numerico para el consumo.")

def obtener_impuesto():
    while True:
        try:
            impuesto = float(input("Ingrese el porcentaje del impuesto ambiental (0 a 100): "))
            if 0 <= impuesto <= 100:
                return impuesto
            else:
                print("El impuesto debe estar en el rango de 0 a 100.")
        except ValueError:
            print("Por favor, ingrese un valor numerico para el impuesto.")

def obtener_numero_persona():
    while True:
        try:
            num_personas = int(input("¿Cuantas personas pagaran? Ingrese 1 si paga solo: "))
            if num_personas > 0:
                return num_personas
            else:
                print("El numero de persona debe ser mayor a 0.")
        except ValueError:
            print("Por favor, ingrese un valor numerico.")
            
def calcular_costo_base(consumo, tarifa):
    costo_base = tarifa * consumo
    return costo_base

def calcular_impuesto(costo_base, impuesto):
    impuesto_decimal = impuesto / 100
    valor_impuesto = costo_base * impuesto_decimal
    return valor_impuesto

def calcular_total(costo_base, cargo_añadido):
    pago_total = costo_base + cargo_añadido
    return pago_total

def dividir_personas(pago_total, num_persona):
    if num_persona > 0:
        total_por_persona = pago_total / num_persona
        return total_por_persona
    return None

def mostrar_resultados():

    pass
#*CODE MAIN*#

print("------ AGUAS CAPITAL ------")

consumo = obtener_consumo()
impuesto = obtener_impuesto()

costo_base = calcular_costo_base(consumo, TARIFA_AGUA)
cargo_añadido = calcular_impuesto(costo_base, impuesto)
pago_total = calcular_total(costo_base, cargo_añadido)

num_persona = obtener_numero_persona()
total_por_persona = dividir_personas(pago_total, num_persona)

mostrar_resultados(consumo, TARIFA_AGUA, impuesto, pago_total, total_por_persona, num_persona)

