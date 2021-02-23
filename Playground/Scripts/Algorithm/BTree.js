
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

var aligncont = {}

var leafnodes= 0;

skipbtn.style.display = 'none'

function  BTreeNode(l)  {

let btreenode = `<div id=${count} class="btnode" style="transition:${speed}ms linear;width:${46*3+10}px;"><p style="display:none;" id=${count}leaf>${l}</p><p style="display:none;" id=${count}n>0</p></div>`

   $("body").prepend(btreenode);

   let child1 = `<div  id=${count}c0 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"rgba(0,0,0,0)"};left:5px;top:13px;"></div>`
   $("#"+count).append(child1);



   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:15px;"><p id=${count}keys0 class="btnode-text" ></p></div>`);
   

   child1 = `<div  id=${count}c1 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"rgba(0,0,0,0)"};left:47px;top:13px;"></div>`
   $("#"+count).append(child1);
   

   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:55px;"><p id=${count}keys1 class="btnode-text" ></p></div>`);
   

   child1 = `<div  id=${count}c2 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"rgba(0,0,0,0)"};left:88px;top:13px;"></div>`
   $("#"+count).append(child1);
   

   $("#"+count).append(`<div style="width:30px;height:10px;top:-6px;position:absolute;text-align:center;left:95px;"><p id=${count}keys2 class="btnode-text" ></p></div>`);
   

   child1 = `<div  id=${count}c3 style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"rgba(0,0,0,0)"};left:129px;top:13px;"></div>`
   $("#"+count).append(child1);
   
   child1 = `<div  id=${count}top style="position:absolute; height:5px; width:5px; border-radius:5px; background-color:${"rgba(0,0,0,0)"};left:70px;top:0px;"></div>`
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

redrawevent = requestAnimationFrame(redrawBtreelines);

}


var bheights = {}
var preheight = 0;

  // Level-order-traverse
  var AVLpostleft = [], AVLposttop =[];
  AVLpostleft[0] = 1900;
  AVLposttop[0] = 100;
  
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

          aligncont[bheights[root_]] = []

      

         }

if (aligncont[bheights[root_]][aligncont[bheights[root_]].length-1] != root_ )
     aligncont[bheights[root_]].push(root_);



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


      // ti = 0;


      

      for (let seeker = 0 ; seeker < count ; seeker++)  {


        if (document.getElementById(seeker+"leaf").innerText == "true") {

    
          ++leafnodes;

        }  


      }



let totalxlength = 150*leafnodes;


for (let uptoh = bheight ; uptoh >= 1 ; uptoh-- )  {


  let levellength = aligncont[uptoh].length



  let pushfactor = totalxlength/(levellength*2+1);

  let spacer =1;

  for (let le = 0 ; le < levellength ; le++ )  {

 

    let elemref =aligncont[uptoh][le];

    let amounttopush = (spacer*pushfactor);



$("#"+elemref).offset({left:130+ amounttopush , top : 85+95 *(bheight-bheights[elemref]+1)})

spacer +=2;

if (bheight == 1) {
  break;
}




  }


}



leafnodes = 0;

ti=0;


      while (!q.isEmpty()) {

        let root_ = (q.front).data;

        $("#"+root_).offset({left: 130+  ti*160 , top : 85+95 *(bheight+1)})

        ++ti;

        q.deQueue();
      }




  
  
  }



async function splitChild( x ,  splitindex) 
{ 




    let y =  BTree[x+"c"+splitindex]
    
    let z =  BTreeNode("true"); 

  
   
  Log("Split the node");
  BLevel(rot)
  await waitforme (speed+100);


    document.getElementById(z+"leaf").innerHTML = document.getElementById(y+"leaf").innerHTML
    
   
    // document.getElementById(z).style.width = (46*1+10)+"px"
    document.getElementById(z+"n").innerHTML =1
  
    Log("Copy the data into new node the node");
    
    for (let j = 0; j < 1; j++) {

  
      document.getElementById(z+"keys"+j).innerHTML = document.getElementById(y+"keys"+(j+2)).innerHTML;

      document.getElementById(y+"keys"+(j+2)).innerHTML="";

      await waitforme(speed)

    } 

    
    
    Log("Move the child into new node the node");
    
  
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

       await waitforme(speed)


    }
       
    // document.getElementById(x).style.width= (46*(Number(document.getElementById(x+"n").innerHTML)+1))+10+"px";

  //  document.getElementById(x+"top").style.width = (46*1+10)/2+"px"

   
    document.getElementById(x+"keys"+(splitindex)).innerHTML = document.getElementById(y+"keys1").innerHTML;



    document.getElementById(y+"keys1").innerHTML = "";

    await waitforme(speed)
  

       ++document.getElementById(x+"n").innerHTML

     
    //   document.getElementById(y).style.width = (46*1+10)+"px"

        document.getElementById(y+"n").innerHTML =1;


   
} 



