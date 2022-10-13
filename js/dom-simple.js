/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;
function creaParrafoAlFinalBody(texto= "contenido"){
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode(texto);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
}
function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    let divAModificar=document.getElementById("modificar");
    divAModificar.innerHTML="<p>parrafo</p>";
    let boton = document.getElementById("mete");
    boton.addEventListener("click",
        ()=>{
            // ramificación
            creaParrafoAlFinalBody("otro contenido");
            document.body.innerHTML += "<p>otro párrafo</p>";
            document.body.innerHTML +=
                "<div id='podar'>" +
                    "<p id='elemento-a-podar'>otra cosa</p>" +
                "</div>";
            // poda de elementos
            // poda tradicional con hijo a borrar
            let podar = document.getElementById("podar");
            let elementoAPodar= document.getElementById(
                "elemento-a-podar");
            podar.removeChild(elementoAPodar);
            // poda todo con innnerHTML
            podar.innerHTML = "";
        });
}
document.addEventListener("DOMContentLoaded", domCargado);