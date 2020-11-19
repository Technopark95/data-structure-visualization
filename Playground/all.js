
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


var displaysignal="slow";
var infoclick = 0;
var top = 0
var max = 0
var table = 0
var elements = []
var counttreenodes = 0
var command = ""

var terminate = "no"
var count =0

var head =""
var stats= 0;
var divbyelement = { }

var next = { }
var prev = { }

var tree = { }
var parent = {}

var variables ={}

var sequence =[]

var mapping = { "0" : "print(value)" ,  "1" : "preorder(left)" , "2" : "preorder(right)" , "3" : "return"}

var steps = {}
var newnode;

variables['head'] = 0
variables['root'] = 0

var head = variables['head']

var CurrentNode = variables['root']

var value="";
var log = $("#log1")
var output = $("#out1")

$('body').append(`<img id="pointerarrow" src="pointer.png" style="height: 70px; width: 70px; position: absolute; top: 135px;transition-duration:500ms;">`)
var pointerarrow = $("#pointerarrow")
pointerarrow.hide();

$('#anislow').css({"background-image" : "linear-gradient(to right , #ff512f , #dd2476)"});



$("#log1").append('<p style="font-size:x-large; margin-top:-5px;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+ "Happenings.." +'</p>')


$("body").append(`<p id="iindex" style="position:absolute; transition-duration : 500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">i</p>`)
$("body").append(`<p id="jindex" style="position:absolute; transition-duration  :500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">j</p>`)
$("body").append(`<p id="kindex" style="position:absolute; transition-duration  :500ms; top:0px; font-size:150%; font-family:'segoe ui'; ">k</p>`)

$("#iindex").hide()
$("#jindex").hide()
$("#kindex").hide()


var mySVG = $('body').connect();


     
function del (one ,two)  {

  mySVG.dl(one , two)
          
}
     

function pauser ()  {



  return new Promise( resolve => {
              
    $("#pl").click(function() {
    
      $("#pa").css('filter' , 'blur(0px)');
      $("#pl").css('filter' , 'blur(5px)');
        $("#pl").off("click");
    
    
    stats = 0 ;
    resolve("reolved");
    
    
    })
    
    
    
    })


}


$("#pa").click(function()  {


  stats =1;
  
  $("#pa").css('filter' , 'blur(5px)');
  $("#pl").css('filter' , 'blur(0px)');
  
  
  })




var defaultcolor = "argb(0,0,0,0.842)";

async function hilight (acc , color="rgb(0,0,0,0.842)" , duration = "4000ms" , timeout = 4100) {

  $("#"+acc).css({"background-color" : color , "transition" :duration })

  if (stats == 1  ) await pauser();

  return new Promise(resolve => {
  

setTimeout(function()  {

  resolve('')

},timeout)
   

})

}




function normalize()  {


$(".dragg,.arrayd").css({"background-color" : "rgb(0,0,0,0.842)" , "transition-duration" : "500ms"})

}





        function set(value , elementid )  {

     
     variables[value] = elementid;

     head = variables['head']


     $("#feed").text("ID "+elementid+ " had set to "+value);

  $("#feed").delay('fast').fadeIn(1000 , function()  {

    $("#feed").delay(4000).fadeOut(1000);


  });


         }

     






    function removebyid(getid) {

$("#"+getid).remove();

dragit();


    }






    function dragit ()  {


      var tar = $(".dragg ")

      tar.simulate("drag", {
        dx: 1
    });

   

    }
    



 





  
 

var clicktimes =0 , first="" , second=""



$(document).on("mouseenter","div.nodeleft" , function (e)  {

  $(this).animate({"background-color" : "yellow"})

})

$(document).on("mouseleave","div.nodeleft" , function (e)  {

  $(this).animate({"background-color" : "white"})

})



    $(document).on("mouseenter","div.node, div.treenode" , function (e)  {

      $(this).animate({"background-color" : "red"})

    })



    $(document).on("mouseleave","div.node, div.treenode" , function (e)  {

      $(this).animate({"background-color" : "white"})

    })


    
    $(document).on('mouseenter' ,'div.dragg,div.vert' ,function(e) {


      $("#"+e.target.id).css({ "transition-duration" : "100ms"})

   
    })



    $("#anislow ").on("mouseenter" , function() {

      $("#anislow").css({"left":"250px", "transition-duration" : "300ms"})
  
  
    })
  
    $("#anislow").on("mouseleave" , function() {
  
      $("#anislow").css({"left":"0px", "transition-duration" : "300ms"})
  
  
    })
  
  
    $("#aniquick ").on("mouseenter" , function() {
  
      $("#aniquick").css({"left":"250px", "transition-duration" : "300ms"})
  
  
    })
  
    $("#aniquick").on("mouseleave" , function() {
  
      $("#aniquick").css({"left":"0px", "transition-duration" : "300ms"})
  
  
    })




    $("#anislow").on("click" , function() {

      $("#anislow").css({"background-image" : "linear-gradient(to right , #ff512f , #dd2476)", "transition-duration" : "300ms"})
  
      $("#aniquick").css({"background-image" : "linear-gradient(to right , #000 , #fff)", "transition-duration" : "300ms"})
  
      displaysignal = "slow"
  
    })
  
    $("#aniquick").on("click" , function() {
  
      $("#aniquick").css({"background-image" : "linear-gradient(to right, #ff9966, #ff5e62)", "transition-duration" : "300ms"})
  
      $("#anislow").css({"background-image" : "linear-gradient(to right , #000 , #fff)", "transition-duration" : "300ms"})
  
  displaysignal = "quick"
    })
  

   

    $("#infotab").on("mouseenter" , function() {

      $("#infos").css({"left":"250px", "transition-duration" : "300ms"})
  
  
    })
  

    $("#infotab").on("mouseleave" , function() {
  
      $("#infos").css({"left":"0px", "transition-duration" : "300ms"})
  
  
    })

  


    $(".autohide").hide();
    $("#listofcommand").hide();
 
    $("#infotab").on("click" , function() {


      if (infoclick == 0 ) {
      
      let codebox = $("#codetype").position();

      $("#infotab").css({top:codebox.top+140})
      $("#infotab").off("mouseleave")
      $("#listofcommand").show();
      setTimeout(()=> {

$("#listofcommand").css({"opacity" : "100%","z-index" : "5" , transition : "300ms"} )

      },100)
      

      
      infoclick = 1;

    }

    else {


  
      $("#infotab").on("mouseleave" , function() {
  
        $("#infos").css({"left":"0px", "transition-duration" : "300ms"})
    
      })

      $("#listofcommand").css({"opacity" : "0%","z-index" : "0" , transition : "300ms"} )
  
      setTimeout(()=> {
        $("#infotab").css({top:"53%"});
        $("#listofcommand").hide();
      },100)



      infoclick = 0;


    }
  
  
    })


    $(document).on("click" , "p.acchead" , function(e) {


      let dsname = "#"+e.target.id+ "data";

    
      if ($(dsname).is(":hidden") == true)  {

        $(dsname).show()


      }

      else {

        $(dsname).hide()

      }




    })






    


  $(".commandcopy").mouseenter(function(e)  {

    $(e.target).css({ "font-size" : "130%" , "transition" : "300ms"})
    
    
    
    
      })
    
    
      $(".commandcopy").mouseleave(function(e)  {
    
        $(e.target).css({"border" : "none" , "font-size" : "100%"})
        
        
        
        
          })
    
    
     $(".commandcopy").click(function(e)  {
    
      let com = $(e.target).text();
    
     
      $("#codetype").val(com);
            
            
      })
        
    
 
      function waitforme(ms) {

        return new Promise( resolve =>  {
        
        setTimeout(()=>{ resolve('')},ms)
        
        })
        
        }



        
function pqueue () {



  $("body").append(`<div id="postqueue" style="position:absolute;bottom:100px;left:100px;min-width:100%;"></div>`)
  
  
  $("#postqueue").draggable()
  
  }


  var queuefront=200;
  var queuerear = 200;


async function qins (symbol) {


  if (stats == 1  ) await pauser();

return new Promise( resolve => {
  

  
  $("#postqueue").prepend(`<div id="pq${queuerear}" class="PSTACK postfixcss"><p style="position:relative;">${symbol}</p></div>`)
  
  $(`#pq${queuerear}`).animate({"opacity" : "100%"} ,500 , ()=> {

      queuerear--;
resolve('');

  })




})
}


async function qout()  {


  if (stats == 1  ) await pauser();
  return new Promise( resolve => {
      
  
  
  $(`#pq${queuefront}`).animate({left : "+=300" , opacity: "0%"},700, ()=> {
  
      let y = $(`#pq${queuefront}`).text();
  $(`#pq${queuefront}`).remove();


  --queuefront;

  resolve('')
return y;

  
  })
  
  })
  
  }
  

function open(link)  {


  window.location.replace(link);


}




async function executejs(scriptname)  {

  
$.getScript(scriptname)

await display("Script Loaded.")

}


$("#codetype").keypress(async function(e) {


  if (e.which == 13) {

    
  
    command = $("#codetype").val();
  
    $("#log1").append('<p style="font-size:large;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+command+'</p>')
    logscreen.scrollTop = logscreen.scrollHeight;
    
    await eval(command)
  
    normalize();
  
    
  }
  
  })





//LL







function nodify(first,second , col ="coral") {


  mySVG.drawLine({
      left_node:'#'+first+'right',
      right_node:'#'+second+'left',
      error:true,
width:3,
status : col,


      
});




next[first] = second

prev[second] = first

if ( $("#"+second+"id").text() == "NULL") {

terminate = "yes"

}

  $( '#'+first ).draggable({
      drag: function(event, ui){mySVG.redrawLines();}
    });
    $( '#'+second ).draggable({
      drag: function(event, ui){mySVG.redrawLines();}
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

          
          
        function addnode(typed) {


              newnode = '<div id="'+count+'list"  class="dragg" > <div class="nodeleft" id="'+ count+"listleft" +'" style="position:absolute; height:7px; width:7px; border-radius:5px; background-color:white;  margin-top:40px;"></div>  <div class="node" id="'+ count+"listright" +'" style="position:absolute; height:7px; width:7px; border-radius:7px; background-color:white; margin-left:72px; margin-top:40px;"></div> <p  style="position:absolute; color:coral; font-size:60%; left:20px;" id="'+ count+"listbottom" +'">'+count +'</p>    <p  id="'+ count+"listid" +'" class="t">'+typed+'</p>   </div>';
           
         
        
             $("body").prepend(newnode);
       
            
             
             $("#"+count+"list").draggable();
       
             next[(count)+"list"] = "null"
             prev[(count)+"list"] = "null"
             
       
             divbyelement[typed] = (count)+"list";
       
             count = count +1;
       
           }
       
      

           $(document).on("click","div.node,div.nodeleft" , function (e)  {

  
    
              if (clicktimes === 0) {
        
              first=  $('#'+e.target.id).parent().attr("id");
        
              clicktimes = 1;
        
              }
        
              else if (clicktimes === 1) {
        
        second = $('#'+e.target.id).parent().attr("id");
        
        nodify(first,second)
        
        clicktimes = 0;
        
              }
        
            })

            
            
              

//TREE






function treefy(first,second ,color_ = "coral") {


  mySVG.drawLine({
    left_node:'#'+first,
    right_node:'#'+second+'treetop',
    error:true,
    col : color_,
    width:2,
      
  });

  var par = $("#"+first).parent().attr("id");

  tree[first] = second ;
  parent[second] = par;


      $( '#'+par ).draggable({
          drag: function(event, ui){mySVG.redrawLines();}
        });
        $( '#'+second ).draggable({
          drag: function(event, ui){mySVG.redrawLines();}
        });

      }




async function  preorder(CurrentNode) {


if (CurrentNode == "null") {

  return ;

}


  await hilight(CurrentNode , "red", "500ms"  ,700)
  Output($("#"+CurrentNode+"treeval").text())
  await display("Going left of " + CurrentNode )
  await preorder(tree[CurrentNode+"treeleft"])
  await display("Going right of " + CurrentNode )
  await preorder(tree[CurrentNode+"treeright"])
  await display("returning from " + CurrentNode )
  await hilight(CurrentNode , "rgba(75,0,130, 0.842)", "500ms"  ,700)
  

}


async function  inorder(CurrentNode ) {

  if (CurrentNode == "null") {

    return;

  }

  
  await display("Going left of " + CurrentNode )
  await inorder(tree[CurrentNode+"treeleft"])
  await hilight(CurrentNode , "red" , "500ms"  ,700)
  Output($("#"+CurrentNode+"treeval").text())
  await display("Going right of " + CurrentNode )
  await inorder(tree[CurrentNode+"treeright"])
  await display("returning from " + CurrentNode )
  await hilight(CurrentNode , "rgba(75,0,130, 0.842)" , "500ms"  ,700)
  


}



async function  postorder(CurrentNode ) {

  if (CurrentNode == "null") {

    return;

  }

  await display("Going left of " + CurrentNode )
  await postorder(tree[CurrentNode+"treeleft"])
  await display("Going right of " + CurrentNode )
  await postorder(tree[CurrentNode+"treeright"])
  await hilight(CurrentNode , "red", "500ms"  ,700)
  Output($("#"+CurrentNode+"treeval").text())
  await display("returning from " + CurrentNode )
  await hilight(CurrentNode , "rgba(75,0,130, 0.842)", "500ms"  ,700)


}




async function preorderstack(root_) 
{ 
    // Base Case 
    if (root_ == "null") 
       return; 
  
    stack(10)
    pointerarrow.show();
   await push(root_); 
  
  
    while (isEmpty() == false) 
    { 
        
        await display(`Pop element from stack and print`);
        await pop();
        let curr = popped; 
        pointerarrow.css({ "top" : `${($("#"+curr).offset().top+50)}px` , "left" : `${($("#"+curr).offset().left-50)}px` , "transition-duration" : "300ms"})
        
        await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                hilight(curr, defaultcolor , "1200ms" , 1300 )

        Output($("#"+curr+"treeval").text())
  


        await display(` Push right and left children of the popped node to stack`);

        if (tree[curr+"treeright"] != "null")  {

          await hilight(tree[curr+"treeright"], "blueviolet" , "1200ms" , 1300 )
                hilight(tree[curr+"treeright"], defaultcolor , "1200ms" , 1300 )

          await  push(tree[curr+"treeright"]);
        } 
        if (tree[curr+"treeleft"] != "null")  {

          await hilight(tree[curr+"treeleft"], "blueviolet" , "1200ms" , 1300 )
                hilight(tree[curr+"treeleft"], defaultcolor , "1200ms" , 1300 )
          await  push(tree[curr+"treeleft"]); 

        }
    } 

    pointerarrow.hide();
}




async function inorderstack(root_) 
{ 
    stack(10);
    let curr = root_; 

    pointerarrow.show();
  
    while (curr != "null" || isEmpty() == false) 
    { 
        
           await display("Reach the left most Node of the current Node");
        while (curr !=  "null") 
        { 
      
          if (curr != "null") pointerarrow.css({ "top" : `${($("#"+curr).offset().top+25)}px` , "left" : `${($("#"+curr).offset().left-60)}px` , "transition-duration" : "300ms"})

          

          await hilight(curr, "blueviolet" , "1200ms" , 1300 )
                hilight(curr, defaultcolor , "1200ms" , 1300 )


                await display("Push current node into stack.");
          
          
          await  push(curr); 
          curr = tree[`${curr}treeleft`]; 

   

        } 
  
        await display("end of left subtree");
        await display("pop element from stack and print");
        
       await pop(); 
        curr = popped;

        pointerarrow.css({ "top" : `${($("#"+curr).offset().top+25)}px` , "left" : `${($("#"+curr).offset().left-60)}px` , "transition-duration" : "300ms"})

        await display(`Current node = ${popped} (popped element)`);
        await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
        hilight(curr, defaultcolor , "1200ms" , 1300 )
    
       Output( $("#"+curr+"treeval").text())
  
       await display("Left sub tree completed. Now, going right subtree");
     
       
           curr = tree[`${curr}treeright`]; 
  
    } /* end of while */

    pointerarrow.hide();

} 



async function postorderstack(root_) 
{ 
    // Check for empty tree 
      pointerarrow.show();
     stack(10); 
     do { 
        // Move to leftmost node 
        while (root_ != "null") 
        { 
            await display(`Push root's right child and then root to stack.`)
            if (tree[root_+"treeright"] != "null") {
              pointerarrow.css({ "top" : `${($("#"+tree[root_+"treeright"]).offset().top+50)}px` , "left" : `${($("#"+tree[root_+"treeright"]).offset().left-50)}px` , "transition-duration" : "300ms"})

              await hilight(tree[root_+"treeright"], "blueviolet" , "1200ms" , 1300 )
                    hilight(tree[root_+"treeright"], defaultcolor , "1200ms" , 1300 )
            await push(tree[root_+"treeright"]); 

            }
            pointerarrow.css({ "top" : `${($("#"+root_).offset().top+50)}px` , "left" : `${($("#"+root_).offset().left-50)}px` , "transition-duration" : "300ms"})

            await hilight(root_, "blueviolet" , "1200ms" , 1300 )
                    hilight(root_, defaultcolor , "1200ms" , 1300 )
            await  push(root_); 
  
         
            await display(`Set root as root's left child`)  
            root_ = tree[root_+"treeleft"] 
        } 
  
        await display(`Pop an item from stack and set it as root`)      
        await pop(); 
        root_ = popped;

  
        await display("If the popped item has a right child and itsnotprocessed, then it processed before root")
        
        if (tree[root_+"treeright"] != "null" && peekstack() == tree[root_+"treeright"]) 
        { 

         await display("remove right child from stack")
          await  pop();  // remove right child from stack 

          await display("push root back to stack")
          await  push(root_);  // push root back to stack 

          await display("change root so that the right child is processed next")
            root_ = tree[root_+"treeright"]; // change root so that the right  
                                // child is processed next 
        } 
        else  // Else print root's data and set root as NULL 
        { 

          pointerarrow.css({ "top" : `${($("#"+root_).offset().top+50)}px` , "left" : `${($("#"+root_).offset().left-50)}px` , "transition-duration" : "300ms"})

          await hilight(root_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                hilight(root_, defaultcolor , "1200ms" , 1300 )
            Output( $(`#${root_}treeval`).text()); 
            root_ = "null"; 
        } 
    } while ( isEmpty() == false);

    pointerarrow.hide();
} 


function movebranch(ID,leftpx=0,toppx=0)   {


  $(ID).animate({"left" : "+="+leftpx ,"top" : "+="+toppx})
  
  
  
  }

  var wholebranch = "";

  function returnwholebranch(noderoot)  {



    if (noderoot == "null") {
  
      return;
  
    }
  

  wholebranch = wholebranch + "#"+noderoot+",";

returnwholebranch(tree[`${noderoot}treeleft`]);
returnwholebranch(tree[`${noderoot}treeright`]);

  }

  function SyncMoveBranch(noderoot,leftpx=0,toppx=0)   {

    returnwholebranch(noderoot);

    let branch = wholebranch.slice(0,wholebranch.length-1);

    movebranch(branch , leftpx,toppx);

    wholebranch= "";




  }



async function insertbst(node_, key_) { 


  if ($(`#${node_}`).length == 0)  {

    await display("Tree Empty. Adding root node.");
    let vid =count;
     leaf(key_); 
     $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms linear"})
     $(`#${vid}`).animate({ "top" : "0px", "left" : "43%"})
     
     return;
  }


  await hilight(node_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
  hilight(node_, defaultcolor , "1200ms" , 1300 )



  /* Otherwise, recur down the tree */
  if (key_ <  parseInt( $(`#${node_}treeval`).text() , 10) ) {

          if (tree[`${node_}treeleft`] == "null") {

            await display("Correct place to insert the element = CurrentNode->left")
      let vid = count;
      leaf(key_);
   $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms"})
   $(`#${vid}`).offset({top: ($("#"+node_).offset().top+130 ) , left :($("#"+node_).offset().left-150) })


      return new Promise(resolve => {


        setTimeout(()=> {
          treefy(`${node_}treeleft` ,vid)
          resolve('')
          return;
         },2100)
          


      })
   
      
    
           }

           Log("Item smaller then current node, going left")

  await insertbst(tree[`${node_}treeleft`], key_);

    
  }
 
 
  else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {


             if (tree[`${node_}treeright`] == "null") {

              await display("Correct place to insert the element = CurrentNode->right")
      let vid = count;
      leaf(key_);


      $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms"})
      $(`#${vid}`).offset({top: ($("#"+node_).offset().top+130 ) , left :($("#"+node_).offset().left+150) })


      return new Promise(resolve => {


        setTimeout(()=> {
          treefy(`${node_}treeright` ,vid)
          resolve('')
          return;
         },2100)
          


      })
    
               }


               Log("Item larger then current node, going right")
               await   insertbst(tree[`${node_}treeright`], key_); 

    
  }
  
} 



async function searchbst(ro , item) {


await hilight(ro, "rgb(109,209,0,1)" , "1200ms" , 1300 )


  if ( $('#'+ro+'treeval').text() == item) {

   await  hilight(ro,"red")
    await display("Item found.")

    return;

  }

  if (    ro  == "null"   ) {

    return;

  }

   if (     parseInt(   $('#'+ro+'treeval').text() ,  10  )   > item     ) {

    
    await display("Item is smaller than "+ $('#'+ro+'treeval').text() + " Going Left") 
   await searchbst(tree[ro+"treeleft"], item)

  }


  if (     parseInt(   $('#'+ro+'treeval').text() ,  10  )   < item     ) {

    await display("Item is larger than "+ $('#'+ro+'treeval').text() + " Going Right") 
  await  searchbst(tree[ro+"treeright"], item)

  }



}



async function  minValueNode( node) 
{ 
    let current = node; 
  
    /* loop down to find the leftmost leaf */
    while ( tree[`${current}treeleft`] != "null")  {

      await hilight(current, "red" , "1200ms" , 1300 )
      hilight(current, defaultcolor , "1200ms" , 1300 )

        current = tree[`${current}treeleft`]; 

    }

    await hilight(current, "red" , "1200ms" , 1300 )
    hilight(current, defaultcolor , "1200ms" , 1300 )
  
    return current; 
} 




async function deletebst( _root , _key) 
{ 

  await hilight(_root, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    hilight(_root, defaultcolor , "1200ms" , 1300 )
  
  
    // base case f
    if (_root == "null") return _root; 

 
    // If the _key to be deleted is smaller than the _root's _key, 
    // then it lies in left subtree 
    if (_key < parseInt(  $('#'+_root+"treeval").text() , 10) )  {
      
       tree[_root+`treeleft`] = await deletebst(tree[_root+`treeleft`], _key); 

       treefy(_root+`treeleft`, tree[_root+`treeleft`])
    }
    // If the _key to be deleted is greater than the _root's _key, 
    // then it lies in right subtree 
    else if (_key > parseInt( $('#'+_root+"treeval").text() , 10))  {

    tree[_root+`treeright`] = await deletebst(tree[_root+`treeright`], _key); 

    treefy(_root+`treeright`, tree[_root+`treeright`])
    }


    
    else
    { 
        // node with only one child or no child 
        if (tree[`${_root}treeleft`] == "null") 
        { 
            let temp = tree[`${_root}treeright`]; 
           $("#"+_root).remove();
           mySVG.redrawLines();
            return temp; 
        } 
        else if (tree[`${_root}treeright`] == "null") 
        { 
            let temp = tree[`${_root}treeleft`]; 
         
            $("#"+_root).remove();
           mySVG.redrawLines();
            return temp; 
        } 
  
        // node with two children: Get the inorder successor (smallest 
        // in the right subtree) 
  
        await display("getting Inorder Successor to replace");

        let temp = await minValueNode(tree[`${_root}treeright`]); 

        
        // Copy the inorder successor's content to this node 
        await display("Copy the inorder successor's content to this node");
        $('#'+_root+"treeval").text(  $('#'+temp+"treeval").text() );
  
        // Delete the inorder successor 
        await display("Delete the inorder successor");
        tree[`${_root}treeright`] = await deletebst(tree[`${_root}treeright`], $('#'+temp+"treeval").text()); 
    } 
    return _root; 

    
} 





function leaf(element) {

   newnode = '<div id="'+count+'" style="transition:500ms ;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>    <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


  $("body").prepend(newnode)
  $("#"+count).draggable();

  tree[count+"treeleft"] = "null"
  tree[count+"treeright"] = "null"

  divbyelement[element] = count

  count = count +1;
  counttreenodes = counttreenodes + 1;


}



$(document).on("click","div.treenode" , function (e)  {


    
  if (clicktimes === 0) {

  first=  e.target.id;

  clicktimes = 1;

  }

  else if (clicktimes === 1) {

second = $('#'+e.target.id).parent().attr("id");


treefy(first,second)



clicktimes = 0;

  }

})



  //array

  var length =0

  var storedarray = []
  
  var arr = ''
  
  var tableobj
  
  function array (typed)  {
  
  
  
  
    length = typed.length 
  
       arr = '<table id="t1" style="position:absolute;border-collapse: collapse; margin-top:235px; margin-left:100px; text-align:center; transition-duration : 100ms;table-layout: fixed;" >'
    
      $("body").prepend(arr);
    
      $("#t1").draggable();
    
  
      $("#t1").append("<tr>");
    
    
      for (var i = 0 ; i < typed.length ; ++i)  {
  
        var r =typed[i]
    
    $("#t1").append(' <td id="aitem'+ i+'" class="arrayd" style="text-align:center; min-width:70px;">     <div id="aitemdiv'+ i+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+i +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+i+'</p>             <p id= "aitemval'+i +'" class="arrayitem">'+ r +'</p>                        </div>  </td>')
    storedarray.push(r)
  
  
      }
      $("#t1").append("<tr>");
      $("#t1").append("</table>");
  
      tableobj = $("#t1")
    
      $("#iindex").show()
      $("#jindex").show()
      $("#kindex").show()
    
    }
  
  
   function temparray (sn ,cellid)  {
  
  let tableid= `t${Math.ceil (Math.random()*10)}${ Math.ceil( Math.random()*10)}`
  
  
    let ar = `<table id="${tableid}" style="position:absolute;border-collapse: collapse; margin-top:535px; margin-left:100px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ><tr>   </tr></table>`
    
    $("body").prepend(ar);
  
    $("#"+tableid).draggable( {
    });
  
  
  
    for (let i = 0 ; i < sn ; ++i)  {
  
  
  
  $("#"+tableid).append(`<td id="${cellid}item${i}" class="arrayd" style="text-align:center; min-width:70px;">     <div id="${cellid}itemdiv${i}"  style="text-align:center; position:absolute; z-index:1">         <p id="${cellid}itemindex${i}" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>${i}</p>             <p id= "${cellid}itemval${i}" class="arrayitem">0</p>                        </div>  </td>`)
  
  
    }
  
    tableobj = $("#"+tableid)
  
    return tableobj;
  
  }
  
  
  
  
 async   function swapp( vala,valb) {
  
  if (stats == 1  ) await pauser();
      return new Promise(resolve => {
  var x =   $("#aitem"+vala).position()
  
  var y =   $("#aitem" + valb).position()
  
  var s = Math.abs(x.left  - y.left)
  
  var a = $("#aitemval" +vala).text() 
  var b = $("#aitemval" +valb).text()
  
  
  
  
  
  $("#aitemval"+vala).animate({
  
    "color" : "black",
    "margin-top" : "170px"
    
    
    } ,1000, function()  {
  
  
      $("#aitemval"+vala).animate({
  
        "margin-left" : s+"px"
        
        
        } ,2000, function()  {
        
        
          $("#aitemval"+vala).animate({
        
            "color" : "white",
            "margin-top" : "20px"
            
            
            },1000 , function ()  {
  
              $("#aitemval"+vala).css({"margin-left" :"0px" ,"margin-top" :"20px" })
  
  
            })
            
        
        
        })
  
  
  
  
    })
  
  
  
  
  
  
  
    $("#aitemval"+valb).animate({
  
      "color" : "black",
      "margin-top" : "-105px"
      
      
      }, 1000 , function()  {
    
    
        $("#aitemval"+valb).animate({
    
          "margin-left" : "-"+(s*2 - 10)+"px"
          
          
          
          },2000 , function()  {
          
          
            $("#aitemval"+valb).animate({
          
              "color" : "white",
              "margin-top" : "20px"
              
              
              } ,1000 , function ()  {
  
                $("#aitemval"+valb).css({"margin-left" :"0px" , "margin-top" :"20px"  })
  
                $("#aitemval"+vala).text(b) 
                $("#aitemval"+valb).text(a) 
  
                
  
                resolve('resolved');
  
              })
              
          
          
          })
    
    
    
    
      })
  
  
  
  
    });
  
  
  
    }
  
  
  
  
  async  function SelectionSort() {
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
          await hilight("aitem"+(isel) , "coral"  ,  "1s" , 1100)
      }
   
  }
  
  
  
  
  
   
    async  function BubbleSort(){
  
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
    for (var i1 = 1; i1 < storedarray.length; i1++) {
      var j1 = i1 - 1
      var temp = storedarray[i1]
     await hilight(`aitem${i1}` , "red" ,"1100ms",1100)
      
      await display('Inserting '+ (temp)  +' to correct index')
      await hilight(`aitem${i1}` , defaultcolor ,"1100ms",1100)
        
      while (j1 >= 0 && storedarray[j1] > temp) {
  
        await display('Comparing  array[' + (j1) + '] => '+ (storedarray[j1])  + ' > ' + (temp) + '.Move element to right.');
        await moveright(j1);
        storedarray[j1 + 1] = storedarray[j1];
        j1--;
        
      }
      await display('Correct place at index = ' + (j1+1) )
      storedarray[j1+1] = temp
  
      await insert(temp ,j1+1 );
    
    }
   
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
  
  
   await  ms (0 , storedarray.length-1)
  
     $("#iindex").hide()
     $("#jindex").hide()
     $("#kindex").hide()
  
  
  }
  
  
  
  
  
  
  
  async function BinarySearch(value){
  
    $("#kindex").text("mid").show();
  
    await display( 'set first = 0')
    await hilight("aitem0", "blueviolet" , "1000ms" , 1100)
    var firstIndex  = 0
  
    I(firstIndex ,  "a" )
  
    var    lastIndex   = storedarray.length - 1
  
    J(lastIndex ,  "a" )
  
        await display( 'set last = '+lastIndex)
        await hilight("aitem"+(lastIndex), "blueviolet" , "1000ms" , 1100)
  
     var   middleIndex = Math.floor((lastIndex + firstIndex)/2);
     K(middleIndex ,  "a" )
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
            J(lastIndex ,  "a" )
            await hilight("aitem"+lastIndex , "blueviolet" ,  "1000ms" , 1100)
        } 
      else if (value > storedarray[middleIndex])
        {
          await hilight("aitem"+(middleIndex) ,defaultcolor ,  "1000ms" , 1100)
          await display( 'search item '+ value +' is larger array[' + middleIndex + ']')
           await display( 'set first = mid+1')
            hilight("aitem"+firstIndex ,defaultcolor ,  "1000ms" , 1100)
            firstIndex = middleIndex + 1;
            I(firstIndex ,  "a" )
            await hilight("aitem"+firstIndex , "blueviolet" ,  "1000ms" , 1100)
        }
      
        await hilight("aitem"+(middleIndex),defaultcolor ,  "1000ms" , 1100)
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
        await display( 'set mid = (first+last)/2')
        K(middleIndex ,  "a" )
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
  
  
  }
  
  
    async function insert(value ,index , cellid="a") {
  
      if (stats == 1  ) await pauser();
      return new Promise ( resolve => {
      $(`#${cellid}itemval${index}`).css({opacity:"0%"})
  
      $(`#${cellid}itemval${index}`).text(value)
  
      $(`#${cellid}itemval${index}`).animate({opacity:"100%"} , 1000)
  
  
      setTimeout (function()  {
  
        resolve('resolved')
            },1000)
            
  
      })
  
    }
  
  
  
    function moveleft(index)  {
  
      $("#aitemval"+(index-1)).animate({opacity:"0%"} , 500)
  
      $("#aitemval"+(index)).animate({"margin-left":"-160px" , "opacity":"0%" },1000 ,function()  {
  
          $("#aitemval"+(index-1)).text($("#aitemval"+(index)).text())
  
          $("#aitemval"+(index-1)).animate({"opacity":"100%"} , 500 , function()  {
  
            $("#aitemval"+(index)).animate({"margin-left":"0px" , "opacity":"0%" })
    
          })
      })
  
  
  }
  
  async function moveright(index)  {
  
    if (stats == 1  ) await pauser();
    return new Promise ( resolve => {
  
    $("#aitemval"+(index+1)).animate({opacity:"0%"} , 500)
  
    $("#aitemval"+(index)).animate({"margin-left":"90px" , "opacity":"0%" },1000 ,function()  {
  
        $("#aitemval"+(index+1)).text($("#aitemval"+(index)).text())
  
        $("#aitemval"+(index+1)).animate({"opacity":"100%"} , 500 , function()  {
  
          $("#aitemval"+(index)).animate({"margin-left":"0px" , "opacity":"0%" })
  
        })
  
       
    })
  
  
    setTimeout (function()  {
  
      resolve('resolved')
          },2000)
          
  
    })
  
  }
  
  
  var index = length-2
  
  async function  insertAt (value , index)  {

    for (let i = length-2 ; i >=0 ; --i)  {
  
      if (index == i+1 ) {
        storedarray[index] = value;
        insert(value ,index)
        return;
      }
      
      storedarray[i+1] = storedarray[i];
     await moveright(i);
  
  
    }
  
  
  
    }
  
  
  
  //Heap


var ii=0 , data;


$.getJSON("Alignment.json" , function(result) {


  data = result


})


  function arraynodes() 
  { 
  
      if ( ii == length ) {
          counttreenodes = length;
          count =length;
          return;
      
    
       }
  
      var newnode = '<div id="'+ii+'"  class="dragg" > <div class="treenode" id="'+ ii+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ ii+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ ii+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ ii+"bottom" +'">'+ii +'</p>    <p  id="'+ ii+"treeval" +'" class="t">'+storedarray[ii]+'</p>   </div>';
  
      $("body").prepend(newnode)
        $("#"+ii).draggable();
      
  
        tree[ii+"treeleft"] = "null"
        tree[ii+"treeright"] = "null"
    ii = ii + 1
        rootoftree = newnode
        arraynodes()
  
  } 
  
  
  
  function build() 
  { 
  
     
  
      for (var  i =0 ;  i < counttreenodes ; i++)  {
  
  
  if ( (2*(i))+1 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var leftc = (2*(i))+1;
  
      treefy(i+"treeleft" , leftc)
  
  }
  
  if ( (2*(i))+2 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var rightc = (2*(i))+2;
  
      treefy(i+"treeright" , rightc)
  
  }
  
  
  
      }
  
  
  
  
  }  
  
  function buildheap()  {
  
      arraynodes();
  
      build();
  
  }
  
  
  async function gottopoint (i,j)   {
  
    if (stats == 1  ) await pauser();
  
      return new Promise(resolve => {
  
  
      var element1 = $("#"+i);
      var top1 = element1.position().top;
      var left1 = element1.position().left;
  
  
      var  element2 = $("#"+j);
      var top2 = element2.position().top;
      var left2 = element2.position().left;
  
      var  element1text = $("#"+i+"treeval").text();
      var  element2text = $("#"+j+"treeval").text();
  
      element1.css({ "top": (top2)+"px", "left": (left2)+"px" ,"transition-duration" :"1500ms" },3500, function() {
  
  
      })
  
      element2.css({ "top": (top1)+"px", "left": (left1)+"px","transition-duration" :"1500ms" } , 3500, function() {
  
  
      })
     
  
      setTimeout(function() {
  
        element1.css({"position" : "absolute" , "top": (top1)+"px", "left": (left1)+"px" ,"transition-duration" :"0ms"})
  
         element2.css({"position" : "absolute" , "top": (top2)+"px", "left": (left2)+"px" ,"transition-duration" :"0ms"})
  
         $("#"+j+"treeval").text(element1text)
         $("#"+i+"treeval").text(element2text);
  
         resolve('resolved')
  
      },1480)
  
  
  
  
  
      })
  
  
  
  
  }
  
  
    
  
  
  
  
  
  
  // Heapsort
  
  
  async function heapify( len,  ind) 
  { 
      ind = Math.floor(ind)
      var largest = ind; // Initialize largest as root 
      var l = 2*ind + 1; // left = 2*i + 1 
      var r = 2*ind + 2; // right = 2*i + 2 
    
      
      // If left child is larger than root 
      if (l < len && storedarray[l] > storedarray[largest]) 
          largest = l; 
    
      // If right child is larger than largest so far 
      if (r < len && storedarray[r] > storedarray[largest]) 
          largest = r; 
    
      // If largest is not root 
      if (largest != ind) 
      { 
           hilight(ind , "red" , "1s" ,1100)
        //  swap(st[ind], st[largest]); 
        await hilight(largest , "red" , "1s" ,1100)
          var te = storedarray[ind];
          storedarray[ind] = storedarray[largest];
          storedarray[largest] = te;
  
       await   gottopoint(ind ,largest)
       await swapp(ind,largest)
        hilight(ind , defaultcolor , "1s" ,1100)
       await hilight(largest , defaultcolor , "1s" ,1100)
    
          // Recursively heapify the affected sub-tree 
      await    heapify(len, largest); 
      } 
  } 
    
  // main function to do heap sort 
  async function HeapSort() 
  { 
     await arraynodes()
      await doalign("400ms" , 2000)
     await build()
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
          await turnred(ind)
          await hilight(ind, "purple" ,"1s" ,1100)
    
          // call max heapify on the reduced heap 
          await display('Building Heap')
          await   heapify( ind, 0); 
      } 
  } 
  
  
  
  var t , l
  var el_pos = { }
  
  var posar = {}
  

  function alignanimate(d , duration_ , timeout_)  {
  
  
      var tt = data[d]["top"];
      var ll = data[d]["left"];
  
  var ff = $("#"+d)
  
      ff.css({"transition-duration" : "2000ms" , "left" :"0px" ,"top" :"0px"})
  
      ff.offset({top:tt , left :ll})
      
  
  
  return new Promise (resolve => {
  
    
      
      setTimeout(function() {
        
  resolve('resolved')
      },timeout_)
  
  
  
  
  })
  
  }
  
  
   async function doalign(duration_="3000ms" , timeout_=200)  {
  
    
  for ( var d=0 ; d < counttreenodes ; d++ ) {
  
     
  
    await   alignanimate(d , duration_ , timeout_);
  }
  
  
  
  
  
  }




//QuickSort





var sheet;

$("#feed").fadeIn()
$("#feed").css({"opacity" : "0%"})

var logscreen = document.getElementById("log1");
var outputscreen = document.getElementById("out1");


function K( _k,  cellid )  {


    return new Promise (resolve => {
    
        let kpos = $(`#${cellid}item${_k}`).offset();

      
      $("#kindex").offset({top : (kpos.top)+100, left : (kpos.left)+45 });

      
      
      
      setTimeout(function() {
      
      
      resolve('')
      
      },400)
      
      
      })


}

function I(_i , cellid="l" ) {

    return new Promise (resolve => {
    
        let ipos = $(`#${cellid}item${_i}`).offset();
        
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
    setTimeout(function() {
    
    
    resolve('')
    
    },400)
    
    
    })
    
}



function J(_j , cellid="r" ) {

    return new Promise (resolve => {
    
        let jpos = $(`#${cellid}item${_j}`).offset();
        
        $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
    setTimeout(function() {
    
    
    resolve('')
    
    },400)
    
    
    })
    
}





function ij(_i ,_j  , cellid="a" , cellid1 = "a") {

    return new Promise (resolve => {
    
        let ipos = $(`#${cellid}item${_i}`).offset();
        let jpos = $(`#${cellid1}item${_j}`).offset();
    
    $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
    $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
    
    
    
    setTimeout(function() {
    
    
    resolve('')
    
    },400)
    
    
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

 
 $("#aitem"+pivotindex).css({ "background-color" : "rgba(75,0,130, 0.842)" , "transition" : "1s linear"} , 3000 )

 if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },1100)

})


}




async function pivotnormal(pivotindex)  {

  

 
 $("#aitem"+pivotindex).css({ "background-color" : "rgba(0,0,0, 0.842)" , "transition" : "1s linear"} , 3000 )

 if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },1100)

})

}




