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
