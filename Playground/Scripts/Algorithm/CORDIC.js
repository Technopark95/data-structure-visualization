
/*

Copyright 2020 Anoop Singh, Graphical Structure

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.



*/

document.getElementById("cav1").remove();
Log(`<span style="font-size:140%;color:coral;">Total Iterations : 20</span>`)

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


let rotor = document.getElementById("rott");

rotor.style.transition = `${speed}ms linear`;
xis.style.transition = `${speed}ms linear`;
yis.style.transition = `${speed}ms linear`;

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

    Log(`<span style="font-size:120%;">Angle : ${(adjuster+deg).toFixed(3)}</span>`)
rotor.style.transform = `translate(-50%,0) rotate(${(adjuster+deg)}deg)`;

axisdrawevent = requestAnimationFrame(axisdraw)

await waitforme(speed+100)

cancelAnimationFrame(axisdrawevent)

await waitforme(100)
}




async function cordicutil( theta, n, sign,cosfactor)
{
    
 

  var k, d, tx, ty, tz;
  var x=cordic_1K,y=0,z=theta;
  n = (n>CORDIC_NTAB) ? CORDIC_NTAB : n;

  for (k=0; k<n; ++k)
  {

    Log(`<span style="font-size:130%;color:coral;">Iteration : ${k+1} out of 20</span>`)

    d = z>>31;
    //get sign. for other architectures, you might want to use the more portable version
    //d = z>=0 ? 0 : -1;
    tx = x - (((y>>k) ^ d) - d);
    ty = y + (((x>>k) ^ d) - d);
    tz = z - ((cordic_ctab[k] ^ d) - d);
    x = tx;
    y = ty;
    z = tz;

    Log(`cosval<br><span style="font-size:130%;">${(tx/MUL).toFixed(4)*cosfactor}</span><br><span style="font-size:130%;">sinval<br>${(ty/MUL).toFixed(4)*sign}</span>`)

    if (adjuster == 0) {

        let angles = Math.asin(y/MUL )*180/Math.PI;
     
           await update(angles)

           
    }
 

    if (adjuster == 90) {

        let angles = 90- Math.asin(y/MUL )*180/Math.PI;
        
          await update(angles)
    }
   

     if (adjuster == 180) {

         let angles = Math.asin(y/MUL )*180/Math.PI;
      
           await update(angles)
     }
     

     if (adjuster == 270) {

        let angles = 90- Math.asin(y/MUL )*180/Math.PI;
       
          await update(angles)
     }
     


  }  



 cosval = x*cosfactor; sinval = y*sign;


}






async function cordic(deg) {

    if (deg < 0 || deg > 360) {

        Log(`<span style="font-size:125%;color:coral;">Enter value from 0 to 360.</span>`)

        return;

    }

let p;
let i;
    
i =deg;
 let sign = 1;
 let signcos = 1;

if (i >=0 && i <= 90) {
    
    sign = 1;
    signcos = 1
    adjuster = 0;
    
}

else if (i >90 && i <= 180) {
 
    sign = 1;
    signcos = -1
     i = 180-i;

     adjuster= 90;

     
    
}

else if (i >180 && i <= 270) {
   
  
    sign = -1;
    signcos = -1;
     i = i-180; 

     adjuster = 180;
    
}

else  if (i >270 && i <= 360) {

    sign = -1; 
    signcos = 1
     i = 360-i;

     adjuster = 270;
    
}





       
    p = i *(Math.PI/180);   


   await cordicutil((p*MUL),20,sign,signcos);

    console.log("sin",(sinval/MUL).toFixed(5), "cos",(cosval/MUL).toFixed(5))
    


}




slider.onchange= function() {

rotor.style.transition = `${speed}ms linear`;
xis.style.transition = `${speed}ms linear`;
yis.style.transition = `${speed}ms linear`;

  }

//CORDIC(180)



