

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

var length =0

var storedarray = []

var arr = ''

var tableobj

var tabledata ;
let tablelement;

var arrayclone,mainarray;

var  data;


data = {"0":{"top":138,"left":643},"1":{"top":247,"left":326},"2":{"top":247,"left":992},"3":{"top":406,"left":166},"4":{"top":406,"left":484.8125},"5":{"top":406,"left":815.8250122070312},"6":{"top":406,"left":1124},"7":{"top":538,"left":87},"8":{"top":538,"left":245.83750915527344},"9":{"top":541,"left":399},"10":{"top":538,"left":573},"11":{"top":538,"left":744.1124877929688},"12":{"top":538,"left":900.4125366210938},"13":{"top":538,"left":1052},"14":{"top":538,"left":1192},"15":{"top":703,"left":24},"16":{"top":805,"left":139},"17":{"top":682,"left":200},"18":{"top":804,"left":291},"19":{"top":675,"left":359},"20":{"top":808,"left":447},"21":{"top":666,"left":527},"22":{"top":803,"left":612},"23":{"top":665,"left":696},"24":{"top":799,"left":795},"25":{"top":663,"left":860},"26":{"top":792,"left":950},"27":{"top":664,"left":1009},"28":{"top":784,"left":1090},"29":{"top":666,"left":1149},"30":{"top":781,"left":1240}}

function cleareverything()  {

  ipointer.style.display = "none";
  jpointer.style.display = "none";
  kpointer.style.display = "none";

  ipointer.style.display = "none";
  jpointer.style.display = "none";
  kpointer.style.display = "none";
  ipointer.style.top = "-200px";
  jpointer.style.top = "-200px";
  kpointer.style.top = "-200px";

  $(".dragg").remove();

  if (document.getElementById("tab1")) {document.getElementById("tab1").remove() }

  if (document.getElementById("tb2")) {document.getElementById("tb2").remove() }

  if (document.getElementById("t1")) {

    document.getElementById("t1").remove();

  }

  mySVG.redrawLines();

   length =0

 storedarray = []

 _lines = []

 ii=0 





}



function refresharray()   {

  ipointer.style.display = "none";
  jpointer.style.display = "none";
  kpointer.style.display = "none";
  ipointer.style.top = "-200px";
  jpointer.style.top = "-200px";
  kpointer.style.top = "-200px";
  $(".dragg").remove();


  mySVG.redrawLines();


  if (document.getElementById("tab1")) {document.getElementById("tab1").remove() }

  if (document.getElementById("tb2")) {document.getElementById("tb2").remove() }

  if (document.getElementById("t1")) {

    arrayclone = mainarray.cloneNode(true)

    document.getElementById("t1").remove();

    document.body.appendChild(arrayclone);
    $("#t1").draggable();


    for (let u = 0 ; u < storedarray.length ; ++u)  {


      storedarray[u] = parseInt(document.getElementById("aitemval"+u).innerHTML);
    }

  }


_lines = []

}



function array (typed)  {


window.scrollTo(0,0)


cleareverything();

  length = typed.length 

     arr = '<table id="t1" style=" z-index: 1;position:absolute;border-collapse: collapse; top:205px; left:150px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ></table>'
  
    document.body.insertAdjacentHTML("afterbegin",arr);


    let tablelement = document.getElementById("t1")


    $("#t1").draggable();
  
    for (var i = 0 ; i < typed.length ; ++i)  {

      let r =typed[i]

      tabledata = document.createElement("td");
      
      tabledata.style.cssText = "text-align:center; min-width:70px";

      tabledata.id= "aitem"+i;

      tabledata.className = "arrayd";
  
      tabledata.innerHTML += '<div id="aitemdiv'+ i+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+i +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+i+'</p>             <p id= "aitemval'+i +'" class="arrayitem">'+ r +'</p>                        </div>'
  
      tablelement.appendChild(tabledata);

      storedarray.push(r)

    }


    tableobj = $("#t1")
  
    ipointer.style.display = "";
    jpointer.style.display = "";
    kpointer.style.display = "";


    mainarray = document.getElementById("t1")

  
  }


 function temparray (sn ,cellid)  {

let tableid= `t${Math.ceil (Math.random()*10)}${ Math.ceil( Math.random()*10)}`



  let ar = `<table id="${tableid}" style="position:absolute;border-collapse: collapse; margin-top:535px; margin-left:100px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ><tr>   </tr></table>`
  
  document.body.insertAdjacentHTML("afterbegin",ar);

  $("#"+tableid).draggable();

 tablelement = document.getElementById(tableid)



  for (let i = 0 ; i < sn ; ++i)  {

tabledata = document.createElement("td");
      
tabledata.style.cssText = "text-align:center; min-width:70px";

tabledata.id=`${cellid}item${i}`

tabledata.className = "arrayd";

tabledata.innerHTML += `<div id="${cellid}itemdiv${i}"  style="text-align:center; position:absolute; z-index:1">         <p id="${cellid}itemindex${i}" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>${i}</p>             <p id= "${cellid}itemval${i}" class="arrayitem">0</p>                        </div>`

tablelement.appendChild(tabledata);

  }

  tableobj = $("#"+tableid)

  return tableobj;

}


