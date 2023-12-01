/* Estructuras de control
  Sentencias if y else
*/

var num1=6;
var num2=5;
if(num1 != num2){
	document.write( +num1+ " y " +num2+ " son distintos puede continuar con la operacion");
}
else {
	document.write("los numeros son iguales por fevor ingrese numeros distintos");
}
document.write("<br>");
// sentencia switch
document.write("<br>");
var nombre ="Raul";
switch(nombre){
	case "Pepe":
	document.write("Pepe a sido encontrado");
	break;
	case "Jesus":
	document.write("Jesus a sido encontrado");
	break;
	case "Raul":
	document.write("Raul a sido encontrado");
	break;
	case "Manuel":
	document.write("Manuel a sido encontrado");
	break;
	default:
	document.write("el usuario no a sido encontrado");
	break;
}