
var splayroot = 0;



async function insertsplay(node_ , key_)  {

    
    if ($(`#${node_}`).length == 0)  {

        await display("Tree Empty. Adding root node.");
        let vid =count;
       await  avl(key_); 
         $(`#${vid}`).css({ "top" : "0px", "left" : "0px"})
         $(`#${vid}`).animate({ "top" : "0px", "left" : "1900px"})
         $(`#${vid}`).css("transition","1200ms linear")
         let bodyy = $(document);
  
         bodyy.scrollLeft(1200)
         bodyy.scrollTop(0)
  
  
  
         return;
      }
  
  
      await hilight(node_, "rgb(109,209,0,1)" , "1200ms linear" , 1300 )
      hilight(node_, defaultcolor , "1200ms linear" , 1300 )
  
  
   
      /* Otherwise, recur down the tree */
      if (key_ <  parseInt( $(`#${node_}treeval`).text() , 10) ) {
  
              if (tree[`${node_}treeleft`] == "null") {
  
                await display("Correct place to insert the element = CurrentNode->left")
          let vid = count;
        await  avl(key_);
       $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "0ms"})
       $(`#${vid}`).offset({top: ($("#"+node_).offset().top+90 ) , left :($("#"+node_).offset().left-110) })
  
  
          await new Promise(resolve => {
  
  
            setTimeout(()=> {
              treefy(`${node_}treeleft` ,vid)
              
              resolve('')
              
             },500)
              
  
  
          })
       
          
        
               }
  
               Log("Item smaller then current node, going left")
  
      await insertsplay(tree[`${node_}treeleft`], key_);
  
        
      }
     
     
      else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {
  
  
                 if (tree[`${node_}treeright`] == "null") {
  
                  await display("Correct place to insert the element = CurrentNode->right")
          let vid = count;
          avl(key_);
  
  
          $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "0ms linear"})
          $(`#${vid}`).offset({top: ($("#"+node_).offset().top+90 ) , left :($("#"+node_).offset().left+80) })
  
  
          await new Promise(resolve => {
  
  
            setTimeout(()=> {
              treefy(`${node_}treeright` ,vid)
              
              resolve('')
              
             },500)
              
  
  
          })
        
                   }
  
  
                   Log("Item larger then current node, going right")
                   await   insertsplay(tree[`${node_}treeright`], key_); 
  
        
      }
  
  
      let nodeheight = 1 + Math.max(height(tree[`${node_}treeleft`]), height(tree[`${node_}treeright`]));
      $(`#${node_}height`).text(nodeheight)
  
  
  
splayroot = node_

}




//root->left = x->right;

                          //root     left      x 
function modifysourcedest( source ,sourcepos ,dest )   {

let olddest;



let sourcecombo = `#${source}tree${sourcepos}`

treefy(`${source}tree${sourcepos}`,"null")





let destcombo = `#${dest}treetop`

for (let xx= 0 ; xx < _lines.length; ++xx) {


    if  (_lines[xx].right_node == destcombo )  {
 
 
     _lines[xx].left_node = `#undefinedtree`;

 
 break;
    } 
 
     }




    for (let xx= 0 ; xx < _lines.length; ++xx) {


   if  (_lines[xx].left_node == sourcecombo)  {


    currentdest = _lines[xx].right_node;

    _lines[xx].right_node = `#${dest}treetop`

    tree[`${source}tree${sourcepos}`] = dest;
break;

   } 

    }



    let pardel = `#${currentdest}treetop`


for (let xx= 0 ; xx < _lines.length; ++xx) {


    if  (_lines[xx].right_node == pardel && _lines[xx].left_node != `#${source}tree${sourcepos}`)  {
 
 
     _lines[xx].left_node = `#undefinedtree`;

 
 break;
    } 
 
     }





mySVG.redrawLines();



$( '#'+dest ).draggable({
    drag: function(event, ui){mySVG.redrawLines();}
  });

}


function srr(x)  
{  

  let xparent = parent[x];
    let y = tree[`${x}treeleft`] /*x->left;  */
  //  x->left = y->right; 
    modifysourcedest(x,"left",tree[`${y}treeright`])
  //  y->right = x; 
    modifysourcedest(y,"right",x)
    Log(`${$("#"+xparent+"treeval").text() }    ${$("#"+y+"treeval").text()}`)
    if ( parseInt( $("#"+xparent+"treeval").text(),10) > parseInt( $("#"+y+"treeval").text(),10)   ) modifysourcedest(xparent,"left",y)  
  else modifysourcedest(xparent,"right",y) 
    return y;  
}  


function slr(x)  
{  

  let xparent = parent[x];

     let y = tree[`${x}treeright`] /*x->right;  */  
  //  x->right = y->left;
  modifysourcedest(x,"right",tree[`${y}treeleft`])  
   // y->left = x;
   modifysourcedest(y,"left",x)

   Log(`${$("#"+xparent+"treeval").text() }    ${$("#"+y+"treeval").text()}`)

  if ( parseInt( $("#"+xparent+"treeval").text(),10) > parseInt( $("#"+y+"treeval").text(),10)  ) { modifysourcedest(xparent,"left",y);}  

  else modifysourcedest(xparent,"right",y) 

 

    return y;  
}  


//modifysourcedest(tree[`${0}treeleft`] , "left", splay(tree[tree[`${0}treeleft`]+"treeleft"]))