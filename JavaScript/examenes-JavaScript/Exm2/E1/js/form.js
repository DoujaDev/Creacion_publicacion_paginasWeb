function operaciones(){
	var subtotal1=0; /* la variable donde se guarda el subtotal 1 que es la suma de la cantidad1 más el precio1 */
	var subtotal2=0; /* la variable donde se guarda el subtotal 2 que es la suma de la cantidad2 más el precio2 */
	var suma=0;  /* la variable donde se guarda suma imposable que es la suma de los dos subtotales 1 y 2  */
	var iva=0;  /*  la variable donde se guarda el calculo de la IVA */
	
	// calculo subtotal1
	subtotal1=document.getElementById("factura").quantitat1.value*document.getElementById("factura").preu_unitat1.value;
	document.getElementById("factura").subtotal1.value=subtotal1;
	// calculo subtotal2
	subtotal2=document.getElementById("factura").quantitat2.value*document.getElementById("factura").preu_unitat2.value;
	document.getElementById("factura").subtotal2.value=subtotal2;
	// calculo base imposable
	suma= subtotal1+subtotal2;
	document.getElementById("factura").baseimposable.value=suma;
	//calculo IVA
	iva=suma*0.21;
	document.getElementById("factura").iva.value=iva;
	//calculo del total que es la suma imposable más la IVA
	document.getElementById("factura").total.value=suma+iva;
	
}

// para la validacion del los campos del formulario
function validar(elEvent){
	// para captar el evento cuando se pulsa un teclado
	var ObjTecla = window.event || elEvento; 
	// tecla es el número del teclado que ha pulsado el usuario
	var tecla=ObjTecla.keyCode;
	// se admite sólo números enteros válidos
	if (tecla>=48 && tecla<=57) return true;
	return false;
}
