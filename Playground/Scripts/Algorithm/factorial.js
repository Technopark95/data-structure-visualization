
document.getElementById("cav1").remove();

$("#codetracerholder").draggable();

let parameter = document.getElementById("paramn")

let paramValue = 0

let stackHolder = document.getElementById("factorialstackholder")
stackHolder.style.zIndex="0"


function addRecursiveCallToStack(n) {


    if (n == 0) {
        returnValue = "1";
    }

    let stackCall = 
    `<div class="stackcalls" id="${n}stackblock" style="left:0;z-index:0;">
    <div class="stackcalltopheader">factorial(${n})</div>
    <div class="stackcallbody"><p class="stackcallreturn">return</p><p class="stackcallreturnval" id="${n}stackblockreturn"></p></div>
    </div>`

    stackHolder.insertAdjacentHTML("afterbegin" , stackCall)

    return document.getElementById(`${n}stackblock`);


}


async function slideabit(n)  {


    stackHolder.style.transition =  speed+"ms linear";

    stackHolder.style.top = (parseInt(stackHolder.style.top)+115)+"px";

    await waitforme(speed+100)

    let element = addRecursiveCallToStack(n);
    stackHolder.style.transition =  0+"ms linear";

    stackHolder.style.top = (parseInt(stackHolder.style.top)-115)+"px";
    
    element.style.transition = speed+"ms linear";
    
    await waitforme(10)
    element.style.opacity = 1;
    
    await waitforme(speed+100)
}

async function popStackCalls()  {

let topElement = stackHolder.firstChild;
topElement.style.zIndex = "1";
$("#stackanimationarea").prepend(topElement)
topElement.style.transition = speed+"ms linear";
await waitforme(10)
topElement.style.position = "absolute";
topElement.style.left = "240px";

stackHolder.style.transition =  0+"ms linear";
await waitforme(10)
stackHolder.style.top = (parseInt(stackHolder.style.top)+115)+"px";
await waitforme(speed)

stackHolder.style.transition =  speed+"ms linear";

stackHolder.style.top = (parseInt(stackHolder.style.top)-115)+"px";

await waitforme(speed+100)

}

async function returnValuess (n)  {

document.getElementById(`${n}stackblockreturn`).style.outline = "double";
await waitforme(speed+100)
document.getElementById(`${(n+1)}stackblockreturnfact`).style.outline = "double";
await waitforme(speed+100)
document.getElementById(`${n}stackblockreturn`).style.color = "red";
await waitforme(speed+100)
document.getElementById(`${(n+1)}stackblockreturnfact`).style.color = "red";
await waitforme(speed+100)
document.getElementById(`${(n+1)}stackblockreturnfact`).innerText = document.getElementById(`${n}stackblockreturn`).innerText;
await waitforme(speed+100)
document.getElementById(`${(n+1)}stackblockreturn`).innerText = eval(document.getElementById(`${(n+1)}stackblockreturn`).innerText);
await waitforme(speed+100)
document.getElementById(`${n}stackblock`).remove();
}

let result = 0;

async function factorial (n) {

    if (n == 0){
        await slideabit(n)
        document.getElementById(`${n}stackblockreturn`).innerHTML = 1
        await waitforme(speed+100)
        await popStackCalls();
        await waitforme(speed+100)
        await returnValuess(n)
        await waitforme(speed+100)
        return 1;
    }
   await slideabit(n)
   document.getElementById(`${n}stackblockreturn`).innerHTML = `${n} * <span id="${n}stackblockreturnfact">factorial(${n} - 1)</span>`
   await waitforme(speed+100)
    result = n * await factorial(n-1);
    await waitforme(speed+100)
    await popStackCalls();
    await waitforme(speed+100)
    await returnValuess(n);
    await waitforme(speed+100)

    return result;

}