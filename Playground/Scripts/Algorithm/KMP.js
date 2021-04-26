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
let patterncontainer = document.getElementById("patterncontainer");
let knuthvalues = document.getElementById("knuthval");

let hashvaltext = document.getElementById("hvt");
let hashvalpattern = document.getElementById("hvp");

let graphicallen = document.getElementById("gLen")
let graphicallenhold = document.getElementById("gLenhold")

textcontainer.style.cssText =  `top: 200px;left :150px;transition:${speed}ms linear;`
patterncontainer.style.cssText =  `transition:${speed}ms linear;`


graphicallen.style.left = "150px";

graphicallen.style.top = "530px";
graphicallen.style.margin = "0";

graphicallen.style.fontSize = "130%";


ipointer.style.top = "225px";
ipointer.style.left = "170px";
jpointer.style.top = "465px";
jpointer.style.left = "170px";
ipointer.style.transition = `${speed}ms linear`;
jpointer.style.transition = `${speed}ms linear`;





function createblocks(word,pattern) {



    for (let i = 0 ; i < word.length ; i++)  {

    if (word[i] == " ") textcontainer.insertAdjacentHTML("beforeend" , `<div id=text${i} class="charwords" style="background-color: coral;transition: ${speed}ms linear;"><p>&#8203;</p><p style="margin:0;margin-top:-80px;left:10px;color:black;font-size:80%;">${i}</p></div>`)


    else  textcontainer.insertAdjacentHTML("beforeend" , `<div id=text${i} class="charwords" style="background-color: coral;transition: ${speed}ms linear;"><p>${word[i]}</p><p style="margin:0;margin-top:-80px;left:10px;color:black;font-size:80%;">${i}</p></div>`)
    
    
    }
    
    
    for (let i = 0 ; i < pattern.length ; i++)  {
    
    
        if (pattern[i] == " ")  patterncontainer.insertAdjacentHTML("beforeend" , `<div id=pattern${i} class="charpatterns"  style="background-color: coral;transition: ${speed}ms linear;"><p>&#8203;</p><p style="margin:0;margin-top:-80px;left:-80px;color:black;font-size:80%;">${i}</p></div>`)

        else patterncontainer.insertAdjacentHTML("beforeend" , `<div id=pattern${i} class="charpatterns"  style="background-color: coral;transition: ${speed}ms linear;"><p>${pattern[i]}</p><p style="margin:0;margin-top:-80px;left:-80px;color:black;font-size:80%;">${i}</p></div>`)


        knuthvalues.insertAdjacentHTML("beforeend" , `<div id=knuth${i} class="charpatterns"  style="background-color: coral;transition: 100ms linear;"><p id=KMP${i}>&#8203;</p></div>`)



    }
    


}

let lps = []


x = document.getElementsByClassName("charpatterns");

// Fills lps[] for given patttern pat[0..M-1] 
async function computeLPSArray( pat,  M) 
{ 

    // length of the previous longest prefix suffix 
    let len = 0;
  
    lps[0] = 0; // lps[0] is always 0 

    document.getElementById(`KMP${0}`).innerText = "0"

    await waitforme(speed);
  
    // the loop calculates lps[i] for i = 1 to M-1 
    let i = 1; 

    jpointer.style.left = 170 + (44*1)+"px";


    while (i < M) { 

        


    for (ie = 0; ie < x.length; ie++) {
      x[ie].style.backgroundColor = "coral";
    }

await waitforme(speed+100);


         hilight(`pattern${i}` , "dodgerblue");
         await hilight(`pattern${len}` , "dodgerblue");

        if (pat[i] == pat[len]) { 
            len++; 
            graphicallenhold.innerText = len;

            lps[i] = len;
            
         await   hilight(`knuth${i}` , "red");

            document.getElementById(`KMP${i}`).innerText = len;


             await   hilight(`knuth${i}` , "coral");

            i++; 
            jpointer.style.left = 170 + (44*i)+"px";

        } 

        else // (pat[i] != pat[len]) 
        { 
            // This is tricky. Consider the example. 
            // AAACAAAA and i = 7. The idea is similar 
            // to search step. 
            if (len != 0) { 
                len = lps[len - 1]; 
                graphicallenhold.innerText = len;
  
                // Also, note that we do not increment 
                // i here 
            } 


            else // if (len == 0) 
            { 
                lps[i] = 0; 
               document.getElementById(`KMP${i}`).innerText = 0

               jpointer.style.left = 170 + (44*i)+"px";

                await waitforme(speed+100);
                
                i++; 

                jpointer.style.left = 170 + (44*i)+"px";

                await waitforme(speed+100);
            } 
        }
        
        
    } 
} 


