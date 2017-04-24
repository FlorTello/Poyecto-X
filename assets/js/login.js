index = document.getElementById("index");
index.style.display = "none";
if(localStorage.getItem("login")){
  index.style.display = "block";
} else{
    alert("Debe ingresar");
    index.style.display = "none";
    window.location = "login.html";
}

var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

password.addEventListener('keydown',login);

function login(e){
  if(e.keyCode == 13 && this.value !== ""){
    findUserStorage(this.value);
  }
}

function findUserStorage(user, password) { //ingresa mi correo y pass del login
  var cont= 0;
  usuario_LS.filter(function (e){
    if (user == e.user && password == e.password) {
  		cont++;
  	}
  });
    if(cont == 1) {
      localStorage.setItem("usuario", "true");
      window.location="index.html";
    } else {
      alert("Usted no se encuentra registrado");
    }
  }
