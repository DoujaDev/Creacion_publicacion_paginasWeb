var totalpalabras=["Camion","Tren","Barco","Cereza","Hamburguesa","Murcielago","Ayuntamiento","Clase"];
//var totalpalabras=["Hamburguesa"]; 
var palabra=""; //es la palabra que se genera automáticamente 
var resultado="no"; // control del resultado si el usuario acierta o falla
var aciertos=""; // la cadena que contiene las letras aciertas
var fallos=""; // la cadena que contiene las letras falladas
var contador_fallos=0; // el número de los fallos
var contador_aciertos=0; // el múmero de los aciertos
var rayas=""; // una cadena que contiene las rayas a mostrar al iniciar el juego
var rayas_nuevos; // una cadena que contiene las rayas y las letras que ha acertado el usuario

// llamamos a esta funcion para inciar el juego
function iniciarjuego(){
	//iniciamos todos los elementos a vacio o a cero según el tipo del elemento
	// ponemos la imagen a estado 0 fallos
	document.getElementById("letraelegida").value="";
	document.getElementById("figura").src="0fallos.png";
	aciertos="";
	fallos="";
	rayas_nuevos="";
	rayas="";
	contador_aciertos=0;
	contador_fallos=0;
	document.getElementById("los_aciertos").innerHTML="  ";
	document.getElementById("los_fallos").innerHTML="  ";
	//generación de una palabra al azar
	var azar=parseInt((Math.random()*100) % totalpalabras.length);
	palabra = totalpalabras[azar];
	// mostrar la caja que contiene los elementos de la comprobación
	document.getElementById("caja_comprobar").className="comprobar mostrar";
	// el número de rayas mostrados depende de la longitud de la palabra generada
	for(var a=0;a<palabra.length;a++){
		rayas+="_ ";
	}
	console.log(palabra);
	console.log(rayas);
	//mostrar los rayas en la caja superior
	document.getElementById("caja_visor").innerHTML=rayas;
}
function buscarletra(){
	// las validaciones
	if (/^[a-zA-Z]$/.test(document.getElementById("letraelegida").value)==false){
		alert("Solo se admite una letra");
		document.getElementById("letraelegida").value="";
		document.getElementById("letraelegida").focus();
		return
	}
	resultado="no";
	// guardamos la letra elegida en una variable
	var letraescogida=document.getElementById("letraelegida").value.toUpperCase();
	console.log(palabra);
	// verificamos si la letra elegida ya existe en los fallos o aciertos
	var existe_a=aciertos.indexOf(letraescogida);
	var existe_f=fallos.indexOf(letraescogida);
	// si no existe comprobamos si coincide con una letra de la palabra
	if(existe_a== -1 && existe_f== -1  ){
		//recorreremos cada letra de la palabra y comprobamos si coincide con la letra elegida 
			for (i=0;i<palabra.length;i++){
				//si coincide
				if(letraescogida==palabra.charAt(i).toUpperCase()){
					// el usuario ha acertado
					//cambiamos la raya de la letra acertada con la letra
					var rayas_m=rayas.split(" ");
					rayas_m[i]=palabra.charAt(i);
					rayas_nuevos=rayas_m.join(" ");
					rayas=rayas_nuevos;
					document.getElementById("caja_visor").innerHTML=rayas_nuevos;
					//fin control de rayas
					// si la palabra tiene dos letras duplicada sólo mostramos una en los aciertos
					if(aciertos.indexOf(palabra.charAt(i).toUpperCase())== -1){
						aciertos+=palabra.charAt(i).toUpperCase();
						document.getElementById("los_aciertos").innerHTML=aciertos;
					}
					// cambiamos el resultado a si
					resultado="si";
					// incrementamos el número de aciertos
					contador_aciertos+=1;
					// si el número de aciertos igual a la longitud de la palabra el usuario gana
					if(contador_aciertos==palabra.length){
						alert("Has ganado");
						//ocultamos la caja de comprobación
						document.getElementById("caja_comprobar").className="comprobar ocultar";
					}
				}
			}
			// si el usuario a fallado
			if(resultado=="no"){
				//incrementamos el número de fallos
				contador_fallos+=1;
				// y mostramos las letras falldas
				fallos+=document.getElementById("letraelegida").value.toUpperCase();
				document.getElementById("los_fallos").innerHTML=fallos;
				//mostramos la imagen de fallos según el número de los fallos
				switch(contador_fallos){
					case 0:
					document.getElementById("figura").src="0fallos.png";
					break;
					case 1:
					document.getElementById("figura").src="1fallo.png";
					break;
					case 2:
					document.getElementById("figura").src="2fallos.png";
					break;
					case 3:
					document.getElementById("figura").src="3fallos.png";
					break;
					case 4:
					document.getElementById("figura").src="4fallos.png";
					break;
					case 5:
					document.getElementById("figura").src="5fallos.png";
					break;
					case 6:
					document.getElementById("figura").src="6fallos.png";
					break;
				}
				// si el número de los fallos igual a 6, el usuario pierda
				if(contador_fallos==6){
					// a ver
					alert("Has perdido, la palabra es: "+palabra);
					document.getElementById("caja_comprobar").className="comprobar ocultar";
					
				}
		}	
	// si ya existe la letra elegida en los aciertos o fallos, se muestra un mensaje de error
	}else{
		alert ("No puedes introducir una letra dos veces");
	}
	// iniciamos a vacio el campo de la letra elegida para comprobar la letra seguiente 
	document.getElementById("letraelegida").value="";
	document.getElementById("letraelegida").focus();
}