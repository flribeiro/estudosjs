var word = "garrafas";
var count = 99;
while (count > 0) {
	document.write(count + " " + word + " de cerveja na prateleira<br>");
	document.write(count + " " + word + " de cerveja,<br>");
	document.write("Pega uma, bebe e descarta,<br>");
	count = count - 1;
	if (count > 0) {
		document.write(count + " " + word + " de cerveja na prateleira.<br>");
	} else {
		document.write("Acabaram as " + word + " de cerveja na prateleira.<br>");
	}
}

document.write("by FLR®.");