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




 async function rightRotate(y)  
{  
   let unbalparent = parent[y];

  
    let x =  tree[`${y}treeleft`] /*  y->left;   */
    let T2 = tree[`${x}treeright`]  /* x->right;  */

 
      if ( parseInt( $(`#${unbalparent}treeval`).text() ,10)   <  parseInt($(`#${x}treeval`).text(),10) )  {
        treefy(unbalparent+"treeright" , x)
        del(`${unbalparent}treeright` , `${y}treetop`);
        
        }
    
        else {
    
          treefy(unbalparent+"treeleft" , x)
          del(`${unbalparent}treeleft` , `${y}treetop`);
        
        }
  
    
    
     //   SyncMoveBranch(x, Math.abs(ypos.left-xpos.left),-90);
    
  
     del(`${y}treeleft` , `${x}treetop`);
    
    // Perform rotation  
    treefy(x+"treeright" , y)   /* x->right = y;  */ 
   
   if (T2 != "null"){ 
       treefy(y+"treeleft" , T2)
       del(`${x}treeright` , `${T2}treetop`);
     
    


}
   /* y->left = T2;  */
   else tree[y+"treeleft" ] = T2
  
    
  
    // Update heights  
   // Log(`left height = ${height(tree[`${y}treeleft`])}   right height = ${height(tree[`${y}treeright`])}`)
   
   let yh = Math.max( height(tree[`${y}treeleft`]) ,  height(tree[`${y}treeright`])) + 1;  
    $(`#${y}height`).text(yh)


    //Log(`left height = ${height(tree[`${x}treeleft`])}   right height = ${height(tree[`${y}treeright`])}`)
    let xh = Math.max(height(tree[`${x}treeleft`]),  height(tree[`${x}treeright`])) + 1;
    
    $(`#${x}height`).text(xh)

    r = x;

 //   SyncMoveBranch(y,Math.abs(ypos.left-xpos.left), 90);
 //   if (T2!="null") SyncMoveBranch(T2,Math.abs(T2pos.left - ypos.left), 0);

    
    return x;  

    // Return new root  
  
}  
  

function leftRotate(x)  
{  

  let unbalparent = parent[x];

  


    let y = tree[`${x}treeright`];
    let T2 = tree[`${y}treeleft`];  
  


       
    if ( parseInt( $(`#${unbalparent}treeval`).text() ,10)   <  parseInt($(`#${x}treeval`).text(),10) )  {
      treefy(unbalparent+"treeright" , y)
      del(`${unbalparent}treeright` , `${x}treetop`);
       
      }
  
      else {
  
        treefy(unbalparent+"treeleft" , y)
        del(`${unbalparent}treeleft` , `${x}treetop`);
         
      }


   //   SyncMoveBranch(y, -Math.abs(ypos.left-xpos.left),-90);
    
    
    
    // Perform rotation  
    del(`${x}treeright` , `${y}treetop`);
     
    treefy(y+"treeleft" , x)

    if (T2 != "null"){ 
      treefy(x+"treeright" , T2) 
      del(`${y}treeleft` , `${T2}treetop`);
    


}

else tree[x+"treeright" ] = T2;
    
  
  
    // Update heights  
    let xheight = Math.max(height(tree[`${x}treeleft`]),  height(tree[`${x}treeright`])) + 1;  
    $(`#${x}height`).text(xheight)

    let yheight = Math.max(height(tree[`${y}treeleft`]),  height(tree[`${y}treeright`])) + 1;  
    $(`#${y}height`).text(yheight)

    // Return new root 
    r = y;

  //  SyncMoveBranch(x,-Math.abs(ypos.left-xpos.left), 90);
  //  if (T2!="null") SyncMoveBranch(T2,-Math.abs(T2pos.left - xpos.left), 0);
    

    return y;  
}  
  


function getBalance(N)  
{  
    if (N == "null")  return 0;  

    return (height(tree[`${N}treeleft`]) -  height(tree[`${N}treeright`]));  
}  


