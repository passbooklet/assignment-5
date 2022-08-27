var first:any = prompt("Enter number of days")
var num:number=parseInt(first)
console.log("Number", num);
if ( num == 366) {
    console.log("the year is leap year");
} else if (num == 365) {
    console.log("the year is not leap year");
}   
else{
    console.log("ERROR");
    
}