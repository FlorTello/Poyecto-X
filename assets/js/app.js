var arr =[{name:"AREQUIPA", url:"assets/img/costa-arequipa.jpg", lugar:"Colca"}, {name:"ICA", url:"assets/img/costa-ica.jpg", lugar:"Huacachina"},
          {name:"LIMA", url:"assets/img/costa-lima.jpg", lugar:"Barranco"}, {name:"PIURA", url:"assets/img/costa-piura.jpg", lugar:"Mancora"},
          {name:"TRUJILLO", url:"assets/img/costa-trujillo.jpg", lugar:"Huanchaco"}, {name:"CHACHAPOYAS", url:"assets/img/selva-chachapoyas.jpg", lugar:"Kuelap"},
          {name:"IQUITOS", url:"assets/img/selva-iquitos.jpg", lugar:"Quistococha"}, {name:"TARAPOTO", url:"assets/img/selva-tarapoto.jpg", lugar:"Camiri"},
          {name:"AYACUCHO", url:"assets/img/sierra-ayacucho.jpg", lugar:"Carnavales"}, {name:"CUSCO", url:"assets/img/sierra-cusco.jpg", lugar:"Piedra de los 12 angulos"},
          {name:"PASCO", url:"assets/img/sierra-pasco.jpg", lugar:"Oxapampa"}, {name:"JUNIN", url:"assets/img/sierra-junin.jpg", lugar:"Huagapo"}];


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

  return figure;
}

window.addEventListener('load', function(e){
  e.preventDefault();
  var ciudades = arr.forEach(function(e){
    document.getElementsByClassName('grid')[0].appendChild(imprimir(e));
  })
    return ciudades;
});
