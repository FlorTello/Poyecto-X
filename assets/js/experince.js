img.addEventListener('click',function(e){
  mostrarModal(e.target.getAttribute('src'));
  // document.getElementById('nextSpan').setAttribute('next-src',e.target.parentNode.nextSibling.firstChild.getAttribute('src'));
});
function mostrarModal(src){
  document.getElementById('modal-img').setAttribute('src',src);
  // document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').classList.toggle('OpenClose');
  body.style.overflow = 'hidden';
  // var spanNext = document.createElement('span');
  // spanNext.setAttribute('next-src',"assets/img/img-"+id+".jpg");
  // figure.appendChild(spanNext);
}
