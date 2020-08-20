var reloj_intervalo;
var contador=0;
var tope=1050;
var temporal;
function iniciar()
{
	reloj_intervalo=setInterval("transicion()",12000);
}
function transicion()
{
	reloj_transicion=setInterval("mover()",1);
}
function mover()
{
	if (contador<tope)
	{
		document.getElementById("flecha_izquierda").className="ocultar";
		document.getElementById("flecha_derecha").className="ocultar";
		document.getElementById("fotoizquierda").style.left=document.getElementById("fotoizquierda").offsetLeft+1+"px";
		document.getElementById("fotocentral").style.left=document.getElementById("fotocentral").offsetLeft+1+"px";
		document.getElementById("fotoderecha").style.left=document.getElementById("fotoderecha").offsetLeft+1+"px";
		contador++;
	}
	else
	{
		document.getElementById("flecha_izquierda").className="mostrar";
		document.getElementById("flecha_derecha").className="mostrar";
		contador=0;
		clearInterval(reloj_transicion);
		temporal=document.getElementById("fcentral").src;
		document.getElementById("fcentral").src=document.getElementById("fizquierda").src;
		document.getElementById("fotoizquierda").style.left=-1050+"px";
		document.getElementById("fizquierda").src=document.getElementById("fderecha").src;
		document.getElementById("fotocentral").style.left=0+"px";
		document.getElementById("fderecha").src=temporal;
		document.getElementById("fotoderecha").style.left=+1050+"px";
	}
}
