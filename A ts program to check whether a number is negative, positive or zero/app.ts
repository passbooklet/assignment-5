var first:any = prompt("Enter your number")
var num:number=Number(first)
console.log("Number", num);
if ( num > 0) {
    console.log("the number is positive");
} else if (num < 0) {
    console.log("the number is negative");
} else if(num==0) {
    console.log("the number is zero");
    
}else{
    console.log("ERROR");
    
}