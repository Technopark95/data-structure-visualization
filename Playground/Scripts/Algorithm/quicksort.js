
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


var sheet;

$("#feed").fadeIn()
$("#feed").css({"opacity" : "0%"})

var logscreen = document.getElementById("log1");
var outputscreen = document.getElementById("out1");


function K( _k,  cellid )  {

    document.getElementById("kindex").style.transition = speed+"ms linear";

    return new Promise (resolve => {
    
        let kpos = $(`#${cellid}item${_k}`).offset();

      
      $("#kindex").offset({top : (kpos.top)+100, left : (kpos.left)+45 });

      
      
      
      setTimeout(function() {
      
      
      resolve('')
      
      },speed)
      
      
      })


}

function I(_i , cellid="l" ) {

    document.getElementById("iindex").style.transition = speed+"ms linear";


    return new Promise (resolve => {
    
        let ipos = $(`#${cellid}item${_i}`).offset();
        
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
    setTimeout(function() {
    
    
    resolve('')
    
    },speed)
    
    
    })
    
}



function J(_j , cellid="r" ) {


    document.getElementById("jindex").style.transition = speed+"ms linear";

    return new Promise (resolve => {
    
        let jpos = $(`#${cellid}item${_j}`).offset();
        
        $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
    setTimeout(function() {
    
    
    resolve('')
    
    },speed)
    
    
    })
    
}





function ij(_i ,_j  , cellid="a" , cellid1 = "a") {


    document.getElementById("iindex").style.transition = speed+"ms linear";
    document.getElementById("jindex").style.transition = speed+"ms linear";

    return new Promise (resolve => {
    
        let ipos = $(`#${cellid}item${_i}`).offset();
        let jpos = $(`#${cellid1}item${_j}`).offset();
    
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
    $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
    
    
    
    setTimeout(function() {
    
    
    resolve('')
    
    },speed)
    
    
    })
    
     }



async function partition ( low,  high)  
{  
    var pivot = storedarray[high]; // pivot  
   await pivotchange(high);
    var qi = (low - 1); // Index of smaller element  
   // recurse(low , high)
  
    for (var qj = low; qj <= high - 1; qj++)  
    {  
        if (qi >= 0 && qj >= 0 ) await ij(qi,qj);
 
        // If current element is smaller than the pivot  
        if (storedarray[qj] < pivot)  
        {  
          
            await turnred(qj)
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
        await turnnormal(qj)
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
            await pivotnormal(high);
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

if($("#tab1").length == 0) stack(10);

await display('Calling QuickSort( '+ (0) + ' , ' + (length-1) + ' )' )
await push('QuickSort( '+ (0) + ' , ' + (length-1) + ' )' )
//$('#Q').append('<p style="font-size:250%;color:coral;font-family:Segoe UI;">'+'QuickSort( '+ (0) + ' , ' + (length-1) + ' )'+'</p>')
await cutoutarray(0,length-1)
await qs(0 ,length-1)

await normalize()

}


async function cutoutarray (start , end)  {

    return new Promise( resolve => {


$(".arrayd").css({"background-color" : "rgba(0,0,0,.2)" , transition: "400ms linear"})


setTimeout(()=> {

    for (var h = start ; h <= end ; ++h)  {

  
        $(`#aitem${h}`).css({"background-color" : "rgba(0,0,0,.842)" , transition: "400ms linear"})
  
  
  
      }
  
      resolve('')


},470)

})


}


function sheet ()  {

 sheet = '<div id="Q" class="recursion-sheet" style="top:' + ($("#t1").position().top + 400) + 'px; left:'+  ($("#t1").position().left ) + 'px;">'

$("body").append(sheet)
$('#Q').draggable()

Sheet = $("#Q")


}




function recurse(start , end)  {


    var temparr = '<table style="border-collapse: collapse; margin-top:200px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ><tr>'
  

    for (var h = start ; h <= end ; ++h)  {

  
      temparr += ' <td class="arrayd" style="text-align:center;">     <div  style="text-align:center; position:absolute; z-index:1">         <p  style="position:absolute; margin-top:50px; margin-left:70px; font-size:50%";>'+h+'</p>             <p style="position:absolute; margin-top:-30px;">'+ storedarray[h] +'</p>                        </div>  </td>';



    }


    temparr += '</tr></table>';



$('#Q').append(temparr);

}



async function pivotchange(pivotindex)  {

 
 $("#aitem"+pivotindex).css({ "background-color" : "rgba(75,0,130, 0.842)" , "transition" : speed+"ms linear"} , 3000 )
 if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },speed+80)

})


}




async function pivotnormal(pivotindex)  {

  

 
 $("#aitem"+pivotindex).css({ "background-color" : "rgba(0,0,0, 0.842)" , "transition" :speed+"ms linear"} , 3000 )
 if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },speed+80)

})

}




async function turnred(pivotindex)  {

    $("#aitem"+pivotindex).css({ "background-color" : "rgba(255,0,0, 0.91)" , "transition" : speed+"ms linear"} , 3000 )
    if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },speed+80)

})

 


}

async function turnnormal(pivotindex)  {


$("#aitem"+pivotindex).css({ "background-color" : "rgba(0,0,0, 0.842)" , "transition" : speed+"ms linear"} )

if (stats == 1  ) await pauser();
    return new Promise (resolve => {

setTimeout(() => {

    resolve('resolved')


},speed+80)

})


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

$("#log1").append('<br><p style="font-size:x-large; margin-top:-5px;  color:rgb(0,0,255, 0.7);font-family:Segoe UI;">'+ data +'</p>')                                                                               

logscreen.scrollTop = logscreen.scrollHeight;



}







 
 // array([7,4,9,2,6,8,10,1,3,5])

 //array([5,24,45,65,89,92,104,147,190])

   /*
 


 arraynodes();

 doalign("1s" , 0);
 


 
$("#t1").hide()


 doalign("4000ms" , 0);
 
  
 
*/

//

//array([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,29,19,20,21,22,23,24,25,26,27,28,29,30,31]);



