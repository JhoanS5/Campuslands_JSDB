condicion = 0
instruccion1 = 0
instruccion2 = 0

if condicion:
    instruccion1
else:
    instruccion2


#*CODE MAIN*#
hace_frio = True

if hace_frio == True:
    abrigado = False
    print('Abriguese')
else:
    abrigado = True
    print('No se Abrigue')

#El que es en una linea es ternario.

#Toma un valor predeterminado de true abrigado
#si hace_frio no tiene condicione entonces es verdadero.
abrigado1 = True if hace_frio else False

abrigado1 = 'Abriguese' if hace_frio else 'No se abrigue'
print(abrigado1)

#Elif
#El orden de los elif es importante y terminar con un else.

nivel_de_ruido = int(input("Ingrese nivel de ruido: "))
if nivel_de_ruido == 0:
    print('Silencio')

elif nivel_de_ruido <= 20:
    print('Ambiente silencioso')

elif nivel_de_ruido <= 60:
    print('Ambiente poco ruidoso')

else:
    print('Ambiente insoportable')