/* Arrays:
   son un medio de guardar un conjunto de objetos de la misma clase. 
*/
var nombres= new Array("Pepe", "Iker", "Sergio", "Pedro");
document.write(nombres[2]+ "<br>");
var apellidos=["Casillas", "Ramos", "Ozil"];
document.write(apellidos[1]+ "<br>");
document.write("<br>");

// Arrays asociativos

var moneda= new Array();

moneda["España"] = "Euro";
moneda["Estadosunidos"] = "Dolar";
moneda["Venezuela"] = "Bolivar";
moneda["Mexico"] = "Peso"

document.write(moneda["España"]+ "<br>");
document.write(moneda.Estadosunidos + "<br>");
document.write("<br>");

// Arrays multidimencionales

var matriz= [[25, 10], [4, 10], [12, 8], [24, 60]];

document.write(matriz[1][0]);