async function turnred(pivotindex)  {

    $("#aitem"+pivotindex).css({ "background-color" : "rgba(255,0,0, 0.91)" , "transition" : "1s linear"} , 3000 )

    if (stats == 1  ) await pauser();
    return new Promise (resolve => {

        setTimeout(() => {

            resolve('resolved')
        
        
        },1100)

})

 


}

async function turnnormal(pivotindex)  {


$("#aitem"+pivotindex).css({ "background-color" : "rgba(0,0,0, 0.842)" , "transition" : "1s linear"} )

if (stats == 1  ) await pauser();
    return new Promise (resolve => {

setTimeout(() => {

    resolve('resolved')


},1100)

})


}

async function display (data , fin= 2000 , fout = 1000)  {


  if (displaysignal == "slow") {

return new Promise ( resolve =>  {

  $("#feed").html(data)
  $("#log1").append('<p class="uncaps" style="font-size:65%;color:black;font-family:Segoe UI;">'+data+'</p>')
$("#feed").animate({"opacity" : "100%" } , fin , async function ()   {

  if (stats == 1  ) await pauser();

$("#feed").delay(fin).animate({"opacity" : "0%" } , fout , function () {

  logscreen.scrollTop = logscreen.scrollHeight
resolve('resolved')
})


})

})
  }

  else if (displaysignal == "quick") {

      Log(data);
      if (stats == 1  ) await pauser();

  }

}



