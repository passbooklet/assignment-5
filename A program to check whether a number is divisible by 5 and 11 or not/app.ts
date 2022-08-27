var first:any = prompt("Enter your number")
var num:number=parseInt(first)
console.log("Number", num);
if  (num % 5==0) {
    console.log("the number is divisible by 5 ");
} else if (num % 11==0) {
    console.log("the number is divisible by 11");
    
}else{
    console.log("the number is not divisible by 5 or 11");
    
}