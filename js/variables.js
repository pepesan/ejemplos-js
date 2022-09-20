//declaración de una variable
var numero;
//Asignación de un valor a dicha variable
numero=1;
//impresión por consola de dicho valor de la variable
console.log(numero);
//declaración y asignación de un valor en una sola línea
var numero_2=2;
//visualizo la segunda variable por consola
console.log(numero_2);
// las variables en JS son de tipado dinámico
numero_2 = "dos";
numero_2 = 2;
// uso de UTF en contenido de valores
var vampiro = "🧛";// este es un vampiro en UTF8 🧛💃
//Calculo un resultado sumando las dos variables
var resultado = numero + numero_2;
console.log(resultado);
//declaración de varias variables a la vez
var a,b,c,d;
a=7;
console.log(a);
b=8;
console.log(b);

/*
 Extensions to the Number built-in object in ES6, including constant properties EPSILON, MIN_SAFE_INTEGER, and MAX_SAFE_INTEGER, and methods isFinite, isInteger, isSafeInteger, and isNaN.
*/

//Conversiones de tipos
//A enteros desde cadena
var variable1 = "hola";
console.log(parseInt(variable1));// devuelve NaN

var variable2 = "34";
console.log(parseInt(variable2)); // devuelve 34

var variable3 = "34hola23";
console.log(parseInt(variable3)); // devuelve 34

var variable4 = "34.23";
console.log(parseInt(variable4)); // devuelve 34

//A Float desde cadena
console.log(parseFloat(variable1));// devuelve NaN
console.log(parseFloat(variable2));// devuelve 34.0 
console.log(parseFloat(variable3));// devuelve 34.0 
console.log(parseFloat(variable4));// devuelve 34.23

//Clases y objetos
// var cadena1 = "hola mundo";
var cadena1 = new String("hola mundo");
console.log(cadena1);
var cadena2="hola mundo";
console.log(cadena2);

//propiedades de cadenas String
//longitud (número de caracteres) de una String
console.log(cadena1.length);
//inicializo otro objeto String
var cadena3=new String("Hola");
console.log(cadena3.length);
console.log(new String("Peperl").length);

// Inclusión en ES6 Plantillas de literales
var a = 5;
var b = 10;
// ojo a las comillas usadas ``
console.log(`Quince es ${a + b} y\nno ${2 * a + b}.`);
// no usar ""
//console.log("Quince es ${a + b} y\nno ${2 * a + b}.");

//definición de una variable localizada
let inmutable="Pepe";
//este tipo de variables son interesantes dentro de funciones
function mi_funcion_chorra(){
    //Esta variable es distinta
    let vari=2;
}
// a esta variable
let vari=2;

// Constantes
const a = 7;
document.writeln("a es " + a + ".");
// No es posible a=8;

//Inicialización de un objeto de la clase Date()
var fecha1 = new Date(2009, 11, 25); 
console.log(fecha1);
//Inicializo otra fecha
var fecha2 = new Date(); 
console.log(fecha2);
console.log(fecha2.getFullYear());

//escapado de caracteres especuiales
var cadena4="hola";
cadena4='valor';
cadena4="otras 'dentro'";
cadena4='otras "dentro"';
cadena4="<p id=\"miid\">parrafo</p>";
cadena4='<p id="miid">parrafo</p>';
cadena4="<p id='miid'>parrafo</p>";
console.log(cadena4);
cadena4='<p id=\'miid\'>parrafo</p>';
console.log(cadena4);
cadena4= "hola mundo, esta es \n una frase más larga";
console.log(cadena4);

// concatenación de variables de tipo cadena

cadena1 = "hola";
cadena2 = "mundo";
cadena3 = cadena1 + cadena2;
console.log(cadena3);


// método de string para manejo de mayúsculas y minúsculas

cadena4 = cadena3.toUpperCase();
console.log(cadena4);

cadena4 = cadena3.toLowerCase();
console.log(cadena4);









