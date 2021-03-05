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




let textcontainer = document.getElementById("stringcont");
let patterncontainer = document.getElementById("patterncont");

let hashvaltext = document.getElementById("hvt");
let hashvalpattern = document.getElementById("hvp");


textcontainer.style.cssText =  `top: 200px;left :150px;transition:${speed}ms linear;`
patterncontainer.style.cssText =  `top: 270px;left :150px;transition:${speed}ms linear;`





function createblocks(word,pattern) {



    for (let i = 0 ; i < word.length ; i++)  {

    if (word[i] == " ") textcontainer.insertAdjacentHTML("beforeend" , `<div id=text${i} class="charwords" style="background-color: coral;transition: ${speed}ms linear;"><p>&#8203;</p><p style="margin:0;margin-top:-80px;left:10px;color:black;font-size:80%;">${i}</p></div>`)


    else  textcontainer.insertAdjacentHTML("beforeend" , `<div id=text${i} class="charwords" style="background-color: coral;transition: ${speed}ms linear;"><p>${word[i]}</p><p style="margin:0;margin-top:-80px;left:10px;color:black;font-size:80%;">${i}</p></div>`)
    
    
    }
    
    
    for (let i = 0 ; i < pattern.length ; i++)  {
    
        if (pattern[i] == " ")  patterncontainer.insertAdjacentHTML("beforeend" , `<div id=pattern${i} class="charpatterns"  style="background-color: coral;transition: ${speed}ms linear;"><p>&#8203;</p><p style="margin:0;margin-top:-10px;left:10px;color:black;font-size:80%;">${i}</p></div>`)
    
        else patterncontainer.insertAdjacentHTML("beforeend" , `<div id=pattern${i} class="charpatterns"  style="background-color: coral;transition: ${speed}ms linear;"><p>${pattern[i]}</p><p style="margin:0;margin-top:-10px;left:10px;color:black;font-size:80%;">${i}</p></div>`)


    }
    


}


var d = 256  
  

async function RabinKarputil(pat, txt, q)  
{  
    let M =  pat.length;  
    let N =  txt.length;  
    let i, j;  
    let p = 0; // hash value for pattern  
    let t = 0; // hash value for txt  
    let h = 1;  
  
 
    // The value of h would be "pow(d, M-1)%q"  
    for (i = 0; i < M - 1; i++)   {
                h = (h * d) % q;  

    }
       
  
    // Calculate the hash value of pattern and first  
    // window of text  
    Log(`Calculate the hash value of pattern and first text window<br>using formula`)
    Log(`<span style="font-size:100%;">p = (d * p + pat.charCodeAt(i)) % q;</span>`)
    Log(`<span style="font-size:100%;">t = (d * t + txt.charCodeAt(i)) % q;</span>`)

    for (i = 0; i < M; i++)  
    {  

        hilight(`text${i}` ,"dodgerblue")
               await hilight(`pattern${i}` ,"dodgerblue")
       
        p = (d * p + pat.charCodeAt(i)) % q;  

        hashvalpattern.innerText = `(${d} * ${p} + [${pat[i]}]${pat.charCodeAt(i)}) % ${q}`

        t = (d * t + txt.charCodeAt(i)) % q;  

        hashvaltext.innerText = `(${d} * ${t} + [${txt[i]}]${txt.charCodeAt(i)}) % ${q}`

        hilight(`text${i}` , 'coral')
        await hilight(`pattern${i}` , "coral")


    }  


    hashvaltext.innerText = t;
    hashvalpattern.innerText = p;



    // Slide the pattern over text one by one  
    for (i = 0; i <= N - M; i++)  
    {  
  
        // Check the hash values of current window of text  
        // and pattern. If the hash values match then only  
        // check for characters on by one  


     //   Log("Check if Hash Values are same");

      //  Log(`${p}   ${t}`)
        if ( p == t )  
        {  
            /* Check for characters one by one */
            for (j = 0; j < M; j++)  
            {  
                hilight(`text${i+j}` ,"dodgerblue")
               await hilight(`pattern${j}` ,"dodgerblue")

                if (txt[i+j] != pat[j])  {

                    hilight(`text${i+j}` , 'coral')
                    await hilight(`pattern${j}` , "coral")

                    break; 

                } 
                hilight(`text${i+j}` , 'coral')
               await hilight(`pattern${j}` , "coral")
                    
            }  
  
            // if p == t and pat[0...M-1] = txt[i, i+1, ...i+M-1]  
            if (j == M)   {
                Log(`<span style="font-size:130%;">Pattern found at index ${i}</span>`)
            }

        }  

        patterncontainer.style.left = parseInt(patterncontainer.style.left)+ 44+"px";

        await waitforme(speed+100);
  
     //   Log("Calculate hash value for next window of text<br>Remove leading digit, add trailing digit") 

    
        if ( i < N-M )  
        {  

          await  hilight(`text${i}` , "red")
             
          await   hilight(`text${i}` , "coral")


            let tc = (d*(t - txt.charCodeAt(i)*h) +txt.charCodeAt(i+M))%q;  

            hashvaltext.innerText = `(${d}*(${t} - ${txt.charCodeAt(i)}*${h}) + ${txt.charCodeAt(i+M)})%${q} = ${tc}`



         await   hilight(`text${i+M}` , "dodgerblue")
          
            await hilight(`text${i+M}` , "coral")


            await waitforme(speed+100)
           
            t = (d*(t - txt.charCodeAt(i)*h) +txt.charCodeAt(i+M))%q;  

            
            hashvaltext.innerText = `${t}`;

    
            await waitforme(speed+100)
  
            // We might get negative value of t, converting it  
            // to positive  
            if (t < 0)  {


             hashvaltext.innerText = `${t} + ${q}[q] = ${t + q}`;

            t = (t + q);  

            await waitforme(speed+100)

            
            hashvaltext.innerText = `${t}`;

            Log(t)
        

            }
        }  
    }  
}



async function RabinKarp(text , pattern)  {

    hashvaltext.innerText= "X";
    hashvalpattern.innerText= "X";

    textcontainer.style.left = "150px";
    patterncontainer.style.left = "150px";

    x = document.getElementsByClassName("charwords");

    for (ie= x.length-1 ; ie >= 0 ; ie--) {

        x[ie].remove();

    }

    x = document.getElementsByClassName("charpatterns");

    for (ie= x.length-1 ; ie >= 0 ; ie--) {

        x[ie].remove();

    }


    createblocks(text,pattern);

    await waitforme(800);

   await RabinKarputil(pattern,text,101);



}



slider.onchange= function() {


    textcontainer.style.transition = `${speed}ms linear`
    patterncontainer.style.transition = `${speed}ms linear`


    
  }
