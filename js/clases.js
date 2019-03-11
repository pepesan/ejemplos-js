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
Coche=function (marca="",modelo="",bastidor=0,km=0){
    this.marca=marca;
    this.modelo=modelo;
    this.bastidor=bastidor;
    this.km=km;
    this.setKm=function(km=0){
        this.km=km;
    };
};


coche1=new Coche("Toyota","Auris",12345,20);
coche1=new Coche("Toyota","Auris",12345);
console.log(coche1.km);//km=0
coche1=new Coche("Toyota","Auris");
console.log(coche1.km);//km=0
console.log(coche1.bastidor);//bastidor=0
coche1=new Coche("Toyota");
console.log(coche1.km);//km=0
console.log(coche1.bastidor);//bastidor=0
console.log(coche1.modelo);//modelo=""
coche1=new Coche();
console.log(coche1.km);//km=0
console.log(coche1.bastidor);//bastidor=0
console.log(coche1.modelo);//modelo=""
console.log(coche1.marca);//marca=""
coche1=new Coche("","",0,20);
console.log(coche1.km);//km=20
console.log(coche1.bastidor);//bastidor=0
console.log(coche1.modelo);//modelo=""
console.log(coche1.marca);//marca=""
/*
coche1=new Coche();
coche1.marca="Toyota";
coche1.modelo="Auris";
coche1.bastidor=12345;
coche1.km=0;
*/
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
// el objeto instanciado previamente no se ve modificado
console.log(person);
//Si quisiera modificar ese objeto lo haría normalmente
person.apellido="San";
console.log(person.apellido);

//el nuevo objeto ya se vería afectado con la modificación hecha con prototype
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


var Persona=function () {
    this.primerNombre = "";
    this.apellido="";
};
// Definimos el constructor Estudiante
var Estudiante=function () {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this);
    /*
    this.primerNombre="";
    this.apellido="";
    */
};

var estu1=new Estudiante();
console.log(estu1);
estu1.primerNombre="Pepe";
console.log(estu1.primerNombre);


var Persona=function (primerNombre="") {
    this.primerNombre = primerNombre;
};
// Definimos el constructor Estudiante
var Estudiante=function () {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this);
};
estu1=new Estudiante();
console.log(estu1);
estu1.primerNombre="Pepe";
console.log(estu1.primerNombre);


var Persona=function (primerNombre="") {
    this.primerNombre = primerNombre;
};
// Definimos el constructor Estudiante
var Estudiante=function () {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this,"Juan");
};
estu1=new Estudiante();
console.log(estu1);
estu1.primerNombre="Pepe";
console.log(estu1.primerNombre);


var Persona=function (primerNombre="") {
    this.primerNombre = primerNombre;
};
// Definimos el constructor Estudiante
var Estudiante=function (primerNombre) {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);

};
estu1=new Estudiante("Juan");
console.log(estu1);
estu1.primerNombre="Pepe";
console.log(estu1.primerNombre);

var Persona=function (nombre="") {
    this.nombre = nombre;
};
// Definimos el constructor Estudiante
var Estudiante=function (primerNombre="", asunto="") {
    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Persona.call(this, primerNombre);

    //Inicializamos las propiedades específicas de Estudiante
    this.asunto = asunto;
};
estu1=new Estudiante("Juan");
console.log(estu1);
estu1.nombre="Pepe";
console.log(estu1.nombre);
estu1=new Estudiante("Juan","Interno");
console.log(estu1);
console.log(estu1.nombre);
console.log(estu1.asunto);
estu1.nombre="Pepe";
console.log(estu1.nombre);
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

