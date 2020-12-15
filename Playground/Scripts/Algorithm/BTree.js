
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


let rot = "null";

var BTree= {}

var Btreeinv = {}

function  BTreeNode(l)  {

let btreenode = `<div id=${count} class="btnode"><p style="display:none;" id=${count}leaf>${l}</p><p style="display:none;" id=${count}n>0</p></div>`

   $("body").prepend(btreenode);

   let child1 = `<div  id=${count}c0 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"white"};left:5px;top:13px;"></div>`
   $("#"+count).append(child1);



   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:15px;"><p id=${count}keys0 class="btnode-text" style="color:white;"></p></div>`);
   

   child1 = `<div  id=${count}c1 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"white"};left:47px;top:13px;"></div>`
   $("#"+count).append(child1);
   

   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:55px;"><p id=${count}keys1 class="btnode-text" style="color:white;"></p></div>`);
   

   child1 = `<div  id=${count}c2 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"white"};left:88px;top:13px;"></div>`
   $("#"+count).append(child1);
   

   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:95px;"><p id=${count}keys2 class="btnode-text" style="color:white;"></p></div>`);
   

   child1 = `<div  id=${count}c3 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"white"};left:129px;top:13px;"></div>`
   $("#"+count).append(child1);
   
   child1 = `<div  id=${count}top style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${defaultcolor};left:67px;top:0px;"></div>`
   $("#"+count).append(child1);

   //$("#"+count).append(`<div style="display:none;width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:95px;"><p id=${count}keys3 class="btnode-text" style="color:white;">0</p></div>`);
   



   $("#"+count).draggable({

    drag:function(event,ui) {mySVG.Blines();}

   });

   BTree[`${count}c0`] ="null"
   BTree[`${count}c1`] ="null" 
   BTree[`${count}c2`] ="null" 
   BTree[`${count}c3`] ="null"
 

   np = count;

   ++count;

return  count-1;

}


function  redrawBtreelines ()  {


mySVG.Blines();


}


var bheights = {}
var preheight = 0;

  // Level-order-traverse
  var AVLpostleft = [], AVLposttop =[];
  AVLpostleft[0] = 1900;
  AVLposttop[0] = 150;
  
  var bheight = 0;

  function btreeheight ()  {

    bheight =0;

    let k = rot;


    while (BTree[k+"c0"] != "null") {

k = BTree[k+"c0"];

bheight = bheight +1;


    }


return bheight;

  }
  
  
  function BLevel(_node)
  {

   let ti = 1;
      // Base Case
      if ($("#"+_node).length == 0)  return;


      btreeheight();
    
   
      // Create an empty queue for level order traversal
      let q = new Q();
   
      // Enqueue Root and initialize height
      q.enQueue(_node);
   
      bheights[_node] = bheight;
      
  
      while (true)
      {
          // Print front of queue and remove it from queue
          let root_ = (q.front).data;

          if (bheights[root_] == 0 ) break;
         
   
          if (preheight != bheights[root_]) {

          ti= 1; 

         }



         $("#"+root_).offset({left: 130+  ti*60*Math.pow(2,bheights[root_]) , top : 150 *(bheight-bheights[root_]+1)})

         console.log(ti,bheights[root_])
         
         ti = ti+2;

         preheight = bheights[root_];
       
          q.deQueue();

          
   
          /* Enqueue left child */
          if (BTree[root_+"c0"] != "null"){  

            q.enQueue(BTree[root_+"c0"]);

            bheights[BTree[root_+"c0"]] =  bheights[root_] -1

          }
              
   
          /*Enqueue right child */
          if (BTree[root_+"c1"] != "null") {

            q.enQueue(BTree[root_+"c1"]);
            bheights[BTree[root_+"c1"]] =  bheights[root_]-1


          }
              
          
          if (BTree[root_+"c2"] != "null") {

            q.enQueue(BTree[root_+"c2"]);
            bheights[BTree[root_+"c2"]] =  bheights[root_] -1
          }
              

          if (BTree[root_+"c3"] != "null") {

            q.enQueue(BTree[root_+"c3"]);
            bheights[BTree[root_+"c3"]] =  bheights[root_] -1
          }
          
          
      }


      ti = 0;

      while (!q.isEmpty()) {

        let root_ = (q.front).data;

        $("#"+root_).offset({left: 130+  ti*150 , top : 150 *(bheight+1)})

        ++ti;

        q.deQueue();
      }




  
  
  }



