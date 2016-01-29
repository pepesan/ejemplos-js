/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function cambiaColorDeFondo(colorDeFondo) {
    document.getElementById("contenidos2").style.backgroundColor=colorDeFondo;
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
function muestraMensaje() {
    console.log('Gracias por pinchar');
}
function init(){
    console.log('La página se ha cargado completamente');
    document.getElementById("pinchable").onclick = muestraMensaje;
}



