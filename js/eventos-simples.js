/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function cambia(evento){
    evento.preventDefault();
    console.log("Pulsado!");
}
var enlace=document.getElementById("enlace");
enlace.onclick=cambia;

function cambiaBoton(){
    console.log("Botón pulsado");
}

var boton=document.getElementById("boton");
boton.onclick=cambiaBoton;

function init(){
    console.log('La página se ha cargado completamente');
}
window.onload=init;
