window.onload = function () 
{
document.formularioContacto.razonsocial.focus(); //Pasamos el enfoque a la razón social
}
//****************** INICIO FUNCION validacion ********************************
function validacion() // valido cada una de las entradas del formulario
{
	//**************************************************
	//Controlar que el nombre tenga mas de 4 caracteres
	//**************************************************
	var valor = document.getElementById("razonsocial").value;
	if( valor == null || (valor.length >= 0  && valor.length <5) || /^\s+$/.test(valor) ) 
		{
		alert("La razón social debe tener entre 1 y 5 caracteres")
		document.formularioContacto.razonsocial.focus();
		return false;
		}
	//**************************************************
	//Controlar que DNI cumpla expresion regular 
	//**************************************************
	var valor = document.getElementById("cif").value;		
	patron=/^[0-9]{6,}([-]{1})*[A-Za-z]{1}$/;//asterisco coincide una vez o ninguna
	if (patron.test(valor)==false)					
		{
		alert("Formato del CIF Incorrecto, debe ser el numero de CIF finalizado en letra, con o sin guión");
		document.getElementById("cif").focus();
		return false;
		}
	//**************************************************
	//Controlar que el cp cumpla expresion regular 
	//**************************************************
	var valor = document.getElementById("cp").value;
	patron =/^[0-9]{5}$/;
	if (patron.test(valor)==false)
		{
			alert("Formato de CP incorrecto, deben ser 5 digitos numéricos");
			document.formularioContacto.cp.focus();
			return false;
		}
	//************************************************************************************
	//Controlar numero de trabajadores que el dato debe ser un número 
	//************************************************************************************
	var numtrabajadores=parseInt(document.getElementById("ntrabajadores").value);
	if (isNaN(numtrabajadores)) 
		{
		alert("El número de trabajadores no es correcto, debe ser un valor numérico");
		document.getElementById("ntrabajadores").value="";
		document.getElementById("ntrabajadores").focus();
		return false;
		}
	if (numtrabajadores<=1 || numtrabajadores >99)
		{
		alert("El número de trabajadores debe ser como máximo 255");
		document.getElementById("ntrabajadores").focus();
		return false;
		}
	//*******************************************************************
	//Controlamos que el boton de radio del sexo tenga una opcion marcada
	//*******************************************************************	
	if (document.getElementById("barcelona").checked==false && document.getElementById("tarragona").checked==false && document.getElementById("lleida").checked==false && document.getElementById("girona").checked==false)
		{
		alert("Debe indicar una opción válida para la delegación");
		return false;
		}
}
//****************** FINAL FUNCION validacion ********************************
//****************** INICIO FUNCION mayus ********************************
function mayus(miObjeto) // convierto a mayusculas el valor de cualquier objeto que reciba
{
	var MiId = miObjeto.id
	document.getElementById(MiId).value=document.getElementById(MiId).value.toUpperCase()
}
//****************** FINAL FUNCION mayus ********************************