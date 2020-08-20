var reloj1;
var reloj2;
var contador=1;
function iniciar(){
	reloj1=setInterval("cambiar_color()",1000);
}

function cambiar_color(){
	console.log(contador);
	if(contador==5){
		document.getElementById("semaforo").src="seamforverd.png";
	}
		else if(contador==6){
			
			reloj2=setInterval("parpadiar_color()",200);
		}
	
			else if(contador==8){
				clearInterval(reloj2);
				document.getElementById("semaforo").src="seamforvermell.png";
			}
			else if(contador>=12){
				contador=0;
				document.getElementById("semaforo").src="seamforverd.png";
			}
	++contador;
}

function parpadiar_color(){
	var img_src=document.getElementById("semaforo").src.split("/");
	var img_length=img_src.length;
	if(img_src[img_length-1]=="seamforambar.png"){
		document.getElementById("semaforo").src="seamforoapagado.png";
	}
	else{
		document.getElementById("semaforo").src="seamforambar.png"
	}
}

