


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


var rbroot=0;
var rbparent ={}
skipbtn.style.display = 'none'

Object.defineProperty(window, 'key', {
  get: function() {
    Log(`You are using random <span style="font-size:120%;color:coral;">key</span><br>To define specific value then edit the parameter<br>For example<br><span style="color:red;">RBTreeinsert(${Math.ceil(Math.random() * 1000)})</span>`)
    return Math.ceil(Math.random() * 1000)}
  })






async function swapcolor (tparent,tgrandparent)  {
    

    let parentptcolor = $("#"+tparent+"col").text();
  
    let gparentptcolor = $("#"+tgrandparent+"col").text();

    let parentanicolor = $("#"+tparent).css("background-color");
   
    let gparentanicolor = $("#"+tgrandparent).css("background-color");

    $("#"+tparent+"col").text(gparentptcolor);
  
    $("#"+tgrandparent+"col").text(parentptcolor);

    $("#"+tparent).css({"background-color" : gparentanicolor});


    $("#"+tgrandparent).css({"background-color" : parentanicolor} );


    await waitforme(speed+30);

    if (stats == 1) await pauser();
  
}

async function RBTreerotateLeft( pt) 
{ 
    if (stats == 1) await pauser();
    let pt_right =  tree[pt+"treeright"];// pt->right; 
  
    tree[pt+"treeright"] =  tree[pt_right+"treeleft"]
  
    if (tree[pt+"treeright"] != "null" ||  tree[pt+"treeright"]!= undefined)  rbparent[tree[pt+"treeright"]] = pt;
  
     rbparent[pt_right] =  rbparent[pt]
  
    if (rbparent[pt] == "null" || rbparent[pt] == undefined) { rbroot = pt_right; }
  
    else if (pt ==  tree[rbparent[pt]+"treeleft"] ) tree[rbparent[pt]+"treeleft"] = pt_right; 
  
    else tree[rbparent[pt]+"treeright"] = pt_right; 
  
    tree[pt_right+"treeleft"] = pt; 
    rbparent[pt] = pt_right; 



} 
  
async function RBTreerotateRight( pt) 
{ 
    if (stats == 1) await pauser();
    let pt_left = tree[pt+"treeleft"];
  
    tree[pt+"treeleft"] = tree[pt_left+"treeright"]
  
    if (tree[pt+"treeleft"] != "null" ||  tree[pt+"treeleft"]!= undefined)  rbparent[tree[pt+"treeleft"]] = pt; 
  
    rbparent[pt_left] = rbparent[pt]; 
  
    if (rbparent[pt] == "null" || rbparent[pt] == undefined)  rbroot = pt_left; 
  
    else if (pt == tree[rbparent[pt]+"treeleft"])  tree[rbparent[pt]+"treeleft"] = pt_left; 
  
    else tree[rbparent[pt]+"treeright"] = pt_left; 
  
    tree[pt_left+"treeright"] = pt; 
    rbparent[pt] = pt_left; 

  
} 



