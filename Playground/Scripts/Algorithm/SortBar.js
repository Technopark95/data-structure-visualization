
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





let bararray = []

document.getElementById("cav1").remove();

skipbtn.style.right = "60px"
skipbtn.style.top = "308px"

var n = 50;
var maxheight = 90;
var limit = n+maxheight;
let i = 1;


for ( i = 0 ; i < n ; i++) {


bararray.push(i+1);


}

bararray.sort(()=>Math.random()-0.5 );

for ( i = 0 ; i < n ; i++) {


 ra = bararray[i];

document.getElementById("svg1").insertAdjacentHTML("beforeend", `<rect class="bars" id="bigr${i}" x="${15+(i*5)}" y="${((maxheight+35)-(ra/n)*maxheight)}" width="4" height="${(ra/n)*maxheight}"style="fill:red;stroke:black;stroke-width:.3;" />`)

document.getElementById(`bigr${i}`).style.transition = `${speed}ms ease-in-out`;



}


function randomize()  {

  bararray.sort(()=>Math.random()-0.5 );

  for ( i = 0 ; i < n ; i++) {

  ra = bararray[i];
  
document.getElementById("bigr"+i).setAttribute("y" ,`${((maxheight+35)-(ra/n)*maxheight)}`)

document.getElementById("bigr"+i).setAttribute("height" ,`${(ra/n)*maxheight}`)


  
  }
  



}



function movedown(i,type,col,newid)  {

document.getElementById("bigr"+i).setAttribute("y" ,`${((maxheight+130)-(bararray[i]/n)*maxheight)}`)

document.getElementById("bigr"+i).style.fill = col

document.getElementById("bigr"+i).setAttribute("id" ,`bigr${type}${newid}`)


}


function mergerinsert(i , type , j)  {

  let selfheight = document.getElementById("bigr"+type+i).getAttribute("height")

  document.getElementById("bigr"+type+i).setAttribute("y" ,`${((maxheight+35)-selfheight)}`)

  document.getElementById("bigr"+type+i).setAttribute("x" ,`${15+(j*5)}`)

  document.getElementById("bigr"+type+i).style.fill = "red"


  document.getElementById("bigr"+type+i).setAttribute("id" ,`bigr${j}`)
  

  
  
  }
  




async function swapper(i1,i2)  {

  if (stats == 1  ) await pauser();

  let e1 = document.getElementById(`bigr${i1}`)
  let e2 = document.getElementById(`bigr${i2}`)

  e1.style.fill = 'blue';
  e2.style.fill = 'blue';
 

 let e1x = e1.getAttribute("x")
 let e2x = e2.getAttribute("x")

 e1.setAttribute("x",e2x)
 e2.setAttribute("x",e1x)

 e1.setAttribute("id","bigr"+i2)
 e2.setAttribute("id","bigr"+i1)

 let temp = bararray[i1];

 bararray[i1] = bararray[i2];

 bararray[i2] = temp;

 await waitforme(speed+100);

 e1.style.fill = 'red';
 e2.style.fill = 'red';


 if (stats == 1  ) await pauser();

}



async function BubbleSort()  {


for (let x = 0; x <n ; x++)  {


    for (let y = 0; y < n-x-1 ; y++)  {

if (bararray[y] > bararray[y+1]) {

   await swapper(y , y+1);


}
    
    }  

}


}


