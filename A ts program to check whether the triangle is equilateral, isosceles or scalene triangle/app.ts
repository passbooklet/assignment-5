var a:any=prompt("please enter first side")
var b:any=prompt("please enter second side")
var c:any=prompt("please enter third side")
var a1:number=parseInt(a)
var b1:number=parseInt(b)
var c1:number=parseInt(c)
console.log("your first side",a);
console.log("your second side",b);
console.log("your third angle",c);
if(a1==b1 && b1==c1 ){
    console.log("It is an equilateral,");
    

}else if( a1 == b1 || a1 == c1 || b1 == c1){
    console.log("It is an isosceles");
      
}else{
    console.log("It is an scalene triangle");

    
}



