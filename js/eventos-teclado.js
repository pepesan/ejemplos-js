/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
/*
Referencia: https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function foco(evento) {
    console.log(evento.currentTarget+" tiene el foco");
}

function teclaPulsada(evento) {
    console.log(evento.currentTarget.value);
    console.log(evento.keyCode);
}

function textoCambiado(evento) {
    console.log("Texto Cambiado: "+ evento.currentTarget.value);
}

function pierdefoco(evento) {
    console.log(evento.currentTarget+" ya no tiene el foco");
}

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    var campo= document.getElementById("username");
    campo.addEventListener("focus",foco);
    campo.addEventListener("blur",pierdefoco);
    //campo.addEventListener("keydown",teclaPulsada);
    //campo.addEventListener("keypress",teclaPulsada);
    campo.addEventListener("keyup",teclaPulsada);
    campo.addEventListener("input",textoCambiado);
}
document.addEventListener("DOMContentLoaded", domCargado);

