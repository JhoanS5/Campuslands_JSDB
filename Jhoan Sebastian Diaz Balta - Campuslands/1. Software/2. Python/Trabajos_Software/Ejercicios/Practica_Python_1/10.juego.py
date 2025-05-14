def jugar():
    import random
    numero_secreto = random.randint(1,10)
    intentos = 0
    print("-JUEGO INTENTA ADIVINAR UN NUMERO EN 3 INTENTOS-")
    while intentos < 3:
        intento = int(input("Adivina el numero entre (1 y 10) ->"))
        if intento == numero_secreto:
            print(f"¡ADIVINASTE! El numero era: {numero_secreto}")
            return 
        else:
            print(f"Incorrecto.")
            intentos += 1
        
    print(f"Perdiste. El numero era {numero_secreto}")
    

#*CODE MAIN*#
jugar()



