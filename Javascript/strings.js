// Accediendo a un determinado carater de un string
var palabra = "Caballero";
var caracter = palabra[8];
document.write(caracter + "<br>");

//Inclucion de comillas en los string

var frase = "hola \"padaguans\"";
document.write(frase + "<br>");

//Obtener la longitud de un string

var frase2 = "Cuentame los caracteres";
var longitud = frase2.length;
document.write(longitud + "<br>");

//encontrar la primera posicion dentro de un string

var frase3 = "busca la primera posicion de string";
var posicion = frase3.indexOf("primera");
document.write(posicion + "<br>");

//realiza la busqueda de un string con match()
var frase4 = "buscado en este string";
if (frase4.match("string")){
	document.write("Encontrado" + "<br>");
}
else {
   document.write("No encontrado" + "<br>");
}
// Remplazar string con el metodo replace()

var frase5 = "REEMPLAZAMELO";
var reemplazar = frase5.replace(/reemplazamelo/gi, "Reemplazamelo");
document.write(reemplazar + "<br>");

// como convertir un string de miniscula a mayuscula con toUpperCase y viseversa con toLowerCase

var palabra = "mayusculas";
document.write(palabra.toUpperCase() + "<br>");

var palabra = "MINUSCULAS";
document.write(palabra.toLowerCase() + "<br>");

//convertir un string en un array usando split()
var numeros = ("1 2 3 4 5 6 7 8 9 10");
var array = numeros.split(" ");
for(var x=0;x<=array.length-1;x++){
	document.write(array[x] + "<br>" );
}

// buscar substring dentro de un string con 

var frase6 = "tengo substrines";
var substring = frase6.substr(-10);
document.write(substring + "<br>" );