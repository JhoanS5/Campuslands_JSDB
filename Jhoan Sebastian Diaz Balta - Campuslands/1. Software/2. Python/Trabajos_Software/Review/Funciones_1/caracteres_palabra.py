def palabra_caracteres(palabra):
    return len(palabra)

#*CODE MAIN*#
print("-CUANTOS CARACTERES TIENE UNA PALABRA-")

palabra = input("Ingrese una palabra: ")

rta = palabra_caracteres(palabra)
print(f"{palabra} tiene: {rta} Caracteres.")