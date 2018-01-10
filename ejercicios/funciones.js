/*
1.- Crea una función llamada calculaTotalLinea a la cual se le pasen dos parámetros llamados importe y unidades, deberá de devolver el total de multiplicar ambas cantidades
2.- Llama a la función calculaTotalLínea pasándole como parámetros 2 y 5 almacena el resultado en una variable llamada línea1
3.- Llama a la función calculaTotalLínea pasándole como parámetros 4 y 7 almacena el resultado en una variable llamada línea2
4.- Declara una variable de tipo Array llamada lineas
5.- Mete las dos variables linea1 y linea2 en el array lineas
6.- Crea una función llamada calculaBaseImponible que sea capaz de sumar todos los números almacenados en un array y devolver el resultado
7.- Llama a la función calculaBaseImponible pasándole como parámetro el array lineas, almacena el resultado en una variable llamada baseImponible
8.- Crea una función calculaIVA que calcule el IVA de la factura, para ello le meteremos dos parámetros: el primero será la base imponible y el segundo el % de IVA a calcular, devolverá el resultado de la fórmula: r=b*X%IVA donde X es el segundo parámetro, b es la base imponible y r es el resultado de la cuenta. Ejemplo si la base imponible es 100 y el IVA es del 21% el resultado deberá ser 21
9.- Llama a la función calculaIVA pasándole como parámetro la variable baseImponible y 21 como % de IVA, almacena el resultado en una variable llamada totalFactura
10.- Crea una función calculaIRPF que calcule la retención de IRPF, se le pasarán dos parámetros, el primero es la baseImponible y el segundo es el % de retención, devolverá el resultado de la siguiente fórmula: -r=b*X%IRFP r es el resultado final, X es el % de IRPF y b es la base imponible. Por ejemplo si la base imponible es 100 y el % de IRPF es el 15 el resultado será -15
11.- Llama a la función calculaIRPF pasándole como parámetros la variable baseImponible y 15 como % de IRPF almacena el valor en la variable retencion
Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de la factura
12.- Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, almacena el valor que devuelve la función en una variable llamada totalARecibir

*/