/*
1.- Crea un fichero HTML que incluya un fichero JS externo
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
3.- Di que la clase Moto tiene una característica llamada matricula
7.- Coloca dentro de la clase Moto otra propiedad llamada km
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*/
var Moto=function(matricula="", km=0){
    this.matricula=matricula;
    this.km=km;
    /*
    10.- Crea los getter y setter de km y matricula para la clase Moto
    */
    this.getKm=function(){
        return this.km;
    }
    this.setKm=function(km){
        this.km=km;
    }
    this.getMatricula=function(){
        return this.matricula;
    }
    this.setMatricula=function(matricula){
        this.matricula=matricula;
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
miburra.setKm(2);
console.log(miburra.getKm());
miburra.setMatricula("1234ABC");
console.log(miburra.getMatricula());
/*

13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetros y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*/
var miBurra3=new Moto("1234ABB",5);
console.log(miBurra3.getKm());
console.log(miBurra3.getMatricula());
/*

14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
//var Animal=function(){
function Animal(){
    this.edad=0;
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