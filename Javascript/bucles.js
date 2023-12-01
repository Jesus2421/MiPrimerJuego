/* Bucle
   For
*/

var paises= new Array("España","Venezuela","Colombia","Portugal","Panama","Estados Unidos","Japon","China","Australia");
for (var i=0;i<=8;i++){
	document.write(paises[i]+ "<br>");
	if (i==8){
		break;
	}
	//este if es para detener el ciclo for 
}
document.write("<br>");

// For in

var productos= new Array();
productos["Harinapan"]=26;
productos["Leche"]=30;
productos["Aceite"]=27;
productos["Papeltualet"]=28;

for (var i in productos){
	document.write(i +" : "+ productos[i] +" Bs.F <br>");
}
document.write("<br>");

// While

var nombres=new Array("Juan","Santiago","Orlando","Carlos"); 
var i=0;
while(i<3){
	document.write(nombres[i] + "<br>");
	i++;
	if (i==3){
		break;
	}
	//lo mismo se puede aplicar al ciclo while
}