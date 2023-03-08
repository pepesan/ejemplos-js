/*
Código de ejemplo de funciones
 */
//definición de la función
function imprimeAlgo(){
    console.log("Algo");
}
//invocación o llamada a la función
imprimeAlgo();

//definición de una función que devuelve un valor
function damePi(){
    return Math.PI;
}

console.log(damePi());

//definir una función a la que se le pasa un parámetro
function imprime(cadena){
    console.log(cadena);
}
// cadena = "Hola Mundo!"
imprime("Hola Mundo!");
// cadena = "Adiós Mundo Cruel!"
imprime("Adiós Mundo Cruel!");



/*
    Función sumaDeDos tiene dos parámetros numéricos y devuelve la suma de los dos
    parámetros s1, s2
 */
// s1=a=1, s2=b=5
function sumaDeDos(s1,s2){
    var res=s1+s2;
    return res;
}

var a=1;
var b=5;
// s1 = a y s2 = b
var num=sumaDeDos(a,b);
console.log(num); // 6
// s1= 3, s2=7
num = sumaDeDos(3,7);
console.log(num); // 10

console.log(sumaDeDos(1,2)); // 3

function restaDeDos(r1,r2){
    var res=r1-r2;
    return res;
}
var resta=restaDeDos(2,1);
console.log(resta); // 1
resta=restaDeDos(5,2);
console.log(resta); // 3

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

function suma_y_muestra(n1, n2) {
    console.log(n1+n2);
}
suma_y_muestra(3,4);

var s = suma_y_muestra;

for (var i=0;i<100;i++){
    s(1,2);
}


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
var longitud=miclase.alumnos.length;
longitud++;
console.log(longitud);
miclase.area=miclase.ancho*miclase.largo;
console.log(miclase);
miclase.ancho=14;
miclase.area=miclase.ancho*miclase.largo;
console.log(miclase);
console.log(miclase.alumnos.length);
console.log(miclase.alumnos[0]);
console.log(miclase.alumnos[0].nombre);
console.log(miclase.alumnos[0].edad);
console.log(miclase.alumnos[1]);
console.log(miclase.alumnos[1].nombre);
console.log(miclase.alumnos[1].edad);


//ES6

//funciones Flecha (Arrow)
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

elementos.map(({length}) => length); // [8, 6, 7, 9]

var func = x => x * x;
// sintaxis de cuerpo conciso, el "return" está implícito

var func = (x, y) => { return x + y; };
// con cuerpo de bloque, se necesita "return" explícito

// Parámetros Rest (Rest Parameters)
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,3,7,1)); // muestra 1,3,5,7

// paso por parámetro de una función
function unaFuncion(){
    console.log("algo");
}
function requiereOtraFuncion(miFuncion){
    miFuncion();
}
requiereOtraFuncion(unaFuncion);

// ejemplo de llamada a función con parámetros

function otraFuncion(s1,s2){
    return s1+s2;
}
var salida = otraFuncion(1,2);
console.log(salida);

function ejecutaFuncion(unafuncion){
    var salida = unafuncion(1,2);
    console.log(salida);
}
ejecutaFuncion(otraFuncion);

function ejecutaFuncionConParametros(
    unafuncion,
    s1 = 0,
    s2 = 0){
    var salida = unafuncion(s1,s2);
    console.log(salida);
}
ejecutaFuncionConParametros(otraFuncion);

function ejecutaFuncionConParametrosYValorPorDefecto(
    //unafuncion = (s1,s2) => {return s1+s2;},
    unafuncion = function (s1,s2){return s1+s2;},
    s1 = 0,
    s2 = 0){
    var salida = unafuncion(s1,s2);
    console.log(salida);
}
ejecutaFuncionConParametrosYValorPorDefecto();

function Suma2(s1,s2){
    return s1+s2;
}

function Resta2(s1,s2){
    return s1-s2;
}

function actua(funcionAEjecutar, s1, s2) {
    return funcionAEjecutar(s1,s2);
}

console.log(actua(Suma2,1,2));
console.log(actua(Resta2,1,2));

// funciones recursivas
function sumaRecursiva(numero) {
    if (numero>1){
        return numero + sumaRecursiva(numero-1);
    }else{
        return 1;
    }
}
salida =  sumaRecursiva(2);
console.log(salida);

// función recursiva pasada a iterativas (bucles)
function sumaRecursivaConBucle(numero){
    var valor = numero;
    numeroActual= numero;
    while (numeroActual>1){
        var numeroActual=numeroActual-1;
        valor += numeroActual;
    }
    return valor;
}
console.log(sumaRecursivaConBucle(2));


function buscaElementoEnArray(elemento, array){
    for (const indice in array) {
        if(array[indice]=== elemento){
            return indice;
        }
    }
    return -1;
}

var array = [1,2];
console.log(buscaElementoEnArray(2,array));