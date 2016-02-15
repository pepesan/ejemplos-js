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
    }else{
        //no valida
        var midiv=document.getElementById("mensaje-error");
        midiv.innerHTML="<ul><li>Nombre: No es válido, tiene que" +
            " tener entre 5 y 10 caracteres</li></ul>";
        //alert("Ha habido un error");
        campo.className="error";
    }
}
var formulario=document.getElementById("formulario");
function validaFormulario(evento){
    evento.preventDefault();
    valida();
}
formulario.onsubmit=validaFormulario;
//cuando se pulse el botón enviar

