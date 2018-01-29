/*
 * Código de ejemplo de el lanzamiento
 * de una console.log mediante Javascript
 */


var array=[];
array=[2,3];
array=new Array(10);
array=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
array=new Array(2);
array.push("HOLA");

//función constructora
var Person = function () {
    this.nombre="";
    this.altura=0;
    this.peso=0;
    //this.firstName = nombre;
    //console.log('instance created');
};
//var i=0;
//var i=new Number(0);
var person1 = new Person();

array=[];
for (var i=0;i<10;i++){
    person1 = new Person();
    array.push(person1);
}
console.log(person1);
console.log(person1.nombre)
/*
console.log(person1.firstName);

person1.firstName="Pepe";

console.log(person1.firstName);


 */
var person2 = new Person();
console.log(person2);

//función normal
function hola(){
    console.log("Hola");
}

var Coche=function (){
    this.marca="";
    this.modelo="";
    this.bastidor="";
    this.km="";
    this.setKm=function(km){
        this.km=km;
    };
    this.getKm=function(){
        return this.km;
    };
};


var coche1=new Coche();
console.log(coche1);
coche1.setKm(21);
coche1.modelo="Ibiza";
coche1.bastidor=1232345;
coche1.marca="Seat";

console.log(coche1.getKm());
var coche2=new Coche();
console.log(coche2);
coche2.setKm(34);
console.log(coche2.getKm());


Coche=function (marca){
    this.marca=marca;
    this.modelo="";
    this.bastidor="";
    this.km="";
    this.setKm=function(km){
        this.km=km;
    };
};


coche1=new Coche("Toyota");
console.log(coche1.marca);
coche2=new Coche("Nissan");
console.log(coche2.marca);

Coche=function (marca,modelo){
    this.marca=marca;
    this.modelo=modelo;
    this.bastidor="";
    this.km="";
    this.setKm=function(km){
        this.km=km;
    };
};


coche1=new Coche("Toyota","Auris");
console.log(coche1.modelo);
coche2=new Coche("Toyota","Aygo");
console.log(coche2.modelo);

Coche=function (marca,modelo,bastidor){
    this.marca=marca;
    this.modelo=modelo;
    this.bastidor=bastidor;
    this.km="";
    this.setKm=function(km){
        this.km=km;
    };
};


coche1=new Coche("Toyota","Auris",12345);
console.log(coche1.bastidor);
coche2=new Coche("Toyota","Aygo",11111);
console.log(coche2.bastidor);
Coche=function (marca,modelo,bastidor,km){
    this.marca=marca;
    this.modelo=modelo;
    this.bastidor=bastidor;
    this.km=km;
    this.setKm=function(km){
        this.km=km;
    };
};


coche1=new Coche("Toyota","Auris",12345,0);
console.log(coche1.km);
console.log(coche1);
coche1={
    marca:"Toyota",
    modelo:"Auris",
    bastidor:12345,
    km:0,
    setKm:function(km){
        this.km=km;
    }
};
console.log(coche1);
coche2=new Coche("Toyota","Aygo",11111,12000);
console.log(coche2.km);


//Herencia
//Referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
// Definimos el constructor Persona
var Persona=function (primerNombre) {
    this.primerNombre = primerNombre;
};
var person=new Persona("Pepe");
console.log(person.primerNombre);
console.log(person);

// Agregamos un par de métodos a Persona.prototype
Persona.prototype.apellido="San";
console.log(person);

person=new Persona("Pepe");
console.log(person.apellido);
person.apellido="SANZ";
console.log(person.apellido);
console.log(person);

Persona.prototype.caminar = function() {
    console.log("Estoy caminando!");
};


Persona.prototype.diHola = function(){
    console.log("Hola, Soy" + this.primerNombre);
};

// Definimos el constructor Estudiante
var Estudiante=function (primerNombre, asunto) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);

    //Inicializamos las propiedades específicas de Estudiante
    this.asunto = asunto;
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
// Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype
// Esto es incorrecto por varias razones, y no menos importante, nosotros no le estamos pasando nada
// a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
// es arriba, donde nosotros llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias  a Estudiante
Estudiante.prototype.constructor = Estudiante;

// Remplazar el método "diHola"
Estudiante.prototype.diHola = function(){
    console.log("Hola, Soy " + this.primerNombre + ". Yo estoy estudiando " + this.asunto + ".");
};

// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function() {
    console.log("¡ Adios !");
};

// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola();    // muestra "Hola, Soy Carolina. Yo estoy estudianto Física Aplicada."
estudiante1.caminar();   // muestra "Yo estoy caminando !"
estudiante1.diAdios();   // muestra "¡ Adios !"

// Comprobamos que las instancias funcionan correctamente
console.log(estudiante1 instanceof Persona);      // devuelve true
console.log(estudiante1 instanceof Estudiante);   // devuelve true




var Persona=function (primerNombre,apellido) {
    this.primerNombre = primerNombre;
    this.apellido=apellido;
};
var Estudiante=function (primerNombre,apellido, asunto) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre,apellido);

    //Inicializamos las propiedades específicas de Estudiante
    this.asunto = asunto;
};
Estudiante.prototype = Object.create(Persona.prototype);    // Vea las siguientes notas
Estudiante.prototype.constructor = Estudiante;
var estudiante=new Estudiante("Pepe","San","y a ti que carajo te importa");
console.log(estudiante);

var Vehiculo=function (ruedas,matricula) {
    this.ruedas = ruedas;
    this.matricula=matricula;
};
var Moto=function (mat) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Vehiculo.call(this, 2,mat);
};
Moto.prototype = Object.create(Vehiculo.prototype);    // Vea las siguientes notas
Moto.prototype.constructor = Moto;
var miburra=new Moto("SA1234D");
console.log(miburra);



var Vehiculo=function (ruedas) {
    this.ruedas = ruedas;
    this.matricula="";
};
var Moto=function () {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Vehiculo.call(this, 2);
    this.casco=true;
};
Moto.prototype = Object.create(Vehiculo.prototype);    // Vea las siguientes notas
Moto.prototype.constructor = Moto;
var miburra=new Moto();
console.log(miburra);


/*x
public class Vehiculo{

}
public class Moto extends Vehiculo{

}
 */

var Padre=function(proPadre){
    this.proPadre=proPadre;
};
var Hija=function(proPadre,proHija){
    Padre.call(this,proPadre);
    this.proHija=proHija;
};
Hija.prototype=Object.create(Padre.prototype);
Hija.prototype.constructor=Hija;

var paqui=new Hija("ValorPadre","ValorHija");
console.log(paqui);
console.log(paqui.proHija);
console.log(paqui.proPadre);
