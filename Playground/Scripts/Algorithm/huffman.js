
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


var alignments = [];

var lefthand = 100;

var heapsize =0;

var positiongarray = []


var noderef = []
var  nodefreq = []




function hyperright(node_)  {

  let current = node_

  if (current == "null") {
    return;
}



  while(tree[current+"treeright"] != "null")  {

current = tree[current+"treeright"];


  }

  let hyperrightcord = parseInt(document.getElementById(current).style.left)


  return hyperrightcord
}



function hyperleft(node_)  {

  let current = node_


  if (current == "null") {
    return;
}




  while(tree[current+"treeleft"] != "null")  {

current = tree[current+"treeleft"];


  }

  let hyperleftcord = parseInt(document.getElementById(current).style.left)


  return hyperleftcord
}



function adjustadjecent(prev,curr) {

  BalanceBST(curr)
  Shiftright(curr)
  Shiftleft(curr)
  DelShiftright(curr)
  DelShiftleft(curr)

  let prevright = hyperright(prev);

  document.getElementById(curr).style.left = prevright+100;

  let currentleft = hyperleft(curr);


  let gap = prevright + 100;

let slidefactor = gap - currentleft;

adjustsubtree(curr , slidefactor)


}


async function adjustall()  {

  document.getElementById(noderef[0]).style.left = 200+"px";

  let currentleft = hyperleft(noderef[0]);

 BalanceBST(noderef[0])
  Shiftright(noderef[0])
  Shiftleft(noderef[0])
  DelShiftright(noderef[0])
  DelShiftleft(noderef[0])

  

if (currentleft < 200) {
  let difference = 200-currentleft;
  Log(`${currentleft} ,${difference}`)
   adjustsubtree(noderef[0] , difference);
}

if (noderef.length == 1 ) return;
   

  for (let restnodes = 1 ; restnodes < noderef.length ; restnodes++)   {

    adjustadjecent(noderef[restnodes-1] , noderef[restnodes]);

  }


  await waitforme(speed);



}



function heapleaf(element) {

  

    newnode = '<div id="'+count+'" style="transform:scale(.7,.7);transition:'+ speed+ 'ms linear; left:0px; left:0px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>  <p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%;display:none;" id="'+ count+"height" +'">'+"1" +'</p>  <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


   $("body").prepend(newnode)
$("#"+count).draggable();
   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

   divbyelement[element] = count

   count = count +1;
   counttreenodes = counttreenodes + 1;


   return count-1;
 }




function popitems()  {
  
  let frequency = nodefreq.shift()
  let reference = noderef.shift()




  return {frequency , reference }
	
	
}


function insertnewfreq (item)   {

  let newtop = heapleaf(item);

	let j = nodefreq.length-1;
	
	for (; j >= 0 && item < nodefreq[j]  ; j--)  {
		

    nodefreq[j+1] = nodefreq[j];
    noderef[j+1] = noderef[j];
		
		
	}

  nodefreq[j+1] =item;
  noderef[j+1] =newtop;
  
 return newtop;

}




async function huffcode(getstring)  {

  alignments = []

  var regex = /^[A-Za-z0-9 ]+$/
 
  //Validate TextBox value against the Regex.
  var isValid = regex.test(getstring);

  if (!isValid) {
    Log("enter a valid string");
    return;
} 

  window.scrollTo(0,0)
getstring = String(getstring).toUpperCase();

let stringelement = document.getElementById("stringholder");


stringelement.style.display=""

 lefthand = 100;

let countedchars = {}


 heapsize =0;

 count = 0;

if (document.getElementById("t1"))document.getElementById("t1").remove();

$(".dragg").remove();

for (let letsgo = 0 ; letsgo < getstring.length ; letsgo++) {


let spanchar = `<span id="str${letsgo}">${getstring[letsgo]}</span>`;

countedchars[getstring[letsgo]] =0;

stringelement.innerHTML += spanchar;

spanchar= ``;


}


//await waitforme(speed);


for (let letsgo = 0 ; letsgo < getstring.length ; letsgo++) {

  if (stats == 1  ) await pauser();
    let charbychar = document.getElementById("str"+letsgo);

    charbychar.style.transition= speed+"ms linear";
    charbychar.style.color = "red";

    countedchars[getstring[letsgo]] += 1;

    if (getstring[letsgo] == " ") {

      //  Log(`space = ${countedchars[getstring[letsgo]]}`)
    }
else
   // Log(`${getstring[letsgo]} = ${countedchars[getstring[letsgo]]}`)

   // await waitforme(speed+100);

    charbychar.style.transition= speed+"ms linear";
    charbychar.style.color = "black";

}



//await waitforme(speed);


let characters = []

for (let keys in countedchars)  {


nodefreq.push(countedchars[keys]);

if (keys == " ") {
  characters.push("sp")
}
else
characters.push(keys)


}




heapsize= Object.keys(countedchars).length


      for (let i=0; i < nodefreq.length-1; i++){
          for (let j=0; j < nodefreq.length-i-1; j++){
      

              if (nodefreq[j] > nodefreq[j+1]){
                let temp = nodefreq[j];
                nodefreq[j] = nodefreq[j+1];
                nodefreq[j+1] = temp;
               

                 temp = characters[j];
                characters[j] = characters[j+1];
                characters[j+1] = temp;
            
               
              }

                
                
          }
  
         
      }

stringelement.style.display="none"
stringelement.innerHTML= "";
 



      let lefth = 200;

      for (let i=0; i < nodefreq.length; i++){


        

        let newnode = heapleaf(characters[i]+` (${nodefreq[i]})`);

        noderef.push(i);

        document.getElementById(newnode).style.left = lefth+"px";
        document.getElementById(newnode).style.top = 150+"px";

        lefth += 100;


      }
  

if (stats ==1) await pauser();

  redrawevent= requestAnimationFrame(redraw)

 let summed;

 let subtreedata;

for (let u = 0 ; ; u++)  {


  if (noderef.length == 1) {
    break;
  }


  let leftelem =  popitems()
 
  let rightelem =  popitems();



  let sum = parseInt(leftelem.frequency)+parseInt(rightelem.frequency);

//  Log(`${leftelem.frequency} , ${rightelem.frequency} , ${sum}`)





 summed =   insertnewfreq(sum)

// Log(nodefreq)


   treefy(summed+"treeleft",leftelem.reference , "coral","0" )
   treefy(summed+"treeright",rightelem.reference ,"coral", "1" )

//calcheight(summed)

//BalanceAll(summed)
await  adjustall();

 


  


}


Log("Huffman tree built")


let huffmanroot = hyperleft(noderef[0])

if (huffmanroot < 200) {

let difference = 200 - huffmanroot

let x = document.getElementsByClassName("dragg");
let ie;
for (ie = 0; ie < x.length; ie++) {
  x[ie].style.left = parseInt(  x[ie].style.left) + difference +"px"
}



}


await waitforme(speed+100)

cancelAnimationFrame(redrawevent)


}


slider.onchange= function() {


  let x = document.getElementsByClassName("dragg");
  let ie;
  for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed+"ms linear";
  }
  
  
}



//huffcode('bcaadddccacacac')
//huffcode('heleeelllllllishere')