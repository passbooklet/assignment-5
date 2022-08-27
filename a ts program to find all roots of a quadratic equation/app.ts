var a:any=prompt("Enter the first number")
var b:any=prompt("Enter the second number")
var c:any=prompt("Enter the third number")
var disc:number= (b * b)- 4 * a * c
if(disc==0 ){
    console.log("the rooots are real and equal");
    
}else if(disc>0 ){
    console.log("the rooots are real and different");
}else if(disc<0){
    console.log("the rooots are complex and different");

}else{
    console.log("error");
    
}
