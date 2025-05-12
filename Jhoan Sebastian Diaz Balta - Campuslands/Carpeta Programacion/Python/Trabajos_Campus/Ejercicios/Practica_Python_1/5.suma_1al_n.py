def suma_numeros(limite):
    acumulador = 0
    for i in range(limite):
       acumulador += (i+1)
    print(acumulador)
    
#*CODE MAIN*#
print("-PROGRAMA: SUMA DEL 1 AL N-")

limite = int(input("Ingrese el limite para sumar: "))

suma_numeros(limite)