async function fixViolation(_root, pt) 
{ 
    if (stats == 1) await pauser();

    let parent_pt = "null"; 
    let grand_parent_pt = "null"; 
  
    while ((pt != _root) && ( $('#'+pt+"col").text() != "black") && ( $("#"+rbparent[pt]+"col").text() == "red")) 
    { 
  
        parent_pt = rbparent[pt];
        grand_parent_pt = rbparent[rbparent[pt]]; 
  

        if (parent_pt == tree[grand_parent_pt+"treeleft"]) 
        { 
           // console.log( "1")
  
            let uncle_pt = tree[grand_parent_pt+"treeright"]
  
            
            if ( (uncle_pt != "null" || uncle_pt != undefined) && $("#"+uncle_pt+"col").text() == "red") 
            { 

              //  console.log( "1  1")
                $("#"+grand_parent_pt+"col").text("red")
                $("#"+grand_parent_pt).css("background-color","red")
                await waitforme(speed+30)
                $("#"+parent_pt+"col").text("black")
                $("#"+parent_pt).css("background-color",defaultcolor)
                await waitforme(speed+30) 
                $("#"+uncle_pt+"col").text("black")
                $("#"+uncle_pt).css("background-color",defaultcolor)
                await waitforme(speed+30)
                pt = grand_parent_pt; 
            } 
  
            else
            { 
              //  console.log( "1 2")
                /* Case : 2 
                   pt is right child of its rbparent 
                   Left-rotation required */
                if (pt ==  tree[parent_pt+"treeright"]) 
                { 

                //    console.log( "1 2 1")

                    RBTreerotateLeft( parent_pt); 
                    pt = parent_pt; 
                    parent_pt = rbparent[pt]; 
                } 
  
                /* Case : 3 
                   pt is left child of its rbparent 
                   Right-rotation required */
                     RBTreerotateRight( grand_parent_pt); 
               
                  await swapcolor(parent_pt , grand_parent_pt)
               
                   pt = parent_pt; 
            } 
        } 
  
        /* Case : B 
           rbparent of pt is right child  
           of Grand-rbparent of pt */
        else
        { 
         //   console.log( "2")

            let uncle_pt = tree[grand_parent_pt+"treeleft"]; 
  
            /*  Case : 1 
                The uncle of pt is also red 
                Only Recoloring required */
            if ((uncle_pt != "null"  || uncle_pt != undefined) && ($("#"+uncle_pt+"col").text() ==  "red")) 
            { 

              //  console.log( "2  1")
                $("#"+grand_parent_pt+"col").text("red")
                $("#"+grand_parent_pt).css("background-color","red")
                await waitforme(speed+30)
                $("#"+parent_pt+"col").text("black")
                $("#"+parent_pt).css("background-color",defaultcolor) 
                await waitforme(speed+30)
                $("#"+uncle_pt+"col").text("black")
                $("#"+uncle_pt).css("background-color",defaultcolor)
                await waitforme(speed+30)
                pt = grand_parent_pt; 
            } 
            else
            { 

               // console.log( "2  2")
                /* Case : 2 
                   pt is left child of its rbparent 
                   Right-rotation required */
                if (pt == tree[parent_pt+"treeleft"]) 
                { 

                 //   console.log( "2 2 1")
                   RBTreerotateRight( parent_pt); 
                    pt = parent_pt; 
                    parent_pt = rbparent[pt]; 
                } 
  
                /* Case : 3 
                   pt is right child of its rbparent 
                   Left-rotation required */
               RBTreerotateLeft( grand_parent_pt); 

                  //console.log(`${$("#"+parent_pt).css("background-color")}  ${$("#"+grand_parent_pt).css("background-color")}`)

                 
              await  swapcolor(parent_pt , grand_parent_pt)


                pt = parent_pt; 
            } 
        } 
    }
    
    



    await waitforme(speed);
  
     $("#"+rbroot+"col").text("black")
     $("#"+rbroot).css("background-color",defaultcolor)


} 

var direc = 0
var delcopy = 0 ;
async function rbInsert(rbroot, pt) 
{ 
    /* If the tree is empty, return a new node */
    if ( $("#"+rbroot).length== 0)  {

        let newpt =  pt;

        rbroot = newpt;
        return newpt;
  
    } 

   
       
    /* Otherwise, recur down the tree */
    if ( parseInt( $("#"+pt+"treeval").text(),10) < parseInt( $("#"+rbroot+"treeval").text(),10)) 
    { 
        tree[rbroot+"treeleft"]  = await rbInsert(tree[rbroot+"treeleft"], pt); 

        let leftt =  tree[rbroot+"treeleft"];
        rbparent[leftt] = rbroot; 
        
    } 
    else if (parseInt( $("#"+pt+"treeval").text(),10) > parseInt( $("#"+rbroot+"treeval").text(),10)) 
    { 
        tree[rbroot+"treeright"] = await rbInsert(tree[rbroot+"treeright"], pt); 
    

        let rightt =  tree[rbroot+"treeright"];
        rbparent[rightt] = rbroot;
    
    } 

 

  
  
    /* return the (unchanged) node pointer */
    return rbroot; 
} 
  


function RBTreealign(nodelement)  {


  while(nodelement != undefined) {

       Shiftleft(nodelement);
       Shiftright(nodelement);

       nodelement = rbparent[nodelement];

  }


}


function RBTreedelalign(nodelement)  {


  while(nodelement != undefined) {

       DelShiftleft(nodelement);
       DelShiftright(nodelement);

       nodelement = rbparent[nodelement];

  }


}



