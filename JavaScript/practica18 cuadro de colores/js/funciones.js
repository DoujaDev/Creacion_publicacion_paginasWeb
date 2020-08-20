var reloj1="";
var reloj2="";
var reloj3="";
var reloj4="";
function tiempoMover(){
	reloj1=setInterval(" moverizquierada()",10);
}
function moverizquierada(){
		if(document.getElementById("cuadrado").offsetLeft==1058){
			document.getElementById("cuadrado").style.backgroundColor="pink";
			clearInterval(reloj1);
			reloj2=setInterval(" moverabajo()",10);
		}
		else{
			document.getElementById("cuadrado").style.left=document.getElementById("cuadrado").offsetLeft+10+"px";
		}
		
}
function moverabajo(){
		if(document.getElementById("cuadrado").offsetTop==608){
			document.getElementById("cuadrado").style.backgroundColor="green";
			clearInterval(reloj2);
			reloj3=setInterval(" moverderecha()",10);
		} 
			document.getElementById("cuadrado").style.top=document.getElementById("cuadrado").offsetTop+10+"px";
}

function moverderecha(){
		if(document.getElementById("cuadrado").offsetLeft==58){
			document.getElementById("cuadrado").style.backgroundColor="yellow";
			clearInterval(reloj3);
			reloj4=setInterval(" moverarriba()",10);
		} 
			document.getElementById("cuadrado").style.left=document.getElementById("cuadrado").offsetLeft-10+"px";
			console.log(document.getElementById("cuadrado").offsetLeft);
}


function moverarriba(){
		 if(document.getElementById("cuadrado").offsetTop==58){
			document.getElementById("cuadrado").style.backgroundColor="blue";
			clearInterval(reloj4);
			reloj1=setInterval(" moverizquierada()",10);
		} 
			document.getElementById("cuadrado").style.top=document.getElementById("cuadrado").offsetTop-10+"px";
} 