function Log (data)  {

  $("#log1").append('<p class="uncaps" style="font-size:65%;color:black;font-family:Segoe UI;">'+data+'</p>')

  
  logscreen.scrollTop = logscreen.scrollHeight;

  }



function Output (data)  {

$("#log1").append('<br><p style="font-size:x-large; margin-top:-5px;  color:rgb(0,0,255, 0.7);font-family:Segoe UI;">'+ data +'</p>')                                                                               

logscreen.scrollTop = logscreen.scrollHeight;



}






 
// Graph


    
var organized = {};

var edgedata = [];
var edgecount = 0;

var distancemat = [];

var nametoidentity = {};

var direction = "-UD-";

$('body').append(`<input id ="graphinput" type="text" placeholder="Edge Weight"/>`);
$('#undirected_').css({"background-color" : "rgba(255,0,0,.5)"});

var vertexindex ="A";

function nextCharacter(c) { 
    return String.fromCharCode(c.charCodeAt(0) + 1); 
} 

class Queue 
{ 
   
    constructor() 
    { 
        this.items = []; 
    } 
                  
    enqueue_(element) 
{     
   
    this.items.push(element); 
} 
dequeue_() 
{ 
   
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
} 
isEmpty() 
{ 

    return this.items.length == 0; 
} 
   
} 





