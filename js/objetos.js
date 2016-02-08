/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var objeto={
    nombre: "David",
    apellido: "Vaquero",
    ciudad: "Salamanca",
    profesion: "autonomo",
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
    }
};
console.log(objeto);
console.log(objeto.nombre);
objeto.nombre="Pepe";
console.log(objeto.nombre);
console.log(objeto.toString());
console.log(objeto.getNombre());
objeto.setNombre("Carlos");
console.log(objeto.getNombre());