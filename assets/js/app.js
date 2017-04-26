
document.getElementById("toggle").addEventListener("mouseover", mostrar);
  document.getElementById("lugares").addEventListener('mouseout',ocultar);

function ocultar(){
  this.style.display='none';
}
function mostrar(){
  document.getElementById("lugares").style.display='block';
}

var arr =[{name:"AREQUIPA", url:"assets/img/costa-arequipa.jpg", lugar:"Colca", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"ICA", url:"assets/img/costa-ica.jpg", lugar:"Huacachina", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"LIMA", url:"assets/img/costa-lima.jpg", lugar:"Barranco", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"PIURA", url:"assets/img/costa-piura.jpg", lugar:"Mancora", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"TRUJILLO", url:"assets/img/costa-trujillo.jpg", lugar:"Huanchaco", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"CHACHAPOYAS", url:"assets/img/selva-chachapoyas.jpg", lugar:"Kuelap", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"IQUITOS", url:"assets/img/selva-iquitos.jpg", lugar:"Quistococha", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"TARAPOTO", url:"assets/img/selva-tarapoto.jpg", lugar:"Camiri", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"AYACUCHO", url:"assets/img/sierra-ayacucho.jpg", lugar:"Carnavales", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"CUSCO", url:"assets/img/sierra-cusco.jpg", lugar:"Piedra de los 12 angulos", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"PASCO", url:"assets/img/sierra-pasco.jpg", lugar:"Oxapampa", video:"https://www.youtube.com/embed/N2FErj7Fj3M"},
          {name:"JUNIN", url:"assets/img/sierra-junin.jpg", lugar:"Huagapo", video:"https://www.youtube.com/embed/N2FErj7Fj3M"}];


arr.forEach(e => imprimir(e));

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
  var spanHeart = document.createElement('span');
  var spanComment = document.createElement('span');
  spanHeart.setAttribute('class','spanHeart fa fa-heart');
  spanComment.setAttribute('class','spanComment fa fa-comment');
  div.appendChild(spanHeart);
  // div.appendChild(spanComment);
  figure.appendChild(div);

  img.addEventListener('click',function(e){
    mostrarModal(elem.video);
  });

  return figure;
}
document.getElementsByClassName('close')[0].addEventListener('click',agregarClass);

function agregarClass(){
  this.parentNode.parentNode.classList.toggle('OpenClose');
    document.getElementById("inicio").style.overflow = 'visible';

}
function mostrarModal(src){
  document.getElementById('modal-video').setAttribute('src',src);
  document.getElementById('modal').classList.toggle('OpenClose');
  document.getElementById("inicio").style.overflow = 'hidden';
}


window.addEventListener('load', function(e){
  e.preventDefault();
  var ciudades = arr.forEach(function(e){
    document.getElementsByClassName('grid')[0].appendChild(imprimir(e));
  })
    return ciudades;
});
