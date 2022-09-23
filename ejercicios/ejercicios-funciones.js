/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

//1 Crea un fichero html que tenga asociado un fichero externo Javascript
//Declara una función que devuelva el valor 2, la función se llamará devuelve2
function devuelve2(){
    return 2;
}

function suma1(a){
    a=a+1;
    return a;
}
var foo=suma1(2);

//Ejecuta la función devuelve2 y lo que devuelva imprimelo por pantalla
console.log(devuelve2());

//Declara una función que sea capaz de sumar dos números y devolver el resultado, la función se llama sumaDe2
function sumaDe2(n1,n2){
    var res=n1 + n2;
    return res;
}

//Llama a la función sumaDe2 con los número 1 y 3 e imprime el resultado por pantalla
console.log(sumaDe2(1,3));

//Declara una función que sea capaz de restar dos números y devolver el resultado la función se llama restaDe2
function restaDe2(r1,r2){
    return r1-r2;
}

//Llama a la función restaDe2 con los número 1 y 3 e imprime el resultado por pantalla
console.log(restaDe2(1,3));


//Declara una función que sea capaz de multiplicar dos números y devolver el resultado la función se llama multiplica2
function multiplica2(a,b){
    return a*b;
}

//Llama a la función multiplica2 con los número 1 y 3 e imprime el resultado por pantalla
var numero1=1;
var numero2=3;
console.log(multiplica2(numero1,numero2));

//Crea una función que devuelva un array con 7 posiciones vacías, la función se llamará creaArray
function creaArray(){
    var array=new Array(7);
    return array;
}

//Llama a la función creaArray almacena el resultado en una variable llama miArray
var miArray=creaArray();
//Crea una función que sea capaz de inicializar a 0 (colocar el valor 0 en cada posición ) el array que acabas de inicializar con el nombre inicializarArray
function inicializarArray(array){
    //inicializacion del array
    for (var i=0;i<7;i++){
        array[i]=0;
    }
    console.log(array);
    return array;
}
//Llama a la función inicializarArray con el array que tenías creado antes
miArray=inicializarArray(miArray);
console.log(miArray);
//Imprime por pantalla el array que has inicializado

//Crea una función llamada sacaBola que elija un número aleatorio entre el número 1 y 50 y lo devuelva como resultado
function sacaBola(){
    var dado=1+Math.round(Math.random()*49);
    return dado;
}

//Llama a la función sacaBola 5 veces
//Mete los resultados de las llamadas a sacaBola en un array llamado numerosPrincipales
var numerosPrincipales=new Array(5);
for (var i=0;i<5;i++){
    numerosPrincipales[i]=sacaBola();
}
console.log(numerosPrincipales);

//Crea una función llamada sacaOtraBola que elija un número aleatorio entre el número 1 y 11 y lo devuelva como resultado
function sacaOtraBola(){
    var dado=1+Math.round(Math.random()*10);
    return dado;
}
//Llama a la función sacaOtraBola dos veces
//Mete los resultados de las llamadas a sacaOtraBola en un array llamado numerosEstrella
var numerosEstrella=new Array(2);
for (var i=0;i<2;i++){
    numerosEstrella[i]=sacaOtraBola();
}
console.log(numerosEstrella);
