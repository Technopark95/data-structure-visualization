

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

function nodify(first,second , color_ = "coral") {


    mySVG.drawLine({
        left_node:'#'+first+'right',
        right_node:'#'+second+'left',
        error:true,
  width:2,
  col : color_,
 

        
});




next[first] = second

prev[second] = first

if ( $("#"+second+"id").text() == "NULL") {

terminate = "yes"

}

    $( '#'+first ).draggable({
      
        drag: function(event, ui){mySVG.redrawLines();},
        cancel: ".node,.nodeleft"
      });

      $( '#'+second ).draggable({
        drag: function(event, ui){mySVG.redrawLines();},
        cancel:".node,.nodeleft"
      });

    }




    async function ltraverse(par=0)  {


        head = (par)+"list"

        for(;;) {

          if (head == "null") {
          
          await  display("Traverse complete")
            break;
          }
        value = $("#"+head+"id").text();

        await hilight(head, "rgb(109,209,0,1)" , "1200ms" , 1300 )
        
         hilight(head , defaultcolor  , "1000ms" , 1100)
        Output(value)
       
    head = next[(head)];
    Log("Going next node")
  
      }


      }




async function insertnode(headd , pos , item )    {

        headd = (headd)+"list"
        
        
        for (let g = 0 ; g < pos-1 ; g= g+1) {
        
        
          await hilight(headd, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                  
          hilight(headd , defaultcolor  , "1000ms" , 1100);
        headd = next[headd];
        
        }
        
        var newnodetop = $("#"+headd).position().top + 300;
        var newnodeleft = $("#"+headd).position().left - 200;
        
        var address = Math.ceil( Math.random() * 999)
        
     var   newnode = '<div id="'+address+'list"  class="dragg" > <div class="node" id="'+ address+"listleft" +'" style="position:absolute; height:7px; width:7px; border-radius:5px; background-color:white;  margin-top:40px;"></div>  <div class="node" id="'+ address+"listright" +'" style="position:absolute; height:7px; width:7px; border-radius:7px; background-color:white; margin-left:72px; margin-top:40px;"></div> <p  style="position:absolute; color:coral; font-size:60%; left:20px;" id="'+ address+"listbottom" +'">'+address +'</p>    <p  id="'+ address+"listid" +'" class="t">'+item+'</p>   </div>';
        
        
        $("body").prepend(newnode);
        
        $("#"+address+"list").draggable()
        
          $("#"+address+"list").animate({ "top" : (newnodetop)+"px" , "left" : (newnodeleft)+"px" , "transition-duration":"1500ms" }, 1500 , async function() {
        
        
        
        
            await display("Detaching the node")
            del("#"+prev[headd]+"right" , "#"+(headd)+"left")
            mySVG.redrawLines();
            await display("Attaching previous node to the newnode")
            nodify((prev[headd]) , (address)+"list")
            await display("Attaching new node to the next node")
            nodify( (address)+"list" , headd)
          
        
            
            
        
          })
        
         }     
        
           
        
        
        
async   function deletenode(rot , val) {
        
              rot = (rot)+"list";
        
              await display("searching for target node")
        
        for (;;) {
        
        if ($("#"+rot+"id").text() == val) {
         
          await hilight(rot , "green")
          await  display("Target node found")
          break;
        
        }
        
        await hilight(rot, "red" , "1200ms" , 1300 )
                  
          hilight(rot , defaultcolor  , "1000ms" , 1100);
        
        rot = next[rot];
        
        
        
        }
        
        await display("Setting  next[prev-node] = next[target-node]")
        
        nodify(prev[rot] , next[rot])
        
        
        await display("Deleting target node")
        
        $("#"+ rot).css({"border-style":"dashed"})
        await hilight(rot , "white")
        
        await $("#"+ rot).css({"opacity":"50%" , "transition-duration" : "2s"} )
        
        setTimeout(function()  {
          
          $("#"+ rot).remove()
        
          mySVG.redrawLines();
        
        } , 1500)
        
        
            }

            
            let xp    =0;  
            
          function addnode(typed) {

  $(document).scrollLeft(0)
  $(document).scrollTop(0)

 xp = xp+ 110;

                newnode = '<div id="'+count+'list"  class="dragg" style= left:'+xp+'px;> <div class="nodeleft" id="'+ count+"listleft" +'" style="position:absolute; height:7px; width:7px; border-radius:5px; background-color:white;  margin-top:40px;"></div>  <div class="node" id="'+ count+"listright" +'" style="position:absolute; height:7px; width:7px; border-radius:7px; background-color:white; margin-left:72px; margin-top:40px;"></div> <p  style="position:absolute; color:coral; font-size:60%; left:20px;" id="'+ count+"listbottom" +'">'+count +'</p>    <p  id="'+ count+"listid" +'" class="t">'+typed+'</p>   </div>';
             
           
          
               $("body").prepend(newnode);
         
              
               
               $("#"+count+"list").draggable({
                cancel: ".node,.nodeleft"
              });
         
               next[(count)+"list"] = "null"
               prev[(count)+"list"] = "null"
               
         
               divbyelement[typed] = (count)+"list";
         
               count = count +1;
         
             }
         
        

             $(document).on("click","div.node,div.nodeleft" , function (e)  {

    
      
                if (clicktimes === 0) {

                  drawflag = false;
          
                first=  $('#'+e.target.id).parent().attr("id");
          
                clicktimes = 1;
          
                }
          
                else if (clicktimes === 1) {
          

                  drawflag = true;
          second = $('#'+e.target.id).parent().attr("id");
          
          nodify(first,second)
          
          clicktimes = 0;
          
                }
          
              })

              
              
          