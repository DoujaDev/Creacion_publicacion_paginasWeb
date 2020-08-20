var i=0;
var phrase="";
var reloj;
function iniciar(){
	reloj= setInterval("cambiarLetra()",100);
	phrase=document.getElementById("frase").innerHTML;
}
			
function cambiarLetra(){
	if(i<phrase.length){
		document.getElementById("frase").innerHTML=phrase.substring(0,i-1)+phrase.charAt(i).toUpperCase()+phrase.substring(i+1);
		//console.log(phrase);
		++i;
	}
	else{
		i=0;
	}
	
}