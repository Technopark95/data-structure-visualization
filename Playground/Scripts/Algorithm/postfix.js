
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





function finalexp()  {


    $("body").append(`<div id="expression" style="backdrop-filter:blur(7px);position:absolute;top:450px;left:100px;min-width:1050px;height:60px;border-radius:4px; background-color:rgba(0,0,0,.7);"><p id="exptext" style="font-size:200%;position:absolute; top:-20px;left:8px;letter-spacing:15px;font-family:consolas;color:white;"></p></div>`)


    $("#expression").draggable();

    
}

function prec( c) 
{ 
    if(c == '^') 
    return 3; 
    else if(c == '*' || c == '/') 
    return 2; 
    else if(c == '+' || c == '-') 
    return 1; 
    else
    return -1; 
} 
  
// The main function to convert infix expression 
//to postfix expression 
 async function infixToPostfix(s) 
{ 

    

    let Expressive =$("#exptext");
    var st = new Stack()
    st.push('N'); 
    await Log("add parenthesis at both end");
    s = "("+s+")"
    let l = s.length; 
    let ns=""; 
    for(let i = 0; i < l; i++) 
    { 

        await Log("Symbol : " + s.charAt(i));
        // If the scanned character is an operand, add it to output string. 
        if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z')||(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')){ 
            
            ns+=s.charAt(i); 
    
            $(Expressive).append(s.charAt(i))
           


        }
  
        // If the scanned character is an ‘(‘, push it to the stack. 
        else if(s.charAt(i) == '(') {
        st.push('('); 
       await pins("(")
        

        }
          
        // If the scanned character is an ‘)’, pop and to output string from the stack 
        // until an ‘(‘ is encountered. 
        else if(s.charAt(i) == ')') 
        { 
            await Log("Pop untill '(' or !stack.empty() " );
            while(st.top() != 'N' && st.top() != '(') 
            { 
                let c = st.top(); 
                st.pop(); 
                await pout();

                await waitforme(speed+100)

               ns += c; 
               $(Expressive).append(c)

               await waitforme(speed+100)
            } 

            if(st.top() == '(') 
            { 
               
                let c = st.top(); 
                st.pop(); 
                await   pout();

                await waitforme(speed+100)
            } 
        } 
          
        //If an operator is scanned 
        else{ 
            while(st.top() != 'N' && prec(s.charAt(i)) <= prec(st.top())) 
            { 
                let c = st.top(); 
                st.pop(); 
                await  pout();

                await waitforme(speed+100)
                
                ns += c; 
                $(Expressive).append(c)

                await waitforme(speed+100)
            } 
            st.push(s.charAt(i));
            await  pins(s.charAt(i)) 
        } 
  
    } 

      
  
    Output(ns);
  
} 



async function postfix(exp) {

    $(".dragg").remove();
    mySVG.redrawLines();
    count = 0;
    tree={}
    _lines=[]
    
    if (document.getElementById("poststack"))  {

        document.getElementById("poststack").remove();
        document.getElementById("expression").remove();
        
    }


pstack();
finalexp();
await infixToPostfix(exp)

}