async function swapp(vala,valb)  {

  if (stats == 1  ) await pauser();

  if (vala > valb) {

    [vala ,valb] = [valb,vala]

  }



  let ele1 ,ele2;

  ele1 = document.getElementById("aitemval"+vala);
  ele2 = document.getElementById("aitemval"+valb);
  let text1 = ele1.innerHTML;
  let text2 = ele2.innerHTML;


  ele1.style.transition = speed+"ms";
  ele2.style.transition = speed+"ms";

  ele1.style.color = "black";
  ele1.style.top = "100px";
  ele2.style.color = "black";
  ele2.style.top = "-100px";

  await waitforme(speed+30)

  ele1.style.transition = speed+"ms";
  ele2.style.transition = speed+"ms";
  
   ele1.style.left =  94*(valb-vala)+"px";
   ele2.style.left = -94*(valb-vala)+"px";

  await waitforme(speed+30)

  ele1.style.transition = speed+"ms";
  ele2.style.transition = speed+"ms";
  ele1.style.top ="0px";
  ele1.style.color = "white";
  ele2.style.top ="0px";
  ele2.style.color = "white";
  
  await waitforme(speed+30)

  ele1.style.transition = "0ms";
  ele2.style.transition = "0ms";

  ele1.style.top = "0px";
  ele1.style.left = "0px";
  ele2.style.top = "0px";
  ele2.style.left = "0px";

  ele2.innerHTML = text1
  ele1.innerHTML = text2


await waitforme(speed+50)

if (stats == 1  ) await pauser();

}





async function K( _k,  cellid )  {

  document.getElementById("kindex").style.transition = speed+"ms linear";


      let kpos = $(`#${cellid}item${_k}`).offset();

    
    $("#kindex").offset({top : (kpos.top)+100, left : (kpos.left)+45 });

    
    await waitforme(speed)



}

async function I(_i , cellid="l" ) {


  if (_i == -1)  {

      document.getElementById("iindex").style.transition = speed+"ms linear";
  
      let ipos = $(`#${cellid}item0`).offset();
      
  $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)-45 });
 

  await waitforme(speed)

  return;


  }

  document.getElementById("iindex").style.transition = speed+"ms linear";
  
      let ipos = $(`#${cellid}item${_i}`).offset();
      
  $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
 

  await waitforme(speed)
  
}



async function J(_j , cellid="r" ) {


  document.getElementById("jindex").style.transition = speed+"ms linear";


  
      let jpos = $(`#${cellid}item${_j}`).offset();
      
      $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });


      await waitforme(speed)
  
}





async function ij(_i ,_j  , cellid="a" , cellid1 = "a") {


  ipointer.style.transition = speed+"ms linear";
  jpointer.style.transition = speed+"ms linear";

 
  
      let ipos = $(`#${cellid}item${_i}`).offset();
      let jpos = $(`#${cellid1}item${_j}`).offset();
  
  $("#iindex").offset({top : (ipos.top)+100, left : (ipos.left)+45 });
  $("#jindex").offset({top : (jpos.top)+100, left : (jpos.left)+55 });
  
  
  await waitforme(speed)
  

  
   }



   async function cutoutarray (start , end)  {


    for (let ie = 0; ie < storedarray.length; ie++) {
    
        document.getElementById("aitem"+ie).style.transition = "400ms linear";
        document.getElementById("aitem"+ie).style.backgroundColor = "rgba(0,0,0,.2)";
      
      }
    
    
          for (let ie = start; ie <= end; ie++) {
    
            document.getElementById("aitem"+ie).style.transition = "400ms linear";
            document.getElementById("aitem"+ie).style.backgroundColor = "rgba(0,0,0,.842)";
          
          }
          
        
    
    
    }
    


    
  async function gottopoint (i,j)   {
  
    if (stats == 1  ) await pauser();
  

      let element1 = document.getElementById(i)
      let top1 =  element1.style.top;
      let left1 = element1.style.left;
  
  
      let  element2 = document.getElementById(j)
      let top2 = element2.style.top;
      let left2 = element2.style.left;

      let treeval1 = document.getElementById(i+"treeval");
      let treeval2 = document.getElementById(j+"treeval");
  
      let  element1text = treeval1.innerHTML
      let  element2text = treeval2.innerHTML
  
      element1.style.transition = speed+"ms linear";
      element2.style.transition = speed+"ms linear";
      element1.style.top = top2;
      element1.style.left = left2;
      element2.style.top = top1;
      element2.style.left = left1;
      

      await waitforme(speed+100);


        element1.style.transition = "0ms linear";        
        element2.style.transition = "0ms linear";
        element1.style.top = top1;
        element1.style.left = left1;
        element2.style.top = top2;
        element2.style.left = left2;
    
         treeval2.innerHTML = element1text
         treeval1.innerHTML = element2text
  
    

         await waitforme(speed+100);

  
  
  }


 async  function insert(value ,index , cellid="a") {

    if (stats == 1  ) await pauser();

    $(`#${cellid}itemval${index}`).css({opacity:"0%"})

    $(`#${cellid}itemval${index}`).text(value)

    $(`#${cellid}itemval${index}`).animate({opacity:"100%"} , speed)


    await waitforme(speed+80);

  }




