function aleatorio(a,b){
	var dado=0;
	if(!isNaN(a) && !isNaN(b)){
		if(a>0){
			dado=a+Math.round(Math.random()*(b-1));
		}else{
			dado=Math.round(Math.random()*b);
		}
	}else{
		dado=null;
	}
	return dado;
}

console.log(aleatorio(0,2));

function aleatorio16(){
	var dado=1+Math.round(Math.random()*5);
	return dado;
}

function aleatorio6() {
	var dado = 0;
	var valor = Math.random();
	if (valor > 0 && valor <= 0.16) {
		dado = 1;
	} else if (valor > 0.16 && valor <= 0.32) {
		dado = 2;
	} else if (valor > 0.32 && valor <= 0.48) {
		dado = 3;
	} else if (valor > 0.48 && valor <= 0.64) {
		dado = 4;
	} else if (valor > 0.64 && valor <= 0.80) {
		dado = 5;
	} else {
		dado = 6;
	}
	return dado;
	//console.log(dado);
}


/*
var numero=36000;
var arrayGrande=new Array(numero);
for (var i=0;i<numero;i++) {
	var total = aleatorio(1,6) + aleatorio(1,6);
	arrayGrande[i] = total;
	//console.log(total);
}
*/
