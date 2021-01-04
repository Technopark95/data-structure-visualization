
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
   
   
   
var lefthand = 500;

var expresstionstack = new Stack();

var symboltopointer = {}



async function evaluat(exproot)  
{  
    // empty tree  
   
    // leaf node i.e, an integer 
    if (exproot == "null")  {

        return 0;
    }
    

    // Evaluate left subtree  
    await evaluat(tree[exproot+'treeleft']);  
  
    // Evaluate right subtree  
    await evaluat(tree[exproot+'treeright']);  

    if (tree[exproot+'treeleft'] == "null" || tree[exproot+'treeright'] == "null") return;

   
   Log(`${exproot} ${tree[exproot+'treeleft']}  ${tree[exproot+'treeright']}`)

   let l_val = tree[exproot+'treeleft']
   let r_val = tree[exproot+'treeright']

   mySVG.redrawLines();

     
    // Check which operator to apply  
    if (document.getElementById(exproot+'treeval').innerHTML=="+")  {

    

        hilight(l_val , "red");

       await hilight(r_val , "red");

       
       document.getElementById(l_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(l_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       document.getElementById(r_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(r_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       await waitforme(speed+100);

       hilight(l_val , defaultcolor);

       await hilight(r_val , defaultcolor);

       

       document.getElementById(exproot+"treeval").innerHTML = parseInt(document.getElementById(l_val+"treeval").innerHTML)+parseInt(document.getElementById(r_val+"treeval").innerHTML)

       document.getElementById(l_val).remove();
       document.getElementById(r_val).remove();


      return;


    }
        
  
    if (document.getElementById(exproot+'treeval').innerHTML=="-")  {


        hilight(l_val , "red");

       await hilight(r_val , "red");

       
       document.getElementById(l_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(l_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       document.getElementById(r_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(r_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       await waitforme(speed+100);


       hilight(l_val , defaultcolor);

       await hilight(r_val , defaultcolor);

       document.getElementById(exproot+"treeval").innerHTML = parseInt(document.getElementById(l_val+"treeval").innerHTML)-parseInt(document.getElementById(r_val+"treeval").innerHTML)

       document.getElementById(l_val).remove();
       document.getElementById(r_val).remove();


      return;

    }
        
  
    if (document.getElementById(exproot+'treeval').innerHTML=="*")  {


        hilight(l_val , "red");

       await hilight(r_val , "red");

       
       document.getElementById(l_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(l_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       document.getElementById(r_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(r_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       await waitforme(speed+100);

       hilight(l_val , defaultcolor);

       await hilight(r_val , defaultcolor);


       document.getElementById(exproot+"treeval").innerHTML = parseInt(document.getElementById(l_val+"treeval").innerHTML)*parseInt(document.getElementById(r_val+"treeval").innerHTML)

       document.getElementById(l_val).remove();
       document.getElementById(r_val).remove();


      return;

    }
         

    if (document.getElementById(exproot+'treeval').innerHTML=="/"){

        hilight(l_val , "red");

       await hilight(r_val , "red");

       
       document.getElementById(l_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(l_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       document.getElementById(r_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(r_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       await waitforme(speed+100);

       hilight(l_val , defaultcolor);

       await hilight(r_val , defaultcolor);

       document.getElementById(exproot+"treeval").innerHTML = parseInt(document.getElementById(l_val+"treeval").innerHTML)/parseInt(document.getElementById(r_val+"treeval").innerHTML)

       document.getElementById(l_val).remove();
       document.getElementById(r_val).remove();


      return;

    }  
        
        
    if (document.getElementById(exproot+'treeval').innerHTML=="^") {

        hilight(l_val , "red");

       await hilight(r_val , "red");

       
       document.getElementById(l_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(l_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       document.getElementById(r_val).style.top = parseInt( document.getElementById(exproot).style.top)+"px"
       document.getElementById(r_val).style.left = parseInt( document.getElementById(exproot).style.left)+"px"

       await waitforme(speed+100);

       hilight(l_val , defaultcolor);

       await hilight(r_val , defaultcolor);

       
       document.getElementById(exproot+"treeval").innerHTML = Math.pow(parseInt(document.getElementById(l_val+"treeval").innerHTML),parseInt(document.getElementById(r_val+"treeval").innerHTML));
     
       document.getElementById(l_val).remove();
       document.getElementById(r_val).remove();


      return;

    } 
      
   
}  

async function expressiontree(s) {

    if (document.getElementById("poststack"))  {

        document.getElementById("poststack").remove();
        document.getElementById("expression").remove();
        
    }


    $(".dragg").remove();
    count = 0;
    tree={}
    _lines=[]
    lefthand = 500;
    redrawevent = requestAnimationFrame(redraw,50)

  
 var st = new Stack()
 st.push('N'); 
 
 s = "("+s+")"
 let l = s.length; 
 let ns=""; 
 for(let i = 0; i < l; i++) 
 { 


     // If the scanned character is an operand, add it to output string. 
     if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z')||(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')){ 
         
         ns+=s.charAt(i); 
 

     }

     // If the scanned character is an ‘(‘, push it to the stack. 
     else if(s.charAt(i) == '(') {
     st.push('('); 
    
     

     }
       
     // If the scanned character is an ‘)’, pop and to output string from the stack 
     // until an ‘(‘ is encountered. 
     else if(s.charAt(i) == ')') 
     { 
        
         while(st.top() != 'N' && st.top() != '(') 
         { 
             let c = st.top(); 
             st.pop(); 
             
            ns += c; 

           
         } 

         if(st.top() == '(') 
         { 
            
             let c = st.top(); 
             st.pop(); 
             

             
         } 
     } 
       
     //If an operator is scanned 
     else{ 
         while(st.top() != 'N' && prec(s.charAt(i)) <= prec(st.top())) 
         { 
             let c = st.top(); 
             st.pop(); 
             

             ns += c; 
          

 
         } 
         st.push(s.charAt(i));
        
     } 

 } 

   

 

 let PostFixed = ns;


 for (let i =0 ; i < PostFixed.length ; ++i)   {

     symboltopointer[PostFixed.charAt(i)] = i;
  

     newnode = '<div id="'+count+'" style="transform:scale(.8,.8);left:0px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+PostFixed.charAt(i)+'</p>   </div>';


     $("body").prepend(newnode)
     $("#"+count).draggable();
  
     tree[count+"treeleft"] = "null"
     tree[count+"treeright"] = "null"
  
     divbyelement[element] = count
     count = count +1;
     counttreenodes = counttreenodes + 1;
  



 }
 

 $(".dragg").css({"transition":speed+'ms linear'})
 await waitforme(50);



$(document).scrollTop(0);
$(document).scrollLeft(0);



for (let i = 0 ; i < PostFixed.length ; ++i)  {

 if ((PostFixed.charAt(i) >= 'a' && PostFixed.charAt(i) <= 'z')||(PostFixed.charAt(i) >= 'A' && PostFixed.charAt(i) <= 'Z')) {


     expresstionstack.push(i);




 }


 else  {



    let rightelement = expresstionstack.top();
    expresstionstack.pop();
    let leftelement = expresstionstack.top();
    expresstionstack.pop();

  
let oper =  i;

if (stats == 1  ) await pauser();

treefy(`${oper}treeleft`  ,  leftelement );
treefy(`${oper}treeright` , rightelement );

AVLpostleft[oper] = lefthand;
AVLposttop[oper] = 150;


$("#"+oper).offset({left:lefthand , top:"150"})

lefthand = lefthand + 50;

calcheight(oper)
BalanceAll(oper)

await waitforme(speed+50);

expresstionstack.push(oper);



 }


 

 

}

await waitforme(speed+100);


Log(PostFixed)

mySVG.redrawLines();

Log("Taking random value for nodes");

let ie;
for (ie = 0; ie < count; ie++) {

    if (!['+','-','*','/','^'].includes(document.getElementById(ie+"treeval").innerHTML)) {
        document.getElementById(ie+"treeval").innerHTML = Math.floor((Math.random()*100)+1);
        hilight(ie , "red");
    }


  
}

await waitforme(speed+100);

for (ie = 0; ie < count; ie++) {

 hilight(ie , defaultcolor);

}


Log('Evaluating Expression Tree')

await evaluat(count-1)

cancelAnimationFrame(redrawevent)

mySVG.redrawLines();

}