var adjlist = new Map();
var graphmatrix;

var NoOfVertex;

 Graph = (t) => {

  NoOfVertex = t;

  $("body").append (`<table id="distab" style ="position:absolute; transition:100ms linear; top:135px" ></table>`);

  graphmatrix = $("#distab")

  $("#distab").append("<tr>");

  $("#distab").append( `<td class="floyd" id="rw" style="background-color : rgba(255,255,255,0);">  <div id="crwdiv" style="z-index:1; text-align:center;"></div></td>`);


  for (let u =0 ; u < NoOfVertex ; u++)  {

    $("#distab").append( `<td class="floyd" id="c${(u)}" style="background-color : coral;">  <div id="c${(u)}div" style="z-index:1; text-align:center;"> <p id="c${(u)}val" style="color:black; text-align:center">Not set</p></div></td>`);

  }
  $("#distab").append("</tr>");


  for (let y = 0 ; y < NoOfVertex ; y++) {

    $("#distab").append("<tr>");
    distancemat.push([])

    var rowlabel = JSON.stringify( organized[y]);


    
    $("#distab").append( `<td class="floyd" id="r${(y)}" style="background-color : coral;">  <div id="r${(y)}div" style="z-index:1; text-align:center;"> <p id="r${(y)}val" style="color:black; text-align:center">Not set</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#distab").append( `<td class="floyd showdis" id="${(y)}${(x)}">  <div id="${(y)}${(x)}div" style="z-index:1; text-align:center;"> <p id="${(y)}${(x)}val" style="color:coral; text-align:center"></p>     <p id="${(y)}${(x)}distance" style=" margin-top:-37px; color:coral; text-align:center; opacity:0%;"></p>  </div></td>`);

     
        if (y == x ) {
            distancemat[y][y] = 0;
            $(`#${(y)}${(x)}val`).text("0")
            continue;
        }

    distancemat[y][x] = Math.min();
    $(`#${(y)}${(x)}val`).html('&#8734;')
    }

    $("#distab").append("</tr>")


vertex(vertexindex)

vertexindex = nextCharacter(vertexindex)



}

