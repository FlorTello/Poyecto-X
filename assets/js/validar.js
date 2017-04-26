
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
function valiarDatos(){

}
password.addEventListener('keydown',login);
function login(e){

  if(e.keyCode == 13 && this.value !== ""){
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  	var expRegPass  = /^[a-zA-z]{6,}$/;

  	var emailError = document.getElementById("errorEmail");
  	var passError	= document.getElementById("errorPass");

  	if(!expRegEmail.test(password.value)) {
  	   passError.innerHTML = "";
  	if(!password.value){
  		emailError.innerHTML= "El campo de usuario no puede estar en blanco";
  		password.focus();
  	 }else {
  		emailError.innerHTML= "Ingrese correo válido";
  		password.focus();
  	}
  }
  findUserStorage(email.value, password.value);
}

}

function findUserStorage(user, password) { //ingresa mi correo y pass del login
  var cont= 0;
  console.log(user + password);
  usuario_LS.filter(function (e){
    if (user == e.user) {
  		cont++;
      console.log('Ingreso');
  	}
  });
    if(cont == 1) {
      localStorage.setItem("login", password);
      window.location="index.html";
    } else {
      alert("Usted no se encuentra registrado");
    }
  }
