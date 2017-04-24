
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

password.addEventListener('keydown',login);

function login(e){
  if(e.keyCode == 13 && this.value !== ""){
    findUserStorage(email.value, this.value);
  }
}

function findUserStorage(user, password) { //ingresa mi correo y pass del login
  var cont= 0;
  console.log(user + password);
  usuario_LS.filter(function (e){
    if (user == e.user && password == e.password) {
  		cont++;
      console.log('Ingreso');
  	}
  });
    if(cont == 1) {
        localStorage.setItem("login", "true");
      window.location="index.html";
    } else {
      alert("Usted no se encuentra registrado");
    }
  }
