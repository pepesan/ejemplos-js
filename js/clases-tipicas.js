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