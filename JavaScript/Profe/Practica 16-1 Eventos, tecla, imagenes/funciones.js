function iniciar()
{
	document.getElementById("boton1").style.left=0+"px";
	document.getElementById("boton1").style.top=0+"px";
}
function cambiar_a_color()
{
	//cambiamos a color
	document.getElementById("boton1").src="goku.png";
	
}
function cambiar_a_bn()
{
	//cambiamos a color
	document.getElementById("boton1").src="gokubn.png";
}
function mover(eventoRecibido)
{
	var evento=window.event || eventoRecibido;
	var codigo_tecla=evento.keyCode;
	switch (codigo_tecla)
	{
		case 38: //He pulsado arriba
			if(document.getElementById("boton1").offsetTop>=150) //Para FRENAR el movimiento cuando llegue a los limites
			{	//document.getElementById("boton1").style.top para poder ASIGNAR la posición desde arriba
				//document.getElementById("boton1").offsetTop para poder LEER el valor de la posicion desde arriba
				document.getElementById("boton1").style.top=document.getElementById("boton1").offsetTop-150+"px";
			}
			break;
		case 39: //He pulsado derecha
			if(document.getElementById("boton1").offsetLeft<=900)
				{
				document.getElementById("boton1").style.left=document.getElementById("boton1").offsetLeft+150+"px";
				}
			break;
		case 40: //He pulsado abajo
			if(document.getElementById("boton1").offsetTop<=450)
				{
				document.getElementById("boton1").style.top=document.getElementById("boton1").offsetTop+150+"px";
				}
			break;
		case 37: //He pulsado izquierda
			
			if(document.getElementById("boton1").offsetLeft>=150)
			{
				document.getElementById("boton1").style.left=document.getElementById("boton1").offsetLeft-150+"px";
			}
			break;
	}
}
