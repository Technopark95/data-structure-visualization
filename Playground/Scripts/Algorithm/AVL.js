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

var r = 0;

var avlparent = []


var stopflag = 0;


skipbtn.style.display = 'none'

 async function rightRotate(y)  
{  
   let unbalparent = parent[y];

  
    let x =  tree[`${y}treeleft`] /*  y->left;   */
    let T2 = tree[`${x}treeright`]  /* x->right;  */

    tree[`${x}treeright`]  = y;
    tree[`${y}treeleft`]  = T2;

 
   
   let yh = Math.max( height(tree[`${y}treeleft`]) ,  height(tree[`${y}treeright`])) + 1;  
    $(`#${y}height`).text(yh)

    let xh = Math.max(height(tree[`${x}treeleft`]),  height(tree[`${x}treeright`])) + 1;
    
    $(`#${x}height`).text(xh)

    r = x;

  
      
     
    
    return x;  
  
}  
  

async function leftRotate(x)  
{  

  let unbalparent = parent[x];

  


    let y = tree[`${x}treeright`];
    let T2 = tree[`${y}treeleft`];  
  
    tree[`${y}treeleft`] = x;
    tree[`${x}treeright`] = T2

       
 
    let xheight = Math.max(height(tree[`${x}treeleft`]),  height(tree[`${x}treeright`])) + 1;  
    $(`#${x}height`).text(xheight)

    let yheight = Math.max(height(tree[`${y}treeleft`]),  height(tree[`${y}treeright`])) + 1;  
    $(`#${y}height`).text(yheight)


    r = y;
 
      

    return y;  
}  
  


function getBalance(N)  
{  
    if (N == "null")  return 0;  

    return (height(tree[`${N}treeleft`]) -  height(tree[`${N}treeright`]));  
}  



var avlnode;



