
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



async function noncollide()   {

let leftcord = 200;

let rootelement = alignments[0], prevrootelement


let rightheightprev, leftheightcurr;




let heightofroot = parseInt( document.getElementById(rootelement+"height").innerHTML)


calcheight(rootelement);

document.getElementById(rootelement).style.left =  leftcord +  20*( Math.pow(2,  heightofroot))+"px"

BalanceAll(rootelement)


for (let nodes = 1 ; nodes < alignments.length ; nodes++)  {

prevrootelement = alignments[nodes-1]

rootelement = alignments[nodes];

rightheightprev = parseInt( document.getElementById(prevrootelement+"height").innerHTML)
   leftheightcurr = parseInt( document.getElementById(rootelement+"height").innerHTML)


  calcheight(rootelement);
  document.getElementById(rootelement).style.left =  100+ parseInt(document.getElementById(prevrootelement).style.left) + 20* ( Math.pow(2, rightheightprev) +  Math.pow(2, leftheightcurr))+"px"

BalanceAll(rootelement)



}

positiongarray=[]
AVLpostleft = [];



}



function swapphuff(vala,valb,cc)  {


    if (vala == valb) {
      return;
    }
  
    if (vala > valb) {
  
      [vala ,valb] = [valb,vala]
  
    }
  
    let ele1 ,ele2;
  
    ele1 = document.getElementById("aitemval"+cc+vala);
    ele2 = document.getElementById("aitemval"+cc+valb);
    let text1 = ele1.innerHTML;
    let text2 = ele2.innerHTML;
  
    ele2.innerHTML = text1
    ele1.innerHTML = text2
  
  
  
  }
  

 function minheapify( len,  ind) 
{ 
    ind = Math.floor(ind)
    var smallest = ind; // Initialize smallest as root 
    var l = 2*ind + 1; // left = 2*i + 1 
    var r = 2*ind + 2; // right = 2*i + 2 
  
    
    // If left child is larger than root 
    if (l < len && storedarray[l] < storedarray[smallest]) 
        smallest = l; 
  
    // If right child is larger than smallest so far 
    if (r < len && storedarray[r] < storedarray[smallest]) 
        smallest = r; 
  
    // If smallest is not root 
    if (smallest != ind) 
    { 

        var te = storedarray[ind];
        storedarray[ind] = storedarray[smallest];
        storedarray[smallest] = te;


      swapphuff(ind,smallest,"c")
      swapphuff(ind,smallest,"f")

        // Recursively heapify the affected sub-tree 
        minheapify(len, smallest); 
    } 
} 

 function minHEAPIFY2( n,  i) 
{ 
    
    let parent = Math.floor( (i - 1) / 2); 
  
    if (storedarray[parent] > 0) { 
        // For Max-Heap 
        // If current node is greater than its parent 
        // Swap both of them and call heapify again 
        // for the parent 
        if (storedarray[i] < storedarray[parent] && i!=parent) { 
         //   swap(arr[i], arr[parent]);
            let tt = storedarray[i]
            storedarray[i] = storedarray[parent];
            storedarray[parent] = tt;
        
              swapphuff(parent, i,"c")
              swapphuff(parent, i,"f")

            // Recursively heapify the parent node 
             minHEAPIFY2( n, parent); 

        } 


    } 

    
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



async function deleteminheap() { 

    let frequency = storedarray[0];
    let character = document.getElementById("aitemvalc0").innerHTML
    let refference;
    // Get the last element 
    let lastElement = storedarray[heapsize-1]; 

  
    // Replace root with first element 
    storedarray[0] = lastElement; 
   
   
      swapphuff(0,heapsize-1,"c")
      await swapphuff(0,heapsize-1,"f")

      if (character == "sp") { refference =  heapleaf("sp");}
   else  if (character >= 'A' && character <= 'Z' ) { refference =  heapleaf(character);}
     else refference = character;

     document.getElementById("aitemvalf"+(heapsize-1)).innerHTML = "";
     document.getElementById("aitemvalc"+(heapsize-1)).innerHTML = "";

     document.getElementById("aitem"+(heapsize-1)).style.visibility = "hidden";

     mySVG.redrawLines();
  
 
     heapsize = heapsize - 1; 
  
    // heapify the root node 
  await  minheapify(heapsize, 0); 

  return  {refference,frequency};

} 

async function insertminheap(value)   {

    storedarray[heapsize] = value;



  let refference =  heapleaf(value)


 
    document.getElementById("aitemvalf"+(heapsize)).innerHTML = value;
     document.getElementById("aitemvalc"+(heapsize)).innerHTML = refference;

    
//  document.getElementById("aitem"+heapsize).style.visibility = "visible";

 
 Log("inserting New elemet at correct position")



 await waitforme(speed)


await minHEAPIFY2(heapsize+1, heapsize)

heapsize +=1;

return refference;

}



function swaplabels(lab1,lab2) {


  let temp = document.getElementById(lab1).innerHTML;
  document.getElementById(lab1).innerHTML = document.getElementById(lab2).innerHTML
  document.getElementById(lab2).innerHTML = temp;


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

cleareverything();

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


await waitforme(speed);


for (let letsgo = 0 ; letsgo < getstring.length ; letsgo++) {

  if (stats == 1  ) await pauser();
    let charbychar = document.getElementById("str"+letsgo);

    charbychar.style.transition= speed+"ms linear";
    charbychar.style.color = "red";

    countedchars[getstring[letsgo]] += 1;

    if (getstring[letsgo] == " ") {

        Log(`space = ${countedchars[getstring[letsgo]]}`)
    }
else
    Log(`${getstring[letsgo]} = ${countedchars[getstring[letsgo]]}`)

    await waitforme(speed+100);

    charbychar.style.transition= speed+"ms linear";
    charbychar.style.color = "black";

}



await waitforme(speed);



arr = '<table id="t1" style="visibility:hidden; z-index: 1;position:absolute;border-collapse: collapse; top:505px; left:150px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ></table>'

document.body.insertAdjacentHTML("afterbegin",arr);


let tablelement = document.getElementById("t1")




tabledata = document.createElement("td");
 
tabledata.style.cssText = "text-align:center; min-width:70px;background-color:coral;";

tabledata.id= "minheapindication";

tabledata.className = "arrayd";


tabledata.innerHTML += '<div id="aitemdiv'+ "mh"+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+"mh" +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+"mh"+'</p>             <p id= "aitemvalc'+"mh" +'" class="arrayitem" style="color:black;top:-10px;">'+ "Min Heap"+'</p>   </div>'


tablelement.appendChild(tabledata);


$("#t1").draggable();
let i=0;

for (let keys in countedchars)  {

 tabledata = document.createElement("td");
 
 tabledata.style.cssText = "text-align:center; min-width:70px";

 tabledata.id= "aitem"+i;

 tabledata.className = "arrayd";

 if (keys == " ") {

tabledata.innerHTML += '<div id="aitemdiv'+ i+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+i +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+i+'</p>             <p id= "aitemvalc'+i +'" class="arrayitem" >'+ "sp"+'</p>   </div>  <div style="text-align:center; position:absolute; z-index:1;left:50px;"><p id= "aitemvalf'+i +'" class="arrayitem" >'+(countedchars[keys]) +'</p></div>'

 }

 else
 tabledata.innerHTML += '<div id="aitemdiv'+ i+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+i +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+i+'</p>             <p id= "aitemvalc'+i +'" class="arrayitem" >'+ keys+'</p>   </div>  <div style="text-align:center; position:absolute; z-index:1;left:50px;"><p id= "aitemvalf'+i +'" class="arrayitem" >'+(countedchars[keys]) +'</p></div>'


 tablelement.appendChild(tabledata);

 storedarray.push(countedchars[keys])

 ++i;

}

heapsize= Object.keys(countedchars).length


Log("Sort the elements")
await waitforme (speed+100)


tableobj = $("#t1")

ipointer.style.display = "";
jpointer.style.display = "";
kpointer.style.display = "";


mainarray = document.getElementById("t1")

stringelement.style.display="none"
stringelement.innerHTML= "";



      for (let i=0; i < storedarray.length-1; i++){
          for (let j=0; j < storedarray.length-i-1; j++){
      
              if (storedarray[j] > storedarray[j+1]){
                let temp = storedarray[j];
                storedarray[j] = storedarray[j+1];
                storedarray[j+1] = temp;
               
                swaplabels("aitemvalf"+j,"aitemvalf"+(j+1))
                swaplabels("aitemvalc"+j,"aitemvalc"+(j+1))
               
              }

                
                
          }
  
         
      }
  
      $("#iindex").text("i").hide()
      $("#jindex").text("j").hide()


Log("Treat array as Min-Heap");



if (stats ==1) await pauser();

  redrawevent= requestAnimationFrame(redraw)

 let summed;

 let subtreedata;
for (let u = 0 ; u < storedarray.length ; u++)  {


if (heapsize < 2) {
  break;
}
  let leftelem =  await deleteminheap()
 

  let rightelem =  await deleteminheap()



  let sum = parseInt(leftelem.frequency)+parseInt(rightelem.frequency);

 
  await waitforme(speed)


 summed =   await  insertminheap(sum)





   treefy(summed+"treeleft",leftelem.refference , "coral","0" )
   treefy(summed+"treeright",rightelem.refference ,"coral", "1" )
calcheight(summed)

   let index = alignments.indexOf(Number(leftelem.refference));

   if (index > -1) {
     alignments.splice(index, 1);
   }

   index = alignments.indexOf(Number(rightelem.refference));

   if (index > -1) {
     alignments.splice(index, 1);
   }


   alignments.unshift(summed);


  noncollide();

  await waitforme (speed+100)


}


Log("Huffman tree built")


let huffmanroot = alignments[0];

while (tree[huffmanroot+"treeleft"] !="null")  {

  huffmanroot = tree[huffmanroot+"treeleft"];

}

let difference = parseInt( document.getElementById(huffmanroot).style.left)-100


let x = document.getElementsByClassName("dragg");
let ie;
for (ie = 0; ie < x.length; ie++) {
  x[ie].style.left = parseInt(  x[ie].style.left) - difference +"px"
}


await waitforme (speed+100)

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