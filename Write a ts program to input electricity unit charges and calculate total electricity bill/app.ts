var f:any=prompt("please enter your units")
var s:number=parseFloat(f)
console.log("you units are",f);
if(s>=50){
    var a:number=0.50*f
    var b:number=a*0.20;
    console.log("your charge of electric is",b);
}else if(s>=100){
    var c:number=0.75*f
    var d:number=c*0.20;
    console.log("your charge of electric is",d);}
 else if(s>=250){
        var e:number=1.20*f
        var g:number=e*0.20;
        console.log("your charge of electric is",g);
}else{
    var h:number=1.50*f
    var i:number=h*0.20;
    console.log("your charge of electric is",i);
}

