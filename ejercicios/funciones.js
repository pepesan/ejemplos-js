/*
2.- Llama a la función calculaTotalLínea pasándole como parámetros 2 y 5 almacena el resultado en una variable llamada línea1
*/
var linea1=calculaTotalLinea(2,5);
console.log(linea1);
/*
3.- Llama a la función calculaTotalLínea pasándole como parámetros 4 y 7 almacena el resultado en una variable llamada línea2
*/
var linea2=calculaTotalLinea(4,7);
console.log(linea2);
/*
4.- Declara una variable de tipo Array llamada lineas
*/
var lineas=[];
console.log(lineas);
/*
5.- Mete las dos variables linea1 y linea2 en el array lineas
*/
//cambia la primera posición del array
lineas[0]=linea1;
console.log(lineas);
//añade un elemento al array
lineas.push(linea2);
console.log(lineas);
lineas=[linea1,linea2];
console.log(lineas);
//lineas=[2,3,4,5,6,7,8,9999,90,1213,12344,133242];

/*
7.- Llama a la función calculaBaseImponible pasándole como parámetro el array lineas, almacena el resultado en una variable llamada baseImponible
*/
var baseImponible=calculaBaseImponible(lineas);
console.log("baseImponible:"+baseImponible);

/*
var otroArray=[1,2,3];
console.log(otroArray);
var baseImponible=calculaBaseImponible(otroArray);
console.log("baseImponible:"+baseImponible);
*/

/*
9.- Llama a la función calculaIVA pasándole como parámetro la variable baseImponible y 21 como % de IVA, almacena el resultado en una variable llamada totalFacturaIVA
*/
var totalFacturaIVA=calculaIVA(baseImponible,21);
console.log("TotalFacturaIVA:"+totalFacturaIVA);

/*
11.- Llama a la función calculaIRPF pasándole como parámetros la variable baseImponible y 15 como % de IRPF almacena el valor en la variable retencion
*/
var retencion=calculaIRPF(baseImponible,15);
console.log("Retencion:"+retencion);

/*
13.- Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, almacena el valor que devuelve la función en una variable llamada totalARecibir

*/

var totalARecibir=calculaTotalFactura(baseImponible, totalFacturaIVA,retencion);
console.log("Total:"+totalARecibir);