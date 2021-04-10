
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

/*
var isMobile = /iPhone|Android/i.test(navigator.userAgent);
		var element = document.getElementById('text');
		if (isMobile) {
      window.location.replace("../check.html");
		}
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
var redrawevent; 
var placeholdermessage;
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




var log = document.getElementById("log1")
var output = document.getElementById("out1")
var logscreen = document.getElementById("log1");
var outputscreen = document.getElementById("out1");

var codehere = document.getElementById("codetype") ;

codehere.placeholder ="Type here & Press Enter key."

var arrowpointer = document.getElementById("infos").childNodes[1];
arrowpointer.style.transition = "200ms"

document.getElementById("infos").childNodes[0].innerText = "Code List";



document.body.insertAdjacentHTML("afterbegin",`<img id="pointerarrow" src="../pointer.png" style="height: 70px; width: 70px; position: absolute; top: 135px;transition-duration:500ms;">`)
var pointerarrow = document.getElementById("pointerarrow")
pointerarrow.style.display="none";

log.insertAdjacentHTML("afterbegin",'<p style="font-size:x-large; margin-top:-5px;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+ "Happenings.." +'</p>')


document.body.insertAdjacentHTML("afterbegin",`<p id="iindex" style="position:absolute; transition-duration : 500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">i</p>`)
document.body.insertAdjacentHTML("afterbegin",`<p id="jindex" style="position:absolute; transition-duration  :500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">j</p>`)
document.body.insertAdjacentHTML("afterbegin",`<p id="kindex" style="position:absolute; transition-duration  :500ms; top:-200px; font-size:150%; font-family:'segoe ui'; ">k</p>`)
document.body.insertAdjacentHTML("beforeend",`<img id = "skip-btn" src="../teleport_skip.png"  style= "position:fixed; right:290px;top: 240px;width: 60px; border-radius: 100%;z-index:5;"/>`)



let ipointer = document.getElementById("iindex")
let jpointer =document.getElementById("jindex")
let kpointer =document.getElementById("kindex")

ipointer.style.display = "none";
jpointer.style.display = "none";
kpointer.style.display = "none";


var speed =0; 

var mySVG = connect();

var pausebtn = document.getElementById("pause-btn");
var playbtn = document.getElementById("play-btn");
var skipbtn = document.getElementById("skip-btn");

playbtn.style.filter = "blur(5px)";


var skipper = 0;


function waitforme(ms) {

  if (skipper == 1) { speed=0; return;}

  return new Promise( resolve =>  {

  setTimeout(()=>{ resolve('')},ms)
  
  })
  
  }
  


function del (one ,two)  {

  mySVG.dl(one , two)
          
}

var ismob ;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 
  // document.getElementById("log1").style.display = "none";
  // document.getElementById("playlabel").style.display = "none";
  // document.getElementById("pauselabel").style.display = "none";
  // document.getElementById("play-btn").style.display = "none";
  // document.getElementById("pause-btn").style.display = "none";
  // document.getElementsByClassName("slidecontainer")[0].style.width = "150px";
  // document.getElementsByClassName("slidecontainer")[0].style.right = "0";

  ismob = true;

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


  if (document.getElementById("animationplay") == null) {


    Log(`<span style="color:red;font-size:130%;">You can pause animation only while they are running.</span>`)

return
 
  }

  stats =1;

  pausebtn.style.filter = "blur(5px)";
  playbtn.style.filter = "blur(0px)";

  

})




skipbtn.addEventListener("mouseenter",function()  {

  skipbtn.style.transition = "200ms";

  skipbtn.style.transform = "rotate(360deg)";
  

})



skipbtn.addEventListener("mouseleave",function()  {


  skipbtn.style.transform = "rotate(0deg)";
  

})


skipbtn.addEventListener("click",function()  {

  if (stats == 1)  {

    Log(`<span style="color:red;font-size:130%;">Cant Skip a paused animation.</span>`)

    return

  }

if (document.getElementById("animationplay")) {

Log(`<span style="color:red;font-size:170%;">Skipping animation.</span>`)
 skipper = 1;

}

else {

  Log(`<span style="color:red;font-size:130%;">You can skip animation only while they are running.</span>`)


}


})




var defaultcolor = "rgb(40,40,40)";

async function hilight (acc , color="rgb(40,40,40)" , duration = "4000ms" , timeout = 4100) {




  let coloring = document.getElementById(acc);

  if (coloring == null) return;

  coloring.style.backgroundColor = color;
  coloring.style.transition = speed+"ms linear";

  if (stats == 1  ) await pauser();

  await waitforme(speed+80);


}




/*
function normalize()  {


$(".dragg,.arrayd").css({"background-color" : "rgb(0,0,0,0.842)" , "transition-duration" : "500ms"})

}
*/



    
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


