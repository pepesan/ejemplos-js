var mensaje = "Hola Mundo!";
var numeroLetras = mensaje.length; // numeroLetras = 10
console.log(numeroLetras);
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
//concatenacion con +
mensaje = mensaje1 + mensaje2; // mensaje ="Hola Mundo"
console.log(mensaje);
//concatenación con .concat()
mensaje=mensaje1.concat(mensaje2);
console.log(mensaje);
//concatenación con números
var variable1 = "Hola ";
var variable2 = 3;
mensaje = variable1 + variable2; // mensaje ="Hola 3"
console.log(mensaje);
//concatenación de cadenas entre variables
mensaje = mensaje1 + " " + mensaje2 +"!";
console.log(mensaje);
mensaje1 = "Hola";
mensaje2 = " Mundo";
console.log(mensaje1.toUpperCase());
console.log(mensaje1.toLowerCase());
//charAt(n)
mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = H
letra = mensaje.charAt(2); // letra = l
console.log(letra);
//indexOf('')
var posicion = mensaje.indexOf('a')
console.log(posicion);
//lastIndexOf('')
mensaje="Hola Caracola";
var posicion = mensaje.lastIndexOf('a')
console.log(posicion);
//substring(n)
mensaje = "Hola Mundo";
var porcion = mensaje.substring(2); // porcion = "la Mundo"
console.log(porcion);
porcion = mensaje.substring(5); // porcion = "Mundo"
console.log(porcion);
porcion = mensaje.substring(7); // porcion = "ndo"
console.log(porcion);
porcion = mensaje.substring(1, 8); // porcion = "ola Mun"

var email="pepesan@gmail.com";
var numArroba=email.indexOf('@');
console.log(numArroba);
var usuario=email.substr(0,numArroba);
console.log(usuario);
var dominio=email.substr(numArroba+1,email.length-1);
console.log(dominio);

mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");
console.log(palabras);

var cadenaCsv="pepesan;contraseña;pepesan@gmail.com;Salamanca;Castellanos de Villiquera";
palabras=cadenaCsv.split(";");
console.log(palabras);

var palabra = "Hola";
var letras = palabra.split(""); // letras = ["H", "o", "l", "a"];
console.log(letras);

//Arrays
var vocales = ["a", "e", "i", "o", "u"];
var numeroVocales = vocales.length;
console.log(numeroVocales);

//concatenación
var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3,4, 5, 6]
console.log(array2);

//join- operación opuesta a split
var array = ["hola", "mundo"];
mensaje = array.join(" ");
console.log(mensaje);
cadena1=palabras.join(";");
console.log(cadena1);

//manejo de pilas
var pila=[];
console.log(pila);
pila.push(1);
console.log(pila);
pila.push(2);
console.log(pila);
pila.push(3,4);
console.log(pila);
numero=pila.pop();
console.log(pila);
console.log(numero);
pila.push(5,6);
console.log(pila);
numero=pila.pop();
console.log(pila);
console.log(numero);

//manejo de colas
var cola=[1,2,3,4,5];
console.log(cola);
numero=cola.shift();
console.log(numero);
console.log(cola);
cola.push(6);
console.log(cola);

//meter al principio (colarse!)
cola.unshift(0);
console.log(cola);

//funciones de números
//NaN y isNaN

//toFixed
numero1 = 4564.34567;
numero2=numero1.toFixed(2); // 4564.35
console.log(numero2);
numero2=numero1.toFixed(6); // 4564.345670
console.log(numero2);
numero2=numero1.toFixed(); // 4564
console.log(numero2);

