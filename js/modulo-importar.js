/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
import { cube, foo, graph } from './modulo-exportar.js';
function init(){
    console.log('La página se ha cargado completamente');

    graph.options = {
        color:'blue',
        thickness:'3px'
    };
    graph.draw();
    console.log(cube(3)); // 27
    console.log(foo);    // 4.555806215962888
}
document.addEventListener("DOMContentLoaded",init);


