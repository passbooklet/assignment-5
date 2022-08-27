var first: any = prompt("Enter your first number")
var num1: number = parseInt(first)
console.log("first number", first);

var second: any = prompt("Enter your second number")
var num2: number = parseInt(second)
console.log("second number", second);

var third: any = prompt("Enter your third number")
var num3: number = parseInt(third)
console.log("third number", third);
var largest
if (num1 > num2 && num1 > num3) {
      largest = num1;   
} else if (num3 > num1 && num3 > num2) {
    largest = num3;  
} else if (num2 > num1 && num2 > num3) {
    largest = num2
}
console.log("The greater number is", largest);


// console.log(num1 >= num2 && num1 >= num3);
// console.log(num3 >= num1 && num3 >= num2);
// console.log(num2 >= num1 && num2 >= num3);

