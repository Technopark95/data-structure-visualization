
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

var infotabelement = document.getElementById("infotab");
var commandlistelement = document.getElementById("listofcommand");


var infoclick = 0;

document.getElementById("infos").style.transition  ="300ms";

let x = document.getElementsByClassName("autohide");
let ie;
for (ie = 0; ie < x.length; ie++) {
  x[ie].style.display = "";
}



function leaveinfotab ()  {
  document.getElementById("infos").style.transition = "300ms";
  document.getElementById("infos").style.left = "0px";
  
}

infotabelement.addEventListener("mouseenter" , () => {

    document.getElementById("infos").style.transition = "300ms";
    document.getElementById("infos").style.left = "250px";

  })



 infotabelement.addEventListener("mouseleave" , leaveinfotab)




  commandlistelement.style.display = "none";

  infotabelement.addEventListener("click" , () => {

    if (infoclick == 0 ) {
    
      let codebox = document.getElementById("codetype").style.top;
  
      infotabelement.style.top = parseInt(codebox+140)+"px";

      infotabelement.removeEventListener("mouseleave",leaveinfotab)

      arrowpointer.style.transform = "rotate(90deg)"

      commandlistelement.style.display = "";

      setTimeout(()=> {
  
  commandlistelement.style.transition= "300ms";
  commandlistelement.style.opacity= "100%";
  commandlistelement.style.zIndex= "5";
  
      },100)
      
  
      
      infoclick = 1;
  
    }



    else {



      infotabelement.addEventListener("mouseleave", leaveinfotab)

  commandlistelement.style.transition= "300ms";
  commandlistelement.style.opacity= "0%";
  commandlistelement.style.zIndex= "0";
  arrowpointer.style.transform = "rotate(0deg)"

  

      setTimeout(()=> {
        infotabelement.style.top = "40%";
        commandlistelement.style.display = "none"

      },100)
  
  

  
      infoclick = 0;
  
      
  
    }






  })




function clickondatastructure (e)   {

  let dsname = e.target.id+ "data";

  let dsnameelement = document.getElementById(dsname);

  if (dsnameelement.style.display == "none")  {
    dsnameelement.style.display = "";
  }

  else {

    dsnameelement.style.display = "none";
  }


}

let x11 = document.getElementsByClassName("acchead");

for (ie = 0; ie < x11.length; ie++) {

  x11[ie].addEventListener("click" , clickondatastructure)


}



 x11 = document.getElementsByClassName("commandcopy");

for (ie = 0; ie < x11.length; ie++) {

  x11[ie].addEventListener("mouseenter" , (e)=> {

(e.target).style.transition = '300ms';
(e.target).style.fontSize = '130%';


  })


}


for (ie = 0; ie < x11.length; ie++) {

  x11[ie].addEventListener("mouseleave" , (e)=> {

(e.target).style.border = 'none';
(e.target).style.fontSize = '100%';


  })


}




for (ie = 0; ie < x11.length; ie++) {

  x11[ie].addEventListener("click" , (e)=> {

    let com =  (e.target).innerHTML;

    document.getElementById("codetype").value= com;


  })


}


codehere.addEventListener("mouseenter" , function()  {



  infotabelement.addEventListener("mouseleave", leaveinfotab)

  commandlistelement.style.transition= "300ms";
  commandlistelement.style.opacity= "0%";
  commandlistelement.style.zIndex= "0";
  document.getElementById("infos").style.left = "0px"

  arrowpointer.style.transform = "rotate(0deg)"

      setTimeout(()=> {
        infotabelement.style.top = "40%";
        commandlistelement.style.display = "none"

      },100)

  
      infoclick = 0;
  
  })