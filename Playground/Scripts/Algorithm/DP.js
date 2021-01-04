  
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

var L = [];
var lcs = []; 




const clearscreen = function(e)  {


    if(document.getElementById("lcstable")) {

      document.getElementById("lcstable").remove();
 
    }

    if(document.getElementById("fibtable")) {

      document.getElementById("fibtable").remove();
   
    }

    lcs=[]
    L =[]
}
  
  

  function maketable(X,Y,m,n)   {


    $("body").append(`<table id="lcstable" style ="position:absolute; transition:100ms linear; top:135px;left:200px;" ></table>`);

    $("#lcstable").append("<tr>");
  
    $("#lcstable").append( `<td class="floyd" id="rwlcs" style="background-color : rgba(255,255,255,0);">  <div id="crwlcsdiv" style="z-index:1; text-align:center;"></div></td>`);
  
  
    for (let u =0 ; u <=n ; u++)  {
  
      $("#lcstable").append( `<td class="floyd" id="lcs${(u)}" style="background-color : coral;">  <div id="lcs${(u)}div" style="z-index:1; text-align:center;"> <p id="lcs${(u)}val" style="color:black; text-align:center;position:absolute;left:30px;">${Y.charAt(u-1)}</p></div></td>`);
  
    }
   
  
    for (let y = 0 ; y <= m ; y++) {
  
      $("#lcstable").append("<tr>");
   
      $("#lcstable").append( `<td class="floyd" id="lcsr${(y)}" style="background-color : coral;">  <div id="lcsr${(y)}div" style="z-index:1; text-align:center;"> <p id="lcsr${(y)}val" style="color:black; text-align:center;position:absolute;left:35px;">${X.charAt(y-1)}</p></div></td>`);
  
      for (let x = 0 ; x <= n ; x++) {
  
          $("#lcstable").append( `<td class="floyd" id="lcs${(y)}-${(x)}">  <div id="lcs${(y)}-${(x)}div" style="z-index:1; text-align:center;"> <p id="lcs${(y)}-${(x)}val" style="color:coral; text-align:center">${"-"}</p>  </div></td>`);
  
       
      }
  
   $("#lcstable").append("</tr>");
  }
  
     $("#lcstable").append("</table>");
      $("#lcstable").draggable();
         
  


  }

async function LongestCommonSubseq(X="",Y="" )  
{  

clearscreen();

  

    let m = X.length;
    let n = Y.length;
   
    for (let f = 0 ; f <= m;f++ )  {

        L.push([])
    }

    let i, j;  

    maketable(X,Y,m,n);


    for (i = 0; i <= m; i++)  
    {  
        for (j = 0; j <= n; j++)  
        {  
        if (i == 0 || j == 0)  {
              L[i][j] = 0;  
              Log(`if i = 0 or j = 0 then set L[i][j] = 0 `)
                await hilight(`lcs${i}-${j}` , "rgba(109,209,0,1)" , "300ms", 400 )
              $("#lcs"+`${i}-${j}val`).text("0")
                await hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )
        } 
          
      
        else if (X[i - 1] == Y[j - 1])   {
            L[i][j] = L[i - 1][j - 1] + 1;

            Log(`if s1[${i-1}] = s2[${j-1}] (${X[i - 1]} == ${Y[j - 1]} ) same then  L[i-1][j-1] + 1 -> L[i][j]`)
                         hilight(`lcs${i-1}-${j-1}` , "rgba(109,209,0,1)" , "300ms", 400 )
                 await   hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )
            $("#lcs"+`${i}-${j}val`).text(`${L[i][j]}`)

                         hilight(`lcs${i-1}-${j-1}` ,defaultcolor , "300ms", 400 )
                 await   hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )


        }  
      
        else {
            L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]); 

            Log(`Select max from L[i - 1][j] and L[i][j - 1] -> L[i][j]`)

              hilight(`lcs${i-1}-${j}` , "purple" , "300ms", 400 )
                 await   hilight(`lcs${i}-${j-1}` , "purple" , "300ms", 400 )

                 await hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )

            $("#lcs"+`${i}-${j}val`).text(`${L[i][j]}`)

              await hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )


              hilight(`lcs${i-1}-${j}` , defaultcolor , "300ms", 400 )
              await   hilight(`lcs${i}-${j-1}` ,defaultcolor , "300ms", 400 )
        }
        }  
    }  
      
    