$("#distab").draggable();





 }



 function chlc(start_ , end_ ,ac)  {


mySVG.changecolor (`#${start_}` ,`#${end_}` , ac);


 }




function graphy (id1 , id2 , distance , graphtype = "default")  {

   
    mySVG.drawLine({
       left_node:'#'+id1,
        right_node:'#'+id2,
        error:true,
        width:2,
        col : "coral",
        _text : distance,
        gtype : graphtype,
     
          
      });
    
edgedata.push([])

edgedata[edgecount][0] = id1;
edgedata[edgecount][1] = id2;
edgedata[edgecount][2] = distance;
edgedata[edgecount][3] = graphtype;

++edgecount;


      let a , b;
    
      a = Number(organized[id1] )
      b = Number( organized[id2] )


     let set_to_table1 = organized[id1], set_to_table2 = organized[id2];

      adjlist.get(id1).push(id2);

      distancemat[a][b] = distance;
      
      $(`#${(set_to_table1)}${(set_to_table2)}val`).text(distance)
      
      $(`#${set_to_table1}${set_to_table2}distance`).text(`${id1}${id2}`)

      organized[`${a}${b}`] = `${id1}${id2}`


      if (graphtype != "D") {
      adjlist.get(id2).push(id1);
      distancemat[b][a] = distance;
      $(`#${(set_to_table2)}${(set_to_table1)}val`).text(distance)
      $(`#${set_to_table2}${set_to_table1}distance`).text(`${id2}${id1}`)
      organized[`${b}${a}`] = `${id2}${id1}`

      }

    
          $( '#'+id1 ).draggable({
              drag: function(event, ui){mySVG.redrawLines();}
            });
            $( '#'+id2 ).draggable({
              drag: function(event, ui){mySVG.redrawLines();}
            });
    
    
        }
    


var nu =0;


function vertex (label) {


var vertice = `<div id=${label} class="vert"> <p id=${label}name class="ver-label"> ${label}</p></div>`;

$("body").prepend(vertice)

$(`#${label}`).draggable();


adjlist.set(label , []);

organized[nu] = label;

organized[label] =nu;

$(`#r${nu}val`).text(label)
$(`#c${nu}val`).text(label)

nu++;




}


async function BreadthFirst(startingNode) { 
  
  // create a visited array
  pqueue();

  var visited = []; 
  for (var g = 0; g < NoOfVertex; g++) 
      visited[g] = false; 

  // Create an object for queue 
  var q = new Queue(); 

  // add the starting node to the queue 
  visited[startingNode] = true; 
  q.enqueue_(startingNode); 
 await qins(startingNode);
 await waitforme(800);

  // loop until queue is element 
  while (!q.isEmpty()) { 
      // get the element from the queue 
      var getQueueElement = q.dequeue_(); 
      await qout();
      await waitforme(800);

      // passing the current vertex to callback funtion 
   //   console.log(getQueueElement); 
      Output(getQueueElement)
      await hilight(getQueueElement , "red" , "1000ms" , 1500) 
      await hilight(getQueueElement , defaultcolor, "600ms" , 610) 


      // get the adjacent list for current vertex 
      var get_List = adjlist.get(getQueueElement); 

      // loop through the list and add the element to the 
      // queue if it is not processed yet 
      for (var ie in get_List) { 
          var neigh = get_List[ie]; 

          if (!visited[neigh]) { 
              visited[neigh] = true; 
              q.enqueue_(neigh);
              await qins(neigh);
              await waitforme(800); 
          } 
      } 
  } 
} 

async function bfs (S)  {

    await BreadthFirst(S);
}



async function dfs(startingNode) 
{ 
  
    var visited = []; 
    for (var ic = 0; ic < NoOfVertex; ic++) 
        visited[ic] = false; 
  
 await   DFSUtil(startingNode, visited); 
} 
  
