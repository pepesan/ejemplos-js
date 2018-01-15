/*
1.- Crea un fichero html con un fichero JS asociado
2.- Haz que cuando el DOM esté cargado saque un mensaje por consola: "Dom cargado", la función que se ejecutará se llamará init
*/
/*
4.- Introduce un enlace a google en el código HTML cuyo identificativo sea "mienlace" con el texto "Vete a Google"
* Hecho
/*
5.- Haz que cuando se pulse el enlace ("click"), en vez de ir a Google , se quede en la página donde está (utilizando el preventDefault() ), y saque un mensaje por pantalla "Enlace pulsado", la función a la que llamará será "gestionaClick". Recuerda que este cambio del DOM sólo se puede realizar cuando el DOM está completamente cargado.
*/
function gestionaClick(evento){
    evento.preventDefault();
    console.log("Enlace pulsado");
}
/*
6.- Introduce un botón cuyo identificativo sea "miboton" con el Texto: "Estoy maldito!"
7.- Haz que cuando se pulse dicho botón, saque un mensaje por consola con el mensaje: "MUHAHAHAHAHA!", la función se llamará risaMalvada
*/
function risaMalvada(){
    console.log("MUHAHAHAHAHA!");
}
function init(){
    console.log("Dom cargado");
    var mienlace=document.getElementById("mienlace");
    mienlace.addEventListener("click",gestionaClick);
    var miboton=document.getElementById("miboton");
    miboton.addEventListener("click",risaMalvada);
}
document.addEventListener("DOMContentLoaded",init);

/*
3.- Haz que cuando Se haya cargado completamente la página (onload) saque un mensaje por consola: "Página cargada", la función que se ejecutará se llamará loaded*/

function loaded(){
    console.log("Página cargada");
}
window.addEventListener("load",loaded);

