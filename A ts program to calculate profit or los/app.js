var first = prompt("please enter your costing price");
var second = prompt("please enter your selling price");
var f = parseInt(first);
var s = parseInt(second);
var f = parseInt(first);
console.log("your costing price is", first);
console.log("your selling price is", second);
if (s > f) {
    console.log("The value has cost profit");
}
else {
    console.log("the value has cost loss");
}
