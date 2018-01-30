/*
1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios
*/
/*
2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.
*/
var cliente={
    nombre:"Pepe",
    direccionFisica:"marqués de ahumada 7, Madrid",
    email:"p@p.com",
    tlf:"912345677",
    personaContacto:"Juan",
    facturacion:[4,25],
    /*
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
*/
    toString:function(){
        return "Cliente[nombre:"+this.nombre+",direccionFisica:"+this.direccionFisica+",email:"+this.email+",tlf:"+this.tlf+",personaContacto:"+this.personaContacto+"]";
    },
    /*
14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos. 
*/
    getNombre:function(){
        return this.nombre;  
    },
    setNombre:function(nombre){
        this.nombre=nombre;
    },
    getDireccionFisica:function(){
        return this.direccionFisica;  
    },
    setDireccionFisica:function(direccion){
        this.direccionFisica=direccion;
    },
    getEmail:function(){
        return this.email;  
    },
    setEmail:function(email){
        this.email=email;
    },
    getTlf:function(){
        return this.tlf;  
    },
    setTlf:function(tlf){
        this.tlf=tlf;
    },
    getPersonaContacto:function(){
        return this.personaContacto;  
    },
    setPersonaContacto:function(persona){
        this.personaContacto=persona;
    },
    /*
18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
*/
    addFactura:function(numero){
          this.facturacion.push(numero);
    },
    /*
20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion
*/
    totalFacturacion:function(){
        var suma=0;
        for( var elemento of this.facturacion){
            suma+=elemento;
        }  
        return suma;
        /*
        var suma=0;
        for (i in this.facturacion){
            var elemento = this.facturacion[i];
            suma+=elemento;
            //suma+=this.facturacion[i];
        }
        return suma;
        */
    },
    /*
22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP.
*/
    direccionFiscal:{
        calle:"General rojo",
        ciudad:"Madrid",
        piso:"7º",
        puerta:"A",
        CP:"28088"
    },
};

/*
3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
*/
var cliente2={
    nombre:"Juan",
    direccionFisica:"marqués de ahumada 5, Madrid",
    email:"o@o.com",
    tlf:"933345677",
    personaContacto:"Pepe",
    /*

12.- Añade un método toString similar en el segundo objeto
*/
    toString:function(){
        return "Cliente[nombre:"+this.nombre+",direccionFisica:"+this.direccionFisica+",email:"+this.email+",tlf:"+this.tlf+",personaContacto:"+this.personaContacto+"]";
    },
    
};
/*
4.- Imprime por pantalla el nombre del primer objeto
*/
console.log(cliente.nombre);
/*
5.- Imprime por pantalla el email del segundo objeto
*/
console.log(cliente2.email);
/*
6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"
*/
cliente.nombre="Maderas Peralta";
/*
7.- Imprime el valor del nombre del primer objeto
*/
console.log(cliente.nombre);
/*
8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"
*/
cliente2.email="info@micasuci.com";
/*
9.- Imprime el email por pantalla del segundo objeto
*/
console.log(cliente2.email);

/*
11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto
*/

console.log(cliente.toString());

/*
13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
*/
console.log(cliente2.toString());


/*
15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
*/
cliente.setNombre("David");
console.log(cliente.getNombre());
cliente.setDireccionFisica("Salamanca");
console.log(cliente.getDireccionFisica());
cliente.setEmail("pepe@pepe.com");
console.log(cliente.getEmail());
cliente.setTlf("92345678");
console.log(cliente.getTlf());
cliente.setPersonaContacto("Chari");
console.log(cliente.getPersonaContacto());
/*
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
*/
//cliente.facturacion=[4,25];
console.log(cliente);
/*
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
*/
console.log(cliente.facturacion[0]);

/*
19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
*/
cliente.addFactura(4);
console.log(cliente.facturacion.length);

/*
21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto
*/

console.log(cliente.facturacion);
console.log(cliente.totalFacturacion());

/*
23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
*/
console.log(cliente.direccionFiscal.ciudad);
/*
24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
*/
cliente.direccionFiscal.CP="28028";
console.log(cliente.direccionFiscal.CP);  

/*25.- Crea una clase llamada Cliente que maneje los datos y funciones de  el objeto cliente*/
var Cliente=function(){
    this.nombre="";
    this.direccionFisica="";    
    this.email="";
    this.tlf="";
    this.personaContacto="";
    this.facturacion=[];
    this.direccionFiscal={
        calle:"",
        ciudad:"",
        piso:"",
        puerta:"",
        CP:""
    };
    this.toString=function(){
        return "Cliente[nombre:"+this.nombre+",direccionFisica:"+this.direccionFisica+",email:"+this.email+",tlf:"+this.tlf+",personaContacto:"+this.personaContacto+"]";
    };
    this.getNombre=function(){
        return this.nombre;  
    };
    this.setNombre=function(nombre){
        this.nombre=nombre;
    };
    this.getDireccionFisica=function(){
        return this.direccionFisica;  
    };
    this.setDireccionFisica=function(direccion){
        this.direccionFisica=direccion;
    };
    this.getEmail=function(){
        return this.email;  
    };
    this.setEmail=function(email){
        this.email=email;
    };
    this.getTlf=function(){
        return this.tlf;  
    };
    this.setTlf=function(tlf){
        this.tlf=tlf;
    };
    this.getPersonaContacto=function(){
        return this.personaContacto;  
    };
    this.setPersonaContacto=function(persona){
        this.personaContacto=persona;
    };
    this.setDireccionFiscal=function(direccion){
        this.direccionFiscal=direccion;
    };
    this.getDireccionFiscal=function(){
        return this.direccionFiscal;
    }
    this.addFactura=function(numero){
          this.facturacion.push(numero);
    };
    this.totalFacturacion=function(){
        var suma=0;
        for( var elemento of this.facturacion){
            suma+=elemento;
        }  
        return suma;
        /*
        var suma=0;
        for (i in this.facturacion){
            var elemento = this.facturacion[i];
            suma+=elemento;
            //suma+=this.facturacion[i];
        }
        return suma;
        */
    };
    
};
var cliente1=new Cliente();
console.log(cliente1);