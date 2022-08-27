var alpha = prompt("please enter your value");
console.log("your value", alpha);
if (alpha >= "a" && alpha <= "z") {
    console.log("the value is alphabet ");
}
else if (alpha >= "A" && alpha <= "Z") {
    console.log("the value is alphabet ");
}
else if (alpha >= 0) {
    console.log("the value is number ");
}
else if (alpha == 0) {
    console.log("the value is number ");
}
else if (alpha <= 0) {
    console.log("the value is number ");
}
else {
    console.log("the value is a special character");
}
