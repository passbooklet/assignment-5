var b = prompt("please enter you income");
var basic = parseInt(b);
console.log("your income is", b);
if (basic <= 10000) {
    var a = basic * 0.8;
    var a1 = basic * 0.2;
    var a2 = basic + a + a1;
    console.log("your income is", a2);
}
else if (basic <= 20000) {
    var c = basic * 0.9;
    var c1 = basic * 0.25;
    var c2 = basic + c + c1;
    console.log("your income is", c2);
}
else {
    var d = basic * 0.95;
    var d1 = basic * 0.3;
    var d2 = basic + d + d1;
    console.log("your income is", d2);
}
