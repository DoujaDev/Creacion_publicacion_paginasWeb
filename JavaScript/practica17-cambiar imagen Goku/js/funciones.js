function iniciar(){
	document.getElementById("foto").style.left=0+"px";
	document.getElementById("foto").style.top=0+"px";
}	
function sobre(){
	document.getElementById("foto").src="img/goku.png"
}

function fuera(){
	document.getElementById("foto").src="img/gokubn.png"
}

function cambiar_pos(elEvento){
	var evento=window.event || elEvento;
	var codigo_tecla=evento.keyCode;
	switch(codigo_tecla){
		case 38://arriba
			if(document.getElementById("foto").offsetTop>0){
			document.getElementById("foto").style.top=document.getElementById("foto").offsetTop-150+"px";
			}
			break;
		case 40://abajo
			document.getElementById("foto").style.top=document.getElementById("foto").offsetTop+150+"px";
			console.log(document.getElementById("foto").offsetTop);
			break;
		case 39://derecha
		if(document.getElementById("foto").offsetTop<=1050){
			document.getElementById("foto").style.left=document.getElementById("foto").offsetLeft+150+"px";
		}
			console.log(document.getElementById("foto").offsetLeft);
			break;
		case 37://izquiera
			
			document.getElementById("foto").style.left=document.getElementById("foto").offsetLeft-150+"px";
			console.log(document.getElementById("foto").offsetLeft);
			break;
	}
}
