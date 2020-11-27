var heaptotallength = 0;


async function HEAPIFY2( n,  i) 
{ 
    
    let parent = Math.floor( (i - 1) / 2); 
  
    if (storedarray[parent] > 0) { 
        // For Max-Heap 
        // If current node is greater than its parent 
        // Swap both of them and call heapify again 
        // for the parent 
        if (storedarray[i] > storedarray[parent]) { 
         //   swap(arr[i], arr[parent]);
            let tt = storedarray[i]
            storedarray[i] = storedarray[parent];
            storedarray[parent] = tt;
            
            hilight(i , "red" ,"1s" ,1100)
            //  swap(st[ind], st[largest]); 
            await hilight(parent , "red" ,"1s" ,1100)            


            await gottopoint(i ,parent)

         await   waitforme(500);

       hilight(i , defaultcolor ,"1s" ,1100)
       await hilight(parent , defaultcolor ,"1s" ,1100)

            // Recursively heapify the parent node 
            await HEAPIFY2( n, parent); 

        } 


    } 

    
} 



async function heapify1( len,  ind) 
  { 
      ind = Math.floor(ind)
      var largest = ind; // Initialize largest as root 
      var l = 2*ind + 1; // left = 2*i + 1 
      var r = 2*ind + 2; // right = 2*i + 2 
    
      
      // If left child is larger than root 
      if (l < len && storedarray[l] > storedarray[largest]) 
          largest = l; 
    
      // If right child is larger than largest so far 
      if (r < len && storedarray[r] > storedarray[largest]) 
          largest = r; 
    
      // If largest is not root 
      if (largest != ind) 
      { 
           hilight(ind , "red" , "1s" ,1100)
        //  swap(st[ind], st[largest]); 
        await hilight(largest , "red" , "1s" ,1100)
          var te = storedarray[ind];
          storedarray[ind] = storedarray[largest];
          storedarray[largest] = te;
  
       await   gottopoint(ind ,largest)

       await   waitforme(500);
       
        hilight(ind , defaultcolor , "1s" ,1100)
       await hilight(largest , defaultcolor , "1s" ,1100)
    
          // Recursively heapify the affected sub-tree 
      await    heapify1(len, largest); 
      } 
  } 


async function insertheap(value)   {

leaf(value);
storedarray[count-1] = value;

await doalign();
redrawevent= setInterval(redraw , 50);

if (count != 0)  {

    let parent = Math.floor((count - 1) / 2); 

    if (count % 2 == 1  )  {

        treefy(`${parent}treeleft` , count )
    }

    if (count % 2 == 0  )  {

        treefy(`${parent}treeright` , count )
    }

    
}

await waitforme(2500);

clearInterval(redrawevent)
await HEAPIFY2(count, count-1)

}



async function deleteheap() 
{ 
    // Get the last element 
    let lastElement = storedarray[count-1]; 
  
    // Replace root with first element 
    storedarray[0] = lastElement; 


     hilight((count-1) , "red" ,"1s" ,1100)  
     await hilight(0 , "red" ,"1s" ,1100) 
     
     await   gottopoint((count-1) ,0)

     await   waitforme(500);

     hilight((count-1) , defaultcolor ,"1s" ,1100)  
     await hilight(0 , defaultcolor ,"1s" ,1100) 

     $("#"+(count-1)).remove();

     mySVG.redrawLines();
  
 
     count = count - 1; 
  
    // heapify the root node 
  await  heapify1(count, 0); 
} 