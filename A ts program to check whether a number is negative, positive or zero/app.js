var first = prompt("Enter your number");
var num = Number(first);
console.log("Number", num);
if (num > 0) {
    console.log("the number is positive");
}
else if (num < 0) {
    console.log("the number is negative");
}
else if (num == 0) {
    console.log("the number is zero");
}
else {
    console.log("ERROR");
}
