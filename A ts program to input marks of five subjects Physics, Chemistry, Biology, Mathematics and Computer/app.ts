var physics:any=prompt("please enter your phy marks ")
var chemistry:any=prompt("please enter your chem marks ")
var mathmats:any=prompt("please enter your maths marks")
var biology:any=prompt("please enter your bio marks")
var computer:any=prompt("please enter your comp marks")
var phy:number=parseInt(physics)
var chem:number=parseInt(chemistry)
var maths:number=parseInt(biology)
var bio:number=parseInt(mathmats)
var comp:number=parseInt(computer)
var physicst:any=prompt("please enter total of your phy marks ")
var chemistryt:any=prompt("please enter total of chem marks ")
var mathmatst:any=prompt("please enter total of your maths marks")
var biologyt:any=prompt("please enter total your of bio marks")
var computert:any=prompt("please enter total your of comp marks")
var phyt:number=parseInt(physicst)
var chemt:number=parseInt(chemistryt)
var mathst:number=parseInt(biologyt)
var biot:number=parseInt(mathmatst)
var compt:number=parseInt(computert)
console.log("your marks in phy are",physics);
console.log("your marks in chem are",chemistry);
console.log("your marks in maths are",mathmats);
console.log("your marks in bio are",biology);
console.log("your marks in comp are",computer);
var total:number=phy+chem+maths+bio+comp;
var totalt:number=phyt+chemt+mathst+biot+compt;
var av:number=total/totalt
var er:number=av*100
if(er>=90){
    console.log("you have A+ grade",er);
    
}else if(er>=80)
{
    console.log("you have A grade",er);
}else if(er>=70)
{
    console.log("you have B grade",er);
}else if(er>=60)
{
    console.log("you have C grade",er);
}else if(er>=50)
{
    console.log("you have D grade",er);
}else if(er>=40)
{
    console.log("you have E grade",er);
}else
{
    console.log("you have F grade",er);
}



