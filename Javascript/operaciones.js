var num1=0.35;
var num2=9.8;
num1+=1;
var suma=num1+num2;
var resta=num1-num2;
var multiplicacion=num1*num2;
var divicion=num1/num2;
var resto=num1%num2;
document.write(+ num1 + "+" + num2 + "=" + suma);
document.write("<br>");
document.write(+ num1 + "-" + num2 + "=" + resta);
document.write("<br>");
document.write(+ num1 + "*" + num2 + "=" + multiplicacion);
document.write("<br>");
document.write(+ num1 + "/" + num2 + "=" + divicion);
document.write("<br>");
document.write("el resto de " + num1 + " y " + num2 + " es igual a " + resto);
document.write("<br>");
/*Operadores racionales 
  > mayor que
  >= mayor o igual que 
  < menor que 
  <= menor o igual que
  == igual
  != distinto
*/
var num3=12;
var num4=10;
if (num3 == num4){
	document.write("los numeros son iguales");
}
else{
	document.write("los numeros " +num3+ " y " +num4+ " no son iguales");
}
document.write("<br>");
/* Operadores logicos
   and && (ambas condiciones son ciertas )
   or ||  (almenos una condicion es cierta)
   negación ! (la condicion no es cierta)
*/

if (num1 == num3 && num2 != num4){
	document.write("es verdadero");
}
else{
	document.write("es falso");
}