await display ("Hilighting the sequence.")

   let index = L[m][n];

   lcs[index] = '\0'; // Set the terminating character 
  
   // Start from the right-most-bottom-most corner and 
   // one by one store characters in lcs[] 
    i = m, j = n; 
   while (i > 0 && j > 0) { 
    await   hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 );
      // If current character in X[] and Y are same, then 
      // current character is part of LCS 
      $(`#lcs${i}-${j}val`).css("color" , "black");
      if (X[i-1] == Y[j-1]) 
      { 
          lcs[index-1] = X[i-1]; // Put current character in result 
          $(`#lcs${i}-${j}val`).css("color" , "black");
          await   hilight(`lcs${i}-${j}` , "rgba(109,209,0,1)" , "300ms", 400 );
          i--; j--; index--;     // reduce values of i, j and index 
      } 
  
      // If not same, then find the larger of two and 
      // go in the direction of larger value 
      else if (L[i-1][j] > L[i][j-1])  {
        $(`#lcs${i-1}-${j}val`).css("color" , "black");
        await   hilight(`lcs${i-1}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 );
        i--; 
      }
         
      else {
        $(`#lcs${i}-${j-1}val`).css("color" , "black");
        await   hilight(`lcs${i}-${j-1}` , "rgba(255,0,0,1)" , "300ms", 400 );
          j--; 

      }
         
   } 
  
    
}  
  


async function LongestCommonSubstr(X="",Y="")  {

  clearscreen();


  let lengthofLCstr = 0 , row=0 , col=0,resultStr=0;


  let m = X.length;
  let n = Y.length;
 
  for (let f = 0 ; f <= m;f++ )  {

      L.push([])
  }

  let i, j;  

  maketable(X,Y,m,n);


  for (i = 0; i <= m; i++)  
  {  
      for (j = 0; j <= n; j++)  
      {  
      if (i == 0 || j == 0)  {
            L[i][j] = 0;  
            Log("set L[i][j] = 0 ")
              await hilight(`lcs${i}-${j}` , "rgba(109,209,0,1)" , "300ms", 400 )
            $("#lcs"+`${i}-${j}val`).text("0")
              await hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )
      } 
        
    
      else if (X[i - 1] == Y[j - 1])   {
          L[i][j] = L[i - 1][j - 1] + 1;

          Log("Add 1 to diagnol element, L[i-1][j-1] + 1 -> L[i][j]")

          if (lengthofLCstr < L[i][j]) {
            lengthofLCstr = L[i][j];
            row = i;
            col = j;
        }
                       hilight(`lcs${i-1}-${j-1}` , "rgba(109,209,0,1)" , "300ms", 400 )
               await   hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )
          $("#lcs"+`${i}-${j}val`).text(`${L[i][j]}`)

                       hilight(`lcs${i-1}-${j-1}` ,defaultcolor , "300ms", 400 )
               await   hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )


      }  
    
      else {
          L[i][j] = 0; 
 
          Log("set L[i][j] = 0")
          
               await hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )

          $("#lcs"+`${i}-${j}val`).text(`${L[i][j]}`)

            await hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )

      }
      }  
  }  
    
  await display ("Hilighting the substring.")


  while (L[row][col] != 0) {
    resultStr[--lengthofLCstr] = X[row - 1]; 
    $(`#lcs${row}-${col}val`).css("color" , "black");
    await   hilight(`lcs${row}-${col}` , "rgba(109,209,0,1)" , "300ms", 400 );
    row--;
    col--;
}


}



