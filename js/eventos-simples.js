/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function cambia(evento){
    evento.preventDefault();
    console.log("Pulsado!");
}


function cambiaBoton(){
    console.log("Botón pulsado");
}



function init(){
    console.log('La página se ha cargado completamente');
    var boton=document.getElementById("boton");
    boton.onclick=cambiaBoton;
    var enlace=document.getElementById("enlace");
    enlace.onclick=cambia;
}
window.onload=init;
