/*
Código de ejemplo de funciones
 */
var a=1;
var b=2;

function sumaDeDos(s1,s2){
    var res=s1+s2;
    return res;
}

var num=sumaDeDos(a,b);
console.log(num);

function restaDeDos(r1,r2){
    var res=r1-r2;
    return res;
}
var resta=restaDeDos(2,1);
console.log(resta);
resta=restaDeDos(5,2);
console.log(resta);

var global=0;

function incGlobal(){
    global++;
}
incGlobal();
console.log(global);

for(var i=0;i<10;i++){
    incGlobal();
}
console.log(global);


var s = function suma_y_muestra(n1, n2) {
    console.log(n1+n2);
};
s(1,2);

var objeto={

};

var micoche={
    marca:"Toyota",
    matricula:"SA-2345-B",
    modelo:"Auris",
    km:12000,
    recorrer:function(numKm){
        this.km+=numKm;
    }
};

console.log(micoche);
console.log(micoche.marca);
console.log(micoche.matricula);
console.log(micoche.modelo);
micoche.modelo="Aygo";
console.log(micoche.modelo);

console.log(micoche.km);

micoche.recorrer(200);
console.log(micoche.km);

var alumno={
    nombre:"Oscar",
    edad:44
};
var alumno2={
    nombre:"Inma",
    edad:52
};
var miclase={
    ancho:12,
    largo:12,
    numAlumnos:15,
    alumnos:[
        alumno,
        alumno2
    ]
};
console.log(miclase);
console.log(miclase.ancho);
console.log(miclase.largo);
console.log(miclase.numAlumnos);
console.log(miclase.alumnos);
console.log(miclase.alumnos.length);
console.log(miclase.alumnos[0]);
console.log(miclase.alumnos[0].nombre);
console.log(miclase.alumnos[0].edad);
console.log(miclase.alumnos[1]);
console.log(miclase.alumnos[1].nombre);
console.log(miclase.alumnos[1].edad);


