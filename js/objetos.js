/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var objeto={
    nombre: "David",
    apellido: "Vaquero",
    ciudad: "Salamanca",
    profesion: "autonomo",
    edad:37,
    activo:true,
    cursos:["Javascript","HTML","CSS"],
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
console.log(objeto.cursos);
console.log(objeto.cursos[0]);
console.log(objeto.cursos[2]);
objeto.cursos[2]="CSS3";
objeto.addCurso("CSS2");
console.log(objeto.cursos);
