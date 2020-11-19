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

let triemap = new Map();

let triecounter = -1


function triefy (id1 , id2 , distance , graphtype = "default")  {

   
    mySVG.drawLine({
       left_node:'#'+id1,
        right_node:'#'+id2,
        error:true,
        width:2,
        col : "coral",
   
      });


      
      $( '#'+id1 ).draggable({
        drag: function(event, ui){mySVG.redrawLines();}
      });
      $( '#'+id2 ).draggable({
        drag: function(event, ui){mySVG.redrawLines();}
      });


    }




function trienode(label ,ID)  {



if (triecounter == -1 )   {


let trienn = `<div id=trieroot class="trie"> <p id=trierootname class="trie-label">#</p></div>`;

$("body").prepend(trienn);

$("#"+"trieroot").draggable();

++triecounter;
}


var trienn = `<div id=${ID} class="trie"> <p id=${ID}name class="trie-label"> ${label}</p>  <p id=${ID}status class="trie-label" style="display:none;"> 0</p> <p id=${ID}value class="trie-label" style="display:none;"> 0</p> </div>`;


$("body").prepend(trienn);

$("#"+ID).draggable();


}


function trieinsert( key ,value=0) 
{ 
    let current = "trieroot"; 

    let next= ""
  
    for (let i = 0; i < key.length; i++) 
    { 
        
        next = next + key.charAt(i);

      
        if ( $("#"+next).length == 0 ) {

            trienode(key.charAt(i) , next);

            triefy(current , next);

        }
  
        current= next;
    } 
  
    // mark last node as leaf 
    $("#"+next).css({"background-color":"rgba(75,0,130, 0.842)"})
    $("#"+next+"status").text("1");
    $("#"+next+"value").text(value);
} 



async function triesearch(key)   {


  let current = "trieroot"; 

  let next= ""

  let flag=0;

  for (let i = 0; i < key.length; i++) 
  { 
      
      next = next + key.charAt(i);

    
      if ( $("#"+next).length == 1 ) {
         

        let col = $("#"+next).css("background-color");

        await hilight(next , "rgb(109,209,0,1)", "700ms",800)
              hilight(next , col,"700ms",800 )

      }

      else {

      
        break;
      } 
      

      current= next;
  } 


if ($("#"+next+"status").text()  == "1")   {
  $("#"+next).css({"background-color":"rgba(75,0,130, 0.842)"})
await display ("String exist");
$(".trie").css('transition','linear 100ms')

return 1;

}
else {
  await display ("String doesnt exist");
  $(".trie").css('transition','linear 100ms')

  return 0;


}



}

/*
trieinsert("ANOOP",100);
trieinsert("ANOQW",200);
trieinsert("HANDSOME",213);
trieinsert("HANSO",345);
trieinsert("HANKAKU",3134);
*/