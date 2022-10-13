/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function gestionaBlur(evento) {
    console.log("blur");
    console.log(evento.target.id);
}

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    const campo = document.getElementById("campo");
    campo.addEventListener(
        "focus",
        (evento) =>{
            console.log("focus");
            console.log(evento.target.id);
        });
    campo.addEventListener(
        "blur",
        gestionaBlur);
}
document.addEventListener("DOMContentLoaded", domCargado);