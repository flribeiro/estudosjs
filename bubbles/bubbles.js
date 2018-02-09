var scores = [60, 50, 60, 58, 54, 54,
	58, 50, 52, 54, 48, 69,
	34, 55, 51, 52, 44, 51,
	69, 64, 66, 55, 52, 61,
	46, 31, 57, 52, 44, 18,
	41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
	.33, .31, .25, .29, .27, .22,
	.31, .25, .25, .33, .21, .25,
	.25, .25, .28, .25, .24, .22,
	.20, .25, .30, .25, .24, .25,
	.25, .25, .27, .25, .26, .29];	

var maior = 0;
var maiores = "";
var maisRentaveis = [];

function analisaScores(scores, costs) {
	var melhorCusto = 0;

	for(var i=0; i<scores.length; i++) {
		document.write("Bubble solution #" + i.toString() + " score: " + scores[i] + ".<br>");
		if (scores[i] > maior) {
			maior = scores[i];
			maiores = "#" + i.toString();
		} else if (scores[i] == maior) {
			maiores += ", #" + i.toString();
		} 

		var rendimento = scores[i] / costs[i];

		//document.write("Rend" + rendimento + "<br>");

		if (rendimento > melhorCusto) {
			melhorCusto = rendimento;
			//document.write("FOI!<br>");
			maisRentaveis.push(i);
		}
	}
}

analisaScores(scores, costs);
document.write("<hr>Bubbles tests: " + scores.length + ".<br>");
document.write("Highest bubble score: " + maior + ".<br>");
document.write("Solutions with highest score: " + maiores + ".<br>");
document.write("Solutions most cost-effective: #" + maisRentaveis[maisRentaveis.length-1] + ".<br>");