/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;
function gestionaClick(evento) {
    // no ejecuta el evento por defecto para este evento
    evento.preventDefault();
    // no dispara en evento en otros elementos
    evento.stopPropagation();
    // saca un mensaje por consola
    console.log("no navega el enlace");
}
function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    // capturamos el objeto a modificar el comportamiento
    var enlace = document.getElementById("enlace");
    // intentamos cambiar el comportamiento ante un evento
    enlace.addEventListener(
        // tipo de evento a modificar su comportamiento
        "click",
        // método que asignamos al evento
        gestionaClick
    );

}
document.addEventListener("DOMContentLoaded", domCargado);

