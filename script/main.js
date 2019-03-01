var modal = document.querySelector('.app__modal');
var boton = document.querySelector('.app__contendor-boton');
var span = document.querySelector('.app__close')[0];

function abrirModal(){
    modal.style.display = 'block';
    //console.log(modal);
}
boton.addEventListener('click', abrirModal);

/*function cerrarModal(){
  modal.style.display = 'none';
  //console.log(modal);
}
span.addEventListener('click', cerrarModal);*/

/*span.onclick = function() {
  modal.style.display = "none";
}*/

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  