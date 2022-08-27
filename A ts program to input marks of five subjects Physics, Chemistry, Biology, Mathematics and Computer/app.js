var physics = prompt("please enter your phy marks ");
var chemistry = prompt("please enter your chem marks ");
var mathmats = prompt("please enter your maths marks");
var biology = prompt("please enter your bio marks");
var computer = prompt("please enter your comp marks");
var phy = parseInt(physics);
var chem = parseInt(chemistry);
var maths = parseInt(biology);
var bio = parseInt(mathmats);
var comp = parseInt(computer);
var physicst = prompt("please enter total of your phy marks ");
var chemistryt = prompt("please enter total of chem marks ");
var mathmatst = prompt("please enter total of your maths marks");
var biologyt = prompt("please enter total your of bio marks");
var computert = prompt("please enter total your of comp marks");
var phyt = parseInt(physicst);
var chemt = parseInt(chemistryt);
var mathst = parseInt(biologyt);
var biot = parseInt(mathmatst);
var compt = parseInt(computert);
console.log("your marks in phy are", physics);
console.log("your marks in chem are", chemistry);
console.log("your marks in maths are", mathmats);
console.log("your marks in bio are", biology);
console.log("your marks in comp are", computer);
var total = phy + chem + maths + bio + comp;
var totalt = phyt + chemt + mathst + biot + compt;
var av = total / totalt;
var er = av * 100;
if (er >= 90) {
    console.log("you have A+ grade", er);
}
else if (er >= 80) {
    console.log("you have A grade", er);
}
else if (er >= 70) {
    console.log("you have B grade", er);
}
else if (er >= 60) {
    console.log("you have C grade", er);
}
else if (er >= 50) {
    console.log("you have D grade", er);
}
else if (er >= 40) {
    console.log("you have E grade", er);
}
else {
    console.log("you have F grade", er);
}