async function shifting()   {

 let n = document.getElementById('fibnval')
 let n_1= document.getElementById('fibn1val')
 let n_2= document.getElementById('fibn2val')

 n.style.transition = speed+"ms linear";
n_1.style.transition = speed+"ms linear";
n_2.style.transition = speed+"ms linear";


 n_2.style.opacity = "0%";

 await waitforme(speed+50);

 n.style.left = "-77px";
 n_1.style.left = "-77px";

await waitforme(speed+300);

if (stats == 1  ) await pauser();

n.style.transition = speed+"ms linear";
n_1.style.transition = "0ms linear";
n_2.style.transition = "0ms linear";

n.style.left = "0px";
n_1.style.left = "0px";

n_2.style.opacity = "100%";
  


n_2.innerHTML = n_1.innerHTML;
Log("set Fib[n-2] = Fib[n-1]")
n_1.innerHTML = n.innerHTML;
Log("set Fib[n-1] = Fib[n]")
n.innerHTML =parseInt( n_2.innerHTML)+parseInt(n_1.innerHTML);
Log("set Fib[n] = Fib[n-2] + Fib[n-1]")
Log(`${ n_2.innerHTML} + ${ n_1.innerHTML} = ${n.innerHTML}`)

 hilight(n_1.parentElement.parentElement.id , "red")
 await  hilight(n_2.parentElement.parentElement.id , "red")


 hilight(n_1.parentElement.parentElement.id )
 await    hilight(n_2.parentElement.parentElement.id )



}




async function  Fibonacci(N) {

  clearscreen();

  let cN = N;
N=N-1;


  $("body").append(`<table id="fibtable" style ="position:absolute; transition:100ms linear; top:235px;left:40%;" ></table>`);

  $("#fibtable").append("<tr style='max-height:60px;'>");



  $("#fibtable").append( `<td class="floyd" id="fibtop0" style="background-color : coral; ">  <div id="fibtop1div" style=" z-index:1; text-align:center;  max-height:10px;"> <p id="fibtop0val" style="z-index:3;color:black;max-height:5px;">Fib</p></div></td>`);

    $("#fibtable").append( `<td class="floyd" id="fibtop1" style="background-color : coral;">  <div id="fibtop1div" style="z-index:1; text-align:center;max-height:10px;"> <p id="fibtop1val" style="z-index:3;color:black;max-height:5px;">n-2</p></div></td>`);

    $("#fibtable").append( `<td class="floyd" id="fibtop2" style="background-color : coral;">  <div id="fibtop2div" style="z-index:1; text-align:center;max-height:10px;;"> <p id="fibtop2val" style="z-index:3;color:black;max-height:5px; ">n-1</p></div></td>`);

    $("#fibtable").append( `<td class="floyd" id="fibtop3" style="background-color : coral;">  <div id="fibtop3div" style="z-index:1; text-align:center;max-height:10px;"> <p id="fibtop3val" style="z-index:3;color:black;max-height:5px; ">n</p></div></td>`);



    $("#fibtable").append("<tr>");
 
    $("#fibtable").append( `<td class="floyd" id="fibr" style="background-color : coral;">  <div id="fibr1div" style="z-index:1; text-align:center;"> <p id="fibr1val" style="color:black;">Data</p></div></td>`);

 
        $("#fibtable").append( `<td class="floyd" id="fibn2" style="overflow-y:visible;">  <div id="fibn2div" style="z-index:3; text-align:center;position:absolute;"> <p id="fibn2val"  style="position:absolute;color:coral;z-index:5;top:0;left:0; transition:${speed}ms linear;">0</p>  </div></td>`);

        $("#fibtable").append( `<td class="floyd" id="fibn1" style="overflow-y:visible;" >  <div id="fibn1div" style="z-index:3; text-align:center;position:absolute;"> <p id="fibn1val"  style="position:absolute;color:coral;z-index:5;top:0;left:0;transition:${speed}ms linear; ">1</p>  </div></td>`);

        $("#fibtable").append( `<td class="floyd" id="fibn" style="overflow-y:visible;">  <div id="fibndiv" style="z-index:3; text-align:center;position:absolute;"> <p id="fibnval"  style="position:absolute;color:coral;z-index:5;top:0;left:0;transition:${speed}ms linear; ">1</p>  </div></td>`);


 $("#fibtable").append("</tr>");


   $("#fibtable").append("</table>");
    $("#fibtable").draggable();
       

Log(`${document.getElementById('fibn2val').innerHTML} + ${ document.getElementById('fibn1val').innerHTML} = ${document.getElementById('fibnval').innerHTML}`)


while(N--) {

 await shifting();

}


Output(`Fib[${cN}] = ${document.getElementById('fibnval').innerHTML}`)


}





