
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


async function adjustsubtree(node,val)  {


    if (node == "null") {

        return;
    }
    
    document.getElementById(node).style.left = parseInt(document.getElementById(node).style.left)+val+"px"
    adjustsubtree(tree[node+"treeleft"],val)
    adjustsubtree(tree[node+"treeright"],val)



}


async function colorsubtree(node,val)  {


    if (node == "null") {

        return;
    }
    
    document.getElementById(node).style.backgroundColor = val
    colorsubtree(tree[node+"treeleft"],val)
    colorsubtree(tree[node+"treeright"],val)



}



async function Pullup(node,val)  {


    if (node == "null") {

        return;
    }
    
    document.getElementById(node).style.top = parseInt(document.getElementById(node).style.top)-85+"px"
    Pullup(tree[node+"treeleft"],val)
    Pullup(tree[node+"treeright"],val)



}





async function  Shiftleft(node) {

    Log("Check recursively from bottom to root")
  
    let current = tree[node+"treeleft"];
    let starting = current;

    if (current == "null") {
        return;
    }

    await hilight(node, "coral")


    Log(`Looking for <span style="color:red;">left</span> subtree now`)
    Log("Getting Inorder predecessor's coordinates")
  
    /* loop down to find the leftmost leaf */
    while ( tree[`${current}treeright`] != "null")  {

        current = tree[`${current}treeright`]; 

    }


    await hilight(current, "red")


   let rightmostcord = parseInt(document.getElementById(current).style.left)

   Log(`Inorder predecessor's coordinate :  ${rightmostcord}px` ) 

   await waitforme(speed)

   let referencecord = parseInt(document.getElementById(node).style.left)

   Log(`root's coordinate :  ${referencecord}px` )

   await waitforme(speed)

   let slidermagnitude = referencecord -50;
   let allmagnitude = rightmostcord - slidermagnitude;

   Log(`The difference between them :  ${referencecord - rightmostcord}px` )
   await waitforme(speed)

   if (referencecord - rightmostcord < 30 )  {

    Log(`The difference is less than 30px, So, Move the whole branch toward left <br> in such a way that inorder predecessor is 50px left in root` )

    await waitforme(speed)


  await  colorsubtree(starting, "red");
    await waitforme(speed+100);

 await adjustsubtree(starting ,  -allmagnitude)

 await waitforme(speed+100);

await colorsubtree(starting , defaultcolor);
   
 await waitforme(speed+100);

   }

   else {

    Log(`The difference between root and inorder predecessor is not less than 30px , no need to adjust` )

    await hilight(current, defaultcolor)

    await waitforme(speed)

   }

   await hilight(node, defaultcolor)
 
  
    return; 
} 





async function  Shiftright(node) { 

    Log("Check recursively from bottom to root")
  

    let current = tree[node+"treeright"];
    let starting = current;

    if (current == "null") {
        return;
    }

    await hilight(node, "coral")


    Log(`Looking for <span style="color:red;">right</span> subtree now`)

    Log("Getting Inorder successor's coordinates")
  
    /* loop down to find the leftmost leaf */
    while ( tree[`${current}treeleft`] != "null")  {

        current = tree[`${current}treeleft`]; 

    }

    await hilight(current, "red")


   let rightmostcord = parseInt(document.getElementById(current).style.left)

   Log(`Inorder successor's coordinate :  ${rightmostcord}px` ) 

   await waitforme(speed)

   let referencecord = parseInt(document.getElementById(node).style.left)

   Log(`root's coordinate :  ${referencecord}px` )

   await waitforme(speed)



   let slidermagnitude = referencecord +50;
   let allmagnitude = slidermagnitude - rightmostcord;

   Log(`The difference between them :  ${ rightmostcord - referencecord}px` )
   await waitforme(speed)

   if ( rightmostcord - referencecord < 30 )  {

    Log(`The difference is less than 30px, So, Move the whole branch toward right <br> in such a way that inorder sucessor is 50px right in root` )

    await waitforme(speed)

    await  colorsubtree(starting, "red");
    await waitforme(speed+100);

   await adjustsubtree(starting ,  allmagnitude)

   await waitforme(speed+100);

   await colorsubtree(starting , defaultcolor);
      
    await waitforme(speed+100);


   }


   else {

    Log(`The difference between root and inorder successor is not less than 30px , no need to adjust` )

    await hilight(current, defaultcolor)

    await waitforme(speed)

   }

   await hilight(node, defaultcolor)
  
    return; 
} 





async function  DelShiftright(node) 
{ 

    let current = tree[node+"treeleft"];
    let starting = current;

    if (current == "null") {
        return;
    }

  
    /* loop down to find the leftmost leaf */
    while ( tree[`${current}treeright`] != "null")  {

        current = tree[`${current}treeright`]; 

    }

   let rightmostcord = parseInt(document.getElementById(current).style.left)

   let referencecord = parseInt(document.getElementById(node).style.left)



   let slidermagnitude = referencecord -50;
   let allmagnitude = slidermagnitude - rightmostcord;


   if (referencecord -  rightmostcord > 50 )  {

   

   await adjustsubtree(starting ,  allmagnitude)


   }





   await waitforme(speed)

  
    return; 
} 





async function  DelShiftleft(node) 
{ 

    let current = tree[node+"treeright"];
    let starting = current;

    if (current == "null") {
        return;
    }

  
    /* loop down to find the leftmost leaf */
    while ( tree[`${current}treeleft`] != "null")  {

        current = tree[`${current}treeleft`]; 

    }

   let rightmostcord = parseInt(document.getElementById(current).style.left)

   let referencecord = parseInt(document.getElementById(node).style.left)



   let slidermagnitude = referencecord +50;
   let allmagnitude = rightmostcord - slidermagnitude;


   if ( rightmostcord -referencecord > 50 )  {


await adjustsubtree(starting ,  -allmagnitude)


   }


   await waitforme(speed)


  
    return; 
} 