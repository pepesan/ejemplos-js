function clicked(){
    console.log("Botón pulsado");
}
function onMouseOver(){
    console.log("Dentro" );
}
function onMouseOut(){
    console.log("Fuera");
}
function init(){
    console.log("Dom Cargado");
    document.getElementById("enviar").addEventListener("click", clicked);
    document.getElementById("boton-raton").addEventListener("mouseover", onMouseOver);
    document.getElementById("boton-raton").addEventListener("mouseout", onMouseOut);
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);