
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



//$(".autohide").hide();

var infoclick = 0;

$(".autohide").hide();

$("#infotab").on("mouseenter" , function() {

    $("#infos").css({"left":"250px", "transition-duration" : "300ms"})


  })


  $("#infotab").on("mouseleave" , function() {

    $("#infos").css({"left":"0px", "transition-duration" : "300ms"})


  })





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
      $("#infotab").css({top:"40%"});
      $("#listofcommand").hide();
    },100)



    infoclick = 0;


  }


  })


  $(document).on("click" , "p.acchead" , function(e) {


    let dsname = "#"+e.target.id+ "data";

  
    if ($(dsname).is(":hidden") == true)  {

      $(dsname).show();


    }

    else {

      $(dsname).hide();

    }




  })


 async function movett(r,a,b){
   
  $("#"+r).css({"top":`${a}px` , left : `${b}px` ,"transition-duration" : "300ms"})


await new Promise(resolve => {
setTimeout(()=> {

 mySVG.redrawLines();
 resolve('')

},350)
  
})
   
    

  }




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
    
