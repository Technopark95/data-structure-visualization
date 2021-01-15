

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

   let slidermagnitude = referencecord -100;
   let allmagnitude = rightmostcord - slidermagnitude;

   if (referencecord - rightmostcord < 30 )  {


await adjustsubtree(starting ,  -allmagnitude)


   }

   await waitforme(speed)

  
    return; 
} 





async function  Shiftright(node) 
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


   let slidermagnitude = referencecord +100;
   let allmagnitude = slidermagnitude - rightmostcord;


   if ( rightmostcord - referencecord < 30 )  {

   await adjustsubtree(starting ,  allmagnitude)


   }

   await waitforme(speed)


  
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



   let slidermagnitude = referencecord +35;
   let allmagnitude = rightmostcord - slidermagnitude;


   if ( rightmostcord -referencecord > 50 )  {


await adjustsubtree(starting ,  -allmagnitude)


   }


   await waitforme(speed)


  
    return; 
} 