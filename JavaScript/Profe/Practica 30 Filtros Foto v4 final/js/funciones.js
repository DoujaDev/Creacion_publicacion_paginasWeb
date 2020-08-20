var filtro_marcado='todos';
var reloj;
var reloj_agrandar;
var reloj_reducir;
var foto_actual;
var clase_actual;
function izquierda()
{
	for(var a=foto_actual;a>=0;a--)
	{
		if(a==0)
		{
			a=document.getElementsByName("foto").length;
		}
		
		if (document.getElementsByName("caja_foto")[a-1].className==clase_actual || filtro_marcado=='todos' )
		{
			document.getElementById("imgGrande").src=document.getElementsByName("foto")[a-1].src;
			foto_actual=a-1;
			break;
		}
	}
	if (foto_actual==0)
	{
		foto_actual=document.getElementsByName("foto").length;
	}
}
function derecha()
{
	for(var a=foto_actual;a<document.getElementsByName("foto").length;a++)
	{
		if(a+1==document.getElementsByName("foto").length)
		{
			a=-1;
		}
		
		if (document.getElementsByName("caja_foto")[a+1].className==clase_actual || filtro_marcado=='todos' )
		{
			document.getElementById("imgGrande").src=document.getElementsByName("foto")[a+1].src;
			foto_actual=a+1;
			break;
		}
	}
	if (foto_actual==document.getElementsByName("foto").length)
	{
		foto_actual=0;
	}
}
function agrandar(objeto)
{
	var foto_objeto=objeto.children[0].src;
	document.getElementById("fotogrande").className="mostrar_central";
	clase_actual=objeto.className;
	document.getElementById("filtros").className="selector semiocultar";
	
	for(var aaa=0;aaa<document.getElementsByName("foto").length;aaa++)
	{
		if(document.getElementsByName("foto")[aaa].src==foto_objeto)
		{
			foto_actual=aaa; //guardo la foto que coincide con la grande para situarme
			break;
		}
	}
	document.getElementById("imgGrande").src=foto_objeto;
	reloj_agrandar=setInterval("agrandar_transicion()",5)
	ii=100;
	yy=0;
}
function agrandar_transicion()
{
	if(ii>=0)
	{
		foto=document.getElementById("imgGrande");
		//mostrar la caja
		foto.style.width= yy+"%";
		foto.style.left= (100-yy)/2+"%";
		foto.style.top= (100-yy)/2+"%";
		foto.style.opacity= yy/100;
	}
	else
	{
		//Para timer
		clearInterval(reloj_agrandar);
		document.getElementById("flechaizquierda").className="mostrar";
		document.getElementById("flechaderecha").className="mostrar";
	}
	ii--;
	yy++;
}
function desaparecer()
{
	//document.getElementById("fotogrande").className="ocultar";
	reloj_reducir=setInterval("reducir_transicion()",5)
	document.getElementById("flechaizquierda").className="ocultar";
	document.getElementById("flechaderecha").className="ocultar";
	y3=100;
	i3=0;
}
function reducir_transicion()
{
	if(i3<99)
	{
		foto=document.getElementById("imgGrande");
		//mostrar la caja
		foto.style.width= y3+"%";
		foto.style.left= (100-y3)/2+"%";
		foto.style.top= (100-y3)/2+"%";
		foto.style.opacity= y3/100;
	}
	else
	{
		//Para timer
		clearInterval(reloj_reducir);
		document.getElementById("fotogrande").className="ocultar";
		document.getElementById("filtros").className="selector semimostrar";
		
	}
	i3++;
	y3--;
}
function filtro_por_teclado(evento_recibido)
{
	var evento=window.event || evento_recibido;
	var codigo_letra=evento.keyCode;
	switch (codigo_letra)
	{
		case 84: //LA T
			filtro("todos");
			
			break;
		case 67: //LA C
			filtro("coche");
			
			break;
		case 79: //LA O
			filtro("comida");
			
			break;
		case 80: //LA P
			filtro("persona");
			
			break;
		case 65: //LA A
			filtro("casa");
			
			break;
	}
}
function activa_oscuro(objeto)
{
	objeto.className="oscuro";
}
function activa_claro(objeto)
{
	objeto.className="claro";
}
function filtro(filtro_marca)
{
	
	filtro_marcado=filtro_marca;
	y=0;
	i=100;
	reloj=setInterval("filtro_aplicar()",5);
	
}
function filtro_aplicar()
{
	if(i>0)
	{
			for (var a=0;a<document.getElementsByName("caja_foto").length;a++)
			{
				var clase_actual=document.getElementsByName("caja_foto")[a].className.split(" ");
				if(clase_actual[0]==filtro_marcado || filtro_marcado=="todos")
				{
					foto=document.getElementsByName("foto")[a];
					//mostrar la caja
					foto.style.width= y+"%";
					foto.style.left= (100-y)/2+"%";
					foto.style.top= (100-y)/2+"%";
					foto.style.opacity= y/100;
					document.getElementsByName("caja_foto")[a].className=clase_actual[0]+" mostrar";
				}
				else
				{
					//ocultar la caja
					
					document.getElementsByName("caja_foto")[a].className=clase_actual[0]+" ocultar";
				}
			}
	}
	else
	{
		//Para timer
		clearInterval(reloj);
	}
	i--;
	y++;
}
