/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var enlace = document.getElementById("enlace");
console.log(enlace);
console.log(enlace.href);
console.log(enlace.id);
enlace.target="_blank";

//Acceder a los estilos desde JS
var imagen = document.getElementById("imagen");
console.log(imagen.style.margin);
console.log(imagen.style.border);
imagen.style.border="1px solid black";
//recorrer el objeto style en búsca de sus propiedades
/*
for(propiedad in imagen.style){
    console.log(propiedad);
}
    */
console.log(imagen.className);
imagen.className+=" otraclase";
console.log(imagen.className);