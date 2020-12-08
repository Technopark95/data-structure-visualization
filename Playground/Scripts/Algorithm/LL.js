


var next ={};
var prev ={};

var head_ref ="null" ;

let redrawlistevent;

var xp = 0;

async function redrawlist  ()  {

    mySVG.Listlines();
    
   
   }

function addnode(typed,posi="uni") {

  
  
  if (posi == "uni")  xp = (count+1)*140;
  else xp = 140;
  
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

    redrawlistevent = setInterval(redrawlist , 50);

    $(".dragg").css("transition" , speed+"ms linear");

    $(".dragg").animate({left : "+=140px" , "transition" : speed+"ms linear"})
    
    /* 1. allocate node */
    let new_node = addnode(new_data,"no"); 
 
    /* 3. Make next of new node as head and previous as NULL */

    next[new_node] = head_ref; 
 
    prev[new_node] = "null"
 
    /* 4. change prev of head node to new node */
    if ((head_ref) != "null" || (head_ref) != undefined) 
        prev[head_ref] = new_node
 
    /* 5. move the head to point to the new node */
    head_ref = new_node; 

    await waitforme (speed+400);

   clearInterval(redrawlistevent)
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
        return; 
    } 
 
    /* 5. Else traverse till the last node */
    while ( next[last] != "null" )  last= next[last]
 
    /* 6. Change the next of last node */
    next[last] = new_node
 
    /* 7. Make last node as previous of new node */
    prev[newnode] = last;

    mySVG.Listlines();
 
    return; 
} 


async function insertafterlist( prev_node, new_data)  
{ 
    
    redrawlistevent = setInterval(redrawlist , 50);
    /*1. check if the given prev_node is NULL */
    if (prev_node == "null")  
    {  
        Log("the given previous node cannot be NULL");  
        return;  
    }  
  
  let newoff =  $("#"+next[prev_node]).offset();
  let last = next[prev_node];

    /* 2. allocate new node */
     new_node = addnode(new_data); 

     $(".dragg").css("transition" , speed+"ms linear");

     $("#"+new_node).offset({left:newoff.left , top: newoff.top+130});


    /* 4. Make next of new node as next of prev_node */
    next[new_node] = next[prev_node]
  
    /* 5. move the next of prev_node as new_node */
    next[prev_node] = new_node

    await waitforme(speed);

   

    $("#"+new_node).offset({left:newoff.left , top: newoff.top});

    while ( next[last] != "null" )  {

$("#"+last).animate({"left":"+=140px"})
 last= next[last]


    }
    $("#"+last).animate({"left":"+=140px"})

    await waitforme (speed*4);

   clearInterval(redrawlistevent)

}  
  
function deletelistnode(key) 
{ 
      
    // Store head node 
    let temp = head_ref; 
    let prevr = "null"; 
      
    // If head node itself holds 
    // the key to be deleted 
    if (temp != "null" && parseInt( $("#"+temp+"val").text(),10) == key) 
    { 
        head_ref = next[temp] // Changed head 
        $("#"+temp).remove();
        return; 
    } 
  
    // Else Search for the key to be deleted,  
    // keep track of the previous node as we 
    // need to change 'prev->next' */ 
    while (temp != "null" && parseInt( $("#"+temp+"val").text(),10) != key) 
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

    value = $("#"+head+"val").text();

    await hilight(head, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    
     hilight(head , defaultcolor  , "1000ms" , 1100)
    Output(value)
   
head = next[head];
Log("Going next node")

  }


  }

mySVG.connect();
appendlist(1)
appendlist(2)
appendlist(3)
appendlist(14)
appendlist(231)
appendlist(313)
appendlist(131)
mySVG.Listlines();