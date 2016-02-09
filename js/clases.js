/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */


var array=new Array(10);

//función constructora
var Person = function () {
    this.nombre="";
    this.altura=0;
    this.peso=0;
    //this.firstName = nombre;
    //console.log('instance created');
};

var person1 = new Person();
console.log(person1);

/*
console.log(person1.firstName);

person1.firstName="Pepe";

console.log(person1.firstName);


 */
var person2 = new Person();
console.log(person2);


var Coche=function (){
    this.marca="";
    this.modelo="";
    this.bastidor="";
    this.km="";
    this.setKm=function(km){
        this.km=km;
    };
};


var coche1=new Coche();
coche1.km=21;
var coche2=new Coche();
coche2.setKm(34);
console.log(coche2.km);


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
coche2=new Coche("Toyota");
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
