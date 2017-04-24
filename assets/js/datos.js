var usuario_LS;
var usuario = [  {nombre: "Flor", apellido: "Tello", user : "flor@gmail.com" , password : "12345678" },
                 {nombre: "Ayda", apellido: "Sulca", user : "ayda@gmail.com", password : "12345678"  },
                 {nombre: "Admin", apellido: "Admin", user : "admin@gmail.com" , password : "12345678" }];

if(!localStorage.getItem('usuarios')){
  localStorage.setItem('usuarios',JSON.stringify(usuario));
  usuario_LS = JSON.parse(localStorage.getItem('usuarios'));
}
else{
  usuario_LS = JSON.parse(localStorage.getItem('usuarios'));
}
