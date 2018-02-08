var aposta = [];

var contador = 0;

do {
	aposta[contador] = Math.floor(Math.random() * 61);
	contador++;
} while (contador < 6);

/*for (var a = 0; a<=6; a++) {
	document.write(a);
};*/

function ordena(ap) {

};

document.write(aposta);