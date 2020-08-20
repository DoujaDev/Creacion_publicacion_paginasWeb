
function voltear(carta){		
		var conbinacion=["p3.jpg","p5.jpg","p4.jpg","p2.jpg","p1.jpg","p6.jpg","p3.jpg","p5.jpg","p2.jpg","p4.jpg","p1.jpg","p6.jpg"];
		document.getElementById("foto"+carta).src="imagenes/"+conbinacion[carta-1];		
}
function trasera(carta){
		document.getElementById("foto"+carta).src="imagenes/reverso.jpg";
}

function jugar(){
	
}