function pqueue () {



  $("body").append(`<div id="postqueue" style="position:absolute;bottom:100px;left:${document.documentElement.scrollLeft+100}px;min-width:100%;"><p style=" font-size:150%;position:absolute;top:-80px;">Queue</p></div>`)
  
  
  $("#postqueue").draggable()
  
  }


  var queuefront=200;
  var queuerear = 200;


async function qins (symbol) {

  if (stats == 1  ) await pauser();

return new Promise( resolve => {
  

  
  $("#postqueue").prepend(`<div id="pq${queuerear}" class="PSTACK postfixcss"><p style="position:relative;">${symbol}</p></div>`);

  $(`#pq${queuerear}`).animate({"opacity" : "100%"} ,speed , ()=> {

      queuerear--;
resolve('');

  })




})
}


async function qout()  {

  if (stats == 1  ) await pauser();
  return new Promise( resolve => {
      
  
  
  $(`#pq${queuefront}`).animate({left : "+=300" , opacity: "0%"},speed, ()=> {
  
      let y = $(`#pq${queuefront}`).text();
  $(`#pq${queuefront}`).remove();


  --queuefront;

  resolve('')
return y;

  
  })
  
  })
  
  }




  
 

var clicktimes =0 , first="" , second=""

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

length () {

  return this.items.length;
}


clear () {

  this.items = [];
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



$("body").append(`<div id="poststack" style="position:absolute;top:250px;left:${document.documentElement.scrollLeft+100}px;min-width:100%;"><p style="display:inline-block; margin-right:50px; font-size:150%;">Stack -></p></div>`)


$("#poststack").draggable()

}



var stackelement=0;


async function pins (symbol) {

  if (stats == 1  ) await pauser();

  
  $("#poststack").append(`<div id="ps${stackelement}" class="PSTACK postfixcss"><p style="position:relative;">${symbol}</p></div>`)
  
    document.getElementById(`ps${stackelement}`).style.opacity = `0%` 
await waitforme(speed);
document.getElementById(`ps${stackelement}`).style.transition = `${speed}ms linear`;
document.getElementById(`ps${stackelement}`).style.opacity = `100%`

stackelement++;

await waitforme(speed);


}

async function pout()  {

  if (stats == 1  ) await pauser();

--stackelement;

document.getElementById(`ps${stackelement}`).style.opacity = `0%`
await waitforme(speed);
$(`#ps${stackelement}`).remove();


await waitforme(speed);



}



function open(link)  {


  window.location.replace(link);


}



async function executejs(scriptname)  {


  let newscript = document.createElement('script');
  newscript.src = scriptname;
document.head.appendChild(newscript)

await display("Script Loaded.")

}




async function display (data , fin= 2000 , fout = 1000)  {

  Log(data);
  if (stats == 1  ) await pauser();


}



function Log (data)  {

  if (skipper == 1) return;

$("#log1").append('<p class="uncaps" style="font-size:65%;color:black;font-family:Segoe UI;">'+data+'</p>')


logscreen.scrollTop = logscreen.scrollHeight;

}



function Output (data)  {

$("#log1").append('<br><p style="font-size:large; margin-top:-5px;  color:rgb(0,0,255, 0.7);font-family:consolas;">'+ data +'</p>')                                                                               

logscreen.scrollTop = logscreen.scrollHeight;



}




function treefy(first,second ,color_ = "coral" , _t ="") {


  mySVG.drawLine({
    left_node:first,
    right_node:second+'treetop',
    error:true,
    col : color_,
    _text : _t,
    width:2,
      
  });

//   var par = $("#"+first).parent().attr("id");
  let par;
  
  if (document.getElementById(first) != null){
    par = document.getElementById(first).parentNode.id
  }


  tree[first] = second ;
  parent[second] = par;


      $( '#'+par ).draggable({
          drag: function(event, ui){
            
            
            mySVG.redrawLines();

           // mySVG.Splaylines();
          
          }
        });
        $( '#'+second ).draggable({
          drag: function(event, ui){mySVG.redrawLines();
          }
        });



        

      }


      
