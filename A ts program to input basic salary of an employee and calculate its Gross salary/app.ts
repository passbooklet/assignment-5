
var b:any=prompt("please enter you income")
var basic:number=parseInt(b)
console.log("your income is",b);




if(basic <= 10000)
{
     var a:number=basic * 0.8
     var a1:number=basic * 0.2
     var a2:number=basic +a+a1;
     console.log("your income is",a2);
     
    
}
else if(basic <= 20000)
{
    var c:number=basic * 0.9
    var c1:number=basic * 0.25
    var c2:number=basic +c+c1;
    console.log("your income is",c2);
}
else
{
    var d:number=basic * 0.95
    var d1:number=basic * 0.3
    var d2:number=basic +d+d1;
    console.log("your income is",d2);
}