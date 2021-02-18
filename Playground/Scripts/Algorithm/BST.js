
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


var avlnode;

var avlparent = {}

var stopflag = 0;

var r = 0;

var deletednode = 0;
skipbtn.style.display = 'none'


async function insertbst(node_, key_) { 


    if (document.getElementById(node_) == null)  {

      avlnode =  leaf(key_); 

      setTimeout(()=> {

     
      if (avlparent[avlnode] != undefined)
if (parseInt( $("#"+avlnode+"treeval").text(),10) > parseInt( $("#"+avlparent[avlnode]+"treeval").text(),10)){
 
    document.getElementById(avlnode).style.top = parseInt( document.getElementById(avlparent[avlnode]).style.top)+85+"px";
    document.getElementById(avlnode).style.left = parseInt( document.getElementById(avlparent[avlnode]).style.left)+35+"px";

} 
else {

    document.getElementById(avlnode).style.top = parseInt( document.getElementById(avlparent[avlnode]).style.top)+85+"px";
    document.getElementById(avlnode).style.left = parseInt( document.getElementById(avlparent[avlnode]).style.left)-35+"px";

} 

},100)


        r= avlnode;
        return avlnode;
 
    }


    await hilight(node_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    hilight(node_, defaultcolor , "1200ms" , 1300 )


 
    /* Otherwise, recur down the tree */
    if (key_ <  parseInt( $(`#${node_}treeval`).text()) ) {


      tree[`${node_}treeleft`] = await insertbst(tree[`${node_}treeleft`], key_);
  
      let leftt =  tree[node_+"treeleft"];
      avlparent[leftt] = node_; 
  
  
      }
     
     
      else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {
  
  
      tree[`${node_}treeright`] = await insertbst(tree[`${node_}treeright`], key_);
  
  
      let rightt =  tree[node_+"treeright"];
      avlparent[rightt] = node_; 
  
  
                  
      }
  
      else return node_;

      if (stopflag == 0) {  await waitforme(speed+200); stopflag=1;}
 await   Shiftleft(node_)
 await   Shiftright(node_)


   r = node_;

  return node_;

    
} 
  


async function searchbst(ro , item) {

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
     await searchbst(tree[ro+"treeleft"], item)
  
    }
  
  
    if (     parseInt(document.getElementById(ro+"treeval").innerHTML )   < item     ) {
  
      await display("Item is larger than "+ parseInt(document.getElementById(ro+"treeval").innerHTML ) + " Going Right") 
    await  searchbst(tree[ro+"treeright"], item)
  
    }
  
  
  
  }



  async function  minValueNode( node) 
  { 
      let current = node; 
    
      /* loop down to find the leftmost leaf */
      while ( tree[`${current}treeleft`] != "null")  {
  
        await hilight(current, "red" , "1200ms" , 1300 )
        hilight(current, defaultcolor , "1200ms" , 1300 )
  
          current = tree[`${current}treeleft`]; 
  
      }
  
      await hilight(current, "red" , "1200ms" , 1300 )
      hilight(current, defaultcolor , "1200ms" , 1300 )
    
      return current; 
  } 
  
  
  
  
  async function deletebst( _root , _key) 
  { 
  
    await hilight(_root, "rgb(109,209,0,1)" , "1200ms" , 1300 )
      hilight(_root, defaultcolor , "1200ms" , 1300 )
    
    
      // base case f
      if (_root == "null") return _root; 
  
   
      // If the _key to be deleted is smaller than the _root's _key, 
      // then it lies in left subtree 
      if (_key < parseInt(document.getElementById(_root+"treeval").innerHTML ))  {
        
         tree[_root+`treeleft`] = await deletebst(tree[_root+`treeleft`], _key); 
  
         
      }
      // If the _key to be deleted is greater than the _root's _key, 
      // then it lies in right subtree 
      else if (_key > parseInt(document.getElementById(_root+"treeval").innerHTML ))  {
  
      tree[_root+`treeright`] = await deletebst(tree[_root+`treeright`], _key); 
  
      }
  
  
      
      else
      { 
          // node with only one child or no child 
          if (tree[`${_root}treeleft`] == "null") 
          { 
              let temp = tree[`${_root}treeright`]; 
             document.getElementById(_root).remove();
          
             deletednode = _root;
             Pullup(temp);
           
             r = temp
              return temp; 
          } 
          else if (tree[`${_root}treeright`] == "null") 
          { 
              let temp = tree[`${_root}treeleft`]; 
           
              document.getElementById(_root).remove();
         
              deletednode = _root;
             Pullup(temp);

             r = temp
              return temp; 
          } 
    
          // node with two children: Get the inorder successor (smallest 
          // in the right subtree) 
    
          await display("getting Inorder Successor to replace");
  
          let temp = await minValueNode(tree[`${_root}treeright`]); 
  
          
          // Copy the inorder successor's content to this node 
          await display("Copy the inorder successor's content to this node");

          document.getElementById(_root+"treeval").innerHTML = document.getElementById(temp+"treeval").innerHTML
    
          // Delete the inorder successor 
          await display("Delete the inorder successor");
          tree[`${_root}treeright`] = await deletebst(tree[`${_root}treeright`],document.getElementById(temp+"treeval").innerHTML); 
    
      } 

      DelShiftleft(_root)
      DelShiftright(_root)

   r = _root
      return _root; 
  
      
  } 
  

  async function InsertBST (value) {

 redrawevent =  requestAnimationFrame(redrawsplay);

    let flag = 0;

    if (document.getElementById(r) == null) {

      flag = 1;
    }

   
await insertbst(r, value);


   if ( flag == 1)  {
document.getElementById(r).style.top = 150+"px";
document.getElementById(r).style.left = 1900+"px";

window.scrollTo(1200,0)
    }

await waitforme(speed+100)

cancelAnimationFrame(redrawevent)

stopflag = 0;

  }


  async function DeleteBST (value) {

   
    let cpyr = r;
 let flag = 0;

    if (document.getElementById(r) == null) {

      flag = 1;
    }

    redrawevent = requestAnimationFrame(redrawsplay);

    await deletebst(r, value);

    if ( flag == 1)  {
document.getElementById(r).style.top = 150+"px";
document.getElementById(r).style.left = 1900+"px";
    }

    await waitforme (speed+100);

        cancelAnimationFrame(redrawevent)
    
      }


      slider.onchange= function() {


        let x = document.getElementsByClassName("dragg");
        let ie;
        for (ie = 0; ie < x.length; ie++) {
          x[ie].style.transition = speed+"ms linear";
        }
        
        
      }
      