function RBnode(element) {

    newnode = '<div id="'+count+'" style="transform:scale(.8,.8); background-color:red;left:1250px;top:150px;transition:'+ speed+'ms linear;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p><p  id="'+ count+"col" +'" style="display:none;">'+"red"+'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white; font-size:70%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>     </div>';


   $("body").prepend(newnode)
   
   $("#"+count).draggable({
    drag: function(event, ui){mySVG.Splaylines();}
  });

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

 
   count = count +1;
   counttreenodes = counttreenodes + 1;

return count;
 }


 async function RBTreeinsert(data) 
{ 

 
   
    if ($("#"+rbroot).length == 0)  {

        

        $(document).scrollLeft(1200)
        $(document).scrollTop(0)
    }

    let pt = RBnode(data) -1; 
  
    // Do a normal BST insert 
   rbroot  =  await rbInsert(rbroot, pt); 



   if (rbparent[pt] != undefined)
    if (parseInt( $("#"+pt+"treeval").text(),10) > parseInt( $("#"+rbparent[pt]+"treeval").text(),10)){
     
        document.getElementById(pt).style.top = parseInt( document.getElementById(rbparent[pt]).style.top)+85+"px";
        document.getElementById(pt).style.left = parseInt( document.getElementById(rbparent[pt]).style.left)+35+"px";

        

    } 
    else {

        document.getElementById(pt).style.top = parseInt( document.getElementById(rbparent[pt]).style.top)+85+"px";
        document.getElementById(pt).style.left = parseInt( document.getElementById(rbparent[pt]).style.left)-35+"px";
    
    } 

    if (rbparent[pt] != undefined)
    await waitforme(speed+30)

    redrawevent = requestAnimationFrame(redrawsplay)

  
    await  fixViolation(rbroot, pt); 

    // calcheight(rbroot)

    // AVLpostleft[rbroot] = 1900;
    // AVLposttop[rbroot] = 150;

    document.getElementById(rbroot).style.top = 150+"px";
    document.getElementById(rbroot).style.left = 1905+"px";
   
  //  BalanceAll(rbroot);

  RBTreealign(pt)


  DelShiftleft(rbroot);
  DelShiftright(rbroot);


   await waitforme (speed+100);

    cancelAnimationFrame(redrawevent)



} 
  


async function searchrbt(ro , item) {

  let precolor = document.getElementById(ro).style.backgroundColor;
  
    await hilight(ro, "rgb(109,209,0,1)" , "1200ms" , 1300 )
  
       hilight(ro, precolor , "1200ms" , 1300 )
  
    
      if (  parseInt(document.getElementById(ro+"treeval").innerHTML ) == item) {
    
       await  hilight(ro,"red")
        await display("Item found.")
  
      await  hilight(ro, precolor , "1200ms" , 1300 )
    
        return;
    
      }
    
      if (    ro  == "null"   ) {
    
        return;
    
      }
    
       if (    parseInt(document.getElementById(ro+"treeval").innerHTML )   > item     ) {
    
        
        await display("Item is smaller than "+ parseInt(document.getElementById(ro+"treeval").innerHTML ) + " Going Left") 
       await searchrbt(tree[ro+"treeleft"], item)
    
      }
    
    
      if (     parseInt(document.getElementById(ro+"treeval").innerHTML )   < item     ) {
    
        await display("Item is larger than "+ parseInt(document.getElementById(ro+"treeval").innerHTML ) + " Going Right") 
      await  searchrbt(tree[ro+"treeright"], item)
    
      }
    
    
    
    }
  


async function RBTreesearch(h)  {

    await searchrbt(rbroot ,h);
    
    
    }
    

    slider.onchange= function() {


        let x = document.getElementsByClassName("dragg");
        let ie;
        for (ie = 0; ie < x.length; ie++) {
          x[ie].style.transition = speed+"ms linear";
        }
        
        
      }


function getRoot() { return rbroot; } 
        
function Parent(node)  { return rbparent[node]; }
function Left(node)  { return tree[node+"treeleft"] }
function Right(node)  { return tree[node+"treeright"] }
function getcolor(node) {return document.getElementById(node+"col").innerHTML}
function getvcolor(node) { return document.getElementById(node).style.backgroundColor}
function setcolor(node,col) {document.getElementById(node+"col").innerHTML = col;}
async function setvcolor(node,col) {document.getElementById(node).style.backgroundColor = col;  await waitforme(speed+100);}
function nodekey(node) {return parseInt(document.getElementById(node+"treeval").innerHTML)}
function setnodekey(node,val) { document.getElementById(node+"treeval").innerHTML = val}

function isOnLeft( node) { return node ==  Left(Parent(node))} 
function uncle(node) { 
  
  if ( Parent(node) == undefined || Parent(Parent(node)) == undefined)  return "null"; 

  if (isOnLeft(Parent(node))) {return Right(Parent(Parent(node))); }

  else { return Left(Parent(Parent(node)));}
    
} 

function sibling( node) { 
  // sibling null if no parent 
  if ( Parent(node) == undefined) return "null"; 

  if (isOnLeft(node)) 
    return  Right(Parent(node)) 

  return Left(Parent(node)) 
} 



