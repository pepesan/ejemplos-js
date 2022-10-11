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
    var boton = document.getElementById("raton");
    // mouseover = entro en un elemento
    boton.addEventListener("mouseover", ()=>{
        console.log("mouseover");
    });
    // mouseover = salgo en un elemento
    boton.addEventListener("mouseout", ()=>{
        console.log("mouseout");
    });
    // mouseover = cada vez que muevo sobre en un elemento
    boton.addEventListener("mousemove", (evento)=>{
        console.log("mousemove:" + "X: "+ evento.pageX + ": Y: "+ evento.pageY);
    });
    var botonFormulario = document.getElementById("boton-formulario");
    botonFormulario.addEventListener("click", () => {
        console.log("boton de formulario pulsado");
    })
}
document.addEventListener("DOMContentLoaded", domCargado);

