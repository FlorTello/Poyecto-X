# Promoviendo el Turismo Nacional y el cuídado de la naturaleza
## Acerca del proyecto

Este proyecto tiene la intención de promover el turismo pero teniendo en cuenta el cuidado de la naturaleza y 
la conservación de los lugares arqueológicos del país.
### Ubicación
  Para  ejecutar la pagina Web necesita acceder al siguiente link
  <a href="https://flortello.github.io/Proyecto-X/"> Turismo Perú</a>
### 1. Requerimientos

 * Una página de logeo para identificar al usuario.
 * Un listado de Lugares para visitar
 * Una Opción para poner preferencias de lugar
 * Un filtro para la costa, sierra y selva

### 2. Diseño

* El diseño es minumalista porque se utiliza colores suaves para resaltar la Los lugares turisticos 
* la consevación de la naturaleza por lo cual se utiliza el verde

### 3. Funcionalidad

* Identificate con un correo valido y tu nombre
* Puedes acceder a Contactos para enviarte información sobre tus preguntas
* Puedes acceder a Servicios para conocer tips sobre fotografía en los lugares que visites
* Puedes darle me encanta en el icono del corazón para mostrar tus preferrencias
* Dar click en la imagenes para ver videos de experiencias de viaje
### 4. Elaboración 
   ### * Css
   ```css
      .nav{
        position: fixed; //Para que el menu este pegado y pueda ser visto en todo momento
      }    
      .visibilityHidden{
        visibility: hidden;
      }
  ```
   ### * JavaScript
     
    ##### Para Validar el usuario utilizamos el siguiente código
  ```javascript
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
  ```
  
   ##### Para mostrar las imagenes en el header se utilizaro la siguiente función
  ```javascript
     var index = 0;
      slider();
      function slider(){
        var sliders = document.getElementsByClassName('slider');
        for (var i = 0; i < sliders.length; i++) {
          sliders[i].style.display = "none";
        }
        index++;
        if(index > sliders.length){index = 1;}
          sliders[index-1].style.display = "block";
          setTimeout(slider,1000);
      }

  ```
   ##### Para Obtener los datos del Usuario 

  ```javascript
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
      
  ```
  ##### Para mostrar u ocultar el menu de regiones

  ```javascript
        document.getElementById("toggle").addEventListener("mouseover", mostrar);
        document.getElementById("lugares").addEventListener('mouseout',ocultar);

      function ocultar(){
        this.style.display='none';
      }
      function mostrar(){
        document.getElementById("lugares").style.display='block';
      }
      
   ```
  
   ##### Para cambiar el like de la imagen

  ```javascript
    spanHeart.addEventListener('change',cambiarLike);
  
       function cambiarLike(e){
          this.classList.toggle('cambiarLike');
          elem.like=(this.checked).toString();
          localStorage.setItem('lugares',JSON.stringify(arr));
        }
      
  ```
  ##### Para mostrar el video de cada lugar
  
     ```javascript    
       img.addEventListener('click',mostrarModal);
 
      function mostrarModal(src){
          document.getElementById('modal-video').setAttribute('src',elem.video);
          document.getElementById('modal').classList.toggle('OpenClose');
          document.getElementById("inicio").style.overflow = 'hidden';
          document.getElementsByClassName('close')[0].addEventListener('click',agregarClass);
        }       
  ```
  
    ##### Para mostrar el video de cada lugar
  
    ```javascript
      arrayRegion[0].addEventListener('mouseup',mostarPorRegionesCosta);

        function mostarPorRegionesCosta(){
          var dfm = document.createDocumentFragment();
          arr.filter(e =>e.region == 'costa').forEach(e => dfm.appendChild(imprimir(e)));
          var nodo = document.getElementsByClassName('grid')[1];
          while (nodo.hasChildNodes()) {
            nodo.removeChild(nodo.lastChild);
          }
          nodo.appendChild(dfm);
        }
          
  ```
