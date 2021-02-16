

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


var next ={};
var prev ={};

var head_ref ="null" ;
var tail_ref ="null";

let redrawlistevent;

var xp = 0;

skipbtn.style.display = 'none'
playbtn.style.display = 'none'
pausebtn.style.display = 'none'

async function redrawlist  ()  {

    mySVG.Listlines();
    
    redrawlistevent = requestAnimationFrame(redrawlist)
   
   }

function addnode(typed,posi="uni") {

  
  
    xp = 160;
  
  
  
   newnode = '<div id="'+count+'"  class="dragg" style= left:'+xp+'px;top:150px;> <p  style="position:absolute; color:coral; font-size:60%; left:20px;" id="'+ count+"listbottom" +'">'+count +'</p>    <p  id="'+ count+"val" +'" class="t">'+typed+'</p>   </div>';
               
             
            
                 $("body").prepend(newnode);

                 $("#"+count).draggable({
                     drag: function(event,ui) {mySVG.Listlines();}
                 });
           
                 next[count] = "null"; 
 
                 prev[count] = "null"
       
                 count = count +1;


                 return count-1;
           
}



async function prependlist( new_data) 
{ 
    

    redrawlistevent = requestAnimationFrame(redrawlist)

    let x = document.getElementsByClassName("dragg");
    let ie;
    for (ie = 0; ie < x.length; ie++) {
        x[ie].style.transition = speed+"ms linear";
      x[ie].style.left = parseFloat(x[ie].style.left)+160+"px";
    }
    
    
  
    /* 1. allocate node */
    let new_node = addnode(new_data,"no"); 

   
     x = document.getElementsByClassName("dragg");
    for (ie = 0; ie < x.length; ie++) {
        x[ie].style.transition = speed+"ms linear";
    }
  
 
    /* 3. Make next of new node as head and previous as NULL */

    if (head_ref == "null" || head_ref == undefined)  {

        tail_ref = new_node;
    }

    next[new_node] = head_ref; 
 
    prev[new_node] = "null"
 
    /* 4. change prev of head node to new node */
    if ((head_ref) != "null" || (head_ref) != undefined) 
        prev[head_ref] = new_node
 
    /* 5. move the head to point to the new node */
    head_ref = new_node; 
    next["headref"] = head_ref;

    
    document.getElementById(new_node).style.top= "250px";



    await waitforme (speed+400);

   cancelAnimationFrame(redrawlistevent)
  

} 





async function appendlist( new_data) 
{ 

    
    $(".dragg").css("transition" , speed+"ms linear");
    /* 1. allocate node */
    let new_node =  addnode(new_data); 
 
    let last = head_ref; /* used in step 5*/
 
    /* 2. put in the data 
 
    /* 3. This new node is going to be the last node, so 
        make next of it as NULL*/
    next[new_node] = "null"
 
    /* 4. If the Linked List is empty, then make the new 
        node as head */
    if (head_ref == "null" )
    { 
       
        prev[new_node] = "null"
        head_ref = new_node; 
        tail_ref = new_node;
        document.getElementById(new_node).style.top= "250px";
        return; 
    } 
 
    /* 5. Else traverse till the last node */
    while ( next[last] != "null" )  last= next[last]
 
    /* 6. Change the next of last node */
    let lastoffset = $("#"+last).offset()
    next[last] = new_node
 
    /* 7. Make last node as previous of new node */
    prev[newnode] = last;
    tail_ref = new_node;

    $("#"+new_node).offset({left : lastoffset.left+160 , top :250})

    mySVG.Listlines();
 
    return; 
} 


async function insertafterlist( prev_node, new_data)  
{ 
    
    redrawlistevent = requestAnimationFrame(redrawlist)
    /*1. check if the given prev_node is NULL */
    if (!document.getElementById(prev_node))  
    {  
        Log("the given previous node cannot be NULL");  
        return;  
    }  
  
  let newoff =  $("#"+prev_node).offset();
  let last = next[prev_node];

    /* 2. allocate new node */
     new_node = addnode(new_data); 


     $(".dragg").css("transition" , speed+"ms linear");

     $("#"+new_node).offset({left:newoff.left+160 , top: newoff.top+130});

 
    /* 4. Make next of new node as next of prev_node */
    next[new_node] = next[prev_node]
  
    /* 5. move the next of prev_node as new_node */
   
    next[prev_node] = new_node

    await waitforme(speed);

   
    

    $("#"+new_node).offset({left:newoff.left+160 , top: newoff.top});

    
    while ( next[last] != "null" )  {

document.getElementById(last).style.left =parseFloat( document.getElementById(last).style.left)+140+"px";
 last= next[last]


    }

    document.getElementById(last).style.left =parseFloat( document.getElementById(last).style.left)+140+"px";

    await waitforme (speed+100);

   cancelAnimationFrame(redrawlistevent)

}  
  
