var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (!guess) {
		alert("Enter a valid number.");
	} else {
		guesses++;
		if (guess == location1 || guess == location2 || guess == location3) {
			hits++;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		}
	}
}
alert("Your score: " + guesses);