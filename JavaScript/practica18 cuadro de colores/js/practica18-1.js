var reloj1="";
var reloj2="";
var reloj3="";
var reloj4="";
var medida=0;
var forma;
function tiempoMover(){
	console.log("altura "+window.innerHeight);
	console.log("anchura "+window.innerWidth);
	medida=parseInt(prompt("Introduce medida,debe ser un número entero entre 30 y 150"),10);
	if(isNaN(medida)){
		document.write("El valor introducido es incorrecto, no es un número");
		return;
	}
	if(medida<30 || medida>150){
		document.write("La medida tiene que ser entre 30 y 150");
		return;
	}
	forma=prompt("Introduce 1=Cuadro o 2=circulo?");
	if(forma!=1 && forma!=2){
		document.write("El valor introducido es incorrecto,debería ser un 1 o un 2");
		return;
	}
	if(forma=="2"){
		document.getElementById("cuadrado").style.borderRadius =(medida/2)+"px";
	}
	reloj1=setInterval(" moverizquierada()",10);
	document.getElementById("cuadrado").style.width=medida+"px";
	document.getElementById("cuadrado").style.height=medida+"px";
}
function moverizquierada(){
		if(document.getElementById("cuadrado").offsetLeft>window.innerWidth-(medida+10)){
			document.getElementById("cuadrado").style.backgroundColor="pink";
			clearInterval(reloj1);
			reloj2=setInterval(" moverabajo()",10);
		}
		else{
			document.getElementById("cuadrado").style.left=document.getElementById("cuadrado").offsetLeft+10+"px";
		}
		
}
function moverabajo(){
		if(document.getElementById("cuadrado").offsetTop>window.innerHeight-(medida+20)){
			document.getElementById("cuadrado").style.backgroundColor="green";
			clearInterval(reloj2);
			reloj3=setInterval(" moverderecha()",10);
		} 
			document.getElementById("cuadrado").style.top=document.getElementById("cuadrado").offsetTop+10+"px";
}

function moverderecha(){
		if(document.getElementById("cuadrado").offsetLeft<20){
			document.getElementById("cuadrado").style.backgroundColor="yellow";
			clearInterval(reloj3);
			reloj4=setInterval(" moverarriba()",10);
		} 
			document.getElementById("cuadrado").style.left=document.getElementById("cuadrado").offsetLeft-10+"px";
			console.log(document.getElementById("cuadrado").offsetLeft);
}


function moverarriba(){
		 if(document.getElementById("cuadrado").offsetTop<20){
			document.getElementById("cuadrado").style.backgroundColor="blue";
			clearInterval(reloj4);
			reloj1=setInterval(" moverizquierada()",10);
		} 
			document.getElementById("cuadrado").style.top=document.getElementById("cuadrado").offsetTop-10+"px";
} 

