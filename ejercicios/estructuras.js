console.log("JS cargado!");

//crea un array de meses
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
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
// haz una sentencia condicional que compruebe si la segunda posición del array respecto a la última es mayor
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