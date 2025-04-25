def validar_numero_primo(num):
    if num % 2 != 0:
        print(f"{num} ES PRIMO")
    else:
        print(f"{num} NO ES PRIMO")

#*CODE MAIN*# 
print("-PROGRAMA DETERMINA SI UN NUMERO ES PRIMO O NO-")

num = int(input("Ingrese un numero: "))

validar_numero_primo(num)