function moveDown( node, nParent) { 
  
  if ( Parent(node) != undefined) { 
    if (isOnLeft(node)) { 
     tree[rbparent[node]+"treeleft"] = nParent; 
    } 
    
    else { 
      tree[rbparent[node]+"treeright"] = nParent; 
    }

  } 
  
  rbparent[nParent] = Parent(node)
  rbparent[node] = nParent
  
} 



function hasRedChild( node) { 
  return ( Left(node) != "null" &&  getcolor(Left(node)) == "red") || (Right(node) != "null" && getcolor(Right(node)) == "red"); 
} 




function leftRotate(x) { 
  // new parent will be node's right child 
  let nParent =  Right(x)

  // update root if current node is root 
  if (x == rbroot) rbroot = nParent; 

  moveDown(x,nParent); 

  // connect x with new parent's left element 
   tree[x+"treeright"] =  Left(nParent)
  // connect new parent's left element with node 
  // if it is not null 
  if ( Left(nParent) != "null")  {
 
    rbparent[tree[nParent+"treeleft"]] =x
  }

  // connect new parent with x 

  tree[nParent+"treeleft"] = x
}



function rightRotate(x) { 
  // new parent will be node's left child 
  let nParent = Left(x)

  // update root if current node is root 
  if (x == rbroot) rbroot = nParent; 

  moveDown(x,nParent); 

  // connect x with new parent's right element 
  tree[x+"treeleft"] =  Right(nParent)
  // connect new parent's right element with node 
  // if it is not null 
  if (Right(nParent) != "null")  {

  
    rbparent[tree[nParent+"treeright"]] =x

  }

  tree[nParent+"treeright"] = x
} 




async function fixDoubleBlack(x) { 

  if (x == rbroot) return; 

  let Sibling = sibling(x), parent = Parent(x); 


  if (Sibling == "null") { 
    // No sibiling, double black pushed up 
  await  fixDoubleBlack(parent); 
  } 
  
  else { 
  
    if ( getcolor(Sibling) == "red") { 
     

      setcolor(parent , "red")
    await  setvcolor(parent , "red")



      setcolor(Sibling , "black")
      await   setvcolor(Sibling , defaultcolor)

      

      if (isOnLeft(Sibling)) { 
        // left case 
        rightRotate(parent); 

      }

      
      else { 
        // right case 
        leftRotate(parent); 
      } 


   await   fixDoubleBlack(x); 


    } 
    
    
    else { 
      // Sibling black 
      if (hasRedChild(Sibling)) { 

        // at least 1 red children 
        if ( Left(Sibling) != "null" &&  getcolor(Left(Sibling)) == "red") { 
          if (isOnLeft(Sibling)) { 
            // left left 
           

            setcolor(Left(Sibling) , getcolor(Sibling))
            await     setvcolor(Left(Sibling) , getvcolor(Sibling))




            setcolor(Sibling, getcolor(parent))
            await setvcolor(Sibling , getvcolor(parent))


            rightRotate(parent); 
          } 
          
          else { 
            // right left 

            setcolor(Left(Sibling), getcolor(parent))
            await   setvcolor(Left(Sibling) , getvcolor(parent))


            rightRotate(Sibling); 
            leftRotate(parent); 
          } 

        } 
        
        else { 
         
          if (isOnLeft(Sibling)) { 
            // left right 
           
            setcolor(Right(Sibling), getcolor(parent))
            await    setvcolor(Right(Sibling) , getvcolor(parent))


            leftRotate(Sibling); 
            rightRotate(parent); 

          } 
          
          else { 
            // right right 
         

            setcolor(Right(Sibling), getcolor(Sibling))
            await   setvcolor(Right(Sibling) , getvcolor(Sibling))


    
            setcolor(Sibling, getcolor(parent))
            await setvcolor(Sibling , getvcolor(parent))


            leftRotate(parent); 
          } 
        } 

       
        setcolor(parent, "black")
        await setvcolor(parent , defaultcolor)



      } 
      
      else { 
        // 2 black children 
       
        setcolor(Sibling, "red")
        await  setvcolor(Sibling , "red")
        
        

        if (getcolor(parent) == "black")  {

      await    fixDoubleBlack(parent); 
        }
          
        else{

        setcolor(parent, "black")
        await   setvcolor(parent ,defaultcolor)


        }
        
      } 
    } 
  }
  

  DelShiftleft(x)
DelShiftright(x)

}


function swapValues(u, v) { 
  let temp; 
  temp =  nodekey(u);
  setnodekey(u , nodekey(v))
  setnodekey(v ,temp)

} 