async  function SelectionSort() {


        for (let isel = 0; isel < n; isel++) {
            let min = isel;
            
          
            for (let jsel = isel + 1; jsel < n; jsel++) {
             
          
                if (bararray[min] > bararray[jsel]) {
                   
                    min = jsel;
               
                }
            }
            if (min != isel) {
        
              await  swapper(isel,min)
             
                
            }
  
        }
    

    }



    async function insert(i,val)  {

      if (stats == 1  ) await pauser();

val.style.transition = "0ms";
val.setAttribute("x" , (15+(i*5)));


val.style.transition = `${speed}ms ease-in-out`;


await waitforme(speed);

val.style.opacity = "1";

await waitforme(speed);

if (stats == 1  ) await pauser();

    }
    

  async function shiftright(i) {

    if (stats == 1  ) await pauser();

    let elem = document.getElementById(`bigr${i}`);

    let elemp1 = document.getElementById(`bigr${(i+1)}`);



let e1x = elem.getAttribute("x")
 let e2x = elemp1.getAttribute("x")



 await waitforme(speed);
 elemp1.style.opacity = "0"

 elem.setAttribute("x" , e2x);



 elemp1.setAttribute("id","bigr"+(i))
 elem.setAttribute("id","bigr"+(i+1))

 await waitforme(speed);

 elemp1.setAttribute("x" , e1x);


 if (stats == 1  ) await pauser();
  }
    


    async function InsertionSort() {


      for (var i1 = 1; i1 < n; i1++) {
 
        var j1 = i1 - 1
        var temp = bararray[i1]
        var tempbar = document.getElementById("bigr"+i1);

      await  fadeaway(0,i1)

          
        while (j1 >= 0 && bararray[j1] > temp) {
    
  
          bararray[j1 + 1] = bararray[j1];
          await shiftright(j1);
          j1--;
        
          
        }
     
        bararray[j1+1] = temp

        await insert(j1+1 , tempbar)
    
       
      
      }
    
 
     
    }


    async function fadeaway(l,h)  {


      let x = document.getElementsByClassName("bars");
      let ie;
      for (ie = 0; ie < x.length; ie++) {
        x[ie].style.opacity = "20%";
        x[ie].style.fill = "red";
      }
      
      if (l == -2) {
        return;
      }

for (let s = l ; s <= h ; s++) {


document.getElementById("bigr"+s).style.opacity = "1";


}

await waitforme(speed)



    }


    async function filler(ith,col)  {


      document.getElementById("bigr"+ith).style.fill = col;

      await waitforme(speed);

    } 
    
    
    async function partition ( low,  high)  {  
    var pivot = bararray[high]; // pivot  
  // await hilight("aitem"+high,"rgba(75,0,130, 0.842)");

  document.getElementById("bigr"+high).style.fill = "rgba(75,0,130, 0.842)";
    var qi = (low - 1); // Index of smaller element  
   // recurse(low , high)
  
    for (var qj = low; qj <= high - 1; qj++)  
    {  
        //  await I(qi,"a");

        // await J(qj,"a");

        

        await filler(qj,"coral")
         filler(qj,"red")

        // If current element is smaller than the pivot  
        if (bararray[qj] < pivot)  
        {  
          
            // await hilight("aitem"+qj,"red")
            
            
           
            qi++; // increment index of smaller element
            // await ij(qi,qj);
            // await display('Incremenet i;  i='+qi)  
            await filler(qi,"magenta")

  
        if(qi != qj)   {
            
            
            // await ij(qi,qj);
            // await display("Swapping index i="+ qi +" With j="+qj )
            await swapper(qi , qj);
            await filler(qi,"magenta")
  
        }
        // await hilight("aitem"+qj,defaultcolor)
      
        }   
    }  

            if(qi+1 != high)  { 
                // await ij(qi+1,high);
                // await display("Swapping index i+1 ="+ (qi+1) +" With pivot="+high )
                
                await swapper(qi+1 , high);
                await filler(qi+1,"magenta")

            }
            // await hilight("aitem"+high,defaultcolor);
            document.getElementById("bigr"+high).style.fill = "red";
    return (qi + 1);  
}  
  
/* The main function that implements QuickSort  
bararray[] --> Array to be sorted,  
low --> Starting index,  
high --> Ending index */
async function qs(  low,  high)  
{  
    if (low < high)  
    {  
        /* pi is partitioning index, arr[p] is now  
        at right place */
        var pi = await partition(low, high);  


        if (low < pi-1) {  
        await fadeaway(low, pi-1);
       }

        await  qs( low, pi - 1);
        
        if (pi+1 < high) { 
        await fadeaway(pi+1,high);
    }

        await  qs( pi + 1, high);  
  
        
    }  
}  



async function QuickSort()  {

await qs(0 ,n-1)


await fadeaway(0,n-1)

}



async function ShellSort() 
{ 
    // Start with a big gap, then reduce the gap 
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap / 2)) 
    { 
        // Do a gapped insertion sort for this gap size. 
        // The first gap elements a[0..gap-1] are already in gapped order 
        // keep adding one more element until the entire array is 
        // gap sorted 

        for (let i = gap; i < n; i += 1) 
        { 
            // add a[i] to the elements that have been gap sorted 
            // save a[i] in temp and make a hole at position i 
          await  fadeaway(-2,-2);

            let temp = bararray[i]; 
        //   var tempbar = document.getElementById("bigr"+i);
  
            // shift earlier gap-sorted elements up until the correct  
            // location for a[i] is found 
            let j;    
            
            for (let jj =i ; jj >= gap ; jj -= gap) {

              document.getElementById("bigr"+jj).style.opacity = "1";

              document.getElementById("bigr"+(jj-gap)).style.opacity = "1";



            }
                
            await waitforme(speed+100);


            for (j = i; j >= gap && bararray[j - gap] > temp; j -= gap) {

              bararray[j] = bararray[j - gap];
              
              document.getElementById("bigr"+j).style.opacity = "1";
              document.getElementById("bigr"+(j-gap)).style.opacity = "1";

              await swapper(j - gap,j)


            }
                
              
            //  put temp (the original a[i]) in its correct location 
            bararray[j] = temp;

           // await insert(j,tempbar)
            
            
        } 
    } 
    return 0; 
} 

    

