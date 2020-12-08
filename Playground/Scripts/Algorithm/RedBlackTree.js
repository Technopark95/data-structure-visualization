


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

async function swapcolor (tparent,tgrandparent)  {
    

    let parentptcolor = $("#"+tparent+"col").text();
    let gparentptcolor = $("#"+tgrandparent+"col").text();

    let parentanicolor = $("#"+tparent).css("background-color");
    let gparentanicolor = $("#"+tgrandparent).css("background-color");

    $("#"+tparent+"col").text(gparentptcolor);
    await waitforme(speed+30);
    $("#"+tgrandparent+"col").text(parentptcolor);

    $("#"+tparent).css({"background-color" : gparentanicolor});

    await waitforme(speed+30);
    $("#"+tgrandparent).css({"background-color" : parentanicolor} );


    await waitforme(speed)
}
 
function RBTreerotateLeft( pt) 
{ 
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
  
function RBTreerotateRight( pt) 
{ 
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
               
                   swapcolor(parent_pt , grand_parent_pt)
               
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

                 
                swapcolor(parent_pt , grand_parent_pt)


                pt = parent_pt; 
            } 
        } 
    }
    
    



    
  
     $("#"+_root+"col").text("black")
     $("#"+_root).css("background-color",defaultcolor)


} 

var direc = 0
function rbInsert(rbroot, pt) 
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
        tree[rbroot+"treeleft"]  = rbInsert(tree[rbroot+"treeleft"], pt); 

        let leftt =  tree[rbroot+"treeleft"];
        rbparent[leftt] = rbroot; 
        
    } 
    else if (parseInt( $("#"+pt+"treeval").text(),10) > parseInt( $("#"+rbroot+"treeval").text(),10)) 
    { 
        tree[rbroot+"treeright"] = rbInsert(tree[rbroot+"treeright"], pt); 
    

        let rightt =  tree[rbroot+"treeright"];
        rbparent[rightt] = rbroot;
        

    } 
  
    /* return the (unchanged) node pointer */
    return rbroot; 
} 
  





function RBnode(element) {

    newnode = '<div id="'+count+'" style="transition:200ms;transform:scale(.8,.8); background-color:red;left:1209px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p><p  id="'+ count+"col" +'" style="display:none;">'+"red"+'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white; font-size:70%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>     </div>';


   $("body").prepend(newnode)
   
   $("#"+count).draggable({
    drag: function(event, ui){mySVG.Splaylines();}
  });

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

   divbyelement[element] = count

   count = count +1;
   counttreenodes = counttreenodes + 1;

return count;
 }


 async function RBTreeinsert(data) 
{ 

 

    redrawevent= setInterval(redrawsplay , 50);

    
    if ($("#"+rbroot).length == 0)  {

        $(document).scrollLeft(1200)
        $(document).scrollTop(0)
    }

    let pt = RBnode(data) -1; 

    $(".dragg").css("transition" , speed+"ms linear");

  
    // Do a normal BST insert 
   rbroot  =  await rbInsert(rbroot, pt); 

   if (rbparent[pt] != undefined)
    if (parseInt( $("#"+pt+"treeval").text(),10) > parseInt( $("#"+rbparent[pt]+"treeval").text(),10))
      $(`#${pt}`).offset({"top" : `${$("#"+rbparent[pt]).offset().top+150}` , "left" : `${$("#"+rbparent[pt]).offset().left+100}` })
    else
      $(`#${pt}`).offset({"top" : `${$("#"+rbparent[pt]).offset().top+150}` , "left" : `${$("#"+rbparent[pt]).offset().left-100}` })

    // fix Red Black Tree violations 

    await waitforme(speed+30)

 

    await  fixViolation(rbroot, pt); 

    calcheight(rbroot)

    AVLpostleft[rbroot] = 1900;
    AVLposttop[rbroot] = 150;

    $(`#${rbroot}`).offset({"top" : `${150}` , "left" : `${ 1900 }` })

   
   await BalanceAll(rbroot);

   await waitforme (3000);

    clearInterval(redrawevent)





} 
  


async function RBTreesearch(h)  {

    await searchbst(rbroot ,h);
    
    
    }
    