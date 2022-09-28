/*
    Autor: David Vaquero Pepesan@gmail.com
    Licencia: GPLv3
    Descripción: Programa de ejemplo de Javascript
 */
function muestraMensaje() {
    console.log('Gracias por pinchar');
}


function resalta(elemento) {
    switch(elemento.style.borderColor) {
        case 'silver':
        case 'silver silver silver silver':
        case '#c0c0c0':
            elemento.style.borderColor = 'black';
            break;
        case 'black':
        case 'black black black black':
        case '#000000':
            elemento.style.borderColor = 'silver';
            break;
    }
}