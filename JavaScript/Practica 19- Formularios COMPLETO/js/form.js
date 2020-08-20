function calcular(){
	var total=0;
	var hijos=document.getElementById("datospersonales").hijos.value;
	var ingresos=document.getElementById("datospersonales").ingresos.value;
	var gastos=document.getElementById("datospersonales").gastos.value;
	total=ingresos-gastos;
	document.getElementById("datospersonales").total.value=total;
	document.getElementById("datospersonales").ayuda.value=total*(0.1*hijos).toFixed(1);

}

function estado(){
	var estado=document.getElementById("datospersonales").estadocivil.value;
	if(estado=="Casado/a" || estado=="Pareja de hecho" ){
		document.getElementById("formulario").style.backgroundColor="red";
	}
	else if(estado=="Soltero/a" || estado=="Viudo/a" || estado=="Divorciado/a"){
		document.getElementById("formulario").style.backgroundColor="green";
	}
	else{
		document.getElementById("formulario").style.backgroundColor="gray";
	}
	
}

function validar(elEvent){
	var ObjTecla = window.event || elEvento; 
	var tecla=ObjTecla.keyCode;
	if (tecla>=48 && tecla<=57) return true;
	return false;
	
}

function iniciar(elemento){
	document.getElementById(elemento).value=0;
}

/* function prevent(elEvent){
	var ObjTecla = window.event || elEvento; 
	var tecla=ObjTecla.keyCode;
	return false;
} */