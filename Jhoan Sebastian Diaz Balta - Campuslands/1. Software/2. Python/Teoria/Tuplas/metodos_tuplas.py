"""
x.count(valor) -> Cuenta cuantas veces aparece un valor en la tupla.
    tupla = (1, 2, 3, 1, 1, 4)
    print(tupla.count(1)) # 3

x.index(valor, inicio, fin) -> Devuelve el índice de la primera aparicion de un valor.
    tupla = (10, 20, 30, 40, 50)
    print(tupla.index(30)) # 2

"""

#Ejemplo

libros = [("El Perfume", "Suskind", "Misterio"),
          ("La Metamorfosis", "Kafka", "Novela"),
          ("Misery", "Stephen King", "Misterio")
          ]

clasificacion = input("Ingrese el genero: ").title()
resultado = [libro[0] for libro in libros if libro[2] == clasificacion]
print(resultado if resultado else "No hay libros de ese género")

# for libro in libros:
#     if libro[2] == clasificacion:
#         resultado = []
#         resultado.append([libro[0]])