// Prints occurrences of txt[] in pat[] 
async function KMPSearch( pat, txt) 
{ 
    let M = pat.length; 
    let N = txt.length; 
  
    // create lps[] that will hold the longest prefix suffix 
    // values for pattern 
 
  
    // Preprocess the pattern (calculate lps[] array) 
    await computeLPSArray(pat, M); 

    graphicallen.style.display ="none";

    jpointer.style.left = 170 +"px";

    for (ie = 0; ie < x.length; ie++) {
        x[ie].style.backgroundColor = "coral";
      }
      

    await waitforme(speed+100)
  
    let i = 0; // index for txt[] 
    let j = 0; // index for pat[] 
    while (i < N) { 


       hilight(`pattern${j}`, "dodgerblue")
       await hilight(`text${i}`, "dodgerblue")


        if (pat[j] == txt[i]) { 

            hilight(`pattern${j}`, "coral")
            await hilight(`text${i}`, "coral")

            j++; 
            jpointer.style.left = 170 + (44*j)+"px";
            i++; 
            ipointer.style.left = 170 + (44*i)+"px";

            await waitforme(speed)

        } 


        hilight(`pattern${j}`, "coral")
        await hilight(`text${i}`, "coral")
  
        if (j == M) { 
            Log(`<span style="font-size:130%;">Pattern found at index ${i - j}</span>`)
            j = lps[j - 1]; 

            jpointer.style.left = 170 + (44*j)+"px";
            await waitforme(speed+100)

        } 
  
        // mismatch after j matches 
        else if (i < N && pat[j] != txt[i]) { 
            // Do not match lps[0..lps[j-1]] characters, 
            // they will match anyway 
            if (j != 0) {

                await hilight(`knuth${j-1}`, "red")
                hilight(`knuth${j-1}`, "coral")
                j = lps[j - 1];

        

                jpointer.style.left = 170 + (44*j)+"px";

            } 
            else{
                i = i + 1;

                ipointer.style.left = 170 + (44*i)+"px";

            } 

            await waitforme(speed+100)
        } 
    } 
} 
  




async function KMP(text , pattern)  {


        lps=[]
        graphicallenhold.innerText = "0";

        ipointer.style.left = "170px";
        jpointer.style.left = "170px";

    x = document.getElementsByClassName("charwords");

    for (ie= x.length-1 ; ie >= 0 ; ie--) {

        x[ie].remove();

    }

    x = document.getElementsByClassName("charpatterns");

    for (ie= x.length-1 ; ie >= 0 ; ie--) {

        x[ie].remove();

    }



    createblocks(text,pattern);

    ipointer.style.display =""
jpointer.style.display =""

graphicallen.style.display =""
await waitforme(800);


   await KMPSearch(pattern,text);



}



slider.onchange= function() {


    textcontainer.style.transition = `${speed}ms linear`
    patterncontainer.style.transition = `${speed}ms linear`
ipointer.style.transition = `${speed}ms linear`;
jpointer.style.transition = `${speed}ms linear`;


    
  }

  //KMP("ABABDABACDABABCABAB","ABABCABAB")

  //createblocks("ABABDABACDABABCABAB","ABABCABAB")
