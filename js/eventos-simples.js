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
    boton.addEventListener("click",cambiaBoton);
    //boton.onclick=cambiaBoton;
    var enlace=document.getElementById("enlace");
    enlace.addEventListener("click",cambia);
    //enlace.onclick=cambia;
}
window.addEventListener("load", init);
//window.onload=init;