async function insertNonFull(targ , k) 
{ 
    // Initialize index as index of rightmost element 
    let iter = parseInt( document.getElementById(targ+"n").innerHTML) - 1 
  
   
  

    // If this is a leaf node 
    if ( document.getElementById(targ+"leaf").innerHTML == "true") 
    { 
        // The following loop does two things 
        // a) Finds the location of new key to be inserted 
        // b) Moves all greater keys to one place ahead 
        while (iter >= 0 && parseInt( document.getElementById(targ+"keys"+iter).innerHTML) > k) 
        { 

            document.getElementById(targ+"keys"+(iter+1)).innerHTML = document.getElementById(targ+"keys"+(iter)).innerHTML;

            document.getElementById(targ+"keys"+(iter)).innerHTML = "";

            await waitforme(speed)
           
            iter--; 
        } 
  

        document.getElementById(targ+"keys"+(iter+1)).innerHTML = k;


    
        await waitforme(speed+100)
  

        
        ++document.getElementById(targ+"n").innerHTML
    //    document.getElementById(targ).style.width= (46*document.getElementById(targ+"n").innerHTML)+10+"px";

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
          await  splitChild( targ,iter); 
  
            // After split, the middle key of C[iter] goes up and 
            // C[iter] is splitted into two.  See which of the two 
            // is going to have the new key 
            if (parseInt( document.getElementById(targ+"keys"+(iter)).innerHTML) < k) 
                iter++; 
        } 

       await insertNonFull( BTree[targ+"c"+iter] ,k); 
    } 

    iter = 0;
} 

var xx =0;
    
    
async function btreeinsert( k)  {


redrawevent = requestAnimationFrame(redrawBtreelines);

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
  
           await splitChild(s, 0); 

           await insertNonFull(s,k); 
   
        } 
        else {
         
      await  insertNonFull(xx,k); 
      
      }
    } 
    

    BLevel(rot)

    await waitforme (speed+100);

cancelAnimationFrame(redrawevent)


    
}




async function btraverse(ttt=rot) 
{ 

    // There are n keys and n+1 children, traverse through n keys 
    // and first n children 
    let bh; 
    for (bh = 0; bh < document.getElementById(ttt+"n").innerHTML; bh++) 
    { 
      
      await hilight(ttt,"red");
             hilight(ttt,"rgba(0,0,0,0)");

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



async function btreesearch(k,x=rot) 
{ 


  await hilight(x,"red");
  hilight(x,"rgba(0,0,0,0)");



    // Find the first key greater than or equal to k 
    let i = 0; 
    while (i < parseInt(document.getElementById(x+"n").innerHTML) && k > parseInt(document.getElementById(x+"keys"+i).innerHTML)) {
  
    
  i++; 

    }
      
  
    // If the found key is equal to k, return this node 
    if ( parseInt(document.getElementById(x+"keys"+i).innerHTML) == k)  {

      await hilight(x+"keys"+i,"green");
      hilight(x+"keys"+i, "rgba(0,0,0,0)");

      Output("Element exist.");
return; 

    }
        
  
    // If key is not found here and this is a leaf node 
    if (document.getElementById(x+"leaf").innerHTML == "true")  {

  
        return "null"; 
    }
    // Go to the appropriate child 
    return await btreesearch(k,BTree[x+"c"+i]); 
} 
  


slider.onchange= function() {


  let x = document.getElementsByClassName("btnode");
  let ie;
  for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed+"ms linear";
  }
  
  
}
