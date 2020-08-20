var totalpalabras=["Camion","Tren","Barco","Cereza","Hamburguesa","Murcielago","Ayuntamiento","Clase"];
//var totalpalabras=["CAMION"];
var palabra="";
function iniciarjuego()
{
	var azar=parseInt((Math.random()*100) % totalpalabras.length);
	palabra = totalpalabras[azar];
}
function buscarletra()
{
	if (/^[a-zA-Z]$/.test(document.getElementById("letraelegida").value)==false)
	{
		alert("Solo se admite una letra");
		document.getElementById("letraelegida").value="";
		document.getElementById("letraelegida").focus();
		return
	}
	
	var letraescogida=document.getElementById("letraelegida").value.toUpperCase();
	var resultado="NO";
	for (i=0;i<palabra.length;i++)
	{
		console.log(palabra.charAt(i));
		if(letraescogida==palabra.charAt(i))
		{
			resultado="SI";
		}
	
	}
	alert (resultado);
	document.getElementById("letraelegida").value="";
	document.getElementById("letraelegida").focus();
}