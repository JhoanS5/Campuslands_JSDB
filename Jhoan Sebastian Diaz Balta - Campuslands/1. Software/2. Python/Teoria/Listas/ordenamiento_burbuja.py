#Algoritmo de ordenamiento burbuja

lista = [64, 34, 25, 12, 22, 11, 90]

def bubble_sort(vector):
    n = len(vector)

    for i in range(n-1):
        for j in range(0, n-i-1):
            if vector[j] > vector[j+1]:
                vector[j], vector[j+1] = vector[j+1], vector[j]
            
    return vector

print("Lista ordenada: ", bubble_sort(lista))


