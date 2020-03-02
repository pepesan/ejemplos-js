/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
/*
function init(){
    console.log('La página se ha cargado completamente');
}
window.onload=init;
*/
//  Funciones enlazadas
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this#Funciones_enlazadas
 */
(
    function () {
        console.log("Script cargado");
        function f(){
            return this.a;
        }

        var g = f.bind({a:"azerty"});
        console.log(g()); // azerty

        var o = {a:37, f:f, g:g};
        console.log(o.f(), o.g()); // 37, azerty
    }
)();

