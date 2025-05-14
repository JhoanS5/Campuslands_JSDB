def obtener_distancia():
    while True:
        try:
            distancia = float(input("Ingrese la distancia total del viaje en kilómetros: "))
            if distancia > 0:
                return distancia
            else:
                print("La distancia debe ser un valor positivo.")
        except ValueError:
            print("Por favor, ingrese un valor numérico para la distancia.")

def obtener_rendimiento():
    while True:
        try:
            rendimiento = float(input("Ingrese el rendimiento del vehículo en km/litro: "))
            if rendimiento > 0:
                return rendimiento
            else:
                print("El rendimiento debe ser un valor positivo.")
        except ValueError:
            print("Por favor, ingrese un valor numérico para el rendimiento.")

def obtener_precio_litro():
    while True:
        try:
            precio = float(input("Ingrese el precio por litro de gasolina: "))
            if precio > 0:
                return precio
            else:
                print("El precio por litro debe ser un valor positivo.")
        except ValueError:
            print("Por favor, ingrese un valor numérico para el precio.")

def calcular_litros_necesarios(distancia, rendimiento):
    litros = distancia / rendimiento
    return litros

def calcular_costo_combustible(litros, precio_litro):
    costo_total = litros * precio_litro
    return costo_total

def obtener_numero_viajeros():
    while True:
        try:
            num_viajeros = int(input("¿Cuántas personas viajarán? (Ingrese 1 si viaja solo): "))
            if num_viajeros > 0:
                return num_viajeros
            else:
                print("El número de viajeros debe ser mayor que cero.")
        except ValueError:
            print("Por favor, ingrese un número entero para la cantidad de viajeros.")

def dividir_costo(costo_total, num_viajeros):
    if num_viajeros > 0:
        costo_por_persona = costo_total / num_viajeros
        return costo_por_persona
    return None

def mostrar_resultados(distancia, rendimiento, precio_litro, litros_necesarios, costo_total, costo_por_persona, num_viajeros):
    print("\n------ CÁLCULO DE COMBUSTIBLE PARA EL VIAJE ------")
    print(f"Distancia total del viaje: {distancia} km")
    print(f"Rendimiento del vehículo: {rendimiento} km/litro")
    print(f"Precio por litro de gasolina: ${precio_litro}")
    print(f"Litros de combustible necesarios: {litros_necesarios} litros")
    print(f"Costo total de combustible: ${costo_total}")
    if num_viajeros > 1 and costo_por_persona is not None:
        print(f"Costo por persona (entre {num_viajeros}): ${costo_por_persona}")
    elif num_viajeros == 1:
        print("Usted es el único viajero.")

#*CODE MAIN*#

print("------ CALCULADORA DE COMBUSTIBLE PARA VIAJES ------")

distancia = obtener_distancia()
rendimiento = obtener_rendimiento()
precio_litro = obtener_precio_litro()

litros_necesarios = calcular_litros_necesarios(distancia, rendimiento)
costo_total = calcular_costo_combustible(litros_necesarios, precio_litro)

num_viajeros = obtener_numero_viajeros()
costo_por_persona = dividir_costo(costo_total, num_viajeros)

mostrar_resultados(distancia, rendimiento, precio_litro, litros_necesarios, costo_total, costo_por_persona, num_viajeros)