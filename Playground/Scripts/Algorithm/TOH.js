

let nofdisk = 6;

let nA=nofdisk , nB=0, nC=0;

var Pegs={};
Pegs["A"] = new Stack();
Pegs["B"] = new Stack();
Pegs["C"] = new Stack();

var pos = {}

pos["A"] = 120;
pos["B"] = 120*4.5;
pos["C"] = 120*8;





async function TowerOfHanoi(no) {



  if (no >10 )  {
    Log("There is no problem in processing more than 10 disks but that would take alot of time. :)")
    return;
  }

    nofdisk = no;

    
    let eles = document.getElementsByClassName("towers");
    let iee;
    for (iee = eles.length-1; iee >= 0 ; iee--) {
      eles[iee].remove();
    }

    Pegs["A"].clear()
    Pegs["B"].clear()
    Pegs["C"].clear()
    



   let disk = `<div id=pega class="towers" style="width:${20*nofdisk}px; height : 20px; background-color:coral;position:absolute;top:${230+(nofdisk+1)*20}px;left:${pos["A"]}px;text-align:center;border-radius:10px;border-style:solid;border-color:black;border-width:2px;"><p style="color:black;margin-top:-3px;">Peg A</p></div>`

document.body.insertAdjacentHTML("afterbegin",disk);

 disk = `<div id=pegb class="towers" style="width:${20*nofdisk}px; height : 20px; background-color:coral;position:absolute;top:${230+(nofdisk+1)*20}px;left:${pos["B"]}px;text-align:center;border-radius:10px;border-style:solid;border-color:black;border-width:2px;"><p style="color:black;margin-top:-3px;">Peg B</p></div>`

document.body.insertAdjacentHTML("afterbegin",disk);


 disk = `<div id=pegc class="towers" style="width:${20*nofdisk}px; height : 20px; background-color:coral;position:absolute;top:${230+(nofdisk+1)*20}px;left:${pos["C"]}px;text-align:center;border-radius:10px;border-style:solid;border-color:black;border-width:2px;"><p style="color:black;margin-top:-3px;">Peg C</p></div>`

document.body.insertAdjacentHTML("afterbegin",disk);


for (let k=nofdisk ; k >=1;--k) {


  
let leftcon = (nofdisk-k)*20/2;

let disk = `<div id=${k} class="towers" style="width:${20*k}px; height : 15px; background-color:rgb(255,255,255);position:absolute;top:${230+20*k}px;left:${120+leftcon}px;transition:${speed}ms linear;border-style:solid;border-color:black;text-align:center;"><p  style="color:black;margin-top:-5px;">${k}</p></div>`

document.body.insertAdjacentHTML("afterbegin",disk);

Pegs["A"].push(k)

}

await waitforme(speed)

await TOH(nofdisk);

}

async function movedisk(from , to)  {

  if (stats == 1  ) await pauser();

Pegs[to].push(Pegs[from].top())

 document.getElementById(Pegs[from].top()).style.top = 230+20*(nofdisk-Pegs[to].length()+1)+"px"
 document.getElementById(Pegs[from].top()).style.left = pos[to] +((nofdisk - Pegs[from].top())*20/2)+"px"

 Pegs[from].pop();


 await waitforme(speed+100)
 
 if (stats == 1  ) await pauser();

}



async function TOH(n, from_rod="A", to_rod="C",  aux_rod="B") 
{ 
if (n == 1) 
{ 
Log( "Move disk 1 from rod " + from_rod + " to rod " + to_rod)
await movedisk(from_rod , to_rod)

return; 
} 
await TOH(n - 1, from_rod, aux_rod, to_rod); 
Log(  "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod)
await movedisk(from_rod , to_rod)
await TOH(n - 1, aux_rod, to_rod, from_rod); 
} 



slider.onchange= function() {


    let x = document.getElementsByClassName("towers");
    let ie;
    for (ie = 0; ie < x.length; ie++) {
      x[ie].style.transition = speed+"ms linear";
    }
    
    
}
