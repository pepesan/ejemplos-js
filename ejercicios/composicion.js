/*
1.- Crea un fichero HTML relacionado con un fichero JS
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
4.- Añade los getter y setter a las clase Alumno

5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
13.- En el constructor añade un parámetro más que será el array de notas
14.- Crea un getter y un setter para notas
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
*/
var Alumno=function(nombre="", dni="", tlf="", email="",notas=[]){
    this.nombre=nombre;
    this.dni=dni;
    this.tlf=tlf;
    this.email=email;
    this.notas=notas;
    this.getNombre=function(){
        return this.nombre; 
    };
    this.setNombre=function(nombre){
        this.nombre=nombre;
    };
    this.getDni=function(){
        return this.dni; 
    };
    this.setDni=function(dni){
        this.dni=dni;
    };
    this.getTlf=function(){
        return this.tlf; 
    };
    this.setTlf=function(tlf){
        this.tlf=tlf;
    };
    this.getEmail=function(){
        return this.email; 
    };
    this.setEmail=function(email){
        this.email=email;
    };
    this.getNotas=function(){
        return this.notas; 
    };
    this.setNotas=function(notas){
        this.notas=notas;
    };
    // el objeto que se añade es del tipo Nota
    this.addNota=function(nota){
        this.notas.push(nota);
    }
    /*
    17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
    */
    this.mediaNotas=function(){
        var media=0;
        var suma=0;
        var numElementos=this.notas.length;
        for( let nota of this.notas){
            //suma+=this.notas[i].valor
            suma+=nota.valor;
        }
        media=suma/numElementos;
        return media;
    }
}
/*
3.- Crea un objeto de la clase Alumno
*/
var al1=new Alumno();
/*

6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
*/
var al2=new Alumno("Pepe","07896543A","91678543","p@p.com");
/*
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
9.- Mete los getter y los setter de la clase Nota
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales.
*/
var Nota=function(valor=0,asignatura=""){
    this.valor=valor;
    this.asignatura=asignatura;
    this.setValor=function(valor){
        this.valor=valor;
    }
    this.getValor=function(){
        return this.valor;
    }
    this.setAsignatura=function(asignatura){
        this.asignatura=asignatura;
    }
    this.getAsignatura=function(){
        return this.asignatura;
    }
}
/*
8.- Crea un objeto de la clase Nota
*/
var miNota=new Nota();
/*

 
11.- Crea un objeto de la clase Nota pero pasando los dos parámetros en su creación
*/
var miNota2=new Nota(7,"Matematicas");
/*
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio
*/
var miNota3=new Nota(9,"Física");
al2.addNota(miNota3);
console.log(al2);
/*

*/
al2.addNota(miNota2);
/*
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/
console.log(al2.mediaNotas());