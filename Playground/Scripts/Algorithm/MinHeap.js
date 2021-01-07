
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



var arrayflag = 0;

async function minheapify( len,  ind) 
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
         hilight(ind , "red" , "1s" ,1100)
      //  swap(st[ind], st[smallest]); 
      await hilight(smallest , "red" , "1s" ,1100)
        var te = storedarray[ind];
        storedarray[ind] = storedarray[smallest];
        storedarray[smallest] = te;

     await   gottopoint(ind ,smallest)

     await swapp(ind,smallest)

      hilight(ind , defaultcolor , "1s" ,1100)
     await hilight(smallest , defaultcolor , "1s" ,1100)
  
        // Recursively heapify the affected sub-tree 
    await    minheapify(len, smallest); 
    } 
} 

async function minHEAPIFY2( n,  i) 
{ 
    
    let parent = Math.floor( (i - 1) / 2); 
  
    if (storedarray[parent] > 0) { 
        // For Max-Heap 
        // If current node is greater than its parent 
        // Swap both of them and call heapify again 
        // for the parent 
        if (storedarray[i] < storedarray[parent]) { 
         //   swap(arr[i], arr[parent]);
            let tt = storedarray[i]
            storedarray[i] = storedarray[parent];
            storedarray[parent] = tt;
            
            hilight(i , "red" ,"1s" ,1100)
            //  swap(st[ind], st[largest]); 
            await hilight(parent , "red" ,"1s" ,1100)            


            await gottopoint(i ,parent)

             await swapp(parent, i)


       hilight(i , defaultcolor ,"1s" ,1100)
       await hilight(parent , defaultcolor ,"1s" ,1100)

            // Recursively heapify the parent node 
            await minHEAPIFY2( n, parent); 

        } 


    } 

    
} 

function heapleaf(element) {

  

    newnode = '<div id="'+count+'" style=" transition:'+ speed+ 'ms linear; left:0px; left:1250px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>  <p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%;display:none;" id="'+ count+"height" +'">'+"1" +'</p>  <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


   $("body").prepend(newnode)
   $("#"+count).draggable();

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

   divbyelement[element] = count

   count = count +1;
   counttreenodes = counttreenodes + 1;


   return count-1;
 }


async function insertminheap(value)   {


    if (count > 30)   {

        Log("Sorry, the maximum limit is 31");
        return 
    }

    if (arrayflag == 0)  {

        let h = []
        for (let c = 0 ;c <31 ; c++) h[c] = 0
    
        array(h);

        let x = document.getElementsByClassName("arrayd");
        let ie;
        for (ie = 0; ie < x.length; ie++) {
          x[ie].style.visibility = "hidden";

        }
        
    
        arrayflag =1 ;
    }

    if (count == storedarray.length) {

        Log(`The heap is fixed size of ${storedarray.length} elements.`)
    
        return;
    }
    
    

    redrawevent= requestAnimationFrame(redraw)


let heapnode = heapleaf(value);
storedarray[heapnode] = value;




 insert(value , heapnode)
 document.getElementById("aitem"+heapnode).style.visibility = "visible";


 
 if (heapnode==0) {

    window.scrollTo(1300,0);
    
    document.getElementById("0").style.top = 150+"px";
    document.getElementById("0").style.left = 1905+"px";

    document.getElementById("t1").style.left = 1400+"px"
    document.getElementById("t1").style.top = 500+"px"
    
    
        }


       
            
      let parent = Math.floor((heapnode - 1) / 2); 

  
  
if (heapnode != 0)  {

    if (heapnode % 2 == 1  )  {

        document.getElementById(heapnode).style.top = parseInt( document.getElementById(parent).style.top)+85+"px";
        document.getElementById(heapnode).style.left = parseInt( document.getElementById(parent).style.left)-35+"px";

        await waitforme(speed+100)

        treefy(`${parent}treeleft` , heapnode )

        

    }

    if (heapnode % 2 == 0  )  {

        document.getElementById(heapnode).style.top = parseInt( document.getElementById(parent).style.top)+85+"px";
        document.getElementById(heapnode).style.left = parseInt( document.getElementById(parent).style.left)+35+"px";

        await waitforme(speed+100)

        treefy(`${parent}treeright` , heapnode )

        
    }


    AVLpostleft[0] = 1905;
    AVLposttop[0] = 150;

    document.getElementById(0).style.top = 150+"px";
    document.getElementById(0).style.left = 1905+"px";

    calcheight('0')
  
   BalanceAll("0");

    
}


await waitforme(speed+100);
cancelAnimationFrame(redrawevent)

await minHEAPIFY2(heapnode+1, heapnode)



}



async function deleteminheap() { 

    let result = storedarray[0];
    // Get the last element 
    let lastElement = storedarray[count-1]; 
  
    // Replace root with first element 
    storedarray[0] = lastElement; 
   
   
     hilight((count-1) , "red" ,"1s" ,1100)  
     await hilight(0 , "red" ,"1s" ,1100) 
     
     await   gottopoint((count-1) ,0)
     await swapp(0,count-1)

     insert(0 , count-1)

     document.getElementById("aitem"+(count-1)).style.visibility = "hidden";



     hilight((count-1) , defaultcolor ,"1s" ,1100)  
     await hilight(0 , defaultcolor ,"1s" ,1100) 

     $("#"+(count-1)).remove();

     mySVG.redrawLines();
  
 
     count = count - 1; 
  
    // heapify the root node 
  await  minheapify(count, 0); 

  return result;

} 


async function createminheap(elements="")  {

    arrayflag=1;

if (elements.length >31)  {

    Log("Sorry, the maximum limit is 31");
        return 
}
    
      array(elements);
     await  arraynodes()
    
    build()
    window.scrollTo(1300,0);

    document.getElementById("t1").style.left = 1400+"px"
    document.getElementById("t1").style.top = 500+"px"
    

    _ctx.clearRect(0, 0,  10000, 4300);
    AVLpostleft[0] = 1905;
    AVLposttop[0] = 150;

    document.getElementById(0).style.top = 150+"px";
    document.getElementById(0).style.left = 1905+"px";

    calcheight('0')
  
   BalanceAll("0");

   await waitforme(speed+100);
   mySVG.redrawLines();
    // Build heap (rearrange array) 
    await display('Building Heap')
    for (var ind = length / 2 - 1; ind >= 0; ind--) 
    await   minheapify(length, ind); 

    

}



slider.onchange= function() {


    let x = document.getElementsByClassName("dragg");
    let ie;
    for (ie = 0; ie < x.length; ie++) {
      x[ie].style.transition = speed+"ms linear";
    }
    
    
  }
  
  