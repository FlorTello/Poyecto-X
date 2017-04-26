window.addEventListener('load',function(){
  var body = document.getElementById("inicio");
  body.style.display = "none";
  if(localStorage.getItem("login")){
    body.style.display = "block";
    document.getElementById('user').innerHTML = '  Hola '+ localStorage.getItem('login');;
  } else{
    alert("Debe ingresar");
    body.style.display = "none";
    window.location = "login.html";
  }
});
