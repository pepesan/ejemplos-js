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
            console.log(response.json());
            console.log(response.headers);
            for (var pair of response.headers.entries()) {
                console.log(pair[0]+ ': '+ pair[1]);
            }

        })
        .catch(error => {
            console.log(error);
        });

    console.log("Started request…");

    const data = { username: 'example' };

    fetch('https://httpbin.org/post', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);