/*
    Autor: David Vaquero Pepesan@gmail.com
    Licencia: GPLv3
    Descripción: Programa de ejemplo de Javascript
 */

function muestraSegundoMensaje(){
    console.log("Segundo Mensaje");
}
function init (){
    console.log("DOM Cargado");
    document.getElementById("pinchable2").onclick = muestraMensaje;
    document.getElementById("pinchable3").addEventListener("click", muestraMensaje);
    document.getElementById("pinchable3").addEventListener("click", muestraSegundoMensaje);
}
document.addEventListener("DOMContentLoaded", init);