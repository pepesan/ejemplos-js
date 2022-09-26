console.log("Ejercicios básicos de Funciones");
/*
Define una función que sea capaz de imprimir un valor por consola.
La función se llamará imprimeConsola, no admite ningún parámetro de entrada ni de salida.
Decide tú que quieres imprimir por consola.
 */
function imprimeConsola(){
    var valor = "Algo";
    console.log(valor);
}

imprimeConsola();

/*
Define una función llamada sumaCadenas, que sea capaz de concatenar dos cadenas de caracteres,
que serán los argumentos que tenga la función como entrada y que devuelva el valor de dicha concatenación.
 */
function sumaCadenas(cadena1, cadena2){
    var resultado = cadena1 + cadena2;
    return resultado;
}
var resultadoFuncion = sumaCadenas("hola", "mundo");
console.log(resultadoFuncion);

/*
Define una función llamada creaArray que sea capaz de crear e inicializar un array de 10 posiciones,
cuyo valor de cada una de dichas posiciones sea 0, devuelve el array creado
 */
function creaArray(){
    var array = new Array(10);
    console.log(array.length);
    for (var i = 0; i<10;i++) {
        array[i] = 0;
        console.log(array[i]);
    }
    return array;
}

var miArray = creaArray();
console.log(miArray);


/*
Define una nueva función llamada creaArrayv2 que sea capaz de crear e inicializar un array de 10 posiciones
cuyo valor de cada una de ellas sea el valor que reciba como parámetro de entrada de la función,
devolverá el array generado.
 */
function creaArrayv2(valorPredefinido){
    var array = new Array(10);
    console.log(array.length);
    for (var i = 0; i<10;i++) {
        array[i] = valorPredefinido;
        console.log(array[i]);
    }
    return array;
}
miArray = creaArrayv2("hola");
console.log(miArray);

/*
Define una nueva función llamada creaArrayv3 que sea capaz de crear e inicializar un array
del mismo número de posiciones como el parámetro de entrada que recibirá la función,
poniendo como valor inicial a todos los elementos del array como otro parámetro de entrada que indique el valor inicial,
devolverá el array creado.
 */
function creaArrayv3(numeroPosiciones, valorPredefinido){
    var array = new Array(numeroPosiciones);
    console.log(array.length);
    for (var i = 0; i<numeroPosiciones;i++) {
        array[i] = valorPredefinido;
        console.log(array[i]);
    }
    return array;
}
miArray = creaArrayv3(2,0);
console.log(miArray);

/*
Define una nueva función llamada creaArrayv4 que sea capaz de crear e inicializar un array
del mismo número de posiciones como el parámetro de entrada que recibirá la función,
poniendo como valor inicial a todos los elementos del array como otro parámetro de entrada que indique el valor inicial,
devolverá el array creado. Ambos parámetros de entrada deberán tener un valor por defecto,
el número de elementos inicial del array si no nos lo pasan será de 10 y el valor inicial para inicializar las posiciones
del array será 0
 */

function creaArrayv4(numeroPosiciones=10, valorPredefinido = 0){
    var array = new Array(numeroPosiciones);
    console.log(array.length);
    for (var i = 0; i<numeroPosiciones;i++) {
        array[i] = valorPredefinido;
        console.log(array[i]);
    }
    return array;
}
miArray = creaArrayv4();
console.log(miArray);
miArray = creaArrayv4(1);
console.log(miArray);
miArray = creaArrayv4(2, "Hola");
console.log(miArray);
// si estuviéramos en Python
// miArray = creaArrayv4(valorPredefinido= "Hola");
// console.log(miArray);

/*
Crea una función llamada imprimeArray que sea capaz de imprimir por pantalla el contenido de un array,
indicando por cada elemento del array, su posición y el valor guardado en dicha posición.
La función recibirá como parámetro el array a imprimir por pantalla.
 */
function imprimeArray(arrayAImprimir){
    for (var i = 0; i<arrayAImprimir.length;i++){
        console.log("indice: "  +i + ": valor: "+ arrayAImprimir[i]);
    }
}
imprimeArray(miArray);

/*
Crea una función llamada creaCadena que devuelva una cadena de caracteres de una longitud que pasamos como parámetro.
 */

function creaCadena(longitud){
    var cadena = "";
    for (var i = 0; i<longitud; i++){
        cadena += "a";
    }
    return cadena;
}
var resultado = creaCadena(2);
console.log(resultado);

/*
Crea una función llamada creaCadenaV2 que devuelva una cadena de caracteres de una longitud que pasamos como parámetro.
Y con el segundo parámetro indicaremos el valor a colocar por defecto en cada posición de la cadena de caracteres.
 */
function creaCadenaV2(longitud, valorPorDefecto){
    var cadena = "";
    for (var i = 0; i<longitud; i++){
        cadena += valorPorDefecto;
    }
    return cadena;
}
resultado = creaCadenaV2(10, "XX");
console.log(resultado);

/*
Crea una función llamada creaCadenaV3 que devuelva una cadena de caracteres de una longitud que pasamos como parámetro.
Y con el segundo parámetro indicaremos el valor a colocar por defecto en cada posición de la cadena de caracteres.
Comprueba que los valores que te pasan como parámetros son correctos.
 */

function creaCadenaV3(longitud, valorPorDefecto){
    console.log(typeof  longitud);
    console.log(typeof  valorPorDefecto);
    // comprobamos las variables de entrada
    if (typeof longitud != "number" || typeof valorPorDefecto != "string"){
        console.log("Los parámetros pasados no son correctos");
        if (typeof longitud !="number"){
            console.log("La longitud debe ser un número");
        }
        if (typeof valorPorDefecto !="string"){
            console.log("El valor por defecto debe ser una string");
        }
        return null;
    }
    // cálculo del resultado a devolver
    var cadena = "";
    for (var i = 0; i<longitud; i++){
        cadena += valorPorDefecto;
    }
    // devolución del resultado
    return cadena;
}
resultado = creaCadenaV3(10, "XX");
console.log(resultado);
resultado = creaCadenaV3(10, 1);
console.log(resultado);
resultado = creaCadenaV3("", "XX");
console.log(resultado);