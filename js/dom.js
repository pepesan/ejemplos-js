/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
/*document.body.children[1]
    .children[0].innerHTML="demasiado sencilla";
*/
var elemento=document.getElementById("grande");
console.log(elemento);
console.log(elemento.id);
console.log(elemento.className);
console.log(elemento.lang);
elemento.lang="en";
console.log(elemento.lang);
console.log(elemento.innerHTML);

elemento.innerHTML="demasiado sencilla";


console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.querySelector("#grande"));
console.log(document.querySelectorAll("meta"));


var enlaces=document.links;
console.log(enlaces);
console.log(enlaces.length);
console.log(enlaces[0]);
//console.log(enlaces[0].href);


document.getElementsByTagName("strong")[0]
    .innerHTML="otra manera sencilla";
document.getElementsByClassName("miclase")[0]
    .innerHTML="Accediendo por la clase";
//document.body.innerHTML="";

//ejemplo de injerto en el árbol del DOM
// Crear nodo de tipo Element
var parrafo = document.createElement("p");
console.log(parrafo);

// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");
console.log(contenido);

// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
console.log(parrafo);

// Añadir el nodo Element como hijo de la pagina
 console.log(document.body.children.length);

document.body.appendChild(parrafo);
 console.log(document.body.children.length);


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
console.log(misParrafos[0]);
console.log(misParrafos[1]);
console.log(misParrafos[2]);
function remove(elemento){
    elemento.parentNode.removeChild(elemento);
}
remove(misParrafos[1]);

misParrafos=document.getElementsByTagName("p");
console.log(misParrafos.length);
remove(misParrafos[1]);
misParrafos=document.getElementsByTagName("p");
console.log(misParrafos.length);
/*
for (var i=0;i<misParrafos.length;i++){
    console.log(misParrafos[i]);
}

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

