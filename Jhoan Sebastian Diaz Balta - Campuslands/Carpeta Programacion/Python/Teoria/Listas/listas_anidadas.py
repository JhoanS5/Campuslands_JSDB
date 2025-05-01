

#*CODE MAIN*#

matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

#Iteracion sobre listas anidadas
for fila in matriz:
    for elemento in fila:
        print(elemento, end=" ")
        
print(matriz[1][1])