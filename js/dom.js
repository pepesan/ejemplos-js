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
document.body.innerHTML="<h1>He cambiado el contenido</h1>";