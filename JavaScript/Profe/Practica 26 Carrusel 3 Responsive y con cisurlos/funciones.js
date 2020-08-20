var reloj_intervalo;
var contador=0;
var tope=0;
var temporal;
var direccion="derecha";
var foto_circulo=1;
function cambiar_foto(numero_de_foto)
{
	clearInterval(reloj_intervalo);
	switch(numero_de_foto)
	{
		case 1:
			document.getElementById("fcentral").src="img/foto2.jpg";
			document.getElementById("circuloI").src="img/activo.png"
			document.getElementById("circuloC").src="img/inactivo.png"
			document.getElementById("circuloD").src="img/inactivo.png"
			foto_circulo=1;
			break;
		case 2:
			document.getElementById("fcentral").src="img/foto1.jpg";
			document.getElementById("circuloI").src="img/inactivo.png"
			document.getElementById("circuloC").src="img/activo.png"
			document.getElementById("circuloD").src="img/inactivo.png"
			foto_circulo=2;
			break;
		case 3:
			document.getElementById("fcentral").src="img/foto3.jpg";
			document.getElementById("circuloI").src="img/inactivo.png"
			document.getElementById("circuloC").src="img/inactivo.png"
			document.getElementById("circuloD").src="img/activo.png"
			foto_circulo=3;
			break;
	}
	iniciar();
}
function calcular()
{
	//Calculamos la anchura de las fotos para saber cuando dura el bucle
	tope=document.getElementById("fcentral").offsetWidth;
	//Calculamos la posicion de altura donde van las flechas izquerda y derecha
	document.getElementById("flecha_izquierda").style.top=document.getElementById("fcentral").offsetHeight/2-document.getElementById("flechaI").offsetHeight/2+"px";
	document.getElementById("flecha_derecha").style.top=document.getElementById("fcentral").offsetHeight/2-document.getElementById("flechaD").offsetHeight/2+"px";
	//Calculamos y asignamos al altura de el slider
	document.getElementById("contenedor").style.height=document.getElementById("fcentral").offsetHeight+"px";
	//Calculammos y mostramos los botones en la parte inferior
	document.getElementById("circulos").style.top=document.getElementById("fcentral").offsetHeight-document.getElementById("circuloC").offsetHeight-25+"px";
	document.getElementById("circulos").style.left=document.getElementById("fcentral").offsetWidth/2-document.getElementById("circuloC").offsetWidth*3+"px";
	clearInterval(reloj_intervalo);
	
}
function izquierda()
{
	direccion="izquierda";
	clearInterval(reloj_intervalo);
	transicion();
	iniciar();
}
function derecha()
{
	direccion="derecha";
	clearInterval(reloj_intervalo);
	transicion();
	iniciar();
}
function iniciar()
{
	document.getElementById("contenedor").style.height=document.getElementById("fcentral").offsetHeight+"px";
	calcular();
	reloj_intervalo=setInterval("transicion()",9000);
}

function transicion()
{
	reloj_transicion=setInterval("mover()",1);
}
function mover()
{
	calcular();
	if (direccion=="derecha")
	{
		// vamos hacia la derecha
		if (contador<tope)
		{
			document.getElementById("flecha_izquierda").className="ocultar";
			document.getElementById("flecha_derecha").className="ocultar";
			document.getElementById("circulos").className="ocultar";
			document.getElementById("fotoizquierda").style.left=document.getElementById("fotoizquierda").offsetLeft+1+"px";
			document.getElementById("fotocentral").style.left=document.getElementById("fotocentral").offsetLeft+1+"px";
			document.getElementById("fotoderecha").style.left=document.getElementById("fotoderecha").offsetLeft+1+"px";
			contador++;
			
		}
		else
		{
			document.getElementById("flecha_izquierda").className="mostrar";
			document.getElementById("flecha_derecha").className="mostrar";
			document.getElementById("circulos").className="mostrar";
			contador=0;
			clearInterval(reloj_transicion);
			temporal=document.getElementById("fcentral").src;
			document.getElementById("fcentral").src=document.getElementById("fizquierda").src;
			document.getElementById("fotoizquierda").style.left=-100+"%";
			document.getElementById("fizquierda").src=document.getElementById("fderecha").src;
			document.getElementById("fotocentral").style.left=0+"%";
			document.getElementById("fderecha").src=temporal;
			document.getElementById("fotoderecha").style.left=+100+"%";
			if (foto_circulo==1)
			{
					foto_circulo=2;
					document.getElementById("circuloI").src="img/inactivo.png"
					document.getElementById("circuloC").src="img/activo.png"
					document.getElementById("circuloD").src="img/inactivo.png"
			}
			else if (foto_circulo==2)
				{
						foto_circulo=3;
						document.getElementById("circuloI").src="img/inactivo.png"
						document.getElementById("circuloC").src="img/inactivo.png"
						document.getElementById("circuloD").src="img/activo.png"
				}
					else if (foto_circulo==3)
					{
							foto_circulo=1;
							document.getElementById("circuloI").src="img/activo.png"
							document.getElementById("circuloC").src="img/inactivo.png"
							document.getElementById("circuloD").src="img/inactivo.png"
					}
		
		}
	}
	else
	{
		// vamos hacia la izquierda
		if (contador<tope)
		{
			document.getElementById("flecha_izquierda").className="ocultar";
			document.getElementById("flecha_derecha").className="ocultar";
			
			document.getElementById("circulos").className="ocultar";
			document.getElementById("fotoizquierda").style.left=document.getElementById("fotoizquierda").offsetLeft-1+"px";
			document.getElementById("fotocentral").style.left=document.getElementById("fotocentral").offsetLeft-1+"px";
			document.getElementById("fotoderecha").style.left=document.getElementById("fotoderecha").offsetLeft-1+"px";
			contador++;
		}
		else
		{
			document.getElementById("flecha_izquierda").className="mostrar";
			document.getElementById("flecha_derecha").className="mostrar";
			document.getElementById("circulos").className="mostrar2";
			contador=0;
			clearInterval(reloj_transicion);
			temporal=document.getElementById("fcentral").src;
			document.getElementById("fcentral").src=document.getElementById("fderecha").src;
			document.getElementById("fotoizquierda").style.left=-100+"%";
			document.getElementById("fderecha").src=document.getElementById("fizquierda").src;
			document.getElementById("fotoderecha").style.left=+100+"%";
			document.getElementById("fizquierda").src=temporal;
			document.getElementById("fotocentral").style.left=0+"%";
			if (foto_circulo==1)
			{
					foto_circulo=3;
					document.getElementById("circuloI").src="img/inactivo.png"
					document.getElementById("circuloC").src="img/inactivo.png"
					document.getElementById("circuloD").src="img/activo.png"
			}
			else if (foto_circulo==2)
				{
						foto_circulo=1;
						document.getElementById("circuloI").src="img/activo.png"
						document.getElementById("circuloC").src="img/inactivo.png"
						document.getElementById("circuloD").src="img/inactivo.png"
				}
					else if (foto_circulo==3)
					{
							foto_circulo=2;
							document.getElementById("circuloI").src="img/inactivo.png"
							document.getElementById("circuloC").src="img/activo.png"
							document.getElementById("circuloD").src="img/inactivo.png"
					}
		}
	}
}
