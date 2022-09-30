/*
    Plantilla de uso de eventos en JS
 */
function init(){
    console.log("Dom Cargado");
    // 1. Crea un nuevo objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2. Configuración: solicitud GET para la URL /article/.../load
    xhr.open('GET', 'https://cursosdedesarrollo.com/pactometro/resultados.json');

    // 3. Envía la solicitud a la red
    xhr.send();

    // 4. Esto se llamará después de que la respuesta se reciba
    xhr.onload = function() {
        if (xhr.status !== 200) { // analiza el estado HTTP de la respuesta
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
        } else { // muestra el resultado
            console.log(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
            // console.log(xhr.response);
            const obj = JSON.parse(xhr.response);
            // console.log(obj);
            for (const i in obj){
                //console.log(obj[i]);
                console.log("Nombre: "+ obj[i].nombre + ", Nª Diputados: "+obj[i].dipu+", Logotipo: "+ obj[i].imagen);
            }
        }
    };

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            console.log(`Recibidos ${event.loaded} de ${event.total} bytes`);
        } else {
            console.log(`Recibidos ${event.loaded} bytes`); // sin Content-Length
        }

    };

    xhr.onerror = function() {
        console.log("Solicitud fallida");
    };
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);