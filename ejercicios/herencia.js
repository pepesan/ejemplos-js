/*
0.- Crea un fichero HTML que incluya un fichero JS externo
*/
/*

1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
*/
//var Animal=function(edad=0){
function Animal(edad=0){
    this.edad=edad;
}
/*
2.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalico=new Animal();
/*
3- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log(animalico);
/*

4.- Cambia la edad de animalico a 3
5.- Imprime por pantalla la edad de animalico
*/
animalico.edad=3;
console.log(animalico.edad);
/*
6.- Crea una nueva clase Gato que herede de Animal
9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
11.- Incluir en la clase Gato una nueva propiedad llamada nombre inicializarlo a ""
12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
*/
var Gato=function(edad=0,nombre=""){
    Animal.call(this,edad);
    this.nombre=nombre;
}
/*

8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
*/
var animalico2=new Animal(2);
/*

10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
*/
var gatete=new Gato(1);
console.log(gatete);
/*


13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
14.- Imprime el objeto por pantalla, así como su edad y su nombre
*/
var gatete2=new Gato(0,"Nyska");
console.log(gatete2.edad);
console.log(gatete2.nombre);