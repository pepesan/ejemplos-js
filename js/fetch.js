/*
    Plantilla de uso de eventos en JS
 */

var datos = null;
var sumados = 0;
function init(){
    console.log("Dom Cargado");
    // realiza una petición a una url
    fetch("https://cursosdedesarrollo.com/pactometro/resultados.json")
        // recoge los datos de la repsuesta y ponlos en JSON
        .then((response) => response.json())
        // procesa los datos recogidos
        // data son los datos JSON ya en formato de objeto (array)
        .then((data) => {
            console.log(data);
            // colocar los datos en una variable global
            datos = data;
            // busco el elemento donde incluir los botones
            const miLista = document.querySelector("#miLista");
            // recorrer el array con para construir los botones
            for (let i = 0; i < datos.length; i++) {
                // Crear el objeto del boton
                const li = document.createElement("button");
                li.id = "part-"+ datos[i].nombre;
                li.setAttribute("data-partido", datos[i].nombre);
                li.setAttribute("data-dipu", datos[i].dipu);
                li.setAttribute("data-imagen", datos[i].imagen);
                li.innerHTML += "Partido: ";
                li.innerHTML += datos[i].nombre;
                li.innerHTML += ", Diputados: ";
                li.innerHTML += datos[i].dipu;
                // Añadir un comportamiento al boton
                li.addEventListener(
                    "click",
                    (evento)=>{
                        console.log(evento);
                        console.log(evento.target);
                        let elemento = null;
                        if (evento.target.localName == "img"){
                            elemento = evento.target.parentNode;
                        }else {
                            elemento = evento.target;
                        }
                        sumados += parseInt(elemento.getAttribute("data-dipu"));
                        console.log(sumados);
                        console.log("boton pulsado: "+ elemento.id);
                    });
                const imagen = document.createElement("img");
                imagen.src =
                    "https://cursosdedesarrollo.com/pactometro/img/"
                    + datos[i].imagen;
                li.appendChild(imagen);
                /*
                                li.innerHTML += "<img src='";
                                li.innerHTML += "https://cursosdedesarrollo.com/pactometro/img/";
                                li.innerHTML += datos[i].imagen;
                                li.innerHTML += "'/>";
                                 */


                // añadir lo al final de los hijos del div de contenido
                miLista.appendChild(li);
            }
        });
}
function loaded(){
    console.log("Completamente Cargada");
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", loaded);
