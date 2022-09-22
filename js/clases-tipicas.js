var mensaje = "Hola Mundo!";
var numeroLetras = mensaje.length; // numeroLetras = 11
console.log(numeroLetras);
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
var mensaje3="";
//concatenacion con +
mensaje = mensaje1 + mensaje2 + mensaje3; // mensaje ="Hola Mundo"
console.log(mensaje);
//concatenación con .concat()

mensaje=mensaje1.concat(mensaje2.concat(mensaje3));
mensaje=mensaje1.concat(mensaje2,mensaje3);
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
mensaje=mensaje1.toUpperCase();
console.log(mensaje);
console.log(mensaje1.toLowerCase());
//charAt(n)
mensaje = "HolA";
var letra = mensaje.charAt(0); // letra = H
console.log(letra);
letra = mensaje.charAt(2); // letra = l
console.log(letra);
//indexOf('')
var posicion = mensaje.indexOf('A') // posicion=3
console.log(posicion);
//lastIndexOf('')
mensaje="Hola Caracola";
var posicion = mensaje.lastIndexOf('a') //posicion=12
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
console.log(porcion);
porcion = mensaje.substr(1, 7); // porcion = "ola Mun"
console.log(porcion);

var email = "pepesan@gmail.com"
var posArroba = email.indexOf("@");
console.log(posArroba);
var domainText = email.substring(posArroba+1);
// domainText = email.substring(email.indexOf("@")+1);
console.log(domainText)
var emailUser = email.substring(0,posArroba);
console.log(emailUser);




var parrafo= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ex odio. Suspendisse congue porttitor molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus felis dolor, ac convallis dolor mattis at. Nulla molestie urna eu nulla scelerisque, at accumsan nunc tincidunt. Nam aliquam nunc non consequat convallis. Suspendisse dignissim sagittis tellus, ut volutpat urna aliquet in. Sed dictum tincidunt diam id aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Proin posuere suscipit nisi non gravida. Quisque vestibulum velit a ipsum dictum, in pulvinar nisi pellentesque. Morbi tempus, turpis ac eleifend placerat, sem velit tincidunt sem, ut efficitur sem ligula id elit. Praesent ornare dolor non sollicitudin bibendum.";


//substr coge un caracter inicial y el segundo parámetro es la longitud de los caracteres que devuelve
var email="pepesan@gmail.com";
var primero=email.substr(1,4);
console.log(primero);

primero=email.substr(4,2);
console.log(primero);
var email="pepesan@gmail.com";

email="pepesan@gmail.com";
var numArroba=email.indexOf('@'); // 7
console.log(numArroba);
var usuario=email.substr(0,numArroba); //pepesan
console.log(usuario);
var dominio=email.substring(numArroba+1);// gmail.com
console.log(dominio);


var str = "       Hello World!        ";
console.log(str.trim());

str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);

mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");
console.log(palabras);

var tags = "pepa pig, animacion, cerdo";
var etiquetas = tags.split(",");
console.log(etiquetas);
for(i in etiquetas){
    etiquetas[i]=etiquetas[i].trim();
}
console.log(etiquetas);

//el segundo parámetro es el número de elementos como mucho que quiero que me devuelva
var etiquetas = tags.split(",",1);
console.log(etiquetas);

var emails="pepesan@gmail.com,info@cursosdedesarrollo.com";
var arrayEmails = emails.split(",");
console.log(arrayEmails);

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

var array=[];
array["Hola"]="Mundo";
array["Nombre"]="Pepe";
var numeroElementos = array.length;
console.log(array);
console.log(array["Hola"]);
console.log(numeroElementos);

for(i in array){
    console.log(array[i]);
}

var array=[];
array.push("Mundo");
console.log(array);
numeroElementos = array.length;
console.log(numeroElementos);


//concatenación
var array1 = [1, 2, 3];
array2 = array1.concat([4, 5, 6]); // array2 = [1, 2, 3,4, 5, 6]
console.log(array2);
array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3,4, 5, 6]
console.log(array2);
array2 = array1.concat([4,5],[ 6, 7]); // array2 = [1, 2, 3,4, 5, 6]
console.log(array2);

//join- operación opuesta a split
var array = ["hola", "mundo"];
console.log(array);
mensaje = array.join(";");
console.log(mensaje);
console.log(palabras);
cadena1=palabras.join(";");
console.log(cadena1);

//manejo de pilas
var pila=[];
console.log(pila);
pila.push(1);
console.log(pila);
pila.push(2);
console.log(pila);
pila.push(3,4,5);
console.log(pila);
numero=pila.pop();
console.log(pila);
console.log(numero);
pila.push("Pepe","Juan");
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
cola.unshift(0,1);
console.log(cola);

//funciones de números
//NaN y isNaN
numero=1/2;
if(isNaN(numero)){
    console.log("No es un numero");
}else{
    console.log("Es un numero");
}

//de cadena a número
cadena="123";
var a = parseInt(cadena);
console.log(a);
cadena="cinco";
a = parseInt(cadena);
console.log(a);


//toFixed
numero1 = 4564.34567;
numero2=numero1.toFixed(2); // 4564.35
console.log(numero2);
numero2=numero1.toFixed(6); // 4564.345670
console.log(numero2);
numero2=numero1.toFixed(); // 4564
console.log(numero2);

