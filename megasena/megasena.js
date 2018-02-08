var aposta = [];

var contador = 0;

do {
	aposta[contador] = Math.floor(Math.random() * 61);
	contador++;
} while (contador < 6);


function ordena(ap) {
	var tam = ap.length;
	for (var i = tam-1; i>=0; i--) {
		for (var j = 1; j<=i; j++) {
			if (ap[j-1] > ap[j]) {
				var temp = ap[j-1];
				ap[j-1] = ap[j];
				ap[j] = temp;
			}
		}
	}
	return ap;
}

// Resta ainda trabalhar nessa função:
function eliminaRepetidos(ap) {

}

document.write(ordena(aposta));