/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function muestraMensajeDiv() {
    console.log("Salta en Div");
}
function init(){
    console.log('La página se ha cargado completamente');
    document.getElementById("miparrafo").innerHTML="Otro texto";
    var elDiv = document.getElementById("div_principal");
    elDiv.addEventListener("click", muestraMensajeDiv);
    //sería como elDiv.onclick=muetraMensajeDiv;
}
window.onload=init;
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});


