var miTimer;
var miIntervalo;

function presentaMensaje(){
    console.log("Mensaje");
}
function lanzaTimer(){
    console.log("lanzando timer");
    miTimer=setTimeout(presentaMensaje, 10000);
}
function paraTimer(){
    console.log("parando timer");
    clearTimeout(miTimer);
}
function lanzaFuncionIntervalo(){
    console.log("lanzando intervalo");
    miIntervalo=setInterval(presentaMensaje, 3000);
}
function paraFuncionIntervalo() {
    console.log("parando intervalo");
    clearInterval(miIntervalo);
}
function init(){
    console.log("Dom cargado");
    var timer=document.getElementById("timer");
    timer.addEventListener("click",lanzaTimer);
    var stopTimer=document.getElementById("stopTimer");
    stopTimer.addEventListener("click",paraTimer);
    lInterval=document.getElementById("lanzaIntervalo");
    lInterval.addEventListener("click",lanzaFuncionIntervalo)
    var pInterval=document.getElementById("paraIntervalo");
    pInterval.addEventListener("click",paraFuncionIntervalo);
}

document.addEventListener("DOMContentLoaded",init);

function loaded(){
    console.log("Página cargada completamente");
}