/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var arrayVacio=[];
var objetoVacio={

};
// variable función
var miFunction = function (){}

var objeto={
    // propiedades o atributos
    nombre: "David",
    apellido: "Vaquero",
    ciudad: "Salamanca",
    profesion: "autonomo",
    edad:37,
    activo:true,
    cursos:["Javascript","HTML","CSS"],
    // propiedad de tipo función, ó método
    toString: function(){
        //console.log(objeto);
        //console.log(objeto.nombre);
        //console.log(this.nombre);
        return "Objeto[nombre:"+this.nombre+",apellido:"+this.apellido
            +",ciudad:"+this.ciudad+",profesion:"+this.profesion+"]";
    },
    getNombre:function(){
        return this.nombre;
    },
    setNombre: function (n) {
        this.nombre=n;
    },
    addCurso: function (nombreCurso){
        this.cursos.push(nombreCurso);
    },
    //encapsulamiento
    direccion:{
        calle:"mayor",
        numero:14,

    }
};
console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.apellido);
objeto.nombre="Pepe";
console.log(objeto.nombre);
console.log(objeto.toString());
console.log(objeto.getNombre());
objeto.setNombre("Carlos");
console.log(objeto.getNombre());
console.log(objeto.cursos);
console.log(objeto.cursos[0]);
console.log(objeto.cursos[2]);
objeto.cursos[2]="CSS3";
objeto.addCurso("CSS2");
console.log(objeto.cursos);
console.log(objeto.direccion);
console.log(objeto.direccion.calle);


var cliente = {
    nombre: "Verónica",
    nif: "07977851A",
    email: "pepesan@gmail.com",
    tlf: "923123456",
    direccion: {
        calle: "Calle Mayor",
        numero: "19"
    },
    serviciosContratados: []
}

console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.nif);
console.log(cliente.email);
console.log(cliente.direccion.calle);
console.log(cliente.direccion.numero);
cliente.nombre = "Pepito";
cliente.direccion.numero = "20";

var coche = {
    marca: "Toyota",
    modelo: "Auris"
}
console.log(coche.marca);
console.log(coche.modelo);
coche.modelo = "Corolla";

coche = {
    _marca: "Toyota",
    _modelo: "Auris",
    getMarca: function (){
        return this._marca;
    },
    setMarca: function (marca) {
        this._marca = marca;
    },
    getModelo: function (){
        return this._modelo;
    },
    setModelo: function (modelo) {
        this._modelo = modelo;
    }
}
// getter
console.log(coche.getMarca())
// setter
coche.setMarca("Audi");
console.log(coche.getMarca());