// Recursive function which process and explore 
// all the adjacent vertex of the vertex with which it is called 
async function  DFSUtil(vert, visited) 
{ 
    visited[vert] = true; 
  //  console.log(vert);
    Output(vert)
        await hilight(vert , "red" , "1000ms" , 1500) 
        await hilight(vert , defaultcolor, "600ms" , 610)  
  
    var get_neighbours = adjlist.get(vert); 
  
    for (var ix in get_neighbours) { 
        var get_elem = get_neighbours[ix]; 
        if (!visited[get_elem]) 
           await DFSUtil(get_elem, visited); 
    } 
} 


async function FloydWarshall()   {


    graphmatrix.show();

await display("Pick all vertices as transit one by one")

    for (let k = 0; k < NoOfVertex; k++)  
    {  
        // Pick all vertices as source one by one 
        await display(`Transit vertex = ${organized[k]}`) 
        await hilight(organized[k] , "red" , "2000ms" , 2400)
        

        
        for (let i = 0; i < NoOfVertex; i++)  
        {  
            // Pick all vertices as destination for the  
            // above picked source
            await display(`Source = ${organized[i]}`) 

         
         
         
               for (let j = 0; j < NoOfVertex; j++)  
                 {  
                // If vertex k is on the shortest path from  
                // i to j, then update the value of dist[i][j] 
                await hilight(`${i}${j}` , "rgb(109,209,0,1)" , "1000ms" , 1000)
                      hilight(`${i}${j}` , defaultcolor , "1000ms" , 500) 

                if (distancemat[i][k] + distancemat[k][j] < distancemat[i][j]) { 
                distancemat[i][j] = distancemat[i][k] + distancemat[k][j];
            
                let sliceddistance1 = organized[`${i}${k}`];
                let sliceddistance2 = organized[`${k}${j}`];

                sliceddistance2 = sliceddistance2.slice(1,sliceddistance2.length)

                organized[`${i}${j}`] = sliceddistance1 + sliceddistance2;
                
                $(`#${i}${j}distance`).text(`${sliceddistance1}${sliceddistance2}`)

 
              await  display(`${organized[i]}${organized[k]} + ${organized[k]}${organized[j]} < ${organized[i]}${organized[j]},Update.`)
                       hilight(`${i}${k}` , "rgb(109,209,0,1)" , "2000ms" , 2100)
                 await hilight(`${k}${j}` , "rgb(109,209,0,1)" , "2000ms" , 2400)
               

                await hilight(`${(i)}${(j)}` , "red" , "2000ms" , 2500)
                $(`#${(i)}${(j)}val`).text(distancemat[i][j])
                await hilight(`${(i)}${(j)}` , defaultcolor , "2000ms" , 2400)



                hilight(`${i}${k}` , defaultcolor , "2000ms" , 2100)
                await hilight(`${k}${j}` , defaultcolor , "2000ms" , 2400)


                }
                
                else {
             Log(`${organized[i]}${organized[k]} + ${organized[k]}${organized[j]} > ${organized[i]}${organized[j]}, Dont change.`)

                }

            }  

         
        }
        await hilight(organized[k] , defaultcolor , "2000ms" , 2400)  
    }  
  

}


var dist =[]; 
  
var sptSet =[]; 

var prevert;


async function minDistance(dist, sptSet) 
{ 
    // Initialize min value 
    let min = Math.min() , min_index=0; 
  
    for (let v = 0; v < NoOfVertex; v++) {

        if (sptSet[v] == false){
        await hilight(`dijkastra${v}`, "rgb(109,209,0,1)" , "800ms" , 800 )
        hilight(`dijkastra${v}`, defaultcolor , "800ms" , 800 )
        }
        if (sptSet[v] == false && dist[v] <= min)  {
        
           
            
      hilight(`dijkastra${min_index}`, defaultcolor , "1200ms" , 1300 )
            min = dist[v]
            min_index = v
        await    hilight(`dijkastra${min_index}`, "blueviolet" , "1000ms" , 1000 )

    }

    }
  
    $(".dijkastracells").css({"background-color" : defaultcolor})
    return min_index; 
} 
var u;
// A utility function to print the constructed distance arra
// Function that implements Dijkstra's single source shortest path algorithm 
// for a graph represented using adjacency matrix representation 
async function Dijkstra( src) { 

    
pointerarrow.show();

    $("body").append (`<table id="dijkastratab" style ="position:absolute; transition:100ms linear; top:200px" ></table>`);

    $("#dijkastratab").append("<tr>");
    
    $("#dijkastratab").append( `<td class="floyd" id="dijkastrarw" style="background-color : rgba(0,0,0,0.5);">  <div id="dijkastracrwdiv" style="z-index:1; text-align:center;"></div></td>`);
    
    
    for (let u =0 ; u < NoOfVertex ; u++)  {
    
      $("#dijkastratab").append( `<td class="floyd" id="dijkastrac${(u)}" style="background-color : coral;">  <div id="dijkastrac${(u)}div" style="z-index:1; text-align:center;"> <p id="dijkastrac${(u)}val" style="color:black; text-align:center">${organized[u]}</p></div></td>`);
    
    }
    
    $("#dijkastratab").append("</tr>").draggable();

    $("#dijkastratab").append("<tr>");

    $("#dijkastratab").append( `<td class="floyd" id="dijkastrarow" style="background-color : coral;">  <div id="dijkastrarowdiv" style="z-index:1; text-align:center;"> <p id="dijkastrarowval" style="color:black; text-align:center">${src}</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#dijkastratab").append( `<td class="floyd dijkastracells" id="dijkastra${(x)}">  <div id="dijkastra${(x)}div" style="z-index:1; text-align:center;"> <p id="dijkastra${(x)}val" style="color:coral; text-align:center"></p>  </div></td>`);

     
        if (organized[src] == x ) {
            $(`#dijkastra${(x)}val`).text("0")
            continue;
        }

    $(`#dijkastra${(x)}val`).html('&#8734;')
    }

    $("#dijkastratab").append("</tr>");

    $("#dijkastratab").append("<tr>");


    $("#dijkastratab").append( `<td class="floyd" id="dijkastraspt" style="background-color : coral;">  <div id="dijkastrasptdiv" style="z-index:1; text-align:center;"> <p id="dijkastrasptval" style="color:black; text-align:center">Processed?</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#dijkastratab").append( `<td class="floyd dijkastracells" id="dijkastraspt${(x)}">  <div id="dijkastraspt${(x)}div" style="z-index:1; text-align:center;"> <p id="dijkastraspt${(x)}val" style="color:coral; text-align:center"></p>  </div></td>`);

    
    $(`#dijkastraspt${(x)}val`).text('false')
    }

    $("#dijkastratab").append("</tr>");


    // Initialize all distances as INFINITE and stpSet[] as false 
    for (let i = 0; i < NoOfVertex; i++) 
        dist[i] = Math.min(), sptSet[i] = false; 

    // Distance of source vertex from itself is always 0 
      dist[organized[src]] = 0; 
  
    // Find shortest path for all vertices 
    for (let count = 0; count < NoOfVertex ; count++) { 
         
        await display(`Pick the minimum distance vertex from the set of vertices not yet processed.`)
         
      
         u = await minDistance(dist, sptSet); 


            pointerarrow.offset({top : ($("#"+organized[u]).offset().top) , left : ($("#"+organized[u]).offset().left-50)} )
       
      
        await hilight(`dijkastrac${(u)}` , "rgb(109,209,0,1)" , "1200ms" , 1300 )
  
        await display(` Mark the picked vertex as processed`)
        sptSet[u] = true;
        await hilight(`dijkastraspt${(u)}` , "rgb(109,209,0,1)" , "1200ms" , 1300 )
              hilight(`dijkastraspt${(u)}` , defaultcolor , "1200ms" , 1300 )
        $(`#dijkastraspt${(u)}val`).text('true') 
  
        await display(` Update dist value of the adjacent vertices of the picked vertex.`)

        for (let v = 0; v < NoOfVertex; v++) {

             hilight( organized[v] , "rgb(109,209,0,1)" , "1200ms" , 1300 )
              
            await display(`Current picked Vertex ${organized[v]}`)

           let gval = distancemat[u][v];
           if (distancemat[u][v] == Math.min()) gval =0;
          
            if (!sptSet[v] && gval && dist[u] != Math.min() && dist[u] + gval < dist[v])  {
                dist[v] = dist[u] + gval;

                
                await hilight(`dijkastra${v}`, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                 hilight(`dijkastra${v}`, defaultcolor , "1200ms" , 1300 )

                $(`#dijkastra${v}val`).text(dist[v]);

            }
            hilight( organized[v] , defaultcolor , "1200ms" , 1300 )
        }

        await hilight(`dijkastrac${(u)}` , "coral" , "1200ms" , 1300 )
    } 
  
} 







var parent = []; 
  
// Find set of vertex i 
async function find( in_) 
{ 
  
    while ( in_ != parent[in_])  {

       
        in_ = parent[in_]; 
    }
    return in_; 
} 
  
// Does union of i and j. It returns 
// false if i and j are already in same 
// set. 
async function union1(in_,  jn_) 
{ 
    let a = await find(in_); 
    let b = await find(jn_); 
    parent[a] = b; 
} 
  
