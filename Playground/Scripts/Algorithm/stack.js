
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


  