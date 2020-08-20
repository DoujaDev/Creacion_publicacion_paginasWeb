<?php 
$headers  = "From: ".stripslashes($_POST["nombre"])."<" . $_POST["email"] . "> \n";
$headers .= "Reply-to:" . $_POST["email"] . "\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers  = "Content-Type: text/html; charset=utf-8\n".$headers;

$cuerpo  = "Consulta enviada <br>";
$cuerpo .= "Nombre: " .stripslashes($_POST["nombre"]) . "<br>";
$cuerpo .= "Email: " .stripslashes($_POST["email"]) . "<br>";
$cuerpo .= "Apellidos: " .stripslashes($_POST["apellidos"]) . "<br>";
$cuerpo .= "direccion: " .stripslashes($_POST["direccion"]) . "<br>";
$cuerpo .= "CP: " .stripslashes($_POST["cp"]) . "<br>";
$cuerpo .= "Población: " .stripslashes($_POST["poblacion"]) . "<br>";
$cuerpo .= "Ficha de nacimiento: " .stripslashes($_POST["ficha"]) . "<br>";
if($_POST["casado"] =="on"){
	$cuerpo .= "Casado/a: Sí ". "<br>";
}else{
	$cuerpo .= "Casado/a: No ". "<br>";
}
$cuerpo .= "Hijos: " .stripslashes($_POST["hijos"]) . "<br>";
if($_POST["sexo"] =="hombre"){
$cuerpo .= "Sexo: Hombre" . "<br>";
}
if($_POST["sexo"] =="mujer"){
$cuerpo .= "Sexo: Mujer" . "<br>";
}
$cuerpo .= "Mensaje: " .stripslashes($_POST["mensaje"]) . "<br>";
mail("doja1991@gmail.com", "mensaje de contacto",$cuerpo,$headers);
echo '<h4><span style="color: red;">Consulta enviada correctament</span></h4>';
?>
