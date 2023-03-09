/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function cambia(evento){
    evento.preventDefault();
    console.log("Pulsado!");
}

function creaParrafo() {
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Hola Mundo!");
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
}
function cambiaBoton(){
    console.log("Botón pulsado");
    var boton = document.getElementById("boton");
    boton.innerHTML = "Botón pulsado";
    creaParrafo();
}



function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    // buscar el boton
    var botonClase = document.getElementById("boton-clase");
    botonClase.addEventListener(
        "click",
        () => {console.log("boton clase pulsado");}
    );


    // buscar el elemento del botón con id = "sencillo"
    var botonSencillo = document.getElementById("sencillo");
    // cambiar el comportamiento del click en ese botón
    botonSencillo.addEventListener(
        // selección del evento a modificar su comportamiento
        "click",
        // función asociada para ejecutar ante ese evento
        () =>{
            console.log("botón sencillo pulsado");
        }
    );
    //$("#boton")
    var boton=document.getElementById("boton");
    boton.addEventListener("click",cambiaBoton);
    //boton.onclick=cambiaBoton;
    var enlace=document.getElementById("enlace");
    enlace.addEventListener("click",cambia);
    //enlace.onclick=cambia;

}
document.addEventListener("DOMContentLoaded", domCargado);



