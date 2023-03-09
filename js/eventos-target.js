/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function hola(event){
    console.log("Hola");
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    // Objeto del tipo HTMLButtonElement
    // REF: https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement
    var elemento =  event.target;
    switch (elemento.id) {
        case "button1":
            event.target.innerHTML="He cambiado el boton 1";
            break;
        case "button2":
            event.target.innerHTML="He cambiado el boton 2";
            break;
        case "button3":
            event.target.innerHTML="He cambiado el boton 3";
            break;
        default:
            event.target.innerHTML="He cambiado el elemento";
    }
}
// capturamos un objeto de tipo PointerEvent
function noHagasNada(evento){
    console.log("Enlace pulsado");
    console.log(evento);
    // no debería ejecutar nada más
    evento.preventDefault();
    // no debería lanzar el evento en más elementos
    evento.stopPropagation();
}
function manejaSubmit(evento){
    console.log("Formulario Enviado");
    evento.preventDefault();
    var campo = document.getElementById("nombre");
    var divError = document.getElementById("nombre-error");
    var valid = false;
    if (campo.value === ""){
        console.log("El campo está vacío");
        divError.innerHTML= "Es obligatorio rellenar el campo nombre";
    }else{
        console.log("El usuario ha rellado el campo con el valor: "+ campo.value);
        divError.innerHTML= "";
        valid = true;
        console.log(valid);
        // envio de los datos al servidor
        //evento.target.submit();
    }
}
function init(){
    console.log("DOM cargado");
    var boton1=document.getElementById("button1");
    var boton2=document.getElementById("button2");
    var boton3=document.getElementById("button3");
    var enlace1=document.getElementById("enlace1");
    var form1=document.getElementById("miform");

    boton1.addEventListener("click",hola);
    boton2.addEventListener("click",hola);
    boton3.addEventListener("click",hola);
    enlace1.addEventListener("click",noHagasNada);
    form1.addEventListener("submit",manejaSubmit);
}

document.addEventListener("DOMContentLoaded",init);