async function redraw  ()  {

			_ctx.clearRect(0, 0,  10000, 4300);

				for (let li = 0 ; li < _lines.length ;li++) {
				
            try {
            
            
              
          if ( _lines[li].left_node == undefined || _lines[li].left_node == "null" || _lines[li].right_node == undefined || _lines[li].right_node == "null"  ) {
            return;
          }
                //To decide colour of the line
              
                    _color = _lines[li].col || "coral";
                    
                    _ctx.font = "30px Segoe UI";
      
                    _dash = [0,0];
          
                   _left_node = document.getElementById(_lines[li].left_node);
                   _right_node = document.getElementById(_lines[li].right_node);
      
      
                   clientrectleft = _left_node.getBoundingClientRect();
                   clientrectright = _right_node.getBoundingClientRect();
                   leftnodeoffsetx = clientrectleft.left +document.documentElement.scrollLeft;
                   leftnodeoffsety = clientrectleft.top +document.documentElement.scrollTop;
                   rightnodeoffsetx = clientrectright.left +document.documentElement.scrollLeft;
                   rightnodeoffsety = clientrectright.top +document.documentElement.scrollTop;
      
                   dax = (rightnodeoffsetx+ _right_node.offsetHeight/2) - (leftnodeoffsetx+ _left_node.offsetWidth/2);
                   day = (rightnodeoffsety+ _right_node.offsetHeight/2) - (leftnodeoffsety+ _left_node.offsetHeight/2);
                   dangle = Math.atan2(day ,dax);
      
                   rightx = (_right_node.offsetWidth/2) * Math.cos(135+dangle) + (rightnodeoffsetx+ _right_node.offsetWidth/2) ;
                   righty  = (_right_node.offsetHeight/2) * Math.sin(135+dangle) + (rightnodeoffsety + (_right_node.offsetHeight / 2)) ;
      
                   leftx = (_left_node.offsetWidth/2) * Math.cos(.05+dangle) + (leftnodeoffsetx+ _left_node.offsetWidth/2) ;
                   lefty  = (_left_node.offsetHeight/2) * Math.sin(.05+dangle) + (leftnodeoffsety + (_left_node.offsetHeight / 2)) ;
      
                  //Get Left point and Right Point
                  _left.x = leftx
                  _left.y = lefty
                  _right.x = rightx
                  _right.y = righty
      
                    ele1_x = _left.x;
                    ele1_y = _left.y;
                    ele2_x = _right.x;
                    ele2_y = _right.y;
      
                    if (_lines[li]._text == undefined) {
                      _lines[li]._text = ""
                    }
      
                    _ctx.beginPath();
                  
                  _ctx.moveTo(_left.x, _left.y );
                
                  _ctx.lineTo((_right.x), (_right.y));
                  
                  _ctx.lineWidth = _lines[li].width || 2;
                  _ctx.strokeStyle = _color;
      
                  _ctx.stroke();
      
                  
      f = 0;
      
                  _ctx.font = "20px Segoe ui";
                  _ctx.fillText(_lines[li]._text,(_right.x +_left.x)/2 ,( _right.y + _left.y)/2);
      
              
      
              
      
                //_lines[li].resize = _lines[li].resize || false;
              
            } catch (err) {
              if (_error) alert('Mandatory Fields are missing or incorrect');
            }
          
	
				  }
  
 redrawevent= requestAnimationFrame(redraw)
 
 }
 


 Object.defineProperty(window, 'value', {
  get: function() {
    Log(`You are using random value<br>To define specific value then edit the arguement.`)
    return Math.ceil(Math.random() * 1000)}
  })






codehere.addEventListener("keypress" , async function(e)  {

  
  if (e.key == "Enter") {

    codehere.setAttribute("disabled","disabled");

    
  
    document.body.insertAdjacentHTML("beforeend" , `<img id = "animationplay" src="../loader-3.gif"  style= "position:fixed; right:300px;bottom: 50px;width: 200px;z-index:-1"/>`)

    command = codehere.value;


    logscreen.scrollTop = logscreen.scrollHeight;
    

    try {
      document.getElementById("log1").insertAdjacentHTML("beforeend",'<p style="font-size:large;  color:rgb(255,0,0, 0.7);font-family:Segoe UI;">'+command+'</p>')


      await eval(command)
  } 
  
  catch (err) {
      if (err instanceof SyntaxError || err instanceof ReferenceError) {

          console.log(err.message);

          
         log.removeChild(log.lastChild)

         Log("Invalid Command.<br>Please check syntax or <br><span style='font-size:120%;color:red;'>Refer code list in the left of the screen.</span>")



      }

      
  }

   
  codehere.removeAttribute("disabled");
  document.getElementById("animationplay").remove();


  if (skipper == 1) {


     
  speed = 2020-2000*(slider.value/100);
  skipper = 0;

  if (_lines.length !=0)
  mySVG.redrawLines();


  
  }
 
 
    
  }



})



Log("<span style='font-size:120%;color:coral;'>Click arrow on the left side to open Codes list.</span>")


