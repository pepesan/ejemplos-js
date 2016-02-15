/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
function valida(){
    var campo=document.getElementById("campo");
    console.log(campo);
    console.log(campo.id);
    console.log(campo.value);
    var valor=campo.value;
    if(valor!="" && valor.length>=5 && valor.length<=10){
        //al menos han metido algo y el número de caracteres en >=5 y <=10
        //esto valida
        campo.className="valido";
        return true;var campo=document.getElementById("campo");
    }else{
        //no valida

        return false;
    }
}

function ensenaErrores(){
    var midiv=document.getElementById("mensaje-error");
    midiv.innerHTML="<ul><li>Nombre: No es válido, tiene que" +
        " tener entre 5 y 10 caracteres</li></ul>";
    //alert("Ha habido un error");
    var campo=document.getElementById("campo");
    campo.className="error";
}

function validaFormulario(evento){
    evento.preventDefault();
    if (valida()) {
        //formulario correcto
        //envia el formulario
        var formulario=document.getElementById("formulario");
        //formulario.submit();
    }else{
        //el formulario no es correcto
        //enseña los errores
        ensenaErrores();
    }
}

//cuando se pulse el botón enviar
function init(){
    console.log("DOM cargado");
    var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",validaFormulario);
    //formulario.onsubmit=validaFormulario;
}
document.addEventListener("DOMContentLoaded",init);
