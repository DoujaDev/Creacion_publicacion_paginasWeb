var reloj1;
var reloj2;
var num_foto=1;
var tope=1050;
var contador=0;
var temp;

function iniciar(){
	rejoj1=setInterval("iniciar_movimiento()",12000);
}
  function iniciar_movimiento(){
	reloj2=setInterval("cambiarFoto()",1);
	document.getElementById("anterior").style.display="none";
	document.getElementById("siguiente").style.display="none";
	
  }

function cambiarFoto(){
	if(contador<tope){
			for(var i=0;i<3;i++){
			var foto="f"+i;
			//console.log(foto);
			document.getElementById(foto).style.left=document.getElementById(foto).offsetLeft+1+"px";
		}
		contador++;
	}
	else{
		contador=0;
		clearInterval(reloj2);
		document.getElementById("anterior").style.display="block";
		document.getElementById("siguiente").style.display="block";
		temp=document.getElementById("fotoC").src;
		document.getElementById("fotoC").src=document.getElementById("fotoI").src; 
		document.getElementById("f0").style.left=-1050+"px";
		
		document.getElementById("fotoI").src=document.getElementById("fotoD").src; 
		document.getElementById("f1").style.left=0+"px";
		
		document.getElementById("fotoD").src=temp; 
		document.getElementById("fotoD").style.left=1050+"px";
	}
}

function plus(){
	var img_src=document.getElementById("fotoC").src.split("/");
	var fotoCentral=img_src[img_src.length-1];
	console.log(fotoCentral);
	num_foto=parseInt(fotoCentral.charAt(3),10);
	
	console.log(num_foto);
	console.log("img/cat"+(num_foto+1)+".jpg");
	
	if(num_foto<3){
		document.getElementById("fotoC").src="img/cat"+(num_foto+1)+".jpg";
	}
	else{
		num_foto=0;
		document.getElementById("fotoC").src="img/cat"+(num_foto+1)+".jpg";
	}
	
}

function menos(){
	
	var img_src=document.getElementById("fotoC").src.split("/");
	var fotoCentral=img_src[img_src.length-1];
	console.log(fotoCentral);
	num_foto=parseInt(fotoCentral.charAt(3),10);
	
	console.log(num_foto);
	console.log("img/cat"+(num_foto+1)+".jpg");
	
	if(num_foto>1){
		document.getElementById("fotoC").src="img/cat"+(num_foto-1)+".jpg";
	}
	clearInterval(reloj1);
	/* else{
		num_foto=6;
		document.getElementById("fotoC").src="img/cat"+(num_foto-1)+".jpg";
	}  */ 
}  