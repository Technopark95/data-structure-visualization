
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

async function expressiontree(s) {

    redrawevent = setInterval(redraw,50)

  
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

 Log(PostFixed)


 for (let i =0 ; i < PostFixed.length ; ++i)   {

     symboltopointer[PostFixed.charAt(i)] = i;
     avl(PostFixed.charAt(i));
     $("#"+i).offset({top : 140 , left:400})




 }

 $(".dragg").css({"top":"0px" , "left":"0px","transition":speed+'ms linear'})

 await waitforme(50);


$(document).scrollTop(0);
$(document).scrollLeft(0);

let pos=0;

let felementh = 5000+screen.height-400;
let felementw = 2000;

let copyy = [];


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

clearInterval(redrawevent)

mySVG.redrawLines();

}


