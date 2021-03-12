

async  function SelectionSort() {

  refresharray()
    ipointer.style.display = "";
      jpointer.style.display = "";
      kpointer.style.display = "";
      let len = storedarray.length;
      for (let isel = 0; isel < len; isel++) {
          let min = isel;
          
        
          for (let jsel = isel + 1; jsel < len; jsel++) {
           
            await ij(isel , jsel);
  
            await hilight("aitem"+(jsel) , "red",  "1s" , 1100)
            hilight("aitem"+(jsel),  defaultcolor ,  "1s" , 1100 )
              if (storedarray[min] > storedarray[jsel]) {
                 hilight("aitem"+(min) ,  defaultcolor ,  "1s" , 1100)
                  min = jsel;
              await   hilight("aitem"+(min) , "blueviolet", "1s" , 1100)
              }
          }
          if (min != isel) {
            await  display("Swapping index " + isel + " with index" + min)
              let tmp = storedarray[isel];
              storedarray[isel] = storedarray[min];
              storedarray[min] = tmp;
              await swapp(isel ,min )
              hilight("aitem"+(min) , defaultcolor ,  "1s" , 1100)
              
          }

      }
  
      $("#iindex").text("i").hide()
      $("#jindex").text("j").hide()
   
  }
  
  
  
  
  
   
    async  function BubbleSort(){
  
      refresharray()
      ipointer.style.display = "";
      jpointer.style.display = "";
      kpointer.style.display = "";
  
      var lene = storedarray.length;
      
      $("#iindex").text("j")
      $("#jindex").text("j+1")
  
      for (let i=0; i < lene-1; i++){
          for (let j=0; j < lene-i-1; j++){
            await ij(j , j+1);
            await display('Comparing index j=' + (j) + ' and j+1=' + (j+1) ) 
            hilight("aitem"+(j) , "red" , "1000ms" , 1100)  
                await hilight("aitem"+(j+1), "red" , "1000ms" , 1100) 
              if (storedarray[j] > storedarray[j+1]){
                var temp = storedarray[j];
                storedarray[j] = storedarray[j+1];
                storedarray[j+1] = temp;
                await display('Element array['+ (j) +'] > array[' + (j+1)+ '] , Swapping')
                
               await swapp(j,j+1)
               
              }
              
              else {
                await display('Element array['+ (j) +'] < array[' + (j+1)+ '] , Skip')  
              }
              hilight("aitem"+(j) , defaultcolor, '1s' , 900)  
               hilight("aitem"+(j+1) ,defaultcolor,'1s' , 900)
  
               
                
                
          }
  
         
      }
  
      $("#iindex").text("i").hide()
      $("#jindex").text("j").hide()
  }
  
  
  
  async function InsertionSort() {

    refresharray()
  
    ipointer.style.display = "";
      jpointer.style.display = "";
      kpointer.style.display = "";
    for (var i1 = 1; i1 < storedarray.length; i1++) {
      await I(i1,"a")
      var j1 = i1 - 1
      var temp = storedarray[i1]
     await hilight(`aitem${i1}` , "red" ,"1100ms",1100)
      
      await display('Inserting '+ (temp)  +' to correct index')
      await hilight(`aitem${i1}` , defaultcolor ,"1100ms",1100)
        
      while (j1 >= 0 && storedarray[j1] > temp) {
  
        await display('Comparing  array[' + (j1) + '] => '+ (storedarray[j1])  + ' > ' + (temp) + '.Move element to right.');
        await J(j1 ,"a");
        await moveright(j1);
        storedarray[j1 + 1] = storedarray[j1];
        j1--;
      
        
      }
      await display('Correct place at index = ' + (j1+1) )
      storedarray[j1+1] = temp
  
      await insert(temp ,j1+1 );
    
    }
  
    $("#iindex").text("i").hide()
    $("#jindex").text("j").hide()
   
  }
  
  
  async function merge( l,  m,  r) 
  { 
      let i, j, k; 
      let n1 = Math.floor( m - l + 1); 
      let n2 = Math.floor( r - m); 
    
      /* create temp arrays */
      let L = [], R = [];
    
      let Larrgraphics = await temparray(n1, "l");
      let Rarrgraphics = await temparray(n2, "r");
      
      let parentarrayoffset = ($("#t1").offset());
      $(Larrgraphics).offset({top: parentarrayoffset.top+200})
      $(Rarrgraphics).offset({top:parentarrayoffset.top+340})
  
      $("#iindex").show();
    $("#jindex").hide();
      /* Copy data to temp arrays L[] and R[] */
      for (i = 0; i < n1; i++) {
  
  
          L[i] = storedarray[l + i];
          await I(i,"l")
       await   insert(storedarray[l + i] , i , "l")
          
          
      }
  
  
      $("#jindex").show();
      $("#iindex").hide();
      for (j = 0; j < n2; j++)  {
  
          R[j] = storedarray[m + 1 + j];
          await J(j,"r")
       await   insert(storedarray[m + 1 + j] , j , "r")
  
          
      }
  
      $("#jindex").show();
      $("#iindex").show();
    
      /* Merge the temp arrays back into arr[l..r]*/
      i = 0; // Initial index of first subarray 
      j = 0; // Initial index of second subarray 
      k = l; // Initial index of merged subarray 
      I(0,"l")
      J(0,"r")
      while (i < n1 && j < n2) { 
          if (L[i] <= R[j]) { 
            await I(i , "l")
            storedarray[k] = L[i]; 
        await hilight(`litem${i}` , "red" , "800ms",800)
        await hilight(`litem${i}` , defaultcolor , "800ms",800)
        await K(k, "a")
            await   insert(L[i] , k , "a")
              i++; 
          } 
          else { 
            storedarray[k] = R[j]; 
            await J(j, "r")
            await hilight(`ritem${j}` , "red" , "800ms",800)
        await hilight(`ritem${j}` , defaultcolor , "800ms",800)
       
        await K(k, "a")
             await   insert(R[j] , k , "a")
              j++; 
          } 
          k++; 
      } 
    
      /* Copy the remaining elements of L[], if there 
         are any */
      while (i < n1) { 
       
        storedarray[k] = L[i]; 
        await I(i , "l")
        await hilight(`litem${i}` , "red" , "800ms",800)
        await hilight(`litem${i}` , defaultcolor , "800ms",800)
        await K(k, "a")
      await  insert(L[i] , k , "a")
          i++; 
          k++; 
      } 
    
      /* Copy the remaining elements of R[], if there 
         are any */
      while (j < n2) { 
        
        storedarray[k] = R[j];
        await J(j, "r")
        await hilight(`ritem${j}` , "red" , "800ms",800)
        await hilight(`ritem${j}` , defaultcolor , "800ms",800)
        await K(k, "a")
        await   insert(R[j] , k , "a")
          j++; 
          k++; 
      } 
  
  
      Larrgraphics.remove()
      Rarrgraphics.remove()
  
  
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
         await cutoutarray(l,r)
         await merge( l, m, r); 
  
      } 
  } 
  
  
   async function MergeSort()  {
  
    refresharray()

    ipointer.innerHTML = "i"
    jpointer.innerHTML = "j"
    kpointer.innerHTML = "k"
    ipointer.style.display = ""
    jpointer.style.display = ""
    kpointer.style.display = ""
   await  ms (0 , storedarray.length-1)
  
   ipointer.style.display = "none"
   jpointer.style.display = "none"
   kpointer.style.display = "none"
  
  
  }
  
  
  
  
  
  
  
  async function BinarySearch(value){

 
    ipointer.style.display = "";
      jpointer.style.display = "";
      kpointer.style.display = "";
  
    $("#kindex").text("mid").show();
  
    await display( 'set first = 0')
    await hilight("aitem0", "blueviolet" , "1000ms" , 1100)
    var firstIndex  = 0
  
   await I(firstIndex ,  "a" )
  
    var    lastIndex   = storedarray.length - 1
  
   await J(lastIndex ,  "a" )
  
        await display( 'set last = '+lastIndex)
        await hilight("aitem"+(lastIndex), "blueviolet" , "1000ms" , 1100)
  
     var   middleIndex = Math.floor((lastIndex + firstIndex)/2);
   await  K(middleIndex ,  "a" )
        await display( 'set mid = (first+last)/2')
        await hilight("aitem"+(middleIndex), "rgb(109,209,0,1)", "1000ms" , 2100)
  
  
  
  
    while(storedarray[middleIndex] != value && firstIndex < lastIndex)
    {
       
       if (value < storedarray[middleIndex])
        {
          
          await hilight("aitem"+(middleIndex) , defaultcolor , "1000ms" , 1100)
           await display( 'search item '+ value +' is smaller array[' + middleIndex + ']')
           await display( 'set last = mid-1')
            hilight("aitem"+lastIndex ,  defaultcolor , "1000ms" , 1100)
            lastIndex = middleIndex - 1;
          await  J(lastIndex ,  "a" )
            await hilight("aitem"+lastIndex , "blueviolet" ,  "1000ms" , 1100)
        } 
      else if (value > storedarray[middleIndex])
        {
          await hilight("aitem"+(middleIndex) ,defaultcolor ,  "1000ms" , 1100)
          await display( 'search item '+ value +' is larger array[' + middleIndex + ']')
           await display( 'set first = mid+1')
            hilight("aitem"+firstIndex ,defaultcolor ,  "1000ms" , 1100)
            firstIndex = middleIndex + 1;
        await    I(firstIndex ,  "a" )
            await hilight("aitem"+firstIndex , "blueviolet" ,  "1000ms" , 1100)
        }
      
        await hilight("aitem"+(middleIndex),defaultcolor ,  "1000ms" , 1100)
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
        await display( 'set mid = (first+last)/2')
     await   K(middleIndex ,  "a" )
        await hilight("aitem"+(middleIndex), "rgb(109,209,0,1)" ,  "2000ms" , 2100)
    
    }
  
  if (storedarray[middleIndex] == value){
  
    await display( 'Item Found' )
    Output('Item Found at index = ' + middleIndex)
  }
  
  else{
  
    await display( 'Item Doesnt exist' )
    Output('Item Doesnt exist return -1')
  }
  
  cutoutarray(0,length-1);
  
  
  }
  



  

