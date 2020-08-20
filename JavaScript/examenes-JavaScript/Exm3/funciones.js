var cuadro="grande"; //variable que guarda el estado actual del cuadro, si es grande:100px o pequeño:50px
var medida_limite_f=0; //Para poder frenar el cuadro cuando llegue a los limites del movimiento abajo y derecha
var medida_limite_i=0; //Para poder frenar el cuadro cuando llegue a los limites del movimiento arriba y izquierda
var medida_cuadro=100;// esta variable es para guardar la medida actual del cuadro

// esta funcón se utliza para cambiar el color del cuadro en rojo
function colorrojo(){
	document.getElementById("c1").style.backgroundColor="red";	
}
// esta función se utliza para cambiar el color del cuadro en blanco
function colorblanco(){
	document.getElementById("c1").style.backgroundColor="white";	
}
// esta función se utliza para cambiar el tamaño  del cuado
function canvimida(){
	// si el cuadro esta grande: width igual a 100px  cambiamos el estado del cuadro a pequeño y su medida del cuadro a 50px
	if(cuadro=="grande"){
		cuadro="pequeno";
		medida_cuadro=50; // cambiamos la medida actuale del cuadro a 50
		document.getElementById("c1").style.width=50+"px";	
		document.getElementById("c1").style.height=50+"px";
	}
	// si no, si esta paqueño: width igual a 50px, cambiamos el estado del cuadro a grande y su medida a 100px
	else{
		cuadro="grande";
		medida_cuadro=100; // cambiamos la medida actuale del cuadro a 100
		document.getElementById("c1").style.width=100+"px";	
		document.getElementById("c1").style.height=100+"px";
	}
		
}

function mover(Elevento){
	// para captar el evento cuando se pulsa un teclado
	var evento=window.event || Elevento;
	// codigo_tecla es el número del teclado que ha pulsado el usuario
	var codigo_tecla=evento.keyCode;
	// especificamos los limites segun el estado del cuadro si es pequeño o grande
	if(cuadro=="pequeno") {
		medida_limite_f=80; 
		medida_limite_i=20;
	}
	else{
		medida_limite_f=0;
		medida_limite_i=50
	}
	//console.log(medida_limite_f);
	//console.log(medida_limite_i);
	//según la tecla que ha pulsado el usuario se produce un movimiento hace arriba,abajo,dercha o izquierda
	switch (codigo_tecla)
	{
		case 38: //He pulsado arriba
			if(document.getElementById("c1").offsetTop>medida_limite_i){	
				document.getElementById("c1").style.top=document.getElementById("c1").offsetTop-(medida_cuadro/2)+"px";
			}
			break;
		case 39: //He pulsado derecha
			if(document.getElementById("c1").offsetLeft<(window.innerWidth-150)+medida_limite_f)
				{
				document.getElementById("c1").style.left=document.getElementById("c1").offsetLeft+(medida_cuadro/2)+"px";
				}
			break;
		case 40: //He pulsado abajo
			if(document.getElementById("c1").offsetTop<(window.innerHeight-160)+medida_limite_f)
				{
				document.getElementById("c1").style.top=document.getElementById("c1").offsetTop+(medida_cuadro/2)+"px";
				}
			break;
		case 37: //He pulsado izquierda
			
			if(document.getElementById("c1").offsetLeft>medida_limite_i)
			{
				document.getElementById("c1").style.left=document.getElementById("c1").offsetLeft-(medida_cuadro/2)+"px";
			}
			break;
	}
}

function centrar(Elevento){
	// para captar el evento cuando se pulsa un teclado
	var evento=window.event || Elevento;
	// codigo_tecla es el codigo de la tecla que ha pulsado el usuario
	var codigo_tecla=evento.keyCode;
	// si el usuario pulsa el teclado c que tiene como codigo keycode el número 67, centramos el cuadro
	if(codigo_tecla==67){
		// window.innerWidth para saber el ancho de la ventna actual
		var ancho=window.innerWidth;
		// window.innerWidth para saber la altura de la ventna actual
		var altura=window.innerHeight;
		//calculamos la posición del cuadro para centrarlo
		var posicion_h=(ancho/2)-(medida_cuadro/2);
		var posicion_v=(altura/2)-(medida_cuadro/2);
		// centramos el cuadro con las posiciones que hemos calculado
		document.getElementById("c1").style.left=posicion_h+"px";
		document.getElementById("c1").style.top=posicion_v+"px";
		//console.log(ancho+","+altura);
	}
}