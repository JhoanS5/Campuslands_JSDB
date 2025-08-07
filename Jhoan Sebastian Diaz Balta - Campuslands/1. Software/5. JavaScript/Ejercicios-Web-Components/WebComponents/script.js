function cambiarUsuario() {
     const nuevaInfo = {
       name: "Carlos Fernández",
       avatar: "https://i.pravatar.cc/150?img=12",
       bio: "Desarrollador backend, fanático de Node.js y Docker."
     };


     const tarjeta = document.getElementById('miTarjeta');
     tarjeta.setUser(nuevaInfo);
   }