async function partition ( low,  high)  
{  
    var pivot = storedarray[high]; // pivot  
   await hilight("aitem"+high,"rgba(75,0,130, 0.842)");
    var qi = (low - 1); // Index of smaller element  
   // recurse(low , high)
  
    for (var qj = low; qj <= high - 1; qj++)  
    {  
         await I(qi,"a");

        await J(qj,"a");
        
 
        // If current element is smaller than the pivot  
        if (storedarray[qj] < pivot)  
        {  
          
            await hilight("aitem"+qj,"red")
            qi++; // increment index of smaller element
            await ij(qi,qj);
            await display('Incremenet i;  i='+qi)  
            var qtemp = storedarray[qi]
            storedarray[qi] = storedarray[qj]
            storedarray[qj] = qtemp
        if(qi != qj)   {
            
            
            await ij(qi,qj);
            await display("Swapping index i="+ qi +" With j="+qj )
            await swapp(qi , qj);
  
        }
        await hilight("aitem"+qj,defaultcolor)
        }   
    }  
    var qtemp = storedarray[qi+1]
            storedarray[qi+1] = storedarray[high]
            storedarray[high] = qtemp
            if(qi+1 != high)  { 
                await ij(qi+1,high);
                await display("Swapping index i+1 ="+ (qi+1) +" With pivot="+high )
                await swapp(qi+1 , high);

            }
            await hilight("aitem"+high,defaultcolor);
    return (qi + 1);  
}  
  
/* The main function that implements QuickSort  
arr[] --> Array to be sorted,  
low --> Starting index,  
high --> Ending index */
async function qs(  low,  high)  
{  
    if (low < high)  
    {  
        /* pi is partitioning index, arr[p] is now  
        at right place */
        var pi = await partition(low, high);  
  
        // Separately sort elements before  
        // partition and after partition  
      
        if (low < pi-1) {  await display('Calling QuickSort( '+ (low) + ' , ' + (pi-1) + ' )' );

         await push('QuickSort( '+ (low) + ' , ' + (pi-1) + ' )' ); 
         $('#Q').append('<p style="font-size:250%;color:coral;font-family:Segoe UI;">'+'QuickSort( '+ (low) + ' , ' + (pi-1) + ' )'+'</p>')
         await cutoutarray(low, pi-1);
        }
        await  qs( low, pi - 1);  

        if (pi+1 < high) { await display('Calling QuickSort( '+ (pi+1) + ' , ' + (high) + ' )' );
        await push('QuickSort( '+ (pi+1) + ' , ' + (high) + ' )' ); 
        $('#Q').append('<p style="font-size:250%;color:coral;font-family:Segoe UI;">'+'QuickSort( '+ (pi+1) + ' , ' + (high) + ' )'+'</p>')
        await cutoutarray(pi+1,high);
    }
    
        await  qs( pi + 1, high);  
        await display('return;' )
        await pop()

        
    }  
}  



async function QuickSort()  {


refresharray()
if( document.getElementById("tab1") == null) stack(storedarray.length);

document.getElementById("tab1").style.display=""

       ipointer.style.display = "";
      jpointer.style.display = "";

await display('Calling QuickSort( '+ (0) + ' , ' + (length-1) + ' )' )
await push('QuickSort( '+ (0) + ' , ' + (length-1) + ' )' )
//$('#Q').append('<p style="font-size:250%;color:coral;font-family:Segoe UI;">'+'QuickSort( '+ (0) + ' , ' + (length-1) + ' )'+'</p>')
await cutoutarray(0,length-1)
await qs(0 ,length-1)

ipointer.innerHTML = "i"
jpointer.innerHTML = "j";
ipointer.style.display = "none";
jpointer.style.display = "none";

await cutoutarray(0,length-1)

document.getElementById("tab1").style.display="none"

}


  
// main function to do heap sort 
async function HeapSort() 
{ 

  refresharray()

if (storedarray.length >31) {

  Log("Sorry, the maximum limit for HeapSort is 31");

  return;
}

document.getElementById("t1").style.left = 100+"px"
document.getElementById("t1").style.top = 500+"px"
 

await arraynodes();

build();

document.getElementById("0").style.top = 150+"px";
document.getElementById("0").style.left = 630+"px";
   
redrawevent = requestAnimationFrame(redraw);

calcheight('0')
  
BalanceAll("0");
    
await waitforme(speed+100);

cancelAnimationFrame(redrawevent);


    // Build heap (rearrange array) 
    await display('Building Heap')
    for (var ind = length / 2 - 1; ind >= 0; ind--) 
    await   heapify(length, ind); 
  
    await display('Heap Built')
    // One by one extract an element from heap 
    for (var ind=length-1; ind>0; ind--) 
    { 
        // Move current root to end 
     //   swap(st[0], st[ind]); 

        var te = storedarray[0];
        storedarray[0] = storedarray[ind];
        storedarray[ind] = te;
        await display('Swap last element with root node')
        await  gottopoint(0 ,ind)
        await swapp(0,ind)
        await hilight("aitem"+ind,"red")
        await hilight(ind, "purple" ,"1s" ,1100)
  
        // call max heapify on the reduced heap 
        await display('Building Heap')
        await   heapify( ind, 0); 
    } 
} 

array([10,5,23,4,89,65,35,86,45]);

let arraycom = ["BubbleSort()" , "SelectionSort()" , "QuickSort()" , "MergeSort()" , "InsertionSort()" , "HeapSort()"]


placeholdermessage = `Try typing '${arraycom[ Math.floor( Math.random() *6 ) ]}'`;


window.onload = async function WindowLoad(event) {

  let adder = ""

for (let i = 0 ; i < placeholdermessage.length ; ++i) {
adder = adder + placeholdermessage[i];

codehere.placeholder = adder

await waitforme(70)

}
            
 }