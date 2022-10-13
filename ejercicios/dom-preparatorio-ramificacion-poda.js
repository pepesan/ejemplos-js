/*
    Plantilla de uso de eventos en JS
 */
function init(){
    console.log("Dom Cargado");
    // creamos la etiqueta p
    let parrafo = document.createElement("p");
    // creamos el texto a meter en el párrafo
    let texto = document.createTextNode("Texto del párrafo");
    // metemos el texto en el párrafo
    parrafo.appendChild(texto);
    // metemos el párrafo al final de body
    document.body.appendChild(parrafo);
    // si no se hubiera pedido hacerlo con appendChild
    // document.body.innerHTML+="<p>Texto del párrafo</p>";

    // insertamos al final de body
    document.body.innerHTML+=
        // un div de pie
        "<div id='pie'>"+
            // con un párrafo dentro del div
            "<p>Texto del párrafo del pie</p>" +
        "</div>";

    // si lo hiciéramos con appendChild
    /*
    // creamos el texto del párrafo
    let texto2 = document.createTextNode("Texto 2");
    // Creamos el párrafo
    let parrafo2 = document.createElement("p");
    // metes el texto dentro del párrafo
    parrafo2.appendChild(texto2);
    // creamos el div
    let midiv = document.createElement("div");
    // cambiamos el id del div
    midiv.id = "pie";
    // metemos el párrafo dentro del div
    midiv.appendChild(parrafo2);
    // metemos el div dentro del body
    document.body.appendChild(midiv);
     */
    document.body.innerHTML+="<p id='aborrar'>Texto del otro párrafo</p>";
    // localizo el elemento a borrar
    let parrafoABorrar = document.getElementById("aborrar");
    // desde el padre borro el hijo
    document.body.removeChild(parrafoABorrar);

}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);