function deletelistnode(key) 
{ 
      
    // Store head node 
    let temp = head_ref; 
    let prevr = "null"; 
      
    // If head node itself holds 
    // the key to be deleted 
    if (temp != "null" &&  $("#"+temp+"val").text()== key) 
    { 
        head_ref = next[temp] // Changed head 
        $("#"+temp).remove();
        return; 
    } 
  
    // Else Search for the key to be deleted,  
    // keep track of the previous node as we 
    // need to change 'prev->next' */ 
    while (temp != "null" &&  $("#"+temp+"val").text() != key) 
    { 
        prevr = temp; 
        temp = next[temp]; 
    } 
  
    // If key was not present in linked list 
    if (temp == "null") return; 
  
    // Unlink the node from linked list 
    next[prevr]  =  next[temp]; 
  
    $("#"+temp).remove();
    mySVG.Listlines();


} 


async function listtraverse()  {


    head = head_ref

    for(;;) {

      if (head == "null") {
      
      await  display("Traverse complete")
        break;
      }

  let  value = $("#"+head+"val").text();

    await hilight(head, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    
     hilight(head , defaultcolor  , "1000ms" , 1100)
    Output(value)
   
head = next[head];
Log("Going next node")

  }


  }


var pushsignal = 0;

  async function pushlist(val)  {

   // redrawlistevent = setInterval(redrawlist , 50);

    if (pushsignal == 0)  {

        $(document).scrollTop(0)
        $(document).scrollLeft(0)

        newnode = '<div id="'+"headref"+'"  class="pointers" style= left:'+50+'px;top:150px;>     <p  class="t" style="color:black;">'+"Top"+'</p>   </div>';
               
             
        $("body").prepend(newnode);

        $("#headref").draggable({
            drag: function(event,ui) {mySVG.Listlines();}
        });
  
        next[count] = "null"; 

        prev[count] = "null"

        pushsignal =1;

    }

    

await prependlist(val)




  }



  async function poplist()
{
    
    redrawlistevent = requestAnimationFrame(redrawlist)
    $(".dragg").css("transition" , speed+"ms linear");
if( head_ref == "null")
Log("Underflow ERROR");
else{
let temp = head_ref;
Output($("#"+temp+"val").text())
head_ref = next[temp] // After popping, make the next node as TOP
next["headref"] = next[temp]
$("#"+temp).remove();

let x = document.getElementsByClassName("dragg");
let ie;
for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed+"ms linear";
  x[ie].style.left = parseFloat(x[ie].style.left)-160+"px";
}




}

await waitforme(speed+400);



cancelAnimationFrame(redrawlistevent)


}




async function enqueuelist(x) 
{ 

    if (pushsignal == 0) {

        $(document).scrollTop(0)
        $(document).scrollLeft(0)
        
        newnode = '<div id="'+"headref"+'"  class="pointers" style= left:'+50+'px;top:150px;>     <p  class="t" style="color:black;">'+"Front"+'</p>   </div>';
               
             
        $("body").prepend(newnode);

        newnode = '<div id="'+"tailref"+'"  class="pointers" style= right:'+350+'px;top:400px;>     <p  class="t" style="color:black;">'+"Rear"+'</p>   </div>';
               
             
        $("body").prepend(newnode);

        $("#headref,#tailref").draggable({
            drag: function(event,ui) {mySVG.Listlines();}
        });
  
        next[count] = "null"; 

        prev[count] = "null"

        pushsignal =1;

    }
    // Create a new LL node 
    await appendlist(x)
    next["tailref"] = tail_ref;
    next["headref"] = head_ref;

    mySVG.Listlines();
  
} 


async function dequeuelist() 
{ 

    // Create a new LL node 
    await poplist()
    next["tailref"] = tail_ref;
    next["headref"] = head_ref;
    mySVG.Listlines();
  
} 





// mySVG.connect();
// appendlist(1)
// appendlist(2)
// appendlist(3)
// appendlist(14)
// appendlist(231)
// appendlist(313)
// appendlist(131)
// mySVG.Listlines();
