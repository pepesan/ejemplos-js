/*

A partir de la página web proporcionada, completar el código JavaScript para que:

1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
*/
function ocultaGenerica(event){
    //Evitar el comportamiento indeseado
    event.preventDefault();
   //localizar al padre
    //this, event.target
    console.log(this);
    //console.log(event.target);
    //Localizar al primer hijo
    //toggle con la clase oculta
   event.target
       // busco el elemento padre del enlace
       .parentNode
       // busco el primer hijo
       .children[0]
       // intento modificar el atributo class
       .classList
       // quiero poner o quitar la clase oculta
       .toggle("oculta"); //document.getElementById("primerParrafo").classList.toggle("oculta");
    console.log(this.innerHTML);
    if(this.innerHTML=="Ocultar contenidos"){
        this.innerHTML="Mostrar Contenidos";
    }else{
        this.innerHTML="Ocultar contenidos";
    }
}
/*
function oculta(event){
    //console.log("oculta");
    event.preventDefault();
    document.getElementById("primerParrafo").classList.toggle("oculta");
}
function oculta2(event){
    //console.log("oculta");
    event.preventDefault();
    document.getElementById("segundoParrafo").classList.toggle("oculta");
}
function oculta3(event){
    //console.log("oculta");
    event.preventDefault();
    document.getElementById("tercerParrafo").classList.toggle("oculta");
}
*/
function init(){
    //var enlaces=document.querySelectorAll("a");
    /*
    3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
    */
    for (var item of document.querySelectorAll("a")){
        item.addEventListener("click",ocultaGenerica);
    }
    /*
    document.getElementById("primero").addEventListener("click",ocultaGenerica);
    document.getElementById("segundo").addEventListener("click",ocultaGenerica);
    document.getElementById("tercero").addEventListener("click",ocultaGenerica);
    */
}
document.addEventListener("DOMContentLoaded",init);
/*


4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado

*/
