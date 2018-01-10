/*
1.- Crea una función llamada calculaTotalLinea a la cual se le pasen dos parámetros llamados importe y unidades, deberá de devolver el total de multiplicar ambas cantidades
*/
function calculaTotalLinea(importe,unidades){
    return importe*unidades;
}

/*
6.- Crea una función llamada calculaBaseImponible que sea capaz de sumar todos los números almacenados en un array y devolver el resultado
*/
function calculaBaseImponible(arrayNumerico){
    var suma=0;
    //recorrer el array e ir sumando los números de manera acumulativa
    for (i in arrayNumerico){
        //console.log("Posicion"+i+":"+arrayNumerico[i]);
        //suma=suma+arrayNumerico[i]
        suma+=arrayNumerico[i];
        console.log("Suma:"+suma);
    }
    return suma;
}

/*
8.- Crea una función calculaIVA que calcule el IVA de la factura, para ello le meteremos dos parámetros: el primero será la base imponible y el segundo el % de IVA a calcular, devolverá el resultado de la fórmula: r=b*X%IVA donde X es el segundo parámetro, b es la base imponible y r es el resultado de la cuenta. Ejemplo si la base imponible es 100 y el IVA es del 21% el resultado deberá ser 21
*/
function calculaIVA(base, iva){
    return base*iva/100;
}

/*
10.- Crea una función calculaIRPF que calcule la retención de IRPF, se le pasarán dos parámetros, el primero es la baseImponible y el segundo es el % de retención, devolverá el resultado de la siguiente fórmula: -r=b*X%IRFP r es el resultado final, X es el % de IRPF y b es la base imponible. Por ejemplo si la base imponible es 100 y el % de IRPF es el 15 el resultado será -15
*/
function calculaIRPF(base,ret){
    return -1*(base*ret/100);
}

/*
12. Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de la factura
*/
function calculaTotalFactura(base,iva,ret){
    return base+iva+ret;
}