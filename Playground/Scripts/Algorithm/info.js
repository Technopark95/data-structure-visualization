
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
      $("#infotab").css({top:"53%"});
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
    
