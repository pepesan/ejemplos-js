/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */

function init(){
    console.log('La página se ha cargado completamente');
}
window.addEventListener("load", init);
//window.onload=init;

function validaForm() {
    let campo = document.getElementById("campo");
    if (campo.value === ""){
        return false
    }else{
        return true;
    }
}

function mostrarMensajeError(
    mensaje = "",
    identificativo = "campo-error") {
    let divError = document.getElementById(identificativo);
    divError.innerHTML = mensaje;
}

function domCargado(event) {
    console.log("El DOM se ha cargado completamente");
    let miform = document.getElementById("miform");
    miform.addEventListener(
        "submit",
        (evento)=>{
            evento.preventDefault();
            evento.stopPropagation();
            console.log("submit");
            // validar los campos del formulario
            if (validaForm()){
                // si todo va bien enviar los datos
                console.log("formulario valida");
                mostrarMensajeError("", "error-campo");
            }else{
                // si todo va mal enseñar los fallos al rellenar el form
                console.log("formulario no valida");
                mostrarMensajeError(
                    "<p>El campo es obligatorio de rellenar!</p>",
                    "error-campo");
            }
        });
}
document.addEventListener("DOMContentLoaded", domCargado);