async function insertavl(node_, key_) { 

    if (document.getElementById(node_) == null)  {

     avlnode =  avl(key_); 


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
    
   
     r= avlnode

       return avlnode;
    }

    
    await hilight(node_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    hilight(node_, defaultcolor , "1200ms" , 1300 )



    if (key_ <  parseInt( $(`#${node_}treeval`).text()) ) {

      


    tree[`${node_}treeleft`] = await insertavl(tree[`${node_}treeleft`], key_);

    let leftt =  tree[node_+"treeleft"];
    avlparent[leftt] = node_; 

    


    }
   
   
    else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {

      


    tree[`${node_}treeright`] = await insertavl(tree[`${node_}treeright`], key_);


    let rightt =  tree[node_+"treeright"];
    avlparent[rightt] = node_; 


                
    }

    else return node_;



    let nodeheight = 1 + Math.max(height(tree[`${node_}treeleft`]), height(tree[`${node_}treeright`]));
    $(`#${node_}height`).text(nodeheight)


    let balance =  getBalance(node_);  

   let lnode = tree[`${node_}treeleft`];
   let rnode = tree[`${node_}treeright`];

    let leftkey = $('#'+lnode+"treeval").text() ;
    let rightkey = $('#'+rnode+"treeval").text() ;

//



    if (balance > 1 && key_ <  parseInt( leftkey , 10))   {
    
    
          await hilight(node_ , "red","1200ms linear",1300);
          await display("Red node is unbalanced");
        let returned= await rightRotate(node_); 

      
        
        await hilight(node_ , defaultcolor,"1200ms linear",1300);

        return returned;

    }
  
    // Right Right Case  
    if (balance < -1 && key_ > parseInt( rightkey ,10))   {
   
     
      await hilight(node_ , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
        let returned= await leftRotate(node_); 

        await hilight(node_ , defaultcolor,"1200ms linear",1300);

        return returned;  


    }
  
    // Left Right Case  
    if (balance > 1 && key_ > parseInt( leftkey ,10))  
    {  

    
      await hilight(tree[`${node_}treeleft`] , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(tree[`${node_}treeleft`] , defaultcolor,"1200ms linear",1300);

        tree[`${node_}treeleft`] = await leftRotate(tree[`${node_}treeleft`]);

        // BalanceAll(node_);

        // await waitforme(speed+100)
  
    await   Shiftleft(node_)
    await   Shiftright(node_)
 
      await hilight(node_ , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(node_ , defaultcolor,"1200ms linear",1300);

        return  await rightRotate(node_);  

        
    }  
  


    // Right Left Case  
    if (balance < -1 && key_ < parseInt( rightkey,10))  
    {  

      await hilight(tree[`${node_}treeright`] , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(tree[`${node_}treeright`] , defaultcolor,"1200ms linear",1300);

     
      tree[`${node_}treeright`] = await rightRotate(tree[`${node_}treeright`]);

      // BalanceAll(node_);

      // await waitforme(speed+100)


    await   Shiftleft(node_)
    await   Shiftright(node_)
  
        await hilight(node_ , "red","1200ms linear",1300);
        await display("Red node is unbalanced");
       await hilight(node_ , defaultcolor,"1200ms linear",1300);

        
    return await leftRotate(node_);  
       
        
    }  



    r = node_


  if (stopflag == 0) {  await waitforme(speed+200); stopflag=1;}

    await   Shiftleft(r)
    await   Shiftright(r)

    
    

return node_;
    
} 
  
var dothetreefy = 0;




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


async function deleteavl( _root , _key) 
{ 

  await hilight(_root, "rgb(109,209,0,1)" , "1200ms linear" , 1300 )
    hilight(_root, defaultcolor , "1200ms linear" , 1300 )
  

    // base case f
    if (_root == "null") return _root; 

 
    // If the _key to be deleted is smaller than the _root's _key, 
    // then it lies in left subtree 
    if (_key < parseInt(  $('#'+_root+"treeval").text() , 10) )  {
      
      tree[_root+`treeleft`] = await deleteavl(tree[_root+`treeleft`], _key); 

    }
    // If the _key to be deleted is greater than the _root's _key, 
    // then it lies in right subtree 
    else if (_key > parseInt( $('#'+_root+"treeval").text() , 10))  {

      tree[_root+`treeright`]=   await deleteavl(tree[_root+`treeright`], _key); 
      
    }


    
    else
    { 
        // node with only one child or no child 
        if (tree[`${_root}treeleft`] == "null") 
        { 
            let temp = tree[`${_root}treeright`]; 
           document.getElementById(_root).remove();
           r = temp
           return temp;
         
        } 
        else if (tree[`${_root}treeright`] == "null") 
        { 
            let temp = tree[`${_root}treeleft`]; 

            document.getElementById(_root).remove();
            r = temp;

            return temp;
           
        } 

        else {

      
        await display("getting Inorder Successor to replace");

        let temp = await minValueNode(tree[`${_root}treeright`]); 

        // Copy the inorder successor's content to this node 
        await display("Copy the inorder successor's content to this node");
        $('#'+_root+"treeval").text(  $('#'+temp+"treeval").text() );
  
        // Delete the inorder successor 
        await display("Delete the inorder successor");
          dothetreefy=1;
        tree[`${_root}treeright`] = await deleteavl(tree[`${_root}treeright`], $('#'+temp+"treeval").text()); 
    } 

  }



  // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE  
 let nodeheight = 1 + Math.max(height(tree[`${_root}treeleft`]), height(tree[`${_root}treeright`]));  

  $(`#${_root}height`).text(nodeheight)

// STEP 3: GET THE BALANCE FACTOR OF  
// THIS NODE (to check whether this  
// node became unbalanced)  
let balance = getBalance(_root);  

// If this node becomes unbalanced,  
// then there are 4 cases  




// Left Left Case  
if (balance > 1 &&  getBalance(tree[`${_root}treeleft`]) >= 0)   {


  await hilight(_root , "red","1200ms linear",1300);
          await display("Red node is unbalanced");
  let returned= await rightRotate(_root);  

  await hilight(_root , defaultcolor,"1200ms linear",1300);


  return returned;

}

// Right Right Case  
if (balance < -1 &&  getBalance(tree[`${_root}treeright`]) <= 0)  {


  await hilight(_root , "red","1200ms linear",1300);
  await display("Red node is unbalanced");

  let returned = await leftRotate(_root);  

  await hilight(_root , defaultcolor,"1200ms linear",1300);



  return returned;


}

// Left Right Case  
if (balance > 1 &&  getBalance(tree[`${_root}treeleft`]) < 0)  {  


  await hilight(tree[`${_root}treeleft`] , "red","1200ms linear",1300);
  await display("Red node is unbalanced");
  await hilight(tree[`${_root}treeleft`] , defaultcolor,"1200ms linear",1300);


  tree[`${_root}treeleft`] = await leftRotate(tree[`${_root}treeleft`]); 

  DelShiftleft(_root)
   DelShiftright(_root)
  

  await hilight(_root , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(_root , defaultcolor,"1200ms linear",1300);

  let returned = await rightRotate(_root); 
  

  return returned;

}  



// Right Left Case  
if (balance < -1 &&  getBalance(tree[`${_root}treeright`]) > 0)  {  
 
  await hilight(tree[`${_root}treeright`] , "red","1200ms linear",1300);
  await display("Red node is unbalanced");
  await hilight(tree[`${_root}treeright`] , defaultcolor,"1200ms linear",1300);

 
  tree[`${_root}treeright`] = await rightRotate(tree[`${_root}treeright`]);


  DelShiftleft(_root)
   DelShiftright(_root)
  
  
  await hilight(_root , "red","1200ms linear",1300);
  await display("Red node is unbalanced");
 await hilight(_root , defaultcolor,"1200ms linear",1300);


  let returned= await leftRotate(_root);  


        
  return returned;
}  

r= _root;

DelShiftleft(r)
DelShiftright(r)
return _root;

}  



async function searchavl(ro , item) {

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
       await searchavl(tree[ro+"treeleft"], item)
    
      }
    
    
      if (     parseInt(document.getElementById(ro+"treeval").innerHTML )   < item     ) {
    
        await display("Item is larger than "+ parseInt(document.getElementById(ro+"treeval").innerHTML ) + " Going Right") 
      await  searchavl(tree[ro+"treeright"], item)
    
      }
    
    
    
    }
  






    






function avl(element) {

    newnode = '<div id="'+count+'" style="transform:scale(.8,.8);left:1250px;top:150px;transition:'+ speed+'ms linear;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


    document.body.insertAdjacentHTML("afterbegin",newnode)
   $("#"+count).draggable({drag:function(){mySVG.Splaylines()}});

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

  
 
   count = count +1;
   counttreenodes = counttreenodes + 1;

return count-1;
 }







 
async function InsertAVL (h) {


  
  redrawevent= requestAnimationFrame(redrawsplay)

  if (document.getElementById(r)== null) {
    window.scrollTo(1200,0)

  }

   await insertavl(r,h);


    await waitforme(speed+100)

    AVLpostleft[r] = 1905;
    AVLposttop[r] = 150;

    document.getElementById(r).style.top = 150+"px";
    document.getElementById(r).style.left = 1905+"px";
  
   BalanceBST(r);

       Shiftleft(r)
       Shiftright(r)

       DelShiftleft(r)
       DelShiftright(r)

    await waitforme(speed+100);

    cancelAnimationFrame(redrawevent)

  mySVG.redrawLines();
  stopflag = 0;


}



async function DeleteAVL (h) {


  redrawevent= requestAnimationFrame(redrawsplay)

  await deleteavl(r,h);

  AVLpostleft[r] = 1900;
  AVLposttop[r] = 150;

    document.getElementById(r).style.top = 150+"px";
    document.getElementById(r).style.left = 1905+"px";

    BalanceBST(r);

    Shiftleft(r)
    Shiftright(r)

    DelShiftleft(r)
    DelShiftright(r)

  await waitforme(speed+100);

  cancelAnimationFrame(redrawevent)



}


async function SearchAVL(h)  {

await searchavl(r,h);


}



slider.onchange= function() {


  let x = document.getElementsByClassName("dragg");
  let ie;
  for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed+"ms linear";
  }
  
  
}



placeholdermessage = `Try typing 'InsertAVL(${Math.ceil(Math.random() * 1000)})'`;


window.onload = async function WindowLoad(event) {

  let adder = ""

for (let i = 0 ; i < placeholdermessage.length ; ++i) {
adder = adder + placeholdermessage[i];

codehere.placeholder = adder

await waitforme(70)

}
            
 }



//            insertavl(0,65)