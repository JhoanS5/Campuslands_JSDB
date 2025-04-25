def conversor_segundos(total_segundos):
    horas = total_segundos // 3600 
    minutos = (total_segundos % 3600) // 60  
    segundos = total_segundos % 60  
    return horas, minutos, segundos

#*CODE MAIN*#
print("-PROGRAMA: CONVERSOR DE SEGUNDOS-")

total_segundos = int(input("Ingrese el total de segundos: "))
horas, minutos, segundos = conversor_segundos(total_segundos)

print(f"{total_segundos} segundos son equivalentes a:")
print(f"{horas} horas, {minutos} minutos y {segundos} segundos.")