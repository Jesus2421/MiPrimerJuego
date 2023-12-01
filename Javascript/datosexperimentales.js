var x= new Array(0.05,0.15, 0.31, 0.46,0.52,0.70,0.76,0.82,0.98,1.17);
document.write("X=" + x + "<br>");
document.write("<br>");
var y= new Array(0.956,0.832, 0.717, 0.571,0.539,0.378,0.37,0.308,0.242,0.108);
document.write("Y=" + y + "<br>");
document.write("<br>");
var totaly;
suma=0;
document.write("<br>");
for (var i=0; i<10; i++) {
totaly=suma+y[i];
}
document.write("Resultado " + " = " + totaly);
for (var i=0; i<10; i++) {
document.write("Resultado " + " = " + totaly);
}