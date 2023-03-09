function clicked(){
    console.log("Botón pulsado");
}
function onMouseOver(){
    console.log("Dentro" );
}
function onMouseOut(){
    console.log("Fuera");
}
function onMouseMove(event){
    // console.log(event);
    console.log("posicion: x: "+event.clientX+", y: "+event.clientY+")");
}
// definición de función callback como array function o lambda
var onMouseMovev2 = (event)=> {
    console.log(event);
}

function risaMalvada(){
    console.log("MUHAHAHAHAHA!");
}

function gestionaClick(event){
    console.log("Enlace pulsado")
    event.preventDefault();
}

function manejaFocus(event) {
    console.log("Focus en: "+ event.target.id);
}

function manejaBlur(event) {
    console.log("Blur en: "+ event.target.id);
}

function init(){
    console.log("Dom Cargado");
    document
        .getElementById("enviar")
        .addEventListener("click", clicked);
    document
        .getElementById("boton-raton")
        .addEventListener("mouseover", onMouseOver);
    document
        .getElementById("boton-raton")
        .addEventListener("mouseout", onMouseOut);
    //document.getElementById("boton-raton").addEventListener("mousemove", onMouseMove);
    /*
    document
        .getElementById("boton-raton")
        .addEventListener(
            "mousemove",
            function (event) {
                console.log(event);
            }
        );
     */
    document
        .getElementById("boton-raton")
        .addEventListener(
            "mousemove",
            (event)=> {
                console.log(event);
            }
        );
    document.getElementById("miboton").addEventListener("click", risaMalvada);
    document.getElementById("mienlace").addEventListener("click", gestionaClick);
    const campo1 = document.getElementById("campo1");
    const campo2 = document.getElementById("campo2");
    campo1.addEventListener("focus", manejaFocus);
    campo2.addEventListener("focus", manejaFocus);
    campo2.addEventListener("blur", manejaBlur);
    campo1.addEventListener("blur", manejaBlur);

}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);