async function insertavl(node_, key_) { 


    if ($(`#${node_}`).length == 0)  {

      await display("Tree Empty. Adding root node.");

     await  avl(key_); 
    
       let bodyy = $(document);

       bodyy.scrollLeft(1200)
       bodyy.scrollTop(0)



       return;
    }


    // await hilight(node_, "rgb(109,209,0,1)" , "1200ms linear" , 1300 )
    // hilight(node_, defaultcolor , "1200ms linear" , 1300 )


 
    /* Otherwise, recur down the tree */
    if (key_ <  parseInt( $(`#${node_}treeval`).text() , 10) ) {

            if (tree[`${node_}treeleft`] == "null") {

              await display("Correct place to insert the element = CurrentNode->left")
        let vid =  count;
      await  avl(key_);
      let videlement = document.getElementById(vid)
      videlement.style.transition = speed+"ms linear";
      videlement.style.top = parseInt( document.getElementById(node_).style.top)+85+"px";
      videlement.style.left = parseInt( document.getElementById(node_).style.left)-35+"px";


        await new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeleft` ,vid)
            
            resolve('')
            
           },speed+100)
            


        })
     
        
      
             }

             Log("Item smaller then current node, going left")

    await insertavl(tree[`${node_}treeleft`], key_);

      
    }
   
   
    else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {


               if (tree[`${node_}treeright`] == "null") {

                await display("Correct place to insert the element = CurrentNode->right")
        let vid = count;
        avl(key_);
        let videlement = document.getElementById(vid)
        videlement.style.transition = speed+"ms linear";
        videlement.style.top = (parseInt( document.getElementById(node_).style.top)+85)+"px";
        videlement.style.left = (parseInt( document.getElementById(node_).style.left)+35)+"px";


        await new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeright` ,vid)
            
            resolve('')
            
           },speed+100)
            


        })
      
                 }


                 Log("Item larger then current node, going right")
                 await   insertavl(tree[`${node_}treeright`], key_); 

      
    }


    let nodeheight = 1 + Math.max(height(tree[`${node_}treeleft`]), height(tree[`${node_}treeright`]));
    $(`#${node_}height`).text(nodeheight)





    let balance =  getBalance(node_);  

   // Output("balance" + balance + "  node  "+ node_ )

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

        let newnodeleft = await leftRotate(tree[`${node_}treeleft`]);

        await BalanceAll(node_);

        await waitforme(speed+100);
       
        let optiona = tree[`${node_}treeleft`];

        del (`${node_}treeleft` , `${optiona}treetop`);

         treefy(`${node_}treeleft`, newnodeleft);

      await hilight(node_ , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(node_ , defaultcolor,"1200ms linear",1300);

   
        let returned = await rightRotate(node_);  

       
        return returned;
        
    }  
  


    // Right Left Case  
    if (balance < -1 && key_ < parseInt( rightkey,10))  
    {  

      await hilight(tree[`${node_}treeright`] , "red","1200ms linear",1300);
      await display("Red node is unbalanced");
      await hilight(tree[`${node_}treeright`] , defaultcolor,"1200ms linear",1300);

     
        let newnoderight = await rightRotate(tree[`${node_}treeright`]);

        await BalanceAll(node_);
        await waitforme(speed+100);
        let optiona = tree[`${node_}treeright`];

        del(`${node_}treeright` , `${optiona}treetop`);

        treefy(`${node_}treeright`, newnoderight);


        await hilight(node_ , "red","1200ms linear",1300);
        await display("Red node is unbalanced");
       await hilight(node_ , defaultcolor,"1200ms linear",1300);

        
        let returned= await leftRotate(node_);  
       
        
        return returned;
    }  



    r = node_
    
return node_;
    
} 
  
