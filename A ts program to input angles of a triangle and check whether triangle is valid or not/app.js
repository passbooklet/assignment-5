var a = prompt("please enter first angle");
var b = prompt("please enter second angle");
var c = prompt("please enter third angle");
var a1 = parseInt(a);
var b1 = parseInt(b);
var c1 = parseInt(c);
console.log("your first angle", a);
console.log("your second angle", b);
console.log("your third angle", c);
if (a1 + b1 + c1 == 180) {
    console.log("the triangle is valid");
}
else {
    console.log("the triangle is not valid");
}
