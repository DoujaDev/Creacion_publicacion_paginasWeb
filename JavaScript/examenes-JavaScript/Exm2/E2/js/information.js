function ejercicio1(){
	window.open("https://fundaciopacopuerto.cat/","ventana1","width=400,height=300,top=100,left=150");
	// "https://fundaciopacopuerto.cat/" la dirección de la página web que se abre en la ventana nueva
	// "ventana1"  es el Nombre de la nueva ventana
	// width es el ancho,height es la la altura de la ventana nueva.
	// top y left defininen la  posición de la nueva ventana
			
}
function ejercicio2(){
	var ancho=300;
	var alto=300;
	var positionLeft=(window.screen.availWidth/2)-(ancho/2);
	var positionTop=(window.screen.availHeight/2)-(alto/2);
	window.open("http://www.google.es","ventana2","width="+ancho+",height="+alto+",top="+positionTop+",left="+positionLeft);
}

function ejercicio3(){
			alert("Tiene java "+navigator.javaEnabled());
			var informacion=
			utf8_encode("El appCodeName de la página es: "+navigator.appCodeName+"<br/>"+
			"El appName de la página es: "+navigator.appName+"<br/>"+
			"El appVersion de la página es: "+navigator.appVersion+"<br/>"+
			"El language de la página es: "+navigator.language+"<br/>"+
			"La platform de la página es: "+window.navigator.platform+"<br/>"+
			"El userAgent de la página es: "+window.navigator.userAgent+"<br/>");
			
			var plugins=navigator.plugins;
			var mensajePlugins="<br/><br/><br/>Los Plugins de la página son: ";
			for (var i in plugins)
			{
				mensajePlugins=mensajePlugins+plugins[i].name+"<br/>";
			}
			
			
			document.getElementById("mensaje").innerHTML=informacion+mensajePlugins;
}