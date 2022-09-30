/*
    Plantilla de uso de eventos en JS
 */
function init(){
    console.log("Dom Cargado");
    const fetchPromise = fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');

    console.log(fetchPromise);

    fetchPromise
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (const indice in data) {
                var boton = document.createElement("button");
                boton.id = "id-" + data[indice].nombre;
                // Crear nodo de tipo Text
                var contenido = document.createTextNode(data[indice].nombre+": "+data[indice].dipu);
                var imagen = document.createElement("img");
                imagen.src="https://cursosdedesarrollo.com/pactometro/img/"+ data[indice].imagen;
                boton.appendChild(imagen);
                // Añadir el nodo Text como hijo del nodo Element
                boton.appendChild(contenido);
                boton.addEventListener("click", event =>{
                    event.preventDefault();
                    console.log("Has pulsado el botón :" + data[indice].nombre);
                })

                // Añadir el nodo Element como hijo de la pagina
                document.body.appendChild(boton);
            }


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