function splitChild( x ,  splitindex) 
{ 
    let y =  BTree[x+"c"+splitindex]
    
    let z =  BTreeNode("true"); 
   


    document.getElementById(z+"leaf").innerHTML = document.getElementById(y+"leaf").innerHTML
    
   

    document.getElementById(z+"n").innerHTML =1
  
    
    for (let j = 0; j < 1; j++) {

      document.getElementById(z+"keys"+j).innerHTML = document.getElementById(y+"keys"+(j+2)).innerHTML;
      document.getElementById(y+"keys"+(j+2)).innerHTML="";

    } 
    
    
  
    if (document.getElementById(y+"leaf").innerHTML == "false") 
    { 
        for (let j = 0; j < 2; j++) {
        BTree[z+"c"+j] = BTree[y+"c"+(j+2)]
        BTree[y+"c"+(j+2)] = "null" 

    }
    
    
        
    } 
  
    
    for (let j = parseInt( document.getElementById(x+"n").innerHTML); j >= splitindex+1; j--)  {

      BTree[x+"c"+(j+1)] = BTree[x+"c"+(j)];
      BTree[x+"c"+(j)] = "null" 
    }
        
  
    
    BTree[x+"c"+(splitindex+1)] = z;
   
    for (let j = parseInt( document.getElementById(x+"n").innerHTML)-1; j >= splitindex; j--) {

      
       document.getElementById(x+"keys"+(j+1)).innerHTML = document.getElementById(x+"keys"+(j)).innerHTML;
       document.getElementById(x+"keys"+(j)).innerHTML = "";


    }
       
    
    document.getElementById(x+"keys"+(splitindex)).innerHTML = document.getElementById(y+"keys1").innerHTML;
    document.getElementById(y+"keys1").innerHTML = "";



       ++document.getElementById(x+"n").innerHTML

        
        document.getElementById(y+"n").innerHTML =1;
   
} 



function insertNonFull(targ , k) 
{ 
    // Initialize index as index of rightmost element 
    let iter = parseInt( document.getElementById(targ+"n").innerHTML) - 1 
  
    console.log(targ, "",iter)
  

    // If this is a leaf node 
    if ( document.getElementById(targ+"leaf").innerHTML == "true") 
    { 
        // The following loop does two things 
        // a) Finds the location of new key to be inserted 
        // b) Moves all greater keys to one place ahead 
        while (iter >= 0 && parseInt( document.getElementById(targ+"keys"+iter).innerHTML) > k) 
        { 

            document.getElementById(targ+"keys"+(iter+1)).innerHTML = document.getElementById(targ+"keys"+(iter)).innerHTML;

           
            iter--; 
        } 
  
       // console.log("    ",iter+1);
        
        document.getElementById(targ+"keys"+(iter+1)).innerHTML = k;
       

        
        ++document.getElementById(targ+"n").innerHTML

    } 
    else // If this node is not leaf 
    { 
        // Find the child which is going to have the new key 
        while (iter >= 0 && parseInt( document.getElementById(targ+"keys"+(iter)).innerHTML) > k) iter--; 
            

            iter = iter+1;

            let xchildi = BTree[targ+"c"+iter];
  
        // See if the found child is full 
        if (parseInt( document.getElementById(xchildi+"n").innerHTML) == 3) 
        { 
            // If the child is full, then split it 
            splitChild( targ,iter); 
  
            // After split, the middle key of C[iter] goes up and 
            // C[iter] is splitted into two.  See which of the two 
            // is going to have the new key 
            if (parseInt( document.getElementById(targ+"keys"+(iter)).innerHTML) < k) 
                iter++; 
        } 

    //    console.log(targ+"c"+iter)
        insertNonFull( BTree[targ+"c"+iter] ,k); 
    } 

    iter = 0;
} 

