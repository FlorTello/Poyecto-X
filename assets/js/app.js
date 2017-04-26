var arrayRegion = document.getElementsByClassName('option-lugar');

document.getElementById("toggle").addEventListener("mouseover", mostrar);
  document.getElementById("lugares").addEventListener('mouseout',ocultar);

function ocultar(){
  this.style.display='none';
}
function mostrar(){
  document.getElementById("lugares").style.display='block';
}

function imprimir(elem){
  var figure = document.createElement("figure");
  figure.setAttribute("class", "effect-foto");
  var img = document.createElement("img");
  img.setAttribute("src", elem.url);
  var figcaption = document.createElement("figcaption");
  var ciudad = document.createElement("h2");
  ciudad.innerHTML=elem.name;
  var texto = document.createElement("p");
  texto.innerHTML=elem.lugar;

  figcaption.appendChild(ciudad);
  figcaption.appendChild(texto);
  figure.appendChild(figcaption);
  figure.appendChild(img);

  var div = document.createElement('div');
  var spanHeart = document.createElement('input');
  spanHeart.setAttribute('type','checkbox');
  var spanComment = document.createElement('span');
  spanHeart.setAttribute('class','spanHeart fa fa-heart');
  spanComment.setAttribute('class','spanComment fa fa-comment');
  if(elem.like == "true"){
    spanHeart.classList.toggle('cambiarLike');
    spanHeart.checked = true;
  }
  div.appendChild(spanHeart);
  div.appendChild(spanComment);
  figure.appendChild(div);
  spanHeart.addEventListener('change',cambiarLike);
  img.addEventListener('click',mostrarModal);
   function cambiarLike(e){
      this.classList.toggle('cambiarLike');
      elem.like=(this.checked).toString();
      localStorage.setItem('lugares',JSON.stringify(arr));
    }
  function mostrarModal(src){
    document.getElementById('modal-video').setAttribute('src',elem.video);
    document.getElementById('modal').classList.toggle('OpenClose');
    document.getElementById("inicio").style.overflow = 'hidden';
    document.getElementsByClassName('close')[0].addEventListener('click',agregarClass);
  }
  return figure;
}

function agregarClass(){
  this.parentNode.parentNode.classList.toggle('OpenClose');
  document.getElementById("inicio").style.overflow = 'visible';
}


window.addEventListener('load', function(e){
  e.preventDefault();
  var dfm = document.createDocumentFragment();
  arr.forEach(e => dfm.appendChild(imprimir(e)));
  document.getElementsByClassName('grid')[0].appendChild(dfm);

});

arrayRegion[0].addEventListener('mouseup',mostarPorRegionesCosta);
arrayRegion[1].addEventListener('mouseup',mostarPorRegionesSierra);
arrayRegion[2].addEventListener('mouseup',mostarPorRegionesSelva);

function mostarPorRegionesCosta(){
  var dfm = document.createDocumentFragment();
  arr.filter(e =>e.region == 'costa').forEach(e => dfm.appendChild(imprimir(e)));
  var nodo = document.getElementsByClassName('grid')[1];
  while (nodo.hasChildNodes()) {
    nodo.removeChild(nodo.lastChild);
  }
  nodo.appendChild(dfm);
}
function mostarPorRegionesSelva(){
  var dfm = document.createDocumentFragment();
  arr.filter(e =>e.region == 'selva').forEach(e => dfm.appendChild(imprimir(e)));
  var nodo = document.getElementsByClassName('grid')[2];
  while (nodo.hasChildNodes()) {
    nodo.removeChild(nodo.lastChild);
  }
  nodo.appendChild(dfm);
}
function mostarPorRegionesSierra(){
  var dfm = document.createDocumentFragment();
  arr.filter(e =>e.region == 'sierra').forEach(e => dfm.appendChild(imprimir(e)));
  var nodo = document.getElementsByClassName('grid')[3];
  while (nodo.hasChildNodes()) {
    nodo.removeChild(nodo.lastChild);
  }
  nodo.appendChild(dfm);
}
