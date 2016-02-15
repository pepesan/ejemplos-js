/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function valida(elemento){
    var valor=elemento.value;
    if(valor!="" && valor.length>=5 && valor.length<=10){
        return true;
    }else{
        //no valida
        return false;
    }
}
function ensenaErrores(campo){
    /*var midiv=document.getElementById("mensaje-error");
    midiv.innerHTML="<ul><li>Nombre: No es válido, tiene que" +
        " tener entre 5 y 10 caracteres</li></ul>";
    //alert("Ha habido un error");
    */
    campo.className="error";
}
function onBlur(evento){
    console.log("Me he ido!");
    console.log(evento.target);
    console.log(evento.target.id);
    console.log(evento.target.value);
    if(valida(evento.target)){
        //el campo valida
        console.log("El campo con id:"+evento.target.id+" valida");
        evento.target.className="valido";

    }else{
        //el campo no valida
        console.log("El campo con id:"+evento.target.id+" no valida");
        ensenaErrores(evento.target);
    }
}
function onFocus(){
    console.log("Ya estoy aquiiiiiiii! (sonido térrico!)");
}
function init(){
    console.log("DOM cargado");
    var campo1=document.getElementById("campo1");
    var campo2=document.getElementById("campo2");
    campo1.addEventListener("blur",onBlur);
    campo1.addEventListener("focus",onFocus);
    campo2.addEventListener("blur",onBlur);
    campo2.addEventListener("focus",onFocus);
}

document.addEventListener("DOMContentLoaded",init);
