#Funciones predefinidas
#print() len() sum()

#len() Devuelve la longitud de la cadena.
#sum([1,2,3,4,5]) Suma los elementos de una lista solo un objeto recibe como argumento 

#Funciones definidas por usuario
#serian las normales

#funciones lambda (anonimas)
#Se usan para operaciones rapidas y sencillas en una sola linea
cuadrado = lambda x: x ** 2
print(cuadrado(5))

numeros = [1,2,3,4]
#map itera en la lita numeros gracias a la funcion lambda
doble = list(map(lambda x: x*2, numeros))
print(doble)

