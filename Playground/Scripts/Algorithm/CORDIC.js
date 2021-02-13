

document.getElementById("cav1").remove();


var MUL =  1073741824
var CORDIC_NTAB = 32
var cordic_1K= 0x26DD3B6A
var cordic_ctab = [0x3243F6A8, 0x1DAC6705, 0x0FADBAFC, 0x07F56EA6, 0x03FEAB76, 0x01FFD55B, 
0x00FFFAAA, 0x007FFF55, 0x003FFFEA, 0x001FFFFD, 0x000FFFFF, 0x0007FFFF, 0x0003FFFF, 
0x0001FFFF, 0x0000FFFF, 0x00007FFF, 0x00003FFF, 0x00001FFF, 0x00000FFF, 0x000007FF, 
0x000003FF, 0x000001FF, 0x000000FF, 0x0000007F, 0x0000003F, 0x0000001F, 0x0000000F, 
0x00000008, 0x00000004, 0x00000002, 0x00000001, 0x00000000 ];
var adjuster=0;

let sinval,cosval;



let axis = document.getElementById("tracer");

let xis = document.getElementById("xaxis");
let yis = document.getElementById("yaxis");


var axisdrawevent ;


function axisdraw()  {



    xis.setAttribute("x1" , axis.getBoundingClientRect().left + document.documentElement.scrollLeft)
    xis.setAttribute("y1" , axis.getBoundingClientRect().top + document.documentElement.scrollTop+6)
    xis.setAttribute("x2" , 700)
    xis.setAttribute("y2" , axis.getBoundingClientRect().top + document.documentElement.scrollTop+6)
 

    yis.setAttribute("x1" , axis.getBoundingClientRect().left + document.documentElement.scrollLeft+6)
    yis.setAttribute("y1" , axis.getBoundingClientRect().top + document.documentElement.scrollTop+6)
    yis.setAttribute("x2" , axis.getBoundingClientRect().left + document.documentElement.scrollLeft+6)
    yis.setAttribute("y2" , 385)
 


axisdrawevent = requestAnimationFrame(axisdraw)


}


async function update(deg) {


document.getElementById("rott").style.transform = `translate(-50%,0) rotate(${(adjuster+deg)}deg)`;

axisdrawevent = requestAnimationFrame(axisdraw)

await waitforme(2100)

cancelAnimationFrame(axisdrawevent)

await waitforme(100)
}




async function cordicutil( theta, n, sign)
{
    
 

  var k, d, tx, ty, tz;
  var x=cordic_1K,y=0,z=theta;
  n = (n>CORDIC_NTAB) ? CORDIC_NTAB : n;

  for (k=0; k<n; ++k)
  {
    d = z>>31;
    //get sign. for other architectures, you might want to use the more portable version
    //d = z>=0 ? 0 : -1;
    tx = x - (((y>>k) ^ d) - d);
    ty = y + (((x>>k) ^ d) - d);
    tz = z - ((cordic_ctab[k] ^ d) - d);
    x = tx;
    y = ty;
    z = tz;

    await update(Math.asin(y/MUL )*180/Math.PI)

  }  


 cosval = x*sign; sinval = y*sign;


}






async function CORDIC(deg) {


let p;
let i;
    
i =deg;
 let sign = 1;

if (i >=0 && i <= 90) {
    
    sign = 1;
    
    
}

else if (i >90 && i <= 180) {
 
     sign = 1;
     
     i = 180-i;
    
}

else if (i >180 && i <= 270) {
   
  
     sign = -1;
     
     i = i-180; 
    
}

else  if (i >270 && i <= 360) {

     sign = -1; 
     
     i = 360-i;
    
}





       
    p = i *(Math.PI/180);   


   await cordicutil((p*MUL),20,sign);

    console.log("sin",(sinval/MUL).toFixed(5), "cos",(cosval/MUL).toFixed(5))
    


}

//CORDIC(180)


