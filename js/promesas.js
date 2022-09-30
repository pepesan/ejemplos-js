/*
    Plantilla de uso de eventos en JS
 */
function init(){
    console.log("Dom Cargado");
    const fetchPromise = fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');

    console.log(fetchPromise);

    fetchPromise
        .then((response) => {
            console.log(`Received response: ${response.status}`);
            console.log(response);
            console.log(response.status);
            console.log(response.body);

        })
        .catch(error => {
            console.log(error);
        });

    console.log("Started request…");

}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);