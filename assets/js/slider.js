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