// Finds MST using Kruskal's algorithm 
async function Kruskal() 
{ 
    let mincost = 0; // Cost of min MST. 
    await mySVG.kruskalize()
  await mySVG.redrawLines();

    // Initialize sets of disjoint sets. 
    for (let i = 0; i < NoOfVertex; i++) 
        parent[i] = i; 
  
    // Include minimum weight edges one by one 
    let edge_count = 0; 
    
    while (edge_count < NoOfVertex - 1) { 
        await display("Find the next legal smallest edge.")
        var min = Math.min(), a = -1, b = -1; 
        for (let i = 0; i < NoOfVertex; i++) { 
            for (let j = 0; j < NoOfVertex; j++) {

                if (i ==j)continue;


                if ( distancemat[i][j] < min && await find(i) == await find(j) )  {

                    await Log(`Discard ${organized[i]} <--> ${organized[j]}  edge.`);

                }

                if ( await find(i) != await find(j) && distancemat[i][j] < min) { 

                 
                   
                    min = distancemat[i][j]; 

                   if (a >-1 && b > -1) await  chlc(organized[a] , organized[b] , "rgb(0,0,0,0.11)")

                    a = i; 
                    b = j; 

                  await  chlc(organized[a] , organized[b] , "coral");

                    await display(`Next smaller unprocessed edge : <br>${organized[a]} <--> ${organized[b]}`);

                    
                } 


            } 
        } 
  
        await  union1(a, b); 

        await display(`The smallest unprocessed edge : <br>${organized[a]} <--> ${organized[b]}`)
    
    await  chlc(organized[a] , organized[b] , "blue")
      
    ++edge_count;
    } 

    await mySVG.kruskalize("coral")

    
} 









$(document).on('mouseenter' , 'td.showdis' , function(e) {


    let texttoupid = e.target.id;

$(`#${texttoupid}val`).css({"opacity" : "0%" , "transition-duration": "600ms"})

$(`#${texttoupid}distance`).css({"opacity" : "100%" , "transition-duration": "600ms"})


})

$(document).on('mouseleave' , 'td.showdis' , function(e) {


    let texttoupid = e.target.id;

$(`#${texttoupid}val`).css({ "opacity" : "100%" , "transition-duration": "600ms"})

$(`#${texttoupid}distance`).css({"opacity" : "0%" , "transition-duration": "600ms"})
    

})



$(document).on('click' , 'td.showdis' , function(e) {

    let texttoupid = e.target.id;

    let path_ =   $(`#${texttoupid}distance`).text();

    for (let i = 0 ; i < path_.length-1 ; ++i)  {


        chlc (path_.charAt(i) , path_.charAt(i+1)  ,"black")
    }
 



})




clicktimes = 0


$(document).on("click","div.vert" , function (e)  {


      
    if (clicktimes === 0) {


        if ($(e.target).parent("div.vert").length) {

            

            first=  $("#"+e.target.id).parent().attr("id");

           
        }

    else  first=  e.target.id;

    clicktimes = 1;
    $("#graphinput").css({"visibility" : " hidden"})

    }

    else if (clicktimes === 1) {

        if ($(e.target).parent("div.vert").length) {
        
            second =  $(e.target).parent().attr("id");

        }


        else  second=  e.target.id;

let mousex = e.clientX;
let mousey = e.clientY;

$("#graphinput").css({ "top" :`${mousey}px`, "left" :`${mousex}px`  , "visibility" : "visible"})

//graphy(first,second,0)



clicktimes = 0;

    }

  })


  $("#graphinput").change( function()  {

let weight = Number( $("#graphinput").val())

$("#graphinput").css({"visibility" : " hidden"})

$("#graphinput").val("")

    graphy(first,second,weight ,direction)

    Log(`Add edge ${first}${second}`)


  })

  $("#undirected_ ").on("mouseenter" , function() {

    $("#undirected_").css({"left":"250px", "transition-duration" : "300ms"})


  })

  $("#undirected_").on("mouseleave" , function() {

    $("#undirected_").css({"left":"0px", "transition-duration" : "300ms"})


  })


  $("#directed_ ").on("mouseenter" , function() {

    $("#directed_").css({"left":"250px", "transition-duration" : "300ms"})


  })

  $("#directed_").on("mouseleave" , function() {

    $("#directed_").css({"left":"0px", "transition-duration" : "300ms"})


  })





  // click events



  $("#undirected_ ").on("click" , function() {

    $("#undirected_").css({"background-color" : "rgba(255,0,0,.5)", "transition-duration" : "300ms"})

    $("#directed_").css({"background-color" : "rgba(0,0,0,.5)", "transition-duration" : "300ms"})

    direction = "-UD-"

  })

  $("#directed_ ").on("click" , function() {

    $("#directed_").css({"background-color" : "rgba(0,0,255,.5)", "transition-duration" : "300ms"})

    $("#undirected_").css({"background-color" : "rgba(0,0,0,.5)", "transition-duration" : "300ms"})

    direction = "D"
  })



  var servertime = 0;



  var serv;
  $(document).ajaxStart(  function()  {

    $("body").append(`<img style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%) ;z-index: 20; height:40%;" id="loaderx" src="loader-3.gif">`)

   

    
    })

    
    $(document).ajaxComplete(function(){

    $("#loaderx").remove();

   });
  

 var graphdata;

 async function importgraph(name,pass)  {

   let gname = `${name}.json`;

  


   $.post("https://graphicalstructure.000webhostapp.com/loadprocess.php" , {filesig : name , oop : pass} , function(res,stat)  {

if (res == "FAILED") {
 display ("Password not correct.Try Again.");
 return;
}


     graphdata = JSON.parse(res);



  

   NoOfVertex= graphdata["Nodes"];

   Graph(NoOfVertex);

   Log(`Graph(${NoOfVertex})`)

   graphmatrix.hide();

   for (let ver = 0 ; ver < NoOfVertex ; ++ver)  {

   let tt = graphdata[organized[ver]]["top"];
   let ll = graphdata[organized[ver]]["left"];

   let ff = $("#"+organized[ver])

   ff.offset({top:tt , left :ll})


   }


   
   let edgeinfo = graphdata["Edge"];
   let noofedge = edgeinfo.length;

   for (let ed = 0 ; ed < noofedge ; ++ed)  {

       
       graphy(edgeinfo[ed][0] ,edgeinfo[ed][1] ,edgeinfo[ed][2] ,edgeinfo[ed][3] );

       Log(`Add edge ${edgeinfo[ed][0]}${edgeinfo[ed][1]}`)
   
   
       }

     })


}


function exportgraph(name , pass) {

   let posar ={};
let el_pos = {};



el_pos["Nodes"] = NoOfVertex;

el_pos["encryption"] = pass;

   for ( let sig = 0 ; sig < NoOfVertex ; sig = sig +1) {
   
   
     t = $("#"+organized[sig]).offset().top
     l = $("#"+organized[sig]).offset().left
     
       posar['top'] = t;
       posar['left'] = l;
   
       el_pos[organized[sig]] = posar
   
       posar = {}
   
}

el_pos["Edge"] = edgedata;

   
   var jsonstring = JSON.stringify(el_pos ,null , 4)
   

   $.post("https://graphicalstructure.000webhostapp.com/process.php" , {filesig : name , content : jsonstring} , function(res)  {


     display(res)



   })
  



   
   }



// Stack

/*
var $ = jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')
require('jquery-ui-dist/jquery.connectingLine')

var {dialog} = require('electron').remote
*/

var el = 0;
var count_stack = 1;
var stack_top = 0;
var max = 0;
var table = 0;
var elements = [];


function isEmpty(){
  return stack_top == 0;
}



    
async function push(typed){

  return new Promise(async resolve => {

      if (stack_top == max){
        return;
      }
      

       elements.push(typed);
       var ms = max-stack_top

      var prom = await anim(typed,ms);
      $("#feed").fadeIn().text(prom)
      
        $("#"+(table+stack_top)).replaceWith('<span id = "'+ (table+stack_top) +'" class ="trans" style = "font-size : 150%">' +  elements[stack_top] + '</span>');
      //alert(elements.length);
      $("#kaydeefir").replaceWith('<p id = "kaydeefir" style="margin-top: -40px;"></p>')
      $("#output-screen").append('<li class="outstyle"> push'+ typed +'/</li>')
      /*
      $(document).ready(function(){
        $("#"+(table+stack_top-1)).ready(function(){
          $("#"+(table+stack_top-1)).css("font-size","150%");
        });
      });
      */
      
      //alert(typed);
      stack_top += 1;
      t_stack_top = stack_top
      resolve("push resolved");

    });

    }
    


async function anim(elem,val){

  return new Promise(resolve => {
$("#kaydeefir").replaceWith('<p id = "kaydeefir" style="margin-top: -40px;">'+elem +'</p>')


$("#feed").fadeIn().text(65*(val-1)+20)

  $("#kaydeefir").animate({
    "margin-top" : (65*(val-1)+20)+"px",
    "color" : "white"
    
    },2000,function() {
   
   resolve('resolved')
  });
  
  });

}




function animpop(elem,val){

  return new Promise(resolve =>{ 
  $("#kaydeefir").replaceWith('<p id = "kaydeefir" style="margin-top: '+(65*(max-val-1)+20)+'px; color : white;">'+elem +'</p>')
  
  
  $("#feed").fadeIn().text(max-val-1)
  
    $("#kaydeefir").animate({
      "margin-top" : "-40px",
      "color" : "black"
      
      },2000,function(){
        $("#kaydeefir").replaceWith('<p id = "kaydeefir" style="margin-top: -40px"></p>');
        resolve("resoved");
      });
    
      
    });
  }









async function reverse(){


  


 if (!isEmpty()){
  console.log("tes");
  var temp = await pop();
  
  console.log(temp)
   reverse();
   insertAtBottom(temp);
   

 }
 else{
   return;
 }
  
  
}
async function insertAtBottom(param){
  if(isEmpty()){
    await push(param);
    
  }
  else{
    var t_mp = await pop();
    
    insertAtBottom(param);
    alert(t_mp);
    await push(t_mp);
    
  }
}

var popped;

   async function pop(){
      
      return new Promise(async resolve => {
  if (stack_top == 0){
    return;
  }
  
  stack_top -= 1;
  popped = $('#'+(table+stack_top)).text()

  //Output(popped );
  //$("#feed").fadeIn().text(stack_top)
  
  var ret = $("#"+(table+stack_top)).text();
  $("#"+(table+stack_top)).replaceWith('<span id = "'+ (table+stack_top) +'" class ="trans"></span>');
  await animpop(ret,stack_top);

 
  //await?
  elements.pop()
   //alert(stack_top);
//document.getElementById("0").innerHTML += '<td class = "stack" id = "0" style = "color : white; vertical-align: stack_top; border-bottom-left-radius : 0px;border-bottom-right-radius : 0px;">' + typed + '</td>';



resolve(ret);
//alert(typed);


})



}
var t_stack_top = 0

