""" nombre_tienda = 'LICORES YUSTIN'

# Credenciales del administrador
usuarios_admin = {
    "admin": "1234",
    "justin": "yustin123",
    "sofia": "sofi2024"
}


productos = {
    'Poker': {"Precio": 6000, "Cantidad": 30},
    'Aguardiente': {"Precio": 21000, "Cantidad": 5},
    'Vodka': {"Precio": 45000, "Cantidad": 2}
} """

import json
import os
import hashlib

nombre_tienda = 'LICORES YUSTIN'
INVENTARIO_FILE = "inventario.json"
USUARIOS_FILE = "usuarios_admin.json"

def encriptar_contraseña(contraseña):
    return hashlib.sha256(contraseña.encode()).hexdigest()

def cargar_productos():
    if os.path.exists(INVENTARIO_FILE):
        with open(INVENTARIO_FILE,"r") as archivo:
            return json.load(archivo)
    return{}

def guardar_productos(productos):
    with open(INVENTARIO_FILE,"w") as archivo:
        json.dump(productos,archivo,indent=4)

def cargar_usuarios():
    if os.path.exists(USUARIOS_FILE):
        with open(USUARIOS_FILE,"r") as archivo:
            return json.load(archivo)
        
def guardar_usuarios(usuario):
    with open(USUARIOS_FILE,"w") as archivo:
        json.dump(usuario,archivo,indent=4)