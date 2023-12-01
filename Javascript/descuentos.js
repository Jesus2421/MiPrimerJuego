var M=9000;
var Dp=6;
var P=5000;
var Des=0;
var porce=0;
var total=0;
if (Dp<=10){
	if (P<=5000){
		porce=M*0.03;
		des=M-porce;
		total=des-P;
		document.write("Su deuda a sido cancelada  y tiene vuelto es:" + total);
	}
	else if ((P>5000) && (P>=10000)){
		porce=M*0.03;
		des=M-porce;
		total=des-P;
		document.write("Su deuda a sido cancelada  y tiene vuelto es:" + total);
	}
	else {
        porce=M*0.02;
		des=M-porce;
		total=des-P;
		document.write("Su deuda a sido cancelada  y tiene vuelto es:" + total);
	}
}
else{
	total=M-P;
	document.write("Su deuda a sido cancelada y no tiene descuento, su vuelto es:" + total);
}