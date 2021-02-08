
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

var triemap = [];

let triecounter = -1
var ani = "yes";

var leftcord= 0;
var topcord =0;

skipbtn.style.display = 'none'

function arrangetries(gotobject)  {

  let i =0;


  let strtocompare = gotobject["string"];

  for ( i = triemap.length-1 ; i >=0 ; --i)  {

    let strarray = triemap[i]["string"].localeCompare(strtocompare)

if (strarray == 1 ) {

  triemap[i+1] = triemap[i];

   
}

else break;

   
  }



return i+1;


}


function triefy (id1 , id2 , distance , graphtype = "default")  {

   
    mySVG.drawLine({
       left_node:id1,
        right_node:id2,
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


let trienn = `<div id=trieroot class="trie" style="top:0px;left:400px;"> <p id=trierootname class="trie-label">#</p></div>`;

$("body").prepend(trienn);

$("#"+"trieroot").draggable();

++triecounter;

$(document).scrollLeft(0)
  $(document).scrollTop(0)

}


var trienn = `<div id=${ID} class="trie" > <p id=${ID}name class="trie-label"> ${label}</p>  <p id=${ID}status class="trie-label" style="display:none;"> 0</p> <p id=${ID}value class="trie-label" style="display:none;"> 0</p> </div>`;


$("body").prepend(trienn);

$("#"+ID).draggable();


}






var commoncounter = 0;

async function triesearch(key)   {


  let current = "trieroot"; 

  let next= ""

  let flag=0;

  for (let i = 0; i < key.length; i++) 
  { 
      
      next = next + key.charAt(i);

    
      if ( $("#"+next).length == 1 ) {

        if (ani ==  "no")  {

          ++commoncounter;
        }
         
        if (ani == "yes")  {

        
        let col = $("#"+next).css("background-color");

        await hilight(next , "rgb(109,209,0,1)", "700ms",800)
              hilight(next , col,"700ms",800 )

        }


      }

      else {

      
        break;
      } 
      

      current= next;
  } 

  if (ani == "yes" )  {

  
if ($("#"+next+"status").text()  == "1")   {


  $("#"+next).css({"background-color":"rgba(75,0,130, 0.842)"})
  
  $(".trie").css('transition','linear 100ms')

await display ("String exist");
return 1;

}
else {
  await display ("String doesnt exist");
  
  $(".trie").css('transition','linear 100ms')

  return 0;


}

  }

}





async function trieinsert( key ,value=0) 
{ 

  $(".trie").css('transition' , speed+"ms linear");
  redrawevent= requestAnimationFrame(redraw);

  ani = "no";

  triesearch(key);

  console.log(commoncounter);
  let storedindex

  let substr = key.substring(commoncounter,key.length)

  if(commoncounter != key.length) {

     let objtoinsert = { "string"  : key , "substr" : key+"-"+substr }

     storedindex= arrangetries(objtoinsert);

  triemap[storedindex] = objtoinsert;

leftcord=200*storedindex+1;

  }


  for ( let i = triemap.length-1 ; i >=storedindex ; --i)  {


    $("."+triemap[i]["substr"]).css({left:200+(50*i)})
  
  }

  if(document.getElementById("trieroot") !=null)
  await waitforme(speed+10)

  
    let current = "trieroot"; 

    let next= ""

  
    for (let i = 0; i < key.length; i++) 
    { 
        
        next = next + key.charAt(i);

        ++topcord;
      
        if ( $("#"+next).length == 0 ) {

       
            trienode(key.charAt(i) , next);

            $("#"+next).css({"left":200+(50*storedindex) , "top" : (70*topcord) })

            document.getElementById(next).classList.add(key+"-"+substr)

            triefy(current , next);
            await waitforme(speed+100);
    


        }
  
        current= next;
    } 

    // mark last node as leaf 
    $("#"+next).css({"background-color":"rgba(75,0,130, 0.842)"})
    $("#"+next+"status").text("1");
    $("#"+next+"value").text(value);

    commoncounter = 0;
    ani="yes"

      
topcord= 0;

await waitforme (speed+100);

cancelAnimationFrame(redrawevent);


} 


/*
trieinsert("ANOOP",100);
trieinsert("ANOQW",200);
trieinsert("HANDSOME",213);
trieinsert("HANDJOB",345);
trieinsert("HANKAKU",3134);
*/