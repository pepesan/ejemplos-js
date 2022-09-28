/*
    Autor: David Vaquero Pepesan@gmail.com
    Licencia: GPLv3
    Descripción: Programa de ejemplo de Javascript
 */
function init (){
    console.log("DOM Cargado");
    document.getElementById("pinchable2").onclick = muestraMensaje;
}
document.addEventListener("DOMContentLoaded", init);