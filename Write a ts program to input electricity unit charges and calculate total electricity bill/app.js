var f = prompt("please enter your units");
var s = parseFloat(f);
console.log("you units are", f);
if (s >= 50) {
    var a = 0.50 * f;
    var b = a * 0.20;
    console.log("your charge of electric is", b);
}
else if (s >= 100) {
    var c = 0.75 * f;
    var d = c * 0.20;
    console.log("your charge of electric is", d);
}
else if (s >= 250) {
    var e = 1.20 * f;
    var g = e * 0.20;
    console.log("your charge of electric is", g);
}
else {
    var h = 1.50 * f;
    var i = h * 0.20;
    console.log("your charge of electric is", i);
}
