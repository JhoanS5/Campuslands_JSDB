"""
TypeError: Operación con tipos de datos incompatibles (5 + "2")
ValueError: Valor inválido en una función (int("abc"))
ZeroDivisionError: Division entre 0 (10/0)
IndexError: Índice fuera del rango en listas (lista[3] con len(lista) = 2)
FileNotFoundError: Archivo Inexistente (open("archivo.txt"))
KeyError Clave: inexistente en diccionarios (diccionario["clave_inexistente"])
ImportError: Módulo mal escrito o no instalado (import modulo_no_existente)
SyntaxError: Error de sintaxis (if True print("Hola"))

Se pueden anidar varios try,except:
"""

try:
    try:
        num1 = int(input("Ingrese el primer valor: "))
        num2 = int(input("Ingrese el segundo valor: "))

        resultado = num1 / num2
        print("El resultado es: ",resultado)
    except ValueError:
        print("Error: Debes ingresar valores numéricos.")
    
    except ZeroDivisionError:
        print("Error: No se puede dividir por cero.")

except Exception as e:
    print(f"Ocurrio un error desconocido. {e}")