document.getElementById("toggle").addEventListener("mouseover", mostrar);
  document.getElementById("lugares").addEventListener('mouseout',ocultar);

function ocultar(){
  this.style.display='none';
}
function mostrar(){
  document.getElementById("lugares").style.display='block';
}