async function heapify(nn,i)
{
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    if (l < nn && bararray[l] > bararray[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < nn && bararray[r] > bararray[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        await swapper(i, largest);
 
        // Recursively heapify the affected sub-tree
       await heapify( nn, largest);
    }
}
 
// main function to do heap sort
async function HeapSort()
{
    // Build heap (rearrange array)
    for (let i = Math.floor( n / 2) - 1; i >= 0; i--)
        await heapify(n, i);
 
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
      await  swapper(0, i);

      document.getElementById("bigr"+i).style.opacity = "20%";
 
        // call max heapify on the reduced heap
        await   heapify( i, 0);
    }


    await fadeaway(0,n-1)
}







async function merge( l,  m,  r) 
{ 


await fadeaway(l,r);

    let i, j, k; 
    let n1 = Math.floor( m - l + 1); 
    let n2 = Math.floor( r - m); 
  
    /* create temp arrays */
    let L = [], R = [];

    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) {

        L[i] = bararray[l + i];

       movedown((l+i) , "l" , "coral",i)

        await waitforme(speed)
   
        if (stats == 1  ) await pauser();
    }



    for (j = 0; j < n2; j++)  {

        R[j] = bararray[m + 1 + j];


        movedown((m + 1 + j) , "r" , "purple",j)

        await waitforme(speed)


        if (stats == 1  ) await pauser();
    }

  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    
    while (i < n1 && j < n2) { 
        if (L[i] <= R[j]) { 
          
          bararray[k] = L[i]; 

          mergerinsert(i,"l" , k)

          await waitforme(speed)
     
            i++; 

            if (stats == 1  ) await pauser();
        } 
        else { 
          bararray[k] = R[j]; 

          mergerinsert(j,"r" , k)

          await waitforme(speed)

            j++; 

            if (stats == 1  ) await pauser();
        } 
        k++; 
    } 
  
    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) { 
     
      bararray[k] = L[i]; 

      mergerinsert(i,"l" , k)

      await waitforme(speed)

        i++; 
        k++; 
        if (stats == 1  ) await pauser();
    } 
  
    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) { 
      
      bararray[k] = R[j];

      mergerinsert(j,"r" , k)

      await waitforme(speed)
        j++; 
        k++; 
        if (stats == 1  ) await pauser();
    } 


} 
  
/* l is for left index and r is right index of the 
   sub-array of arr to be sorted */
async function ms(  l,  r) 
{ 
    if (l < r) { 
        // Same as (l+sr)/2, but avoids overflow for 
        // large l and h 
      let m = Math.floor (l + (r - l) / 2); 
       await ms( l, m); 
       await ms( m + 1, r); 
     //  await cutoutarray(l,r)
       await merge( l, m, r); 

    } 
} 


async function MergeSort( ) 
{ 

  document.getElementById("svg1").style.transition = "500ms"


  document.getElementById("svg1").style.transform = "scale(.56,.56) translate(0,-28%)";

  await waitforme(1000);
    

  await ms(0,n-1);

  document.getElementById("svg1").style.transform = "scale(1,1) translate(0,0)";





} 





async function iSort( left, right) 
{ 
    for (let i = left + 1; i <= right; i++) 
    { 
        let temp = bararray[i]; 
        var tempbar = document.getElementById("bigr"+i);
        let j = i - 1; 
        while (j >= left && bararray[j] > temp) 
        { 
            bararray[j+1] = bararray[j]; 
            await shiftright(j);
            j--; 
        } 
        bararray[j+1] = temp; 
        await insert(j+1,tempbar)
    } 
} 
  

