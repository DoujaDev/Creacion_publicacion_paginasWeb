var reloj_intervalo;
var reloj_transicion;
var reloj_letras; // el reloj que controla el tiempo en que cambian las letras
var contador=0; // el contador que controla el movimiento de las fotos de Carrusel
var limit=1247; // el limite de la ventana para los fotos
var i=1; // el contador que controla el limite de la cadena de texto
var texto="";
/* con esta funcion iniciamos los relojes y los datos que necesitamos en nuestro codigo  */
function iniciar(){
	/* es el reloj que controla el Carrusel que hace que la foto central queda 12 segundos antes de pasar a la seguiente foto */
	reloj_intervalo=setInterval("transicion()",12000);
	
	/* al cargar la página mostramos el boton pausar el ocultamos el boton continuar */
	document.getElementById("pausar").style.display="block";
	document.getElementById("continuar").style.display="none";
	
	//guardAMOS la cadena de texto en una variable para utlizarla más adelante
	texto=document.getElementById("cadena").innerHTML; 
	 // iniciar el reloj para llamar a la funcion que cambia las letras en mayuscula
	reloj_letras=setInterval("cambiar_letras()",100);
}

/* la funcion que cambia las fotos de los botones enviar y cancelar cuando reciben el enfoque */
function cambiar_b(id_button){
	/* recibimos el id del boton depende de ello sabemos cual de los dos botones debemos cambiar  */
	/* si el id es del boton enviar */
	if(id_button=="enviar"){
		document.getElementById("enviar").src="botonenviar2.jpg";
	}
	/* si el id es del boton cancelar */
	else{
		document.getElementById("vaciar").src="botoncancelar2.jpg";
	}
}
/* la función que cambia las fotos de los botones enviar y cancelar cuando pierden el enfoque */
function original_b(id_button){
	/* recibimos el id del boton depende de ello sabemos cual de los dos botones debemos cambiar  */
	/* si el id es del boton enviar */
	if(id_button=="enviar"){
		document.getElementById("enviar").src="botonenviar.jpg";
	}
	/* si el id es del boton cancelar */
	else{
		document.getElementById("vaciar").src="botoncancelar.jpg";
	}
}
/* la función que cambia las fotos de los botones enviar y cancelar cuando hacemos un click sobre ellos*/
function click_b(id_button){
	/* recibimos el id del boton depende de ello sabemos cual de los dos botones debemos cambiar  */
	/* si el id es del boton enviar */
	if(id_button=="enviar"){
		document.getElementById("enviar").src="botonenviar3.jpg";
	}
	/* si el id es del boton cancelar */
	else{
		document.getElementById("vaciar").src="botoncancelar3.jpg";
	}
}


/* es el reloj que controla el tiempo y que llama a la funcion mover_foto  */
function transicion(){
	reloj_transicion=setInterval("mover_foto()",1);
}
/* esta funcion se ocupa de mover las fotos del Carrusel de izquierda a derecha */
function mover_foto(){
	/* mientras que no llegamos al limite de la ventana seguimos moviendo las fotos de 1 px hacia la izquierda  */
	if (contador<limit){
		document.getElementById("foto_izquierda").style.left=document.getElementById("foto_izquierda").offsetLeft+1+"px";
		document.getElementById("foto_central").style.left=document.getElementById("foto_central").offsetLeft+1+"px";
		document.getElementById("foto_derecha").style.left=document.getElementById("foto_derecha").offsetLeft+1+"px";
		document.getElementById("foto_derecha_2").style.left=document.getElementById("foto_derecha_2").offsetLeft+1+"px";
		contador++;
	}
	/* si llegamos al limite de la ventana iniciamos el contador a 0 y volvemos a cambiar las fotos de las capas según el orden de movimiento */
	else{
		contador=0;
		// paramos el reloj para hacer los cambios
		clearInterval(reloj_transicion);
		// guardamos la imagen f2 para no perderla en el proceso de cambio y volvemos a posicinar las capas a sus sitos originales
		temporal=document.getElementById("f2").src;
		document.getElementById("f2").src=document.getElementById("f1").src;
		document.getElementById("foto_izquierda").style.left=-1247+"px";
		
		document.getElementById("f1").src=document.getElementById("f4").src;
		document.getElementById("foto_central").style.left=0+"px"
		
		document.getElementById("f4").src=document.getElementById("f3").src;
		document.getElementById("foto_derecha").style.left=1247+"px"
		
		document.getElementById("f3").src=temporal;
		document.getElementById("foto_derecha_2").style.left=2494+"px";
		
	}
}

function cambiar_letras(){
	//comprobar si ha llegado al final de la cadena del texto
	if (i<document.getElementById("cadena").innerText.length){
		document.getElementById("cadena").innerHTML=texto.substring(0,i-1)+texto.charAt(i).toUpperCase()+texto.substring(i+1);
			// texto.substring(0,i-1) devuelve la cadena anterior a la posicion actual
			//texto.charAt(i).toUpperCase() cambia a mayuscula la posicion actual
			//texto.substring(i+1) Me devuelve la cadena posterior a la posicion actual
		i++; // con el contador controlamos si hemos llegado al final de la cadena 
	}
	//el contador i ha llegado al final de la cadena, lo iniciamos a 0
	else i=0;
			
}
// esta funcion nos permite iniciar el proceso desde el principio 
function iniciar_letras(){
	// iniciamos el contador a 0,paramos el reloj y volvemos a inciarlo
	i=0;
	clearInterval(reloj_letras);
	reloj_letras=setInterval("cambiar_letras()",100);
}
// esta funcion nos permite parar el proceso por eso ocultamos el boton pausar y mostramos el boton continuar
function parar(){
	clearInterval(reloj_letras);
	document.getElementById("pausar").style.display="none";
	document.getElementById("continuar").style.display="block";
}
// esta funcion nos permite continuar el proceso despues de pararlo por eso ocultamos el boton pausar y mostramos el boton continuar
function continuar(){
	reloj_letras=setInterval("cambiar_letras()",100);
	document.getElementById("pausar").style.display="block";
	document.getElementById("continuar").style.display="none";
}


	
		