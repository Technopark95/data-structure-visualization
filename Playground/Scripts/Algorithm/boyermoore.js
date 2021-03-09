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

textcontainer.style.cssText =  `top: 200px;left :150px;transition:${speed}ms linear;`
patterncontainer.style.cssText =  `top: 350px;left :150px;transition:${speed}ms linear;`



var sourcemoore ,destmoore;

let upperpart , lowerpart;



function redrawmoore()  {

 _ctx.clearRect(0,0,_canvas.width,_canvas.height);

     upperpart = document.getElementById(`text${sourcemoore}`).getBoundingClientRect();
     lowerpart = document.getElementById(`pattern${destmoore}`).getBoundingClientRect();

    _ctx.beginPath();

    _ctx.moveTo(upperpart.left+20 , upperpart.top+40)

    _ctx.lineTo(lowerpart.left+20 , lowerpart.top);

    _ctx.stroke();

    redrawevent = requestAnimationFrame(redrawmoore);

}


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


var NO_OF_CHARS = 256  
  

/* A pattern searching function that uses Bad  
Character Heuristic of Boyer Moore Algorithm */
async function boyerMooreutil(  txt,  pat)  
{  
    let m = pat.length;  
    let n = txt.length;  
  
    let badchar = [];  
  
    /* Fill the bad character array by calling  
    the preprocessing function badCharHeuristic()  
    for given pattern */
  
    let i;  
  
    // Initialize all occurrences as -1  
    for (i = 0; i < NO_OF_CHARS; i++)  
        badchar[i] = -1;  
  
    // Fill the actual value of last occurrence  
    // of a character  
    for (i = 0; i < m; i++) { 
        badchar[pat.charCodeAt(i)] = i;  

        Log(`Badchar ${pat[i]} = ${i}`)

    }

       await waitforme(speed+100);
  
    let s = 0; // s is shift of the pattern with  
                // respect to text  
    while(s <= (n - m))  
    {  

        let j = m - 1;  
  
        /* Keep reducing index j of pattern while  
        characters of pattern and text are  
        matching at this shift s */
        while(j >= 0 && pat[j] == txt[s + j])   {

                  hilight(`pattern${j}` , "dodgerblue")
            await hilight(`text${s+j}` , "dodgerblue")

            hilight(`pattern${j}` , "coral")
            await hilight(`text${s+j}` , "coral")
            
            j--;

            Log(`<span style="font-size:130%;">J = ${j}</span>`)


        }


    
  
        /* If the pattern is present at current  
        shift, then index j will become -1 after  
        the above loop */
        if (j < 0)  {  
            Log(`<span style="font-size:130%;">pattern occurs at shift = ${s}</span>`)
  
            /* Shift the pattern so that the next  
            character in text aligns with the last  
            occurrence of it in pattern.  
            The condition s+m < n is necessary for  
            the case when pattern occurs at the end  
            of text */
            s += (s + m < n)? m-badchar[txt.charCodeAt(s + m)] : 1; 
            
            patterncontainer.style.left = 150+ (44*s)+"px";

            await waitforme(speed+100)
  
        }  


  
        else {
            /* Shift the pattern so that the bad character  
            in text aligns with the last occurrence of  
            it in pattern. The max function is used to  
            make sure that we get a positive shift.  
            We may get a negative shift if the last  
            occurrence of bad character in pattern  
            is on the right side of the current  
            character. */

            let s_ =s;

            let colorflag = true;

            if (j - badchar[txt.charCodeAt(s + j)] < 1)  colorflag = false;

            Log(` s + j => ${s_} + ${j} = ${s_+j}`)


             upperpart = document.getElementById(`text${s}`).getBoundingClientRect();
             lowerpart = document.getElementById(`pattern${j}`).getBoundingClientRect();
            _ctx.beginPath();
            _ctx.moveTo(upperpart.left+20 , upperpart.top+40)
            _ctx.lineTo(lowerpart.left+20 , lowerpart.top);
            _ctx.fillText(`${s_}+${j}`,(upperpart.left +lowerpart.left)/2-40 ,( upperpart.top + lowerpart.top)/2+20);
            upperpart = document.getElementById(`text${(s+j)}`).getBoundingClientRect();
            _ctx.moveTo(lowerpart.left+20 , lowerpart.top)
            _ctx.lineTo(upperpart.left+20 , upperpart.top+40);
            _ctx.fillText(`${s_+j}`,(upperpart.left +lowerpart.left)/2 +40 ,( upperpart.top + lowerpart.top)/2+20);
            _ctx.stroke();


            if (colorflag == true) await hilight(`text${(s_+j)}` , "red");

/*

*/

            s += Math.max(1, j - badchar[txt.charCodeAt(s + j)]);  

/*

*/



            Log(`txt[s+j] => txt[${s_}+${j}] => txt[${s_+j}] = ${txt[s_+j]} `)

            sourcemoore = (s_+j);
            destmoore =  badchar[txt.charCodeAt(s_ + j)];

   
            await waitforme(speed+400)


            _ctx.clearRect(0,0,_canvas.width,_canvas.height)


            if (document.getElementById(`pattern${destmoore}`))
            redrawevent = requestAnimationFrame(redrawmoore);


            Log(`badchar[${txt[s_ + j]}] => badchar[${txt.charCodeAt(s_ + j)}] = ${badchar[txt.charCodeAt(s_ + j)]}`)



            Log(`s = ${s_} + max(1 , ${j}-(${badchar[txt.charCodeAt(s_ + j)]})) = ${s}`)


            if (colorflag == true) await hilight(`pattern${badchar[txt.charCodeAt(s_ + j)]}` , "red");

    
            await waitforme(speed+100)



 
            patterncontainer.style.left = 150+ (44*s)+"px";

            await waitforme(speed+100)

            cancelAnimationFrame(redrawevent);

            _ctx.clearRect(0,0,_canvas.width,_canvas.height);
            

            if (colorflag == true) {
                hilight(`text${s_+j}` , "coral");
                await hilight(`pattern${badchar[txt.charCodeAt(s_ + j)]}` , "coral");
    
    }

    

        }



    
    }  
}  


  
async function BoyerMoore(text , pattern)  {

    _ctx.font = "20px Segoe ui";

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

   await boyerMooreutil(text,pattern);



}



slider.onchange= function() {


    textcontainer.style.transition = `${speed}ms linear`
    patterncontainer.style.transition = `${speed}ms linear`


    
  }
