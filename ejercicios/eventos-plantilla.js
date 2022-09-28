/*
    Plantilla de uso de eventos en JS
 */
function init(){
    console.log("Dom Cargado");
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);