/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
//un array en una colección de objetos ordenada con un tamaño
// fijo en un determinado momento

//Array vacio en JSON
var array=[];
console.log(array.length);

//inicialización de un array de la clase Array
array=new Array();
console.log(array.length);

var array1 = [1];
console.log(array1);


array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = array1.concat(array2);
console.log(array3); // [1,2,3,4,5,6]
array3 = array1.concat(4,5,6);
console.log(array3); // [1,2,3,4,5,6]
array3 = array1.concat([4,5,6]);
console.log(array3); // [1,2,3,4,5,6]

array[0]=1;
console.log(array.length);
console.log(array[0]);
array[1]=3;
console.log(array.length);
console.log(array[1]);
//meto un elemento al final del array con valor 5
array.push(5);
console.log(array.length);
console.log(array[2]);
//quito el último elemento del array y lo devuelve
var ultimo=array.pop();
console.log(ultimo);
console.log(array.length);
console.log(array[2]);

//crear un array con n posiciones
array=new Array(100);
console.log(array.length);
console.log(array);
//recorrer un array de 100 posiciones para inicializarlo
for(var i =0;i<100;i++)
//for(indice in array)
{
    console.log(i);
    console.log(array[i]);
    //inicializamos cada posición del array con un número
    //array[i]=0;
    //inicializamos cada posición del array con una cadena
    //array[i]="Hola";
    //inicilizamos una cadena dinámica (no siempre la misma)
    array[i]="Mensaje "+ i;
    console.log(array[i]);
}
console.log(array);
//búsqueda de una cadena dentro de un array
var cadena="Mensaje 27";
for(i in array){
    console.log(i);
    console.log(array[i]);
    //comprueba en cada posición por si coincide con la cadena
    if (array[i]==cadena){
        console.log("Hemos encontrado la cadena en "+i);
        break;
    }
}

//cojo del DOM los hijos de body devuelve un array
// de objetos HTMLElement
var hijos=document.body.children;
console.log(hijos.length);
console.log(hijos);
for(i =0;i<hijos.length;i++){
    console.log(hijos[i]);
    if(hijos[i].id=="miparrafo"){
        var salida="La etiqueta "+hijos[i]+ "Contiene el id 'miparrafo'";
        console.log(salida);
        break;
    }
}

//declaraciones de arrays con cambios de longitud
array=[];
array[1]=0;
console.log(array);
array[10]=0;
console.log(array);
array[100]=0;
console.log(array);
array[1000]=0;
console.log(array);
array[10000]=0;
console.log(array);
console.log(array.length);


array=new Array(2);
array[0]=1;
array[1]=2;
console.log(array);
console.log(array[0]);
console.log(array.length);


array= new Array("Hola","Buenos","días");
console.log(array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
cadena=array.join();
console.log(cadena);
cadena=array.join("/");
console.log(cadena);
cadena=array.join(":");
console.log(cadena);

array2=new Array("Pepe","San");
array2=new Array("Pepe","San");
cadena=array2.join(":");
console.log(cadena);
