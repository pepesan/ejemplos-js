class Animal{
    constructor(edad = 0) {
        this.edad = edad;
    }
}

class Gato extends Animal{
    constructor(edad = 0, nombre = "") {
        super(edad);
        this.nombre = nombre;
    }
}

var animalico2 = new Animal(2);

var gatete = new Gato(2, "Nyska");


class Persona{
    /*
        constructor
        Args:
     */
    constructor(nombre = "", edad = 0 , genero = "") {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    toString(){
        return "Persona[nombre: "+this.nombre
            +"edad: "+this.edad+", genero: "+this.genero+"]";
    }
    obtDetalles(){
        console.log(this.toString());
    }
}

var personita = new Persona();
personita.obtDetalles();


class Estudiante extends Persona{
    constructor(
        nombre = "",
        edad = 0 ,
        genero = "",
        curso = "",
        grupo = ""
        ) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registar (curso = "", grupo = ""){
        console.log("registra");
        this.curso = curso;
        this.grupo = grupo;
    }
}


class Profesor extends Persona{
    constructor(
        nombre = "",
        edad = 0 ,
        genero = "",
        asignatura = "",
        nivel = "") {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar (asignatura){
        this.asignatura = asignatura;
    }
}

var personita =new Persona();
var estudiante = new Estudiante();
var profesor = new Profesor();

console.log(personita);
console.log(estudiante);
console.log(profesor);


class Producto{
    constructor(
        id = 0,
        nombre = "",
        precio = 0,
        descripcion = ""){
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
    }
    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }

    get precio() {
        return this._precio;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get descripcion() {
        return this._descripcion;
    }
    toString(){
        return `Producto[id: ${this._id}, nombre: \"${this._nombre}\", precio: ${this._precio}€, descripcion: \"${this._descripcion}\"]`
    }
}

var producto = new Producto();

producto.id = 0;
producto.nombre = "Cecotec";
producto.precio = 67;
producto.descripcion = "cefetera consumo";
console.log(producto.id);
console.log(producto.toString());
