
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


async function Pullup(node,val)  {


    if (node == "null") {

        return;
    }
    
    document.getElementById(node).style.top = parseInt(document.getElementById(node).style.top)-85+"px"
    Pullup(tree[node+"treeleft"],val)
    Pullup(tree[node+"treeright"],val)



}





async function  Shiftleft(node) 
{ 
    BalanceBST(node)

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

   let slidermagnitude = referencecord -35;
   let allmagnitude = rightmostcord - slidermagnitude;

   if (referencecord - rightmostcord < 30 )  {


 await adjustsubtree(starting ,  -allmagnitude)


   }

 
  
    return; 
} 





async function  Shiftright(node) 
{ 

    BalanceBST(node)

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


   let slidermagnitude = referencecord +35;
   let allmagnitude = slidermagnitude - rightmostcord;


   if ( rightmostcord - referencecord < 30 )  {

   await adjustsubtree(starting ,  allmagnitude)


   }

  
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



   let slidermagnitude = referencecord -35;
   let allmagnitude = slidermagnitude - rightmostcord;


   if (referencecord -  rightmostcord > 30 )  {

   await adjustsubtree(starting ,  allmagnitude)


   }






  
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



   let slidermagnitude = referencecord +35;
   let allmagnitude = rightmostcord - slidermagnitude;


   if ( rightmostcord -referencecord > 30 )  {


await adjustsubtree(starting ,  -allmagnitude)


   }




  
    return; 
} 