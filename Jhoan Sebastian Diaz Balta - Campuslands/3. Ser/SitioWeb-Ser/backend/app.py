# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from flask_bcrypt import Bcrypt

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app) # Inicializa Bcrypt para tu app

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'usuarios.json')

def load_data():
    if not os.path.exists(DATA_FILE) or os.path.getsize(DATA_FILE) == 0:
        return []
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# Endpoint para el registro de nuevos usuarios
@app.route('/api/registro', methods=['POST'])
def registro_usuario():
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    
    nuevo_usuario = request.json
    
    if not nuevo_usuario or 'numero_documento' not in nuevo_usuario:
        return jsonify({"success": False, "message": "Datos de usuario incompletos"}), 400

    usuarios = load_data()

    for usuario in usuarios:
        if usuario['numero_documento'] == nuevo_usuario['numero_documento']:
            return jsonify({"success": False, "message": "El número de documento ya está registrado"}), 409

    # Hashear la contraseña (que es el numero_documento)
    hashed_password = bcrypt.generate_password_hash(str(nuevo_usuario['numero_documento'])).decode('utf-8')
    nuevo_usuario['password_hash'] = hashed_password
    nuevo_usuario.pop('password', None) # Eliminamos la clave password si existe

    # Añadir la clave de insignia por defecto
    nuevo_usuario['insignia_lectura'] = False
    
    usuarios.append(nuevo_usuario)
    save_data(usuarios)
    
    # Devolvemos una version sin el password_hash para el cliente
    usuario_para_cliente = {**nuevo_usuario}
    usuario_para_cliente.pop('password_hash', None)
    
    return jsonify({"success": True, "message": "Registro exitoso", "usuario": usuario_para_cliente}), 201

# Endpoint para el login
@app.route('/api/login', methods=['POST'])
def login_usuario():
    credenciales = request.json
    
    if not credenciales or 'numero_documento' not in credenciales or 'password' not in credenciales:
        return jsonify({"success": False, "message": "Número de documento y contraseña requeridos"}), 400
    
    usuarios = load_data()
    
    for usuario in usuarios:
        # Verificar si el usuario existe
        if usuario['numero_documento'] == credenciales['numero_documento']:
            # Comparar la contraseña hasheada
            if bcrypt.check_password_hash(usuario['password_hash'], str(credenciales['password'])):
                # Devolvemos una version sin el password_hash para el cliente
                usuario_para_cliente = {**usuario}
                usuario_para_cliente.pop('password_hash', None)
                return jsonify({"success": True, "message": "Login exitoso", "usuario": usuario_para_cliente}), 200
    
    return jsonify({"success": False, "message": "Número de documento o contraseña incorrectos"}), 401

# Endpoint para actualizar la insignia del usuario (se mantiene igual)
@app.route('/api/actualizar_insignia', methods=['POST'])
def actualizar_insignia():
    datos = request.json
    
    if not datos or 'numero_documento' not in datos:
        return jsonify({"success": False, "message": "Número de documento requerido"}), 400
    
    usuarios = load_data()
    
    for usuario in usuarios:
        if usuario['numero_documento'] == datos['numero_documento']:
            usuario['insignia_lectura'] = True
            save_data(usuarios)
            return jsonify({"success": True, "message": "Insignia actualizada con éxito"}), 200
            
    return jsonify({"success": False, "message": "Usuario no encontrado"}), 404


if __name__ == '__main__':
    if not os.path.exists(DATA_FILE):
        os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump([], f)
    app.run(debug=True, port=5000)