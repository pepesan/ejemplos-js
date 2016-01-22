var edad = 17;

//comprobación de si la persona es mayor de edad o no
if (edad >= 18) {
	console.log("Ya estás registrado");
} else {
	console.log("Necesitas ser mayor de edad par registrarte!");
}

//puedo conducir un coche?
edad = 18;
var tengoCarnet = true;
var puntos = 12;
if (edad >= 18 && tengoCarnet && puntos > 0) {
	console.log("Puedo conducir");
} else {
	console.log("No puedes conducir");
}

//puedo comer carne en semana santa?
var tengoBulaPapal = false;
var existeLaInquisicion = false;
if (tengoBulaPapal || !existeLaInquisicion) {
	console.log("A comer!!!!");
} else {
	console.log("TE JODES!!!");
}

edad = 14;
if (edad < 12) {
	console.log("Todavía eres muy pequeño");
} else if (edad < 19) {
	console.log("Eres un adolescente");
} else if (edad < 35) {
	console.log("Aun sigues siendo joven");
} else {
	console.log("Piensa en cuidarte un poco más");
}

var dia = 2;
if (dia == 1) {
	console.log("Hoy es lunes.");
} else if (dia == 2) {
	console.log("Hoy es martes.");
} else if (dia == 3) {
	console.log("Hoy es miércoles.");
} else if (dia == 4) {
	console.log("Hoy es jueves.");
} else if (dia == 5) {
	console.log("Hoy es viernes.");
} else if (dia == 6) {
	console.log("Hoy es sábado.");
} else if (dia == 0) {
	console.log("Hoy es domingo.");
}

//Sentencia switch
dia = 3;
switch(dia) {
case 1:
	console.log("Hoy es lunes.");
	break;
case 2:
	console.log("Hoy es martes.");
	break;
case 3:
	console.log("Hoy es miércoles.");
	break;
case 4:
	console.log("Hoy es jueves.");
	break;
case 5:
	console.log("Hoy es viernes.");
	break;
case 6:
	console.log("Hoy es sábado.");
	break;
case 0:
	console.log("Hoy es domingo.");
	break;
default:
	console.log("Día no válido");
}

//bucles
//while
var veces = 0;
while (veces < 2) {
	console.log("Mensaje " + veces);
	veces++;
}

//do-while
veces = 0;
do {
	console.log("Mensaje " + veces);
	veces++;
} while (veces < 2);

//for
for (var i = 0; i < 3; i++) {
	console.log("Mensaje " + i);
}
/*
var j=0;
for(; j < 2; j++) {
console.log("Mensaje " + i);
}

j=0;
for(; j < 2; ) {
console.log("Mensaje " + i);
j++;
}
*/
//bucles anidados
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 5; j++) {
		console.log("Mensaje i: " + i + " Mensaje j: " + j);
	}
}
//Bucles secuenciados
for (var i = 0; i < 2; i++) {
	console.log("Mensaje i" + i);
}
for (var j = 0; j < 5; j++) {
	console.log("Mensaje j: " + j);
}

//for para recorrer un array
//Declaración de un array
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//for de 7 vueltas
for (var i = 0; i < dias.length; i++) {
	//imprimo cada posición del array dias[i], como varia i
	console.log(dias[i]);
}

console.log(dias);
console.log(dias[0]);
console.log(dias[1]);
console.log(dias[6]);
//for in recorre un array de una manera más sencilla de escribir
for (i in dias) {
	console.log(dias[i]);
}

//recorrer un objeto predefinido en Javascript
for (propiedad in document){
	console.log(propiedad);
}

var cadena6="Hola mundo!";
for (i in cadena6){
	console.log(cadena6[i]);
}


