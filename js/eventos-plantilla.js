/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
}
document.addEventListener("DOMContentLoaded", domCargado);

