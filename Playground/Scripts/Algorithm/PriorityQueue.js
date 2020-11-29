function parent( val) 
{ 
  
    return Math.floor ((val - 1) / 2); 
} 
  
// Function to return the index of the 
// left child of the given node 
function parent(val) 
{ 
  
    return ((2 * val) + 1); 
} 
  
// Function to return the index of the 
// right child of the given node 
function rightChild(val) 
{ 
  
    return ((2 * val) + 2); 
} 




async function shiftup( n,  i) 
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



async function shiftdown( len,  ind) 
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




function getMax() 
{ 
  
    return storedarray[0]; 
} 



  


async function ChangePriority( i,  p) 
{ 
    let oldp = storedarray[i]; 
    storedarray[i] = p; 

await hilight(i , "red" , "1200ms linear" ,1300);
    $(`#${i}treeval`).text(p);

await hilight(i , defaultcolor , "1200ms linear" ,1300);
  
    if (p > oldp) { 
     //   shiftUp(i); 
      await  shiftup(count,i);
    } 
    else { 
        //shiftDown(i); 
     await   shiftdown(count,i)
    } 
} 
  

async function ExtractMAX()  {

    await deleteheap(); 
    
    
}

async function RemovePriorityQueue( i) 
{ 
    storedarray[i] = getMax() + 1; 
  
    await hilight(i , "red" , "1200ms linear" ,1300);
    $(`#${i}treeval`).text(storedarray[i]);

await hilight(i , defaultcolor , "1200ms linear" ,1300);

    // Shift the node to the root 
    // of the heap 
   await shiftup(count,i); 
  
    // Extract the node 
  await  ExtractMAX();
} 


async function insertPriorityQueue(val)  {

await insertheap(val)


}

/*
createleaves([100,90,80,70,60,50,40,30,20,10,9,8,7,6,5])
array([100,90,80,70,60,50,40,30,20,10,9,8,7,6,5])
doalign();
*/