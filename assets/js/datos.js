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
var arr;
var ArrayL=[{name:"AREQUIPA", url:"assets/img/costa-arequipa.jpg", lugar:"Colca", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"ICA", url:"assets/img/costa-ica.jpg", lugar:"Huacachina", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"LIMA", url:"assets/img/costa-lima.jpg", lugar:"Barranco", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"PIURA", url:"assets/img/costa-piura.jpg", lugar:"Mancora", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"TRUJILLO", url:"assets/img/costa-trujillo.jpg", lugar:"Huanchaco", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"CHACHAPOYAS", url:"assets/img/selva-chachapoyas.jpg", lugar:"Kuelap", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"IQUITOS", url:"assets/img/selva-iquitos.jpg", lugar:"Quistococha", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"TARAPOTO", url:"assets/img/selva-tarapoto.jpg", lugar:"Camiri", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"AYACUCHO", url:"assets/img/sierra-ayacucho.jpg", lugar:"Carnavales", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"CUSCO", url:"assets/img/sierra-cusco.jpg", lugar:"Piedra de los 12 angulos", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"PASCO", url:"assets/img/sierra-pasco.jpg", lugar:"Oxapampa", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"},
          {name:"JUNIN", url:"assets/img/sierra-junin.jpg", lugar:"Huagapo", video:"https://www.youtube.com/embed/N2FErj7Fj3M",like:"false"}];

          if(!localStorage.getItem('lugares')){
            localStorage.setItem('lugares',JSON.stringify(ArrayL));
            arr = JSON.parse(localStorage.getItem('lugares'));
          }
          else{
            arr = JSON.parse(localStorage.getItem('lugares'));
          }