async function moveright(index)  {

  if (stats == 1  ) await pauser();

  let elemp1 = document.getElementById("aitemval"+(index+1));
  let elem = document.getElementById("aitemval"+(index));

  let elemtext = elem.innerHTML;
  let elemp1text = elemp1.innerHTML;

  elem.style.transition = speed+"ms linear";
  elemp1.style.transition = speed+"ms linear";

  elemp1.style.opacity = "0%";
  elem.style.left = "94px";

  await waitforme(speed+100);

  elem.style.transition = "0ms";
  elemp1.style.transition ="0ms";

  elem.innerHTML = elemp1text;
  elemp1.innerHTML = elemtext;


 elemp1.style.opacity = "100%";
 elem.style.left = "0px";
 elem.style.opacity = "0%";

 await waitforme(50);


}


async function moveleft(index)  {

  if (stats == 1  ) await pauser();

  let elemp1 = document.getElementById("aitemval"+(index-1));
  let elem = document.getElementById("aitemval"+(index));

  let elemtext = elem.innerHTML;
  let elemp1text = elemp1.innerHTML;

  elem.style.transition = speed+"ms linear";
  elemp1.style.transition = speed+"ms linear";

  elemp1.style.opacity = "0%";
  elem.style.left = "-94px";

  await waitforme(speed+100);

  elem.style.transition = "0ms";
  elemp1.style.transition ="0ms";

  elem.innerHTML = elemp1text;
  elemp1.innerHTML = elemtext;


 elemp1.style.opacity = "100%";
 elem.style.left = "0px";
 elem.style.opacity = "0%";

 await waitforme(50);


}




async function arraynodes() 
{ 

  let ii =0;

    while ( ii != length ) {
      
    
  
     

    newnode = '<div id="'+ii+'" style="left:0;top:0;"  class="dragg" > <div class="treenode" id="'+ ii+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ ii+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ ii+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ ii+"bottom" +'">'+ii +'</p>  <p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%;display:none;" id="'+ ii+"height" +'">'+"1" +'</p> <p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%;display:none;" id="'+ count+"height" +'">'+"1" +'</p>  <p  id="'+ ii+"treeval" +'" class="t">'+storedarray[ii]+'</p>   </div>';

   document.body.insertAdjacentHTML("afterbegin",newnode)
      

   document.getElementById(ii).style.transition = speed+"ms linear"

      tree[ii+"treeleft"] = "null"
      tree[ii+"treeright"] = "null"
  ii = ii + 1
      rootoftree = newnode

    }


    counttreenodes = length;
    count =length;

    await waitforme(speed);
    
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





var t , l
var el_pos = { }

var posar = {}


function doalign(duration_="3000ms" , timeout_=200)  {
  
for ( var d=0 ; d < count ; d++ ) {

  let tt = data[d]["top"];
  let ll = data[d]["left"];

   let ff = document.getElementById(d);
   ff.style.top=(tt)+"px";
   ff.style.left=ll+"px";

}




}


var index = length-2



 async function  insertAt (value , index)  {

  for (let i = length-2 ; i >=index ; --i)  {

    storedarray[i+1] = storedarray[i];
   await moveright(i);


  }



    storedarray[index] = value;
   await insert(value ,index)
 


  


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





