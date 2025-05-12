def saludo_personalizado(nombre):
    print(f"""-------------------------------
     -¡Bienvenido {nombre}-
-Es un placer tenerlo por aquí-
-------------------------------
""")

#*CODE MAIN*#
print("-SALUDO PERSONALIZADO-")
name = input("Ingrese su nombre: ")

saludo_personalizado(name)