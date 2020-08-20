function iniciar(){
	for(var i=1;i<=3;i++){
		document.getElementById("ajuda"+i).style.display="none";
	}
}

function mayus(id_elemento){
	// los campos Razón social, CIF, Dirección, población se muestran en Mayúscula cuando el usuario sale del campo
	document.getElementById(id_elemento).value=document.getElementById(id_elemento).value.toUpperCase();
}


function validacion(){
	//validacion Razón social, el usuario debe introducir como mínimo 5 caracteres sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").razonsocial.value.length<5){
		alert("En el campo Razón social debe introducir como Mínimo 5 caracteres");
		return false;
	}
	// validacion CIF, la información introducida tiene que respetar un patron sino se muestra un mensaje de error en la pantalla y no se envia el formulario
	var valor = document.getElementById("formularioContacto").cif.value;
	// el patron de un CIF correcto
	patron =/^[0-9]{8}[a-z A-Z]{1}$/;
	if (patron.test(valor)==false){
		alert("El CIf introducido es incorrecto ");
		return false;
	}
	// validación Dirección, el usuario debe introducir como mínimo 5 caracteres sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").direccion.value.length<5){
		alert("En el campo Dirección debe introducir como Mínimo 5 caracteres");
		return false;
	}
	//validacion CP,la información introducida tiene que respetar un patron sino se muestra un mensaje de error en la pantalla y no se envia el formulario
	var valor = document.getElementById("formularioContacto").cp.value;
	// el patron de un CP correcto
	patron =/^[0-9]{5}$/;
	if (patron.test(valor)==false){
		alert("El CP introducido es incorrecto ");
		return false;
	}
	//validacion población, el usuario debe introducir como mínimo 5 caracteres sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").poblacion.value.length<5){
		alert("El en campo población debe introducir como Mínimo 5 caracteres");
		return false;
	}
	//validación email,la información introducida tiene que respetar un patron sino se muestra un mensaje de error en la pantalla y no se envia el formulario
	var valor = document.getElementById("formularioContacto").email.value;
	// el patron de un Email correcto
	patron =/^[\w-\.]{3,}@([\w-]{2,}\.)+\w{2,4}$/;
	if (patron.test(valor)==false){
		alert("El Email introducido es incorrecto ");
		return false;
	}
	// validación delegación
	// si el usuario no ha elegido nunguna delegación se muestra un mensaje de error en la pantalla y no se envia el formulario
	if((document.getElementById("barcelona").checked || document.getElementById("tarragona").checked || document.getElementById("lleida").checked || document.getElementById("girona").checked)==false){
		alert("Debe elegir una delegación ");
		return false;
	}
	// validación trabajadores,el usuario debe introducir como mínimo 1 trabajador sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").ntrabajadores.value.length<1){
		alert("Debe introducir como Mínimo 1 trabajador");
		return false;
	}
	// validación tipo empresa, si el usuario no he elgido ningun tipo de empresa sale el mensaje de error en la pantalla y no se envia el formulario
	if(document.getElementById("formularioContacto").tipoempresa.value=="vacio"){
		alert("Debe elegir un Tipo Empresa");
		return false;
	}
	// validación consulta,el usuario debe introducir como mínimo 5 caracteres sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").consulta.value.length<5){
		alert("El en campo consulta debe introducir como Mínimo 5 caracteres");
		return false;
	}
	// validación acepto las condiciones, el usuario debe activar el checkbox aceptar las condiciones sino se muestra un mensaje de error en la pantalla y no se envia el formulario 
	if(document.getElementById("formularioContacto").acepta.checked==false){
		alert("Debe aceptar las condiciones.");
		return false;
	}
}

function ayuda(id_elemento){
	//console.log(document.getElementById(id_elemento).innerHTML);
	
	// se muestra un mensaje de ayuda al lado del campo que ha llamado la función si la información introducida no respeta el patron 
	// y desaparece cuando la información introducida respeta el patron
	switch(id_elemento) {
		// con id_elemento sabemos que campo de texto tenemos que mostrar o ocultar y que patron tenemos que aplicar
		  case "ajuda1":
		  // ayuda CIF
			var valor = document.getElementById("formularioContacto").cif.value;
			// el patron de un CIF correcto
			patron =/^[0-9]{8}[a-z A-Z]{1}$/;
			if (patron.test(valor)==false){
				document.getElementById(id_elemento).style.display="block";
			}else{
				document.getElementById(id_elemento).style.display="none";
			}
			break;
		  case "ajuda2":
		  // ayuda CP
			var valor = document.getElementById("formularioContacto").cp.value;
			// el patron de un CP correcto
			patron =/^[0-9]{5}$/;
			if (patron.test(valor)==false){
			document.getElementById(id_elemento).style.display="block";
			}else{
			document.getElementById(id_elemento).style.display="none";
			}
			break;
		  case "ajuda3":
		  // ayuda Email
			var valor = document.getElementById("formularioContacto").email.value;
			// el patron de un Email correcto
			patron =/^[\w-\.]{3,}@([\w-]{2,}\.)+\w{2,4}$/;
			if (patron.test(valor)==false){
			document.getElementById(id_elemento).style.display="block";
			}else{
			document.getElementById(id_elemento).style.display="none";
			}
			break;
	}
	

	
	
}