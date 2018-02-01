var miTimer;
var miIntervalo;
var seg=0;
function presentaMensaje(){
    console.log("Mensaje");
}
function sumaSegundos(){
    console.log("Mensaje");
    seg++;
    document.getElementById("panel").innerHTML=seg;
}
function lanzaTimer(){
    console.log("lanzando timer");
    miTimer=setTimeout(presentaMensaje, 5000);
}
function paraTimer(){
    console.log("parando timer");
    clearTimeout(miTimer);
}
function lanzaFuncionIntervalo(){
    console.log("lanzando intervalo");
    miIntervalo=setInterval(sumaSegundos, 1000);
}
function paraFuncionIntervalo() {
    console.log("parando intervalo");
    clearInterval(miIntervalo);
    document.getElementById("panel").innerHTML=0;
    seg=0;
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