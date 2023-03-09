console.log("JS cargado!");

//crea un array de meses
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio", "Julio","Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
//mostrar por pantalla los doce nombres
for(var i in meses){
    console.log(meses[i]);
}

// tomando este array como referencia
var valores=[true, 5, false, "hola","adios",2];

//imprime por pantalla los valores numéricos
console.log(valores[1]);
console.log(valores[5]);
//imprime por pantalla los valores string
console.log(valores[3]);
console.log(valores[4]);
//imprime por pantalla la suma de los dos números
var res=valores[1]+valores[5];
console.log(res);
// haz una sentencia condicional que compruebe si la segunda posición del array 
// respecto a la última es mayor
if(valores[1]>valores[5]){
    console.log("Es mayor!");
}

//Crea un array que tenga 10 posiciones
var diez=[];
for(var i=0 ;i<10;i++){
    diez.push(0);
}
console.log(diez);
/*
diez= new Array(10);
console.log(diez);
*/

//Recorre el array con todos los tipos de bucle e imprime sus valores por pantalla
//while
var i=0;
while(i<10){
    console.log(diez[i]);
    i++;
}
//do-while
i=0;
do{
    console.log(diez[i]);
    i++;
}while(i<10);
//for
for(var i=0;i<10;i++){
    console.log(diez[i]);
}
//for-in (each)
for ( var i in diez){
    console.log(diez[i]);
}

//Crea un array que tenga 20 posiciones
var veinte=[];
for(var i=0 ;i<20;i++){
    veinte.push(0);
}
console.log(veinte);
/*
veinte= new Array(20);
console.log(veinte);
*/

//Recorre el array con todos los tipos de bucle e imprime sus valores por pantalla
//while
var i=0;
while(i<20){
    console.log(veinte[i]);
    i++;
}
//do-while
i=0;
do{
    console.log(veinte[i]);
    i++;
}while(i<20);
//for
for(var i=0;i<20;i++){
    console.log(veinte[i]);
}
//for-in (each)
for ( var i in veinte){
    console.log(veinte[i]);
}


//dependiendo de un número de errores.. 
/*
1-> "No lo has hecho mal"
2-> "Puede pasar"
"Black"->"Numero de consejeros de Bankia"
el resto->"Suspendido"
*/
var numerrores=1;
switch(numerrores){
    case 1:
        console.log("No lo has hecho mal");
        break;
    case 2:
        console.log("Puede pasar");
        break;
    case "Black":
        console.log("Bankia tenía 11 consejeros, empezando por Rodrigo Rato...");
        break;
    default: 
        console.log("Suspendido!");
}

//bucle que de 10 vueltas pero que tenga alzheimer y se olvide de la mitad
for (var i=0;i<10;i+=2){
    console.log(i);
}


//Ejercicios de repaso
/*
1.- Crea un array de 200 posiciones
*/
/*
2.- Imprime por pantalla los datos del array del ejercicio 1
*/
var dosc=[];
for (var i=0;i<200;i++){
    dosc.push(0);
    console.log(dosc[i]);
}
//console.log(dosc);
/*
3.- Cambia los datos de las posiciones 4, 7 y 18 del array y pon un valor de tipo String
*/
dosc[4]="Hola!!!";
dosc[7]="Hola!!!";
dosc[18]="Hola!!!";
/*
4.- En las posiciones 9, 34 y 45 pon un valor booleano
*/
var i=0;
dosc[i]=true;
dosc[34]=false;
dosc[45]=false;
/*
5.- Crea un array de 30 posiciones
*/
var tre=[];
for (var i=0;i<30;i++){
    tre[i]=0;
}

/*
6. Recorre el array anterior con todos los tipos de bucle (while, do-while, for, for-in) e imprime por pantalla los datos
*/
var i=0;
while(i<30){
    console.log(tre[i]);
    i++;
}


var i=0;
do{
    console.log(tre[i]);
    i++;
}while(i<30);

for(var i=0;i<30;i++){
    console.log(tre[i]);
}


for( var otra_cosa in tre){
    console.log(tre[otra_cosa]);
}
/*
7.- Define una variable booleana llamada tengoCarnet
*/
var tengoCarnet;
tengoCarnet=false;
/*
8.- Define una sentencia condicional para que si la variable tengoCarnet es true saque un mensaje por pantalla diciendo que puedo conducir
*/
if(tengoCarnet){
    console.log("Puedo conducir");
}
/*
9.- Define una variable llamada nota (como la de un examen)
*/
var nota=7;

/*
10. Haz un código para que dependiendo de dicha nota si es menor que 5 sea un suspenso, entre 5 y 7 un aprobado, entre 7 y 9 un notable y entre 9 y 10 un sobresaliente
*/
if(nota<5){
    console.log("Suspendido!");
}else  if(nota<7 && nota>=5){
        console.log("Aprobado");
}else  if(nota<9 && nota>=7){
        console.log("Notable");
}else  if(nota<=10 && nota>=9){
        console.log("Sobresaliente");
}else  if(nota>10){
        console.log("Matrícula de honor");
}else{
    console.log("¿Cómo cojones puntuas tu mamon!!!?")
}