async function PascalTriangle( n) 
{ 

  clearscreen();


  if (document.getElementById("lcstable"))
  document.getElementById("lcstable").remove();

  let pascal  =[]

  $("body").append(`<table id="lcstable" style ="position:absolute; transition:100ms linear; top:135px;left:200px;transform:scale(0.8,0.8);" ></table>`);

  $("#lcstable").append("<tr>");


  for (let y = 0 ; y < n ; y++) {

    $("#lcstable").append("<tr>");

    pascal.push([])
 
    for (let x = 0 ; x < n ; x++) {

        $("#lcstable").append( `<td class="floyd" id="lcs${(y)}-${(x)}">  <div id="lcs${(y)}-${(x)}div" style="z-index:1; text-align:center;min-width:70px;"> <p id="lcs${(y)}-${(x)}val" class="transit" style="color:coral; text-align:center;transition:${speed}ms linear;">${"-"}</p>  </div></td>`);

     
    }

 $("#lcstable").append("</tr>");
}

   $("#lcstable").append("</table>");
    $("#lcstable").draggable();
      
    // An auxiliary array to store  
    // generated pscal triangle values 
   
  
    // Iterate through every line and  
    // print integer(s) in it 
    for (let line = 0; line < n; line++) 
    { 
        // Every line has number of integers  
        // equal to line number 
        for (let i = 0; i <= line; i++) 
        { 
        // First and last values in every row are 1 
        if (line == i || i == 0)  {

          pascal[line][i] = 1; 

          await hilight(`lcs${line}-${i}` , "rgba(109,209,0,1)" , "300ms", 400 )
          document.getElementById(`lcs${line}-${i}val`).style.color = "black";
          document.getElementById(`lcs${line}-${i}val`).innerHTML= "1";
          await hilight(`lcs${line}-${i}` , "coral" , "300ms", 400 )
        }
            
        // Other values are sum of values just  
        // above and left of above 
        else {

          pascal[line][i] = pascal[line - 1][i - 1] + pascal[line - 1][i];

          hilight(`lcs${line-1}-${i-1}` , "purple" , "300ms", 400 )
          document.getElementById(`lcs${line-1}-${i-1}val`).style.color = "white";
          document.getElementById(`lcs${line-1}-${i}val`).style.color = "white";
                 await   hilight(`lcs${line-1}-${i}` , "purple" , "300ms", 400 )


                 await hilight(`lcs${line}-${i}` , "rgba(109,209,0,1)" , "300ms", 400 )

          document.getElementById(`lcs${line}-${i}val`).style.color = "black";
          document.getElementById(`lcs${line}-${i}val`).innerHTML= pascal[line][i];
          

          await hilight(`lcs${line}-${i}` , "coral" , "300ms", 400 )
 document.getElementById(`lcs${line-1}-${i-1}val`).style.color = "black";
          document.getElementById(`lcs${line-1}-${i}val`).style.color = "black";
          hilight(`lcs${line-1}-${i-1}` ,"coral" , "300ms", 400 )
          await   hilight(`lcs${line-1}-${i}` , "coral" , "300ms", 400 )
         



        }
            
        } 
       
    } 
} 
  
slider.onchange= function() {


  let x = document.getElementsByClassName("transit");
  let ie;
  for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed+"ms linear";
  }
  
  
}
