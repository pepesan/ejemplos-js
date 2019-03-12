/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */


function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function cambiaColor(event) {
    console.log("Cambiacolor");
    if(event.currentTarget.className!="box colorea"){
        event.currentTarget.className="box colorea"
    }else{
        event.currentTarget.className="box"
    }

}
function muestraCoordenadas(event) {
    console.log("x: "+event.clientX+", y: "+event.clientY);
}

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    var cajas = document.querySelectorAll(".box");
    console.log(cajas);
    for (var i=0;i<cajas.length;i++){
        console.log(cajas[i]);
        cajas[i].addEventListener("mouseover",cambiaColor);
        cajas[i].addEventListener("mousemove",muestraCoordenadas);
        cajas[i].addEventListener("mouseout",cambiaColor);
    }
}
document.addEventListener("DOMContentLoaded", domCargado);

