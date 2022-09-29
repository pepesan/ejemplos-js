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
function init(){
    console.log("Dom Cargado");
    document.getElementById("enviar").addEventListener("click", clicked);
    document.getElementById("boton-raton").addEventListener("mouseover", onMouseOver);
    document.getElementById("boton-raton").addEventListener("mouseout", onMouseOut);
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

}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);