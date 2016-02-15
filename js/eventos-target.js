/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function hola(evento){
    console.log("Hola");
    console.log(evento.target);
    console.log(evento.target.id);
    if (event.target.id=="button1"){
        evento.target.innerHTML="He cambiado el boton 1";
    }else{
        evento.target.innerHTML="He cambiado el boton 2";
    }


}
function init(){
    console.log("DOM cargado");
    var boton1=document.getElementById("button1");
    var boton2=document.getElementById("button2");
    boton1.addEventListener("click",hola);
    boton2.addEventListener("click",hola);
}

document.addEventListener("DOMContentLoaded",init);
