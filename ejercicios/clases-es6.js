/*
1.- Crea un fichero HTML que incluya un fichero JS externo
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
3.- Di que la clase Moto tiene una característica llamada matricula
7.- Coloca dentro de la clase Moto otra propiedad llamada km
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*/

class Moto{
    constructor(matricula="", km=0) {
        this._matricula = matricula;
        this._km = km;
    }
    /*
    10.- Crea los getter y setter de km y matricula para la clase Moto
    */
    set matricula(matricula) {
        this._matricula = matricula;
        //console.log(this._matricula);
    }

    get matricula() {
        return this._matricula;
    }

    set km(km) {
        this._km = km;
    }

    get km() {
        return this._km;
    }

}
/*

4.- Crea un objeto de la clase Moto llamado miburra
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
*/
var miburra=new Moto();
miburra.matricula="SA1234H";
/*

6.- Imprime por pantalla el valor de la matrícula de miburra
*/
console.log(miburra.matricula);
/*


9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
*/
var miburra2=new Moto();
console.log(miburra2.km);
/*

11.- Utilízalos desde el objeto miBurra
*/
miburra.km=2;
console.log(miburra.km);
miburra.matricula="1234ABC";
console.log(miburra.matricula);
/*

13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetros y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*/
var miBurra3=new Moto("1234ABB",5);
console.log(miBurra3.km);
console.log(miBurra3.matricula);
/*

14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
//var Animal=function(){
/*
function Animal(){
    this.edad=0;
}
*/
class Animal{
    constructor(edad=0){
        this.edad=edad;
    }
}

/*
15.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalico=new Animal();
/*
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log(animalico);
/*

17.- Cambia la edad de animalico a 3
18.- Imprime por pantalla la edad de animalico
*/
animalico.edad=3;
console.log(animalico.edad);

/*
19. Crea una nueva clase Gato que herede de Animal
20. El constructor de Animal le podré pasar la edad para rellenar
la edad del Animal (reescribir el constructor)
22. Modificar el constructor de la clase Gato para que admita un
parámetro que sea la edad del animal, dentro del constructor de
Gato llamar la constructor de Animal para pasar la edad que nos
pasan como parámetro al contructor de Animal
24. Incluir en la clase Gato un nuevo parámetro llamado nombre
inicializarlo a ""
 25. Modificar el constructor de Gato para incluir un nuevo parámetro
 que sea el nombre del Gato
*/
class Gato extends Animal{
    constructor(edad=0, nombre=""){
        super(edad);
        this.nombre=nombre;
    }
}
/*
 21. Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
*/
var animalico2= new Animal(2);
/*

 23. Crear un objeto de la clase Gato, llamado gatete,
 pasando como parámetro la edad 1
 */
var gatete= new Gato(1);
console.log(gatete);
/*


 26. Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole
como parámetro 0 a la edad y nombre "Nyska"
 27. Imprime el objeto por pantalla, así como su edad y su nombre
 */
var gatete2= new Gato(0,"Nyska");
console.log(gatete2);