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

async function LongestCommonSubseq(X="",Y="" )  
{  

  let m = X.length;
  let n = Y.length;
 
  for (let f = 0 ; f <= m;f++ )  {

      L.push([])
  }

  let i, j;  

  
$("body").append(`<table id="lcstable" style ="position:absolute; transition:100ms linear; top:135px" ></table>`);

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
     



  for (i = 0; i <= m; i++)  
  {  
      for (j = 0; j <= n; j++)  
      {  
      if (i == 0 || j == 0)  {
            L[i][j] = 0;  
              await hilight(`lcs${i}-${j}` , "rgba(109,209,0,1)" , "300ms", 400 )
            $("#lcs"+`${i}-${j}val`).text("0")
              await hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )
      } 
        
    
      else if (X[i - 1] == Y[j - 1])   {
          L[i][j] = L[i - 1][j - 1] + 1;
                       hilight(`lcs${i-1}-${j-1}` , "rgba(109,209,0,1)" , "300ms", 400 )
               await   hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )
          $("#lcs"+`${i}-${j}val`).text(`${L[i][j]}`)

                       hilight(`lcs${i-1}-${j-1}` ,defaultcolor , "300ms", 400 )
               await   hilight(`lcs${i}-${j}` , defaultcolor , "300ms", 400 )


      }  
    
      else {
          L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]); 

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
 while (i > 0 && j > 0) 
 { 
  await   hilight(`lcs${i}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )
  $(`#lcs${i}-${j}val`).css("color" , "black");
    // If current character in X[] and Y are same, then 
    // current character is part of LCS 
    if (X[i-1] == Y[j-1]) 
    { 

   
        lcs[index-1] = X[i-1]; // Put current character in result 
        await   hilight(`lcs${i}-${j}` , "rgba(109,209,0,1)" , "300ms", 400 )
        i--; j--; index--;     // reduce values of i, j and index 

    } 

    // If not same, then find the larger of two and 
    // go in the direction of larger value 
    else if (L[i-1][j] > L[i][j-1])  {
      await   hilight(`lcs${i-1}-${j}` , "rgba(255,0,0,1)" , "300ms", 400 )
      i--; 
    }
       
    else {
      await   hilight(`lcs${i}-${j-1}` , "rgba(255,0,0,1)" , "300ms", 400 )
        j--; 

    }
       
 } 

  




}  


//LongestCommonSubseq("XMJYAUZ","MZJAWXU")