var dothetreefy = 0;

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

    
     if (dothetreefy == 1) { treefy(_root+`treeleft`, tree[_root+`treeleft`]); dothetreefy =0;}
     

    }
    // If the _key to be deleted is greater than the _root's _key, 
    // then it lies in right subtree 
    else if (_key > parseInt( $('#'+_root+"treeval").text() , 10))  {

      tree[_root+`treeright`]=   await deleteavl(tree[_root+`treeright`], _key); 
      
    if (dothetreefy == 1) {treefy(_root+`treeright`, tree[_root+`treeright`]); dothetreefy=0; }

    }


    
    else
    { 
        // node with only one child or no child 
        if (tree[`${_root}treeleft`] == "null") 
        { 
            let temp = tree[`${_root}treeright`]; 
           $("#"+_root).remove();
           dothetreefy =1;
           r = temp
           return temp;
         
        } 
        else if (tree[`${_root}treeright`] == "null") 
        { 
            let temp = tree[`${_root}treeleft`]; 
         
            dothetreefy =1;
           
            $("#"+_root).remove();
         r = temp;

            return temp;
           
        } 

        else {

        
  
        // node with two children: Get the inorder successor (smallest 
        // in the right subtree) 
  
        await display("getting Inorder Successor to replace");

        let temp = await minValueNode(tree[`${_root}treeright`]); 


        
        // Copy the inorder successor's content to this node 
        await display("Copy the inorder successor's content to this node");
        $('#'+_root+"treeval").text(  $('#'+temp+"treeval").text() );
  
        // Delete the inorder successor 
        await display("Delete the inorder successor");
          dothetreefy=1;
        tree[`${_root}treeright`] = await deleteavl(tree[`${_root}treeright`], $('#'+temp+"treeval").text()); 

        treefy(`${_root}treeright`,tree[`${_root}treeright`])
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


  let newnodeleft = await leftRotate(tree[`${_root}treeleft`]); 
  
  await waitforme(2000);

  let optiona = tree[`${_root}treeleft`];

  del (`${_root}treeleft` , `${optiona}treetop`);

  treefy(`${_root}treeleft`, newnodeleft);

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

 
  let newnoderight = await rightRotate(tree[`${_root}treeright`]);
  
  await waitforme(2000);
  let optiona = tree[`${_root}treeright`];

  del(`${_root}treeright` , `${optiona}treetop`);

  treefy(`${_root}treeright`, newnoderight);
  
  await hilight(_root , "red","1200ms linear",1300);
  await display("Red node is unbalanced");
 await hilight(_root , defaultcolor,"1200ms linear",1300);


  let returned= await leftRotate(_root);  

        
  return returned;
}  

r= _root;


return _root;

}  







    






function avl(element) {

    newnode = '<div id="'+count+'" style="transform:scale(.8,.8);left:1250px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


    document.body.insertAdjacentHTML("afterbegin",newnode)
   $("#"+count).draggable();

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

   divbyelement[element] = count
 
   count = count +1;
   counttreenodes = counttreenodes + 1;

return count;
 }







 
async function InsertAVL (h) {

  
  redrawevent= requestAnimationFrame(redraw)

    await insertavl(r,h);

    AVLpostleft[r] = 1900;
    AVLposttop[r] = 150;

    document.getElementById(r).style.top = 150+"px";
    document.getElementById(r).style.left = 1905+"px";

    $(".dragg").css("transition" , speed+"ms linear");
  
   BalanceAll(r);

    await waitforme(speed+100);

    cancelAnimationFrame(redrawevent)

  mySVG.redrawLines();


}



async function DeleteAVL (h) {


  redrawevent= requestAnimationFrame(redraw)

  await deleteavl(r,h);

  AVLpostleft[r] = 1900;
  AVLposttop[r] = 150;
  $(".dragg").css("transition" , speed+"ms linear");

    document.getElementById(r).style.top = 150+"px";
    document.getElementById(r).style.left = 1905+"px";

   BalanceAll(r);

  await waitforme(speed+100);

  cancelAnimationFrame(redrawevent)


}


async function SearchAVL(h)  {

await searchbst(r,h);


}


//            insertavl(0,65)