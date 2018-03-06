function inicia() {
  var nombre = "Mozilla"; // 'nombre' es una variable local creada por la función 'inicia'
  function muestraNombre() { // 'muestraNombre' es una función interna (un closure)
    console.log(nombre); // dentro de esta función usamos una variable declarada en la función padre
  }
  muestraNombre();
}
//al llamar a inicia se llama muestraNombre que es un closure
inicia(); 


var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

console.log(Counter.value()); /* Muestra 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* Muestra 2 */
Counter.decrement();
console.log(Counter.value()); /* Muestra 1 */ 



var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* Muestra 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* Muestra 2 */
Counter1.decrement();
console.log(Counter1.value()); /* Muestra 1 */
console.log(Counter2.value()); /* Muestra 0 */ 


//funciones anónimas
(function () {
  console.log('Esta función no tiene nombre y\
    se ejecutara inmediatamente');
}());

(function (uno, dos, tres) {
  console.log(uno);
  console.log(dos);
  console.log(tres);
}(1, 2, 3));