var xx =0;
    
    
async function btreeinsert( k)  {

  document.getElementById("codetype").setAttribute("disabled" , "disabled")
  
    
redrawevent = setInterval(redrawBtreelines,50);

   xx= rot;
    
    if (rot == "null") {
        
      rot =  BTreeNode("true"); 
  
      document.getElementById(rot+"keys0").innerHTML = k;
      document.getElementById(rot+"n").innerHTML= 1;

        
    }
    
    
     else 
    { 
        
        if ( parseInt( document.getElementById(xx+"n").innerHTML) == 3) 
        { 
            
            let s =  BTreeNode("false");
       

            rot = s; 
         
            document.getElementById(s+"leaf").innerHTML = "false";

            document.getElementById(s+"n").innerHTML= "0";

            BTree[`${s}c${0}`] = xx;
  
            splitChild(s, 0); 

            insertNonFull(s,k); 
   
        } 
        else {
         
        insertNonFull(xx,k); 
      
      }
    } 
    
    
    $(".btnode").css("transition" , speed+"ms linear");

    BLevel(rot)

    await waitforme (speed+100);

clearInterval(redrawevent)

document.getElementById("codetype").removeAttribute("disabled")
  

    
}




async function btraverse(ttt=rot) 
{ 

    // There are n keys and n+1 children, traverse through n keys 
    // and first n children 
    let bh; 
    for (bh = 0; bh < document.getElementById(ttt+"n").innerHTML; bh++) 
    { 
      
      await hilight(ttt,"red");
             hilight(ttt,defaultcolor);

        // If this is not leaf, then before printing key[bh], 
        // traverse the subtree rooted with child C[bh]. 
        if (document.getElementById(ttt+"leaf").innerHTML == "false") 
      await  btraverse( BTree[ttt+"c"+bh]); 
            
          
        Output(document.getElementById(ttt+"keys"+bh).innerHTML)

        await hilight(ttt+"keys"+bh,"green");
             hilight(ttt+"keys"+bh,"rgba(0,0,0,0)");
       
    } 
  
    // Print the subtree rooted with last child 
    if (document.getElementById(ttt+"leaf").innerHTML == "false") {
        
  
      await   btraverse(BTree[ttt+"c"+bh]); 
          
    } 
    
    
}


let getout = 0;
async function btsearch(item ,ttt=rot ) 
{ 

    // There are n keys and n+1 children, traverse through n keys 
    // and first n children 
    let bh; 
    for (bh = 0; bh < document.getElementById(ttt+"n").innerHTML; bh++) 
    { 
      
      await hilight(ttt,"red");
             hilight(ttt,defaultcolor);

        // If this is not leaf, then before printing key[bh], 
        // traverse the subtree rooted with child C[bh]. 
        if (document.getElementById(ttt+"leaf").innerHTML == "false") 
      await  btsearch( item,BTree[ttt+"c"+bh]); 
            

      
      if ( parseInt(document.getElementById(ttt+"keys"+bh).innerHTML) == item) {
        Output("Item Exists.")
        getout=1;
        break;

      }

      if (getout ==1) {

        return;
      }
          
     //   Output(document.getElementById(ttt+"keys"+bh).innerHTML)

        await hilight(ttt+"keys"+bh,"green");
             hilight(ttt+"keys"+bh,"rgba(0,0,0,0)");

       
    } 
  
    // Print the subtree rooted with last child 
    if (document.getElementById(ttt+"leaf").innerHTML == "false") {
        
  
      await   btsearch(item,BTree[ttt+"c"+bh]); 
          
    } 
    

    
    
}

async function btreesearch(item)  {

  getout = 0;

await btsearch(item);


getout = 0;


}


/*
for (let yy =1 ; yy < 30 ;++yy) {


    btreeinsert(yy)

}
BLevel(rot);
mySVG.Blines();
*/
