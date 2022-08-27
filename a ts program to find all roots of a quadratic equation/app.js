var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
var c = prompt("Enter the third number");
var disc = (b * b) - 4 * a * c;
if (disc == 0) {
    console.log("the rooots are real and equal");
}
else if (disc > 0) {
    console.log("the rooots are real and different");
}
else if (disc < 0) {
    console.log("the rooots are complex and different");
}
else {
    console.log("error");
}
