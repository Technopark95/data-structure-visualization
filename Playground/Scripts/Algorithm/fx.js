
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
var next = { }
var prev = { }
var tree = { }
var parent = {}

var divbyelement = { }

//var variables ={}

//var sequence =[]

//var mapping = { "0" : "print(value)" ,  "1" : "preorder(left)" , "2" : "preorder(right)" , "3" : "return"}
//variables['head'] = 0
//variables['root'] = 0

//var head = variables['head']

//var CurrentNode = variables['root']

var steps = {}
var newnode;
var drawflag = false;


var value="";
var log = $("#log1")
var output = $("#out1")

$('body').append(`<img id="pointerarrow" src="pointer.png" style="height: 70px; width: 70px; position: absolute; top: 135px;transition-duration:500ms;">`)
var pointerarrow = $("#pointerarrow")
pointerarrow.hide();

$("#log1").append('<p style="font-size:x-large; margin-top:-5px;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+ "Happenings.." +'</p>')


$("body").append(`<p id="iindex" style="position:absolute; transition-duration : 500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">i</p>`)
$("body").append(`<p id="jindex" style="position:absolute; transition-duration  :500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">j</p>`)
$("body").append(`<p id="kindex" style="position:absolute; transition-duration  :500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">k</p>`)

$("#iindex").hide()
$("#jindex").hide()
$("#kindex").hide()

var speed =0; 

var mySVG = $('body').connect();

var pausebtn = document.getElementById("pa");
var playbtn = document.getElementById("pl");


function waitforme(ms) {

  return new Promise( resolve =>  {
  
  setTimeout(()=>{ resolve('')},ms)
  
  })
  
  }
  


function del (one ,two)  {

  mySVG.dl(one , two)
          
}




var slider = document.getElementById("animation-speed");
var slowsymbol = document.getElementById("slowiden");
var fastsymbol = document.getElementById("fastiden");

speed = 2010- 2000*(slider.value/100);


slider.oninput = function() {

  speed = 2020- 2000*(this.value/100);

  fastsymbol.style.opacity = this.value+"%"
  slowsymbol.style.opacity = (100 - this.value)+"%"

}
     

function pauser ()  {



  return new Promise( resolve => {


    let playbuttonclick  = function  ()   {

      pausebtn.style.filter = "blur(0px)";
      playbtn.style.filter = "blur(5px)";
    
      playbtn.removeEventListener("click",playbuttonclick);
    
    stats = 0 ;
    resolve("reolved");
    
    }

              
playbtn.addEventListener("click",playbuttonclick)


    
    })


}

pausebtn.addEventListener("click",function()  {

  stats =1;

  pausebtn.style.filter = "blur(5px)";
  playbtn.style.filter = "blur(0px)";
  

})



var defaultcolor = "rgba(0,0,0,0.842)";

async function hilight (acc , color="rgb(0,0,0,0.842)" , duration = "4000ms" , timeout = 4100) {

  let coloring = document.getElementById(acc);

  coloring.style.backgroundColor = color;
  coloring.style.transition = speed+"ms linear";

  if (stats == 1  ) await pauser();

  await waitforme(speed+80);


}





function normalize()  {


$(".dragg,.arrayd").css({"background-color" : "rgb(0,0,0,0.842)" , "transition-duration" : "500ms"})

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





function open(link)  {


  window.location.replace(link);


}



async function executejs(scriptname)  {

  
$.getScript(scriptname)

await display("Script Loaded.")

}


var codehere = document.getElementById("codetype") ;

codehere.addEventListener("keypress" , async function(e)  {

  
  if (e.which == 13) {

    codehere.setAttribute("disabled","disabled");
  
    document.body.insertAdjacentHTML("beforeend" , `<img id = "animationplay" src="813.gif"  style= "position:fixed; right:300px;bottom: 50px;width: 50px;z-index:-1"/>`)

    command = codehere.value;

    document.getElementById("log1").insertAdjacentHTML("beforeend",'<p style="font-size:large;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+command+'</p>')

    logscreen.scrollTop = logscreen.scrollHeight;
    
    await eval(command)
  
    codehere.removeAttribute("disabled");
    
    document.getElementById("animationplay").remove();
    
  }



})



