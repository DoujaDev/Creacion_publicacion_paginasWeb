var numHijos=0;
var hijos_creado=0;
function iniciar(){
	document.getElementById("caja_conyugue").style.display="none";
	document.getElementById("caja_num_hijos").style.display="none";
}

function validar(idElemento){
	var cadena=document.getElementById(idElemento).value;
 	if(cadena.length<5){
		document.getElementById("ayuda_"+idElemento).innerHTML="Introduce 5 caracteres";

	}else{
		document.getElementById("ayuda_"+idElemento).innerHTML="";
	}  
}

function mostrar(){
	if(document.getElementById("datos").casado.checked==true){
		document.getElementById("caja_conyugue").style.display="block";
		
	}else{
		document.getElementById("caja_conyugue").style.display="none";
	}
	if(document.getElementById("datos").si.checked==true){
		document.getElementById("caja_num_hijos").style.display="block";
		anadirHijo();
		
	}else{
		document.getElementById("caja_num_hijos").style.display="none";
	}
	  
}

function anadirHijo(){
	numHijos=document.getElementById("datos").numeroHijos.value;
	if(numHijos<1){
		document.getElementById("ayuda_edad").innerHTML="minumo 1 hijo";
	}else{
		document.getElementById("ayuda_edad").innerHTML="";
	}
	
	if(hijos_creado<numHijos){
		for(var i=hijos_creado+1;i<=numHijos;i++){
			var caja_label=document.createElement("div");
			caja_label.id="caja_hijo";
			document.getElementById("CajaMadre").appendChild(caja_label);
			document.getElementById("caja_hijo").className="label";
			document.getElementById("caja_hijo").style.width=100+"px";
	
			
			var label_hijo=document.createElement("LABEL");
			var texto_label = document.createTextNode("Edad "+i);
			label_hijo.setAttribute("for", "para");
			label_hijo.appendChild(texto_label);
			
			caja_label.appendChild(label_hijo);
			
			var
			
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// cuando entramos por primera vez con creado=0
	/* if(creado==0){
		creado=numHijos;
		//alert(creado);
		// creamos los elementos 
		for(var i=1;i<=numHijos;i++){
			var borrar=document.createElement("div");
			borrar.id="salto"+i;
			borrar.style.clear="both";
			document.getElementById("CajaMadre").appendChild(borrar);
			//document.getElementById("salto").style.clear="both";
			//document.getElementById("salto").className="borrar";
			var cajaElemtos = document.createElement("div");
			cajaElemtos.id = "numCase"+i; 
			document.getElementById("CajaMadre").appendChild(cajaElemtos);
			var para = document.createElement("input");
			para.type = "text"; 
			para.id=i;
			document.getElementById("numCase"+i).appendChild(para);
			
			var etiqueta=document.createElement("LABEL");
			var texto = document.createTextNode("Edad "+i);
			etiqueta.setAttribute("for", "para");
			etiqueta.appendChild(texto);
			//document.getElementById("numCase").appendChild(etiqueta);
			document.getElementById("numCase"+i).insertBefore(etiqueta,para);
		}
	}
	// si creado es diferente de 0, no es la primera vez, eliminamos los elemenotos que existen y creamos los nuevos
	else{
		//alert("segundo"+creado);
		for(var i=1;i<=creado;i++){
			var cajaM = document.getElementById("CajaMadre");
			//var labelHijo=
			var hijo=document.getElementById("numCase"+i); 
			var hijoBorrar=document.getElementById("salto"+i);
			cajaM.removeChild(hijo); 
			cajaM.removeChild(hijoBorrar);			
		}
		for(var i=1;i<=numHijos;i++){
			var borrar=document.createElement("div");
			borrar.id="salto"+i;
			borrar.style.clear="both";
			document.getElementById("CajaMadre").appendChild(borrar);
			//document.getElementById("salto").style.clear="both";
			//document.getElementById("salto").className="borrar";
			var cajaElemtos = document.createElement("div");
			cajaElemtos.id = "numCase"+i; 
			document.getElementById("CajaMadre").appendChild(cajaElemtos);
			var para = document.createElement("input");
			para.type = "text"; 
			para.id=i;
			document.getElementById("numCase"+i).appendChild(para);
			
			var etiqueta=document.createElement("LABEL");
			var texto = document.createTextNode("Edad "+i);
			etiqueta.setAttribute("for", "para");
			etiqueta.appendChild(texto);
			//document.getElementById("numCase").appendChild(etiqueta);
			document.getElementById("numCase"+i).insertBefore(etiqueta,para);
		}
		// cambiamos el numero de hijos creados
		creado=numHijos;
	} */
}

	