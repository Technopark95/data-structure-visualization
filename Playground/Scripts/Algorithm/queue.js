
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

var queue_count =1




   
    //var top = 0
    var max = 0
    var table = 0
    var elements = []
    var head = 0
    var tail = 0

async function enqueue(typed){
  
      if (tail == max && !circular_queue){
        return;
      }
      if(circular_queue){
        tail = tail % max;
      }
console.log(tail,max,typed)
await q_anim(typed,tail)


       elements[tail] = typed;
//document.getElementbqyId("0").innerHTML += '<td class = "kaydee_queue" id = "0" style = "color : white; vertical-align: top; border-bottom-left-radius : 0px;border-bottom-right-radius : 0px;">' + typed + '</td>';
$("#"+(table+tail)).replaceWith('<span id = "'+ (table+tail) +'" class ="trans">' +  elements[tail] + '</span>');
//alert(tail);
/*
$(document).ready(function(){
  $("#"+(table+top-1)).ready(function(){
    $("#"+(table+top-1)).css("font-size","150%");
  });
});
*/

//alert(typed);
tail += 1;

    }











  async function dequeue(){
  
  if (head == tail && !circular_queue){
    return;
  }

  if(circular_queue){
    head = head % max

  }
   //alert(top);

   //document.getElementbqyId("0").innerHTML += '<td class = "dragg" id = "0" style = "color : white; vertical-align: top; border-bottom-left-radius : 0px;border-bottom-right-radius : 0px;">' + typed + '</td>';
  var eleme = $("#"+(table+head)).text()
   
$("#"+(table+head)).replaceWith('<span id = "'+ (table+head) +'" class ="trans"></span>');
await dq_anim(eleme,head)
elements[head] = 0;
$(document).ready(function(){
$("#"+(table+top)).ready(function(){
$("#"+(table+top)).animate({bottom: "20px"});
});
});
//alert(typed);
head += 1;
}


function empty(typed){

i = 100*typed
//alert($("#tbq"+typed+" tr").length);
for(j=0;j<$("#tbq"+typed+" td").length;j++){
  alert($("#tbq"+typed+" td").length);

  $("#"+(i+j)).replaceWith('<span id = "'+ (i+j) +'" class ="trans"></span>');



}
head = 0
tail = 0
}

circular_queue = false;

function circularQueue(bool){
    if (bool == 1){
        circular_queue = true;

    }
    else{
        circular_queue = false;
    }

} 



function extend(typed,typed_2){
  j = 100*typed
  max = max + typed_2
  $("#tr"+typed).ready(function(){
    $("td:nth-child("+(max-typed_2)+")").css("border-radius","0px");
  });
  var ext = ""

  for(i=0; i<typed_2; i++){

    ext = '<td class = "kaydee_queue"  style = "color : black; border-radius : 0px;"><span id = "'+(j+$("#tr"+typed+ " td").length)+'"></span></td>';
    $("#tr"+typed).append(ext)
    elements.push(0);
  }
  $("#tr"+typed).ready(function(){
    $("td:last").css("border-top-right-radius","10px");
    $("td:last").css("border-bottom-right-radius","10px");
    });



  
}


async function q_anim(elem,val){

  return new Promise(resolve => {
$("#kaydeefirq").replaceWith('<p id = "kaydeefirq" style = "margin-left: '+(max*100+40)+'px;">'+elem +'</p>')


//$("#feed").fadeIn().text(65*(val-1)+20)

  $("#kaydeefirq").animate({
    "margin-left" : (100*(val)+40)+"px",
    "color" : "black"
    
    },2000,function() {
      $("#kaydeefirq").replaceWith('<p id = "kaydeefirq" style = "margin-left: '+(max*100+40)+'px;">.</p>')
   resolve('resolved')
  });
  
  });

}


async function dq_anim(elem,val){

  return new Promise(resolve => {
$("#kaydeefirq").replaceWith('<p id = "kaydeefirq" style = "margin-left: '+(val*100+40)+'px; color : black;">'+elem +'</p>')


//$("#feed").fadeIn().text(65*(val-1)+20)

  $("#kaydeefirq").animate({
    "margin-left" : "-40px",
    "color" : "white"
    
    },2000,function() {
      $("#kaydeefirq").replaceWith('<p id = "kaydeefirq" style = "margin-left: '+(max*100+40)+'px;">.</p>')
   resolve('resolved')
  });
  
  });

}






    function queue(typed) {




        max = typed;
        table += 100
        



      //var stack = '<div id="'+queue_count+'"  class="dragg"> <p  style="position:absolute; " id="'+ queue_count+"bottom" +'">'+queue_count +'</p>    <p  id="'+ queue_count+"id" +'" class="t">'+typed+'</p>   </div>';
      var queue = "<div id = 'kdqdiv' style='position : absolute; margin-top: 200px; z-index:1;display: inline-block; transition-duration:100ms;'>"

      queue += '<table id="tbq'+queue_count+'" style="border-collapse: collapse; margin-top: 200px;float:left;">'
        
            if(typed > 20){
                typed = 20;
            }

            queue += '<tr id="tr'+queue_count+'">';
for(i=0; i<typed; i++){
    
    
        if(i==0){
            queue += '<td class = "kaydee_queue"  style = "color : white;  border-top-right-radius : 0px;border-bottom-right-radius : 0px;"><span id = "'+table+'"></span></td>';
        }
        else if(i == typed-1){
            queue += '<td class = "kaydee_queue"  style = "color : white;  border-bottom-left-radius : 0px;border-top-left-radius : 0px;"><span id = "'+(table+typed-1)+'"></span></td>';

        }
        else{
            queue += '<td class = "kaydee_queue" style = "color : white;border-radius : 0px;"><span id = "'+(table + i)+'"></span></td>';
        }

    elements.push(0);
    
}
queue += '</tr>';
queue += '</table><p id = "kaydeefirq" style = "margin-left: 340px;"></p></div>';

$('body').append(queue);







      //$(".area").prepend(stack)
      $("#kdqdiv").draggable();

      

      divbyelement[typed] = queue_count

      queue_count = queue_count +1;

    }


   






