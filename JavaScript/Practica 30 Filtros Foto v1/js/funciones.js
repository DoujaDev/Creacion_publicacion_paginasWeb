
function activa_oscuro(objeto)
{
	objeto.className="oscuro";
}
function activa_claro(objeto)
{
	objeto.className="claro";
}
function filtro(filtro_marcado)
{
	for (var a=0;a<document.getElementsByName("caja_foto").length;a++)
	{
		var clase_actual=document.getElementsByName("caja_foto")[a].className.split(" ");
		if(clase_actual[0]==filtro_marcado || filtro_marcado=="todos")
		{
			//mostrar la caja
			document.getElementsByName("caja_foto")[a].className=clase_actual[0]+" mostrar";
		}
		else
		{
			//ocultar la caja
			document.getElementsByName("caja_foto")[a].className=clase_actual[0]+" ocultar";
		}
	}
}

/* function plus(objeto){
	objeto.style.width=500+"px";
	objeto.style.height=500+"px";
	objeto.style.transition=".5s ease";

	//objeto.style.display="none"; 
	//objeto.className="mas";
}

function menos(objeto){
	objeto.style.width=200+"px";
	objeto.style.height=200+"px";
	objeto.style.transition=".5s ease";
	//objeto.style.display="none"; 
	//objeto.className="mas";
} */