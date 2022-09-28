/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function hola(event){
    console.log("Hola");
    console.log(event.target);
    console.log(event.target.id);
    // Objeto del tipo HTMLButtonElement
    // REF: https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement
    var elemento =  event.target;
    if (elemento.id==="button1"){
        event.target.innerHTML="He cambiado el boton 1";
    }else{
        event.target.innerHTML="He cambiado el boton 2";
    }


}
function noHagasNada(event){
    console.log("Enlace pulsado");
    // no debería ejecutar nada más
    event.preventDefault();
    // no debería lanzar el evento en más elementos
    event.stopPropagation();
}
function init(){
    console.log("DOM cargado");
    var boton1=document.getElementById("button1");
    var boton2=document.getElementById("button2");
    var enlace1=document.getElementById("enlace1");
    boton1.addEventListener("click",hola);
    boton2.addEventListener("click",hola);
    enlace1.addEventListener("click",noHagasNada);
}

document.addEventListener("DOMContentLoaded",init);
