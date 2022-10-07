/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var arrayVacio=[];

var arrayConDatos=[1,2,3];
console.log(arrayConDatos);
arrayConDatos [0]= 0;

var objetoVacio={

};
// variable función
var miFunction = function (){}

var objetoSimple={
    nombre_propiedad: "Valor"
};

objetoSimple.nombre_propiedad = "Otro Valor";
console.log(objetoSimple.nombre_propiedad);

objetoSimple={
    nombre_propiedad: 2,
    nombre_propiedad2: true
};

objetoSimple.nombre_propiedad2 = 27;
console.log(objetoSimple.nombre_propiedad2);

var objetoConMetodo={
    nombre_metodo: function () {
        console.log("Algo");
    },
    devuelveAlgo(){
        return "algo";
    }
};

objetoConMetodo.nombre_metodo();
console.log(objetoConMetodo.devuelveAlgo());

var objeto={
    // propiedades o atributos
    "nombre": "David",
    "apellido": "Vaquero",
    "ciudad": "Salamanca",
    "profesion": "autonomo",
    // propiedad de tipo numero
    "edad":37,
    // propiedad de tipo booleana
    "activo":true,
    // propiedad de tipo array
    "cursos": ["Javascript","HTML","CSS"],
    // encapsulamiento
    "direccion": {
        "calle":"Mayor",
        "numero": "17",
        "piso": "1º"
    },

    /*
        toString
        description: returns a string with the object content
        Args:
            None
        Returns:
            A string with the textual object's content
     */
    // propiedad de tipo función, ó método
    "toString": function(){
        //console.log(objeto);
        //console.log(objeto.nombre);
        //console.log(this.nombre);
        return "Objeto[nombre:"+this.nombre+",apellido:"+this.apellido
            +",ciudad:"+this.ciudad+",profesion:"+this.profesion+"]";
    },
    /*
        getNombre
        description: returns the nombre property
        Args:
            None
        Returns:
            The nombre property
     */
    "getNombre":function(){
        return this.nombre;
    },
    /*
        setNombre
        description: Set the nombre property by passed argument
        Args:
            - n: name to set to nombre
        Returns:
            Nothing
     */
    "setNombre": function (n) {
        this.nombre=n;
    },
    /*
        addCurso
        description: Add a new course to the end of the cursos array
        Args:
            - nombreCurso: course name to add
        Returns:
            Nothing
     */
    "addCurso": function (nombreCurso){
        this.cursos.push(nombreCurso);
    },
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
console.log(coche.marca); // Toyota
console.log(coche.modelo); // Auris
coche.modelo = "Corolla";
console.log(coche.modelo); // Corolla

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
// acceso a propiedad privada
// NO RECOMENDADO/PROHIBIDO
console.log(coche._marca);
// getter
console.log(coche.getMarca())
// setter
coche.setMarca("Audi");
console.log(coche.getMarca());


// Añadir propiedades después de definir el objeto
coche.matricula = "SA-1234-D";
console.log(coche.matricula);
// añadimos un método al objeto después de su inicialización
coche.toString = function (){
    return "Coche[ marca: "
            +this._marca
            +", modelo: "
            +this._modelo
            +", matricula: "
            +this.matricula
            +"]";
}

console.log(coche.toString());
// console.log siempre usa el toString para presentar el objeto
console.log(coche);

