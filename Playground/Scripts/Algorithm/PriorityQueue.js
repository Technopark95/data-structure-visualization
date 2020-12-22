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







async function getMax() 
{ 

    await hilight(0 , "red","1200ms linear" , 1300);

    Output(storedarray[0])
  
    let y = storedarray[0]
    return y;
} 



  


async function ChangePriority( i,  p) 
{ 
    let oldp = storedarray[i]; 
    storedarray[i] = p; 

await hilight(i , "red" , "1200ms linear" ,1300);
    $(`#${i}treeval`).text(p);

    await insert(p , i)

await hilight(i , defaultcolor , "1200ms linear" ,1300);
  
    if (p > oldp) { 
     //   shiftUp(i); 
      await  HEAPIFY2(count,i);
    } 
    else { 
        //shiftDown(i); 
     await   heapify(count,i)
    } 
} 
  

async function ExtractMAX()  {

    await deleteheap(); 
    
    
}

async function RemovePriorityQueue( i) 
{ 
    storedarray[i] = storedarray[0] + 1; 
  
    await hilight(i , "red" , "1200ms linear" ,1300);
    $(`#${i}treeval`).text(storedarray[i]);

    await insert( storedarray[i],i)

await hilight(i , defaultcolor , "1200ms linear" ,1300);

    // Shift the node to the root 
    // of the heap 
   await HEAPIFY2(count,i); 
  
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