Persona.prototype.caminar = function() {
    console.log("Estoy caminando!");
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


//Composición una clase incluye un objeto de otra clase
var Direccion=function(calle=""){
    this.calle=calle;
    this.portal="";
    this.piso="";
    this.puerta="";
    this.localidad="";
    this.provincia="";
    this.pais="";
};
var dir=new Direccion("Gran vía");

var Cliente=function(nombre=""){
    this.nombre=nombre;
    this.direccionPostal=new Direccion();
};
var c1=new Cliente();
console.log(c1);


var Cliente=function(nombre="",calle="",piso=""){
    this.nombre=nombre;
    this.direccionPostal=new Direccion(calle);
    this.direccionPostal.piso=piso;
};
var c1=new Cliente("Pepe","Gran Vía","3º");
console.log(c1);



//herencia de tres niveles
var Vehiculo=function(edad=""){
    this.edad=edad;
}

var Coche=function(edad,marca){
    Vehiculo.call(this,edad);
    this.marca=marca;
}

var Suv=function(edad,marca,traccion){
    Coche.call(this,edad,marca);
    this.traccion=traccion;
}

var miSuv=new Suv();
console.log(miSuv);
miSuv=new Suv(12,"Toyota",4);
console.log(miSuv);


//ECMASCRIPT 6
//Definición de clase con ES6
class Person {
    constructor(){
        this.nombre="";
        this.altura=0;
        this.peso=0;
    }
    //this.firstName = nombre;
    //console.log('instance created');
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
}

var persona= new Person();
console.log(persona.altura);
persona.setNombre("Pepe");
console.log(persona.getNombre());


//Herencia en ES6
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return 'Point{"x":' + this.x + ',"y":' + this.y + '}';
    }
}

var punto = new Point(2,3);
// imprimirá 2
console.log("X: "+punto.x);
// imprimirá 3
console.log("Y: "+punto.y);
// acceder al valor de una propiedad
punto.x=5;
// extraer el valor de una propiedad
// imprimirá 5 porque x en punto vale 5
console.log("X: "+punto.x);
punto.y=7;
// imprimirá 7 porque x en punto vale 7
console.log("Y: "+punto.y);

var punto2= new Point(3,4);

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true


//Métodos y atributyos estáticos
class SimpleDate {
    static setDefaultDate(year, month, day) {
        // A static property can be referred to without mentioning an instance
        // Instead, it's defined on the class
        SimpleDate._defaultDate = new SimpleDate(year, month, day);
    }

    constructor(year, month, day) {
        // If constructing without arguments,
        // then initialize "this" date by copying the static default date
        if (arguments.length === 0) {
            //atributos privados
            this._year = SimpleDate._defaultDate._year;
            this._month = SimpleDate._defaultDate._month;
            this._day = SimpleDate._defaultDate._day;

            return;
        }

        // Check that (year, month, day) is a valid date
        // ...

        // If it is, use it to initialize "this" date
        this._year = year;
        this._month = month;
        this._day = day;
    }

    addDays(nDays) {
        // Increase "this" date by n days
        // ...
    }

    getDay() {
        return this._day;
    }
}

SimpleDate.setDefaultDate(1970, 1, 1);
const defaultDate = new SimpleDate();


//Getters y Setters
class Rectangle {
    set width(w) {
        this._width = w;
    }

    get width() {
        return this._width;
    }

    set height(h) {
        this._height = h;
    }

    get height() {
        return this._height;
    }
}
var cuadro= new Rectangle();
cuadro.height=3;
cuadro.width=4;

// A function that operates on an instance of Rectangle
function f(rectangle) {
    rectangle.width = 5;
    rectangle.height = 4;

    // Verify expected result
    if (rectangle.width * rectangle.height !== 20) {
        throw new Error("Expected the rectangle's area (width * height) to be 20");
    }
}

// A square IS-A rectangle... right?
class Square extends Rectangle {
    set width(w) {
        super.width = w;

        // Maintain square-ness
        super.height = w;
    }

    set height(h) {
        super.height = h;

        // Maintain square-ness
        super.width = h;
    }
}

// But can a rectangle be substituted by a square?
//f(new Square()); // error