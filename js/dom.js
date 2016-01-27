/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
/*document.body.children[1]
    .children[0].innerHTML="demasiado sencilla";
*/
document.getElementById("grande")
    .innerHTML="demasiado sencilla";
document.getElementsByTagName("strong")[0]
    .innerHTML="otra manera sencilla";
document.getElementsByClassName("miclase")[0]
    .innerHTML="Accediendo por la clase";
//document.body.innerHTML="";

//ejemplo de injerto en el árbol del DOM
// Crear nodo de tipo Element
var parrafo = document.createElement("p");
// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");
// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);


// Crear nodo de tipo Element
var midiv = document.createElement("div");
// Crear nodo de tipo Text
var contenidoDiv = document.createTextNode("Dentro del div");
// Añadir el nodo Text como hijo del nodo Element
midiv.appendChild(contenidoDiv);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(midiv);


// Crear nodo de tipo Element
midiv = document.createElement("div");
// Crear nodo de tipo Element
parrafo = document.createElement("p");
// Crear nodo de tipo Text
contenido = document.createTextNode("Hola Mundo!");
// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
//meto el párrafo dentro del div
midiv.appendChild(parrafo);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(midiv);

//poda de una rama
var miStrong =
    document.getElementById("grande");
miStrong.parentNode.removeChild(miStrong);

//poda de varias ramas que sean párrafos
var misParrafos=document.getElementsByTagName("p");
console.log(misParrafos);
//for (var i=0;i<misParrafos.length;i++)
for(i in misParrafos)
{
    console.log(i);
    console.log(misParrafos[i]);
    console.log(typeof misParrafos[i]);
    if(typeof misParrafos[i] =="object" ){
        misParrafos[i].parentNode.removeChild(misParrafos[i]);
    }
}
/*
for (indice in misParrafos){
    console.log(indice);
    console.log(misParrafos[indice]);
    misParrafos[indice].parentNode.removeChild(misParrafos[indice]);
}
*/