async function TimSort() 
{ 

  let RUN =16;


    // Sort individual subarrays of size RUN 
    for (let i = 0; i < n; i+=RUN) 
      await  iSort( i, Math.min((i+15), (n-1))); 
  
    // Start merging from size RUN (or 32).  
    // It will merge 
    // to form size 64, then 128, 256  
    // and so on .... 

    document.getElementById("svg1").style.transition = "500ms"


    document.getElementById("svg1").style.transform = "scale(.56,.56) translate(0,-28%)";
  
    await waitforme(1000);
    for (let size = RUN; size < n;  size = 2*size) { 
          
        // pick starting point of  
        // left sub array. We 
        // are going to merge  
        // bararray[left..left+size-1] 
        // and bararray[left+size, left+2*size-1] 
        // After every merge, we  
        // increase left by 2*size 
        for (let left = 0; left < n;  left += 2*size) { 
              
            // find ending point of  
            // left sub array 
            // mid+1 is starting point  
            // of right sub array 
            let mid = left + size - 1; 
            let right = Math.min((left + 2*size - 1),  (n-1)); 
  
            // merge sub array bararray[left.....mid] & 
            // bararray[mid+1....right] 
          await  merge(left, mid, right); 
        } 
    } 


    document.getElementById("svg1").style.transform = "scale(1,1) translate(0,0)";



} 
  


function getNextGap( gap)
{
    // Shrink gap by Shrink factor
    gap = (gap*10)/13;
 
    if (gap < 1)
        return 1;
    return gap;
}
 
// Function to sort bararray[0..n-1] using Comb Sort
async function CombSort()
{
    // Initialize gap
    let gap = n;
 
    // Initialize swapped as true to make sure that
    // loop runs
    let swapped = true;
 
    // Keep running while gap is more than 1 and last
    // iteration caused bararray swap
    while (gap != 1 || swapped == true)
    {
        // Find next gap
        gap = getNextGap(gap);
 
        // Initialize swapped as false so that we can
        // check if swap happened or not
        swapped = false;
 
        // Compare all elements with current gap
        for (let i=0; i<n-gap; i++)
        {
            if (bararray[i] > bararray[i+gap])
            {
              await  swapper(i, i+gap);
                swapped = true;
            }
        }
    }
}



async function CocktailShakerSort()
{
    let swapped = true;
    let start = 0;
    let end = n - 1;
 
    while (start <= end) 
    {
        // reset the swapped flag on entering
        // the loop, because it might be true from
        // bararray previous iteration.
        swapped = false;
 
        // loop from left to right same as
        // the bubble sort
        for (let i = start; i < end; ++i) 
        {

          filler(i,"blue");
          await filler(i+1,"blue");

            if (bararray[i] > bararray[i + 1]) {
             await   swapper(i, i + 1);
                swapped = true;
            }


            filler(i,"red");
             filler(i+1,"red");
        }
 
        // if nothing moved, then array is sorted.
        // if (!swapped)
        //     break;
 
        // otherwise, reset the swapped flag so that it
        // can be used in the next stage
        swapped = false;
 
        // move the end point back by one, because
        // item at the end is in its rightful spot
        document.getElementById("bigr"+end).style.opacity = ".2";
 
        --end;

     
        // from right to left, doing the
        // same comparison as in the previous stage
        for (let i = end - 1; i >= start; --i) 
        {

                filler(i,"blue");
           await filler(i+1,"blue");
            if (bararray[i] > bararray[i + 1]) {
               await swapper(i, i + 1);
                swapped = true;
            }

            filler(i,"red");
            filler(i+1,"red");

        }
 
        // increase the starting point, because
        // the last stage would have moved the next
        // smallest number to its rightful spot.

        document.getElementById("bigr"+start).style.opacity = ".2";
        ++start;

        
    }


  await fadeaway(0,n-1)
}
 




slider.onchange= function() {


    let x = document.getElementsByClassName("bars");
    let ie;
    for (ie = 0; ie < x.length; ie++) {
      x[ie].style.transition = speed+"ms linear";
    }
    
    
  }



let arraycom = ["BubbleSort()" , "SelectionSort()" , "QuickSort()" , "MergeSort()" , "InsertionSort()" , "HeapSort()" , "ShellSort()" , "TimSort()" , "CombSort()" , "CocktailShakerSort()"]


placeholdermessage = `Try typing '${arraycom[ Math.floor( Math.random() *arraycom.length ) ]}'`;


window.onload = async function WindowLoad(event) {

  let adder = ""

for (let i = 0 ; i < placeholdermessage.length ; ++i) {
adder = adder + placeholdermessage[i];

codehere.placeholder = adder

await waitforme(70)

}
            
 }