function straverse(){
  if(t_stack_top == 0){
    t_stack_top = stack_top
    
    return
  }
  
  //alert(table+t_stack_top)
  $("#output-screen").append('<li class="outstyle">trav</li>')
  $("#kd"+(table+t_stack_top-1)).animate({"background-color" :"red" },2000 , function ()  {
    $("#kd"+(table+t_stack_top-1)).animate({"background-color" :"rgba(26, 25, 25, 0.842)"  },2000 , function()  {
      
      
      $("#feed").fadeIn().text($("#kd"+(table+t_stack_top-1)).text())
      t_stack_top -= 1;
      straverse();
    })
  })

  

}


function empty(typed){

i = 100*typed

for(j=0;j<$("#tb"+typed+" tr").length;j++){

  $("#"+(i+j)).replaceWith('<span id = "'+ (i+j) +'" class ="trans"></span>');



}
stack_top = 0
}


function extend_s(typed,typed_2){
  j = 100*typed
  $("#tb"+typed).ready(function(){
    $("tr:nth-child("+(typed_2+1)+") td").css("border-radius","0px");
  });
  var ext = ""

  for(i=0; i<typed_2; i++){

    ext = '<tr><td class = "kaydee"  style = "color : white; border-radius : 0px;"><span id = "'+(j+$("#tb"+typed+ " tr").length)+'"></span></td></tr>';
    $("#tb"+typed).prepend(ext)
  }
  $("#tb"+typed).ready(function(){
    $("tr:first td").css("border-top-left-radius","10px");
    $("tr:first td").css("border-top-right-radius","10px");
    });
  

  max = max + typed_2
}



function peekstack(){

  let poss= stack_top -1;
  let pp = $('#'+(table+poss)).text();
  return  pp;
}





    function stack(typed) {




        max = typed
        table += 100



      var stack = '<div style="position : absolute; margin-top: 200px; z-index:1; transition-duration : 100ms; width:500px;" id="tab'+count_stack+'"  class="stack"> <p id = "kaydeefir" style="margin-top: -40px;  " ></p>';

      stack += '<table class = "stack"  id="tb'+count_stack+'" style="border-collapse: collapse;  transition-duration : 100ms;">'

            if(typed > 20){
                typed = 20;
            }
for(i=0; i<typed; i++){
    
    stack += '<tr>';
        if(i==0){
            stack += '<td class = "kaydee" id = "kd'+(table+typed-1)+'"  style = "color : white;  border-bottom-left-radius : 0px;border-bottom-right-radius : 0px;"><span id = "'+(table+typed-1)+'"></span></td>';
        }
        else if(i == typed-1){
            stack += '<td class = "kaydee" id = "kd'+table+'"  style = "color : white;  border-top-left-radius : 0px;border-top-right-radius : 0px;"><span id = "'+table+'"></span></td>';

        }
        else{
            stack += '<td class = "kaydee" id = "kd'+(table + typed - i - 1)+'" style = "color : white;border-radius : 0px;"><span id = "'+(table + typed - i - 1)+'"></span></td>';
        }

    
    stack += '</tr>';
}

stack += "</table></div>"

$('body').prepend(stack);







      //$(".area").prepend(stack)
      $("#tab"+count_stack).draggable();

      

      divbyelement[typed] = count_stack

      count_stack = count_stack +1;

    }


  

  
    //Modded




    

function createleaves(nnodes) {
  let  i;

  for ( i = 0 ; i < nnodes.length ; ++i) {
  
  
  leaf( nnodes[i])
  
  }
  
  
  counttreenodes = i;
  
  if (i > 30) {
  
      counttreenodes = 30;
  }
  
  
  }
  
  
  function createnodes(nnodes) {
  
  
      for (let i = 0 ; i < nnodes.length ; ++i) {
  
  
          addnode( nnodes[i])
          
          }
          
      
      
      
      }
      
  
   async   function traverse()  {
  
  
  
  for (var t = 0 ; t < storedarray.length ; t++) {
  
       
      await  hilight("aitem"+(t) , "rgb(109,209,0,1)" , "500ms",700)
      hilight("aitem"+(t) , defaultcolor , "500ms" , 700)
      Output(storedarray[t])
  
  }
  
  
  
      }
  
  
      async   function search(item)  {
  
  
  
          for (var t = 0 ; t < storedarray.length ; t++) {
          
              if  (item == storedarray[t]) {
  
                  await  hilight("aitem"+(t) , "rgb(255,0,0,1)" , "6000ms",6500)
                  Output("Found at index " + t)
                  break;
              }
  
              await  hilight("aitem"+(t) , "rgb(109,209,0,1)" , "500ms",700)
              hilight("aitem"+(t) , defaultcolor , "500ms" , 700)
            
          
          }
          
          
          
              }
    





// Post fix





class Stack { 
  
  // Array is used to implement stack 
  constructor() 
  { 
      this.items = []; 
  } 

  // Functions to be implemented 
  // push function 
push(element) 
{ 
  // push element into the items 
  this.items.push(element); 
} 


pop() 
{ 
  // return top most element in the stack 
  // and removes it from the stack 
  // Underflow if stack is empty 
  if (this.items.length == 0) 
      return "Underflow"; 
  return this.items.pop(); 
} 




top() 
{ 
  // return the top most element from the stack 
  // but does'nt delete it. 
  return this.items[this.items.length - 1]; 
} 


isEmpty() 
{ 
  // return true if stack is empty 
  return this.items.length == 0; 
} 








} 





function pstack () {



$("body").append(`<div id="poststack" style="position:absolute;top:250px;left:100px;min-width:100%;"><p style="display:inline-block; margin-right:50px; font-size:150%;">Stack -></p></div>`)


$("#poststack").draggable()

}

var stackelement=0;


async function pins (symbol) {


  if (stats == 1  ) await pauser();

return new Promise( resolve => {
  

  
  $("#poststack").append(`<div id="ps${stackelement}" class="PSTACK postfixcss"><p style="position:relative;">${symbol}</p></div>`)
  
  $(`#ps${stackelement}`).animate({"opacity" : "100%"} ,500 , ()=> {

stackelement++;
resolve('');

  })




})
}

async function pout()  {

  if (stats == 1  ) await pauser();
return new Promise( resolve => {
  
--stackelement;

$(`#ps${stackelement}`).animate({left : "+=300" , opacity: "0%"},700, ()=> {

$(`#ps${stackelement}`).remove();

resolve('')

})

})

}


function finalexp()  {


  $("body").append(`<div id="expression" style="backdrop-filter:blur(7px);position:absolute;top:450px;left:100px;min-width:100%;height:60px;border-radius:4px; background-color:rgba(0,0,0,.7);"><p id="exptext" style="font-size:200%;position:absolute; top:-20px;left:8px;letter-spacing:15px;font-family:consolas;color:white;"></p></div>`)


  $("#expression").draggable();

  
}

function prec( c) 
{ 
  if(c == '^') 
  return 3; 
  else if(c == '*' || c == '/') 
  return 2; 
  else if(c == '+' || c == '-') 
  return 1; 
  else
  return -1; 
} 

// The main function to convert infix expression 
//to postfix expression 
async function infixToPostfix(s) 
{ 

  let Expressive =$("#exptext");
  var st = new Stack()
  st.push('N'); 
  await display("add parenthesis at both end");
  s = "("+s+")"
  let l = s.length; 
  let ns=""; 
  for(let i = 0; i < l; i++) 
  { 

      await display("Symbol : " + s.charAt(i) ,1000,1000);
      // If the scanned character is an operand, add it to output string. 
      if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z')||(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')){ 
          
          ns+=s.charAt(i); 
  
          $(Expressive).append(s.charAt(i))
         


      }

      // If the scanned character is an ‘(‘, push it to the stack. 
      else if(s.charAt(i) == '(') {
      st.push('('); 
     await pins("(")
      

      }
        
      // If the scanned character is an ‘)’, pop and to output string from the stack 
      // until an ‘(‘ is encountered. 
      else if(s.charAt(i) == ')') 
      { 
          await display("Pop untill '(' or !stack.empty() " ,1000,1000);
          while(st.top() != 'N' && st.top() != '(') 
          { 
              let c = st.top(); 
              st.pop(); 
              await pout();

           await new Promise(resolve => {

setTimeout(()=> {

  resolve('')

},500)


           })

             ns += c; 
             $(Expressive).append(c)

             await new Promise(resolve => {

              setTimeout(()=> {
             
                 resolve('')
             
              },500)
             
             
                          })
          } 

          if(st.top() == '(') 
          { 
             
              let c = st.top(); 
              st.pop(); 
              await   pout();

              await new Promise(resolve => {

                  setTimeout(()=> {
                 
                     resolve('')
                 
                  },500)
                 
                 
                              })
          } 
      } 
        
      //If an operator is scanned 
      else{ 
          while(st.top() != 'N' && prec(s.charAt(i)) <= prec(st.top())) 
          { 
              let c = st.top(); 
              st.pop(); 
              await  pout();

              await new Promise(resolve => {

                  setTimeout(()=> {
                 
                     resolve('')
                 
                  },500)
                 
                 
                              })
              
              ns += c; 
              $(Expressive).append(c)

              await new Promise(resolve => {

                  setTimeout(()=> {
                 
                     resolve('')
                 
                  },500)
                 
                 
                              })
          } 
          st.push(s.charAt(i));
          await  pins(s.charAt(i)) 
      } 

  } 

    

  Output(ns);

} 



function postfix(exp) {

pstack();
finalexp();
infixToPostfix(exp)

}