function successor(x) { 
  if (x=="null") return;
  let temp = x; 

  while ( Left(temp) != "null")  {
    temp = Left(temp)
  }
  return temp; 
} 


function BSTreplace(x) { 
  // when node have 2 children 
  if ( Left(x) != "null" &&  Right(x) != "null")  return successor(Right(x)); 

  // when leaf 
  if ( Left(x) == "null" &&  Right(x) == "null") return "null"; 

  // when single child 
  if ( Left(x) != "null") return Left(x);

  else  return Right(x)
} 


async function deleteNode(v) { 

  let u = BSTreplace(v); 

  // True when u and v are both black 
  let uvBlack = ((u == "null" || getcolor(u) == "black") && ( getcolor(v) == "black")); 

  let parent =  Parent(v)



  if (u == "null") { 
    // u is NULL therefore v is leaf 
    if (v == "null") { 
      // v is root, making root null 
      rbroot = "null"; 
    } 

    else { 


      if (uvBlack == true) { 
        // u and v both black 
        // v is leaf, fix double black at v 
        await fixDoubleBlack(v); 

      }
      
      else { 
        // u or v is red 
        if (sibling(v) != "null")  {
          // sibling is not null, make it red" 
         
         setcolor( sibling(v) , "red")
         await  setvcolor( sibling(v) , "red")

        }
           
      } 

      // delete v from the tree 
      if (isOnLeft(v)) { 
    
       tree[parent+"treeleft"]  = "null"

      } 
      else { 

      
        tree[parent+"treeright"]  = "null"



      }

    } 

    document.getElementById(v).remove()
    return; 
  } 

  if (Left(v) == "null" ||  Right(v) == 'null') { 
    // v has 1 child 
    if (v == rbroot) { 
      // v is root, assign the value of u to v, and delete u 
    
      setnodekey(v , nodekey(u))

      tree[v+"treeleft"] = "null" 
      tree[v+"treeright"] = "null" 

     
      document.getElementById(u).remove()
    } 
    
    else { 
      // Detach v from tree and move u up 
      if (isOnLeft(v)) { 

        tree[parent+"treeleft"] = u;
        
      } 
      
      else { 

        
        tree[parent+"treeright"] = u; 


      } 


      
    
      document.getElementById(v).remove()

      
      rbparent[u] = parent

      if (uvBlack == true) { 
        // u and v both black, fix double black at u 
      await  fixDoubleBlack(u); 
      } 
      
      else { 
        // u or v red, color u black 
        setcolor(u,"black")
        await  setvcolor(u , defaultcolor)
      } 

    } 
    return; 
  } 

  // v has 2 children, swap values with successor and recurse 
  swapValues(u, v); 
 await deleteNode(u); 


} 


async function search( n) { 

 let temp = rbroot; 

  while (temp != "null") { 

    let colorize = getvcolor(temp);
    await hilight(temp , "rgb(109,209,0,1)");
    hilight(temp , colorize);


    if (n < nodekey(temp)) { 

      if ( Left(temp) == "null")  {

        break; 
      }
        
      else {
        temp =  Left(temp) 
      }
        
    } 
    
    else if (n == nodekey(temp)) { 

      break; 

    }
    
    else { 

      if ( Right(temp) == "null")  {
         break; 
      }
       
      else {
        temp =  Right(temp)
      }
        
    } 
  } 

  return temp; 


} 



async function RBTreedelete( n) { 
 
  redrawevent = requestAnimationFrame(redrawsplay)

  if ( document.getElementById(rbroot) == null) return; 

  let v = await search(n), u; 

  let vparent = rbparent[v]

  if ( nodekey(v) != n) { 
    Log("No node found to delete")
    return; 
  } 

 await deleteNode(v); 



 //calcheight(rbroot)

 document.getElementById(rbroot).style.top = 150+"px";
 document.getElementById(rbroot).style.left = 1905+"px";

// BalanceAll(rbroot);

BalanceBST(rbroot)

RBTreedelalign(vparent);
Shiftleft(rbroot)
Shiftright(rbroot)
DelShiftleft(rbroot)
DelShiftright(rbroot)
await waitforme (speed+100);

 cancelAnimationFrame(redrawevent)





} 




placeholdermessage = `Try typing 'RBTreeinsert(${Math.ceil(Math.random() * 1000)})'`;


window.onload = async function WindowLoad(event) {

  let adder = ""

for (let i = 0 ; i < placeholdermessage.length ; ++i) {
adder = adder + placeholdermessage[i];

codehere.placeholder = adder

await waitforme(70)

}
            
 }