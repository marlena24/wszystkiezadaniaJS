var a = 2;
var b = -5;
var value = ((a * a) - (2 * a * b) + (b * b));

if (value < 1) {
	alert("ujemna");
} else if (value > 1) {
	alert("dodatnia");
} else {
	alert("0");
}