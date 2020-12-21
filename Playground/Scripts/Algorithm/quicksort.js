
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

var logscreen = document.getElementById("log1");
var outputscreen = document.getElementById("out1");


async function K( _k,  cellid )  {

    document.getElementById("kindex").style.transition = speed+"ms linear";

  
        let kpos = $(`#${cellid}item${_k}`).offset();

      
      $("#kindex").offset({top : (kpos.top)+100, left : (kpos.left)+45 });

      
      await waitforme(speed)
  


}

async function I(_i , cellid="l" ) {

    document.getElementById("iindex").style.transition = speed+"ms linear";


    
        let ipos = $(`#${cellid}item${_i}`).offset();
        
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
   

    await waitforme(speed)
    
}



async function J(_j , cellid="r" ) {


    document.getElementById("jindex").style.transition = speed+"ms linear";

  
    
        let jpos = $(`#${cellid}item${_j}`).offset();
        
        $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
  

        await waitforme(speed)
    
}





async function ij(_i ,_j  , cellid="a" , cellid1 = "a") {


    ipointer.style.transition = speed+"ms linear";
    jpointer.style.transition = speed+"ms linear";

   
    
        let ipos = $(`#${cellid}item${_i}`).offset();
        let jpos = $(`#${cellid1}item${_j}`).offset();
    
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
    $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
    
    
    await waitforme(speed)
    
  
    
     }



async function partition ( low,  high)  
{  
    var pivot = storedarray[high]; // pivot  
   await hilight("aitem"+high,"rgba(75,0,130, 0.842)");
    var qi = (low - 1); // Index of smaller element  
   // recurse(low , high)
  
    for (var qj = low; qj <= high - 1; qj++)  
    {  
        if (qi >= 0 && qj >= 0 ) await ij(qi,qj);
 
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
     //       recurse(low , high)
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

if( document.getElementById("tab1") == null) stack(10);

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

}


async function cutoutarray (start , end)  {


for (let ie = 0; ie < storedarray.length; ie++) {

    document.getElementById("aitem"+ie).style.transition = "400ms linear";
    document.getElementById("aitem"+ie).style.backgroundColor = "rgba(0,0,0,.2)";
  
  }


      for (let ie = start; ie <= end; ie++) {

        document.getElementById("aitem"+ie).style.transition = "400ms linear";
        document.getElementById("aitem"+ie).style.backgroundColor = "rgba(0,0,0,.842)";
      
      }
      
      
      
  




}



async function display (data , fin= 2000 , fout = 1000)  {

        Log(data);
        if (stats == 1  ) await pauser();


}



function Log (data)  {

    $("#log1").append('<p class="uncaps" style="font-size:65%;color:black;font-family:Segoe UI;">'+data+'</p>')

    
    logscreen.scrollTop = logscreen.scrollHeight;

    }



function Output (data)  {

$("#log1").append('<br><p style="font-size:large; margin-top:-5px;  color:rgb(0,0,255, 0.7);font-family:consolas;">'+ data +'</p>')                                                                               

logscreen.scrollTop = logscreen.scrollHeight;



}



