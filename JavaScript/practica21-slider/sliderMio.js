var relojTransicion;
var relojmuestra;
var contador=1;
var tope=300;

function iniciar(){
	relojmuestra=setInterval("inciarMovemiento()",5000);
}
function inciarMovemiento(){
	relojTransicion=setInterval("moverFoto()",10);
}
function moverFoto(){
	if(contador<tope){
		document.getElementById("foto1").style.left=document.getElementById("foto1").offsetLeft+1+"px";
		document.getElementById("foto2").style.left=document.getElementById("foto2").offsetLeft+1+"px";
		document.getElementById("foto3").style.left=document.getElementById("foto3").offsetLeft+1+"px";
		document.getElementById("foto4").style.left=document.getElementById("foto4").offsetLeft+1+"px";
		document.getElementById("foto0").style.left=document.getElementById("foto0").offsetLeft+1+"px";
		++contador;
	}
	else{
		contador=1;
		clearInterval(relojTransicion);
	}
	
	
/* 	if(document.getElementById("foto5").offsetLeft>window.innerWidth-300){
		//clearInterval(reloj);
		document.getElementById("foto5").style.left=document.getElementById("foto1").offsetLeft-300;
	}
	if(document.getElementById("foto4").offsetLeft>window.innerWidth-300){
		//clearInterval(reloj);
		document.getElementById("foto4").style.left=document.getElementById("foto5").offsetLeft-300;
	}
	if(document.getElementById("foto3").offsetLeft>window.innerWidth-300){
		//clearInterval(reloj);
		document.getElementById("foto3").style.left=document.getElementById("foto4").offsetLeft-300;
	}
	if(document.getElementById("foto2").offsetLeft>window.innerWidth-300){
		//clearInterval(reloj);
		document.getElementById("foto2").style.left=document.getElementById("foto3").offsetLeft-300;
	}
	if(document.getElementById("foto1").offsetLeft>window.innerWidth-300){
		//clearInterval(reloj);
		document.getElementById("foto1").style.left=document.getElementById("foto2").offsetLeft-300;
	}*/
} 