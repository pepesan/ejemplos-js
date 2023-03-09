/*
    Plantilla de uso de eventos en JS
 */

var datos = null;
function init(){
    console.log("Dom Cargado");
    fetch("https://cursosdedesarrollo.com/pactometro/resultados.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            datos = data;
            const miLista = document.querySelector("#miLista");
            for (let i = 0; i < datos.length; i++) {
                const li = document.createElement("li");
                li.innerHTML += "Partido: ";
                li.innerHTML += datos[i].nombre;
                li.innerHTML += ", Diputados: ";
                li.innerHTML += datos[i].dipu;
                /*
                li.innerHTML += "<img src='";
                li.innerHTML += "https://cursosdedesarrollo.com/pactometro/img/";
                li.innerHTML += datos[i].imagen;
                li.innerHTML += "'/>";
                 */
                miLista.appendChild(li);
            }
        });
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);
