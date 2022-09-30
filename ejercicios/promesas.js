/*
    Plantilla de uso de eventos en JS
 */
function  hazPeticion (){
    const fetchPromise = fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');
    fetchPromise
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then(
            (data) => {
                console.log(data);
            }
        )
        .catch(error => {
            console.log(error);
        });
}
function init(){
    console.log("Dom Cargado");
    document.getElementById("pide").addEventListener("click", hazPeticion);
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);