var filtro_marcado;
var reloj;
var tecla;
var tipo;
var contador=1;
var filtro_marcado="todos";
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

function filtro_tecla(elEvento){
	var ObjTecla = window.event || elEvento;
	tecla=ObjTecla.keyCode;
	switch (tecla){
				//letra a: casa
				case 65:
					filtro("casa");
				break;
				//letra c: coche
				case 67:
					filtro("coche");
				break;
				//letra p: persona
				case 80:
					filtro("persona");
				break;
				case 77:
					filtro("comida");
				break;
				case 84:
					filtro("todo");
				break;
	}
}
function zoom(elemento){
	document.getElementById("flecha_d").className="mostrar";
	document.getElementById("flecha_i").className="mostrar";
	console.log("hi");
	document.getElementById("img_grande").src=elemento.children[0].src;
	document.getElementById("caja_grande").className="mostrar";
}
			
function salir(){
	document.getElementById("caja_grande").className="ocultar";
	document.getElementById("flecha_d").className="ocultar";
	document.getElementById("flecha_i").className="ocultar";
}


function next(){
	console.log(filtro_marcado);
		for (var a=contador;a<document.getElementsByName("caja_foto").length;a++){
			var clase_actual=document.getElementsByName("caja_foto")[a].className.split(" ");
			if(clase_actual[0]==filtro_marcado || filtro_marcado=="todos"){
				document.getElementById("img_grande").src=document.getElementsByName("caja_foto")[a].children[0].src;
				contador++;
				break;
			}else{
				contador++;
			}
			
		}
	if(contador==document.getElementsByName("caja_foto").length){
		contador=0;
	}
}

function prev(){
	console.log(tipo);
	/* switch(tipo){
		
	} */
}