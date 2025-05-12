def validar_contrasena(password):
    tiene_letras = False
    tiene_numeros = False

    if len(password) < 6:  
        return "La contraseña debe tener al menos 6 caracteres."

    for caracter in password:
        if caracter.isalpha(): 
            tiene_letras = True
        elif caracter.isdigit():
            tiene_numeros = True

    if tiene_letras and tiene_numeros:
        return "Contraseña valida."
    else:
        return "La contraseña debe contener letras y numeros."

#*CODE MAIN*#
print("-PROGRAMA: VALIDAR CONTRASEÑA-")

password = input("Ingrese su contraseña: ")
resultado = validar_contrasena(password)
print(resultado)