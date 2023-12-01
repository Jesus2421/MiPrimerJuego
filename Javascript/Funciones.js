// Funciones

Mensaje = function(){
	return "Hola usuario";
}
document.write(Mensaje()+ "<br>");

function mensaje(){
  var string = "Bienvenido a su pagina favorita";
  return string;
}
document.write(mensaje()+ "<br>");
document.write("<br>");

suma = function(num1,num2){
	var sumar=num1+num2;
	return sumar;
}
resta = function(num1,num2){
	var restar=num1-num2;
	return restar;
}
multiplicacion = function(num1,num2){
	if (num2 == undefined){
       num2=num1;
	}
	return num1*num2;
}
divicion = function(num1,num2){
	var dividir=num1/num2;
	return dividir;
}
document.write(suma(12,6) +"<br>");
document.write(resta(12,6) +"<br>");
document.write(multiplicacion(12,6) +"<br>");
document.write(divicion(12,6) +"<br>");
document.write("<br>");

function Arreglos(array){
	var elemetos= '';
	for(var i=0;i<array.length;i++){
		elemetos += array[i] + "<br>";
	}
	return elemetos;
}
document.write(Arreglos(["uno","dos","tres","cuatro"]) +"<br>");