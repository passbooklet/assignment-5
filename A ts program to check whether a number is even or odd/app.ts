var first:any = prompt("Enter your number")
var num:number=parseInt(first)
console.log("Number", num);
if  (num % 2==0) {
    console.log("the number is even");
} else if (num > 0) {
    console.log("the number is odd");
    
}else{
    console.log("ERROR");
    
}