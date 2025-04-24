def cuenta_vocales(palabra):
    cantidad_letras = len(palabra)
    cantidad_vocales = 0
    for vocal in palabra:
        if vocal == 'a':
            cantidad_vocales += 1
        elif vocal == 'e':
            cantidad_vocales += 1
        elif vocal == 'i':
            cantidad_vocales += 1
        elif vocal == 'o':
            cantidad_vocales += 1
        elif vocal == 'u':
            cantidad_vocales += 1
        else:
            continue

    print(f"{palabra} tiene {cantidad_letras} letras y {cantidad_vocales} vocales.")

       


#*CODE MAIN*#
print("-CUANTAS VOCALES TIENE UNA PALABRA-")

palabra = input("Ingrese una palabra: ")
palabra_minuscula = palabra.lower()

cuenta_vocales(palabra_minuscula)