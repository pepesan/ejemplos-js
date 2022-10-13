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
            // busco el campo
            let campo = document.getElementById("campo");
            // validar los campos del formulario
            if (validaForm()){
                // si todo va bien enviar los datos
                console.log("formulario valida");
                // muestro el error vacío
                mostrarMensajeError("", "error-campo");
                // marco el campo con válido en css
                campo.className="input-valid";
            }else{
                // si todo va mal enseñar los fallos al rellenar el form
                console.log("formulario no valida");
                // muestro el error con mensaje
                mostrarMensajeError(
                    "<p>El campo es obligatorio de rellenar!</p>",
                    "error-campo");
                // marco el campo como error en css
                campo.className="input-error";
            }
        });
}
document.addEventListener("DOMContentLoaded", domCargado);