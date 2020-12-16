
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




function treefy(first,second ,color_ = "coral") {


    mySVG.drawLine({
      left_node:'#'+first,
      right_node:'#'+second+'treetop',
      error:true,
      col : color_,
      width:2,
        
    });
  
    var par = $("#"+first).parent().attr("id");
  
    tree[first] = second ;
    parent[second] = par;
  
  
        $( '#'+par ).draggable({
            drag: function(event, ui){
              
              
              mySVG.redrawLines();

             // mySVG.Splaylines();
            
            }
          });
          $( '#'+second ).draggable({
            drag: function(event, ui){mySVG.redrawLines();
            }
          });
  
        }
  



async function  preorder(CurrentNode) {

  
  if (CurrentNode == "null") {

    return ;

  }


    await hilight(CurrentNode , "red", "500ms"  ,700)
    Output($("#"+CurrentNode+"treeval").text())
    await display("Going left of " + CurrentNode )
    await preorder(tree[CurrentNode+"treeleft"])
    await display("Going right of " + CurrentNode )
    await preorder(tree[CurrentNode+"treeright"])
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , "rgba(75,0,130, 0.842)", "500ms"  ,700)
    

}


async function  inorder(CurrentNode ) {

    if (CurrentNode == "null") {
  
      return;
  
    }
  
    
    await display("Going left of " + CurrentNode )
    await inorder(tree[CurrentNode+"treeleft"])
    await hilight(CurrentNode , "red" , "500ms"  ,700)
    Output($("#"+CurrentNode+"treeval").text())
    await display("Going right of " + CurrentNode )
    await inorder(tree[CurrentNode+"treeright"])
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , "rgba(75,0,130, 0.842)" , "500ms"  ,700)
    
  
  
  }



async function  postorder(CurrentNode ) {

    if (CurrentNode == "null") {
  
      return;
  
    }
  
    await display("Going left of " + CurrentNode )
    await postorder(tree[CurrentNode+"treeleft"])
    await display("Going right of " + CurrentNode )
    await postorder(tree[CurrentNode+"treeright"])
    await hilight(CurrentNode , "red", "500ms"  ,700)
    Output($("#"+CurrentNode+"treeval").text())
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , "rgba(75,0,130, 0.842)", "500ms"  ,700)
  
  
  }




 async function preorderstack(root_) 
  { 
      // Base Case 
      if (root_ == "null") 
         return; 
    
      stack(10)
      pointerarrow.show();
     await push(root_); 
    
    
      while (isEmpty() == false) 
      { 
          
          await display(`Pop element from stack and print`);
          await pop();
          let curr = popped; 
          pointerarrow.css({ "top" : `${($("#"+curr).offset().top+50)}px` , "left" : `${($("#"+curr).offset().left-50)}px` , "transition-duration" : "300ms"})
          
          await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                  hilight(curr, defaultcolor , "1200ms" , 1300 )

          Output($("#"+curr+"treeval").text())
    


          await display(` Push right and left children of the popped node to stack`);

          if (tree[curr+"treeright"] != "null")  {

            await hilight(tree[curr+"treeright"], "blueviolet" , "1200ms" , 1300 )
                  hilight(tree[curr+"treeright"], defaultcolor , "1200ms" , 1300 )

            await  push(tree[curr+"treeright"]);
          } 
          if (tree[curr+"treeleft"] != "null")  {

            await hilight(tree[curr+"treeleft"], "blueviolet" , "1200ms" , 1300 )
                  hilight(tree[curr+"treeleft"], defaultcolor , "1200ms" , 1300 )
            await  push(tree[curr+"treeleft"]); 

          }
      } 

      pointerarrow.hide();
  }




  async function inorderstack(root_) 
  { 
      stack(10);
      let curr = root_; 

      pointerarrow.show();
    
      while (curr != "null" || isEmpty() == false) 
      { 
          
             await display("Reach the left most Node of the current Node");
          while (curr !=  "null") 
          { 
        
            if (curr != "null") pointerarrow.css({ "top" : `${($("#"+curr).offset().top+25)}px` , "left" : `${($("#"+curr).offset().left-60)}px` , "transition-duration" : "300ms"})

            

            await hilight(curr, "blueviolet" , "1200ms" , 1300 )
                  hilight(curr, defaultcolor , "1200ms" , 1300 )


                  await display("Push current node into stack.");
            
            
            await  push(curr); 
            curr = tree[`${curr}treeleft`]; 

     

          } 
    
          await display("end of left subtree");
          await display("pop element from stack and print");
          
         await pop(); 
          curr = popped;

          pointerarrow.css({ "top" : `${($("#"+curr).offset().top+25)}px` , "left" : `${($("#"+curr).offset().left-60)}px` , "transition-duration" : "300ms"})

          await display(`Current node = ${popped} (popped element)`);
          await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
          hilight(curr, defaultcolor , "1200ms" , 1300 )
      
         Output( $("#"+curr+"treeval").text())
    
         await display("Left sub tree completed. Now, going right subtree");
       
         
             curr = tree[`${curr}treeright`]; 
    
      } /* end of while */

      pointerarrow.hide();

  } 



 async function postorderstack(root_) 
  { 
      // Check for empty tree 
        pointerarrow.show();
       stack(10); 
       do { 
          // Move to leftmost node 
          while (root_ != "null") 
          { 
              await display(`Push root's right child and then root to stack.`)
              if (tree[root_+"treeright"] != "null") {
                pointerarrow.css({ "top" : `${($("#"+tree[root_+"treeright"]).offset().top+50)}px` , "left" : `${($("#"+tree[root_+"treeright"]).offset().left-50)}px` , "transition-duration" : "300ms"})

                await hilight(tree[root_+"treeright"], "blueviolet" , "1200ms" , 1300 )
                      hilight(tree[root_+"treeright"], defaultcolor , "1200ms" , 1300 )
              await push(tree[root_+"treeright"]); 

              }
              pointerarrow.css({ "top" : `${($("#"+root_).offset().top+50)}px` , "left" : `${($("#"+root_).offset().left-50)}px` , "transition-duration" : "300ms"})

              await hilight(root_, "blueviolet" , "1200ms" , 1300 )
                      hilight(root_, defaultcolor , "1200ms" , 1300 )
              await  push(root_); 
    
           
              await display(`Set root as root's left child`)  
              root_ = tree[root_+"treeleft"] 
          } 
    
          await display(`Pop an item from stack and set it as root`)      
          await pop(); 
          root_ = popped;

    
          await display("If the popped item has a right child and itsnotprocessed, then it processed before root")
          
          if (tree[root_+"treeright"] != "null" && peekstack() == tree[root_+"treeright"]) 
          { 

           await display("remove right child from stack")
            await  pop();  // remove right child from stack 

            await display("push root back to stack")
            await  push(root_);  // push root back to stack 

            await display("change root so that the right child is processed next")
              root_ = tree[root_+"treeright"]; // change root so that the right  
                                  // child is processed next 
          } 
          else  // Else print root's data and set root as NULL 
          { 

            pointerarrow.css({ "top" : `${($("#"+root_).offset().top+50)}px` , "left" : `${($("#"+root_).offset().left-50)}px` , "transition-duration" : "300ms"})

            await hilight(root_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                  hilight(root_, defaultcolor , "1200ms" , 1300 )
              Output( $(`#${root_}treeval`).text()); 
              root_ = "null"; 
          } 
      } while ( isEmpty() == false);

      pointerarrow.hide();
  } 




  class QNode { 
    
    constructor(d) 
    { 
        this.data = d; 
        this.next = null; 
    } 
}; 
  
class Q { 
   
    constructor() 
    { 
        this.front = this.rear = null; 
    } 
  
     enQueue( x) 
    { 
  
        // Create a new LL node 
        let temp = new QNode(x); 
  
        // If queue is empty, then 
        // new node is front and rear both 
        if (this.rear == null) { 
          this.front = this.rear = temp; 
            return; 
        } 
  
        // Add the new node at 
        // the end of queue and change rear 
        this.rear.next = temp; 
        this.rear = temp; 
    } 
  
    // Function to remove 
    // a key from given queue q 
     deQueue() 
    { 
        // If queue is empty, return NULL. 
        if (this.front == null) 
            return; 
  
        // Store previous front and 
        // move front one node ahead 
        let temp = this.front; 
        this.front = this.front.next; 
  
        // If front becomes NULL, then 
        // change rear also as NULL 
        if (this.front == null) 
        this.rear = null; 
  
        
    } 


    isEmpty() 
    { 
        // If queue is empty, return NULL. 
        return this.front == null
 
        
    } 


}; 



async function redraw  ()  {

  mySVG.redrawLines();
  
 
 }
 
 


 
  // Level-order-traverse
var AVLpostleft = [], AVLposttop =[];
AVLpostleft[0] = 1900;
AVLposttop[0] = 150;



function BalanceAll(_node)
{
    // Base Case
    if ($("#"+_node).length == 0)  return;
 
    // Create an empty queue for level order traversal
    let q = new Q();
 
    // Enqueue Root and initialize height
    q.enQueue(_node);
 
    

    while (q.isEmpty() == false)
    {
        // Print front of queue and remove it from queue
        let root_ = (q.front).data;
       
    //  Output( $('#'+root_+"treeval").text());
      
    let lefttarget = tree[`${root_}treeleft`];
    let righttarget = tree[`${root_}treeright`];
  
  
  
  
    let rootoffset = $("#"+root_).offset()
  
    if (lefttarget != "null" ) {
  
  AVLposttop[lefttarget] =  AVLposttop[root_] +90;  
  AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 20 * Math.pow( 2, height(lefttarget)) )
  
   $(`#${lefttarget}`).offset({"top" : `${AVLposttop[lefttarget]}` , "left" : `${ AVLpostleft[lefttarget] }` })
  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
  
   AVLposttop[righttarget] =  AVLposttop[root_] +90; 
   
   AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 20 * Math.pow( 2, height(righttarget)) )
  
   
   
   
   $(`#${righttarget}`).offset({"top" : `${AVLposttop[righttarget]}` ,  "left" : `${AVLpostleft[righttarget]}`})
       
  
  
    }
       
        q.deQueue();
 
        /* Enqueue left child */
        if (tree[root_+"treeleft"] != "null")
            q.enQueue(tree[root_+"treeleft"]);
 
        /*Enqueue right child */
        if (tree[root_+"treeright"] != "null")
            q.enQueue(tree[root_+"treeright"]);
    }


}


function BalanceBST(_node)
{
    // Base Case
    if ($("#"+_node).length == 0)  return;
 
    // Create an empty queue for level order traversal
    let q = new Q();
 
    // Enqueue Root and initialize height
    q.enQueue(_node);
 
    

    while (q.isEmpty() == false)
    {
        // Print front of queue and remove it from queue
        let root_ = (q.front).data;
       
    //  Output( $('#'+root_+"treeval").text());
      
    let lefttarget = tree[`${root_}treeleft`];
    let righttarget = tree[`${root_}treeright`];
  
  
  
  
    let rootoffset = $("#"+root_).offset()
  
    if (lefttarget != "null" ) {
  
  AVLposttop[lefttarget] =  AVLposttop[root_] +90;  
  AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 30 * Math.pow( 2, rightheight[lefttarget]) )
  
   $(`#${lefttarget}`).offset({"top" : `${AVLposttop[lefttarget]}` , "left" : `${ AVLpostleft[lefttarget] }` })
  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
  
   AVLposttop[righttarget] =  AVLposttop[root_] +90; 
   
   AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 30 * Math.pow( 2, leftheight[righttarget]) )
  
   
   
   
   $(`#${righttarget}`).offset({"top" : `${AVLposttop[righttarget]}` ,  "left" : `${AVLpostleft[righttarget]}`})
       
  
  
    }
       
        q.deQueue();
 
        /* Enqueue left child */
        if (tree[root_+"treeleft"] != "null")
            q.enQueue(tree[root_+"treeleft"]);
 
        /*Enqueue right child */
        if (tree[root_+"treeright"] != "null")
            q.enQueue(tree[root_+"treeright"]);
    }


}



/*

async function  printLevel(root_,  level)
{
 

	if (root_ == "null")
		return false;

	if (level == 1)
	{

    if(stats == 1) await pauser();
  //  Output( $('#'+root_+"treeval").text());
    
  let lefttarget = tree[`${root_}treeleft`];
  let righttarget = tree[`${root_}treeright`];




  let rootoffset = $("#"+root_).offset()

  if (lefttarget != "null" ) {

AVLposttop[lefttarget] =  AVLposttop[root_] +90;  
AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 20 * Math.pow( 2, height(lefttarget)) )

 $(`#${lefttarget}`).offset({"top" : `${AVLposttop[lefttarget]}` , "left" : `${ AVLpostleft[lefttarget] }` })

   
  }
  

  if (righttarget != "null" ) {



 AVLposttop[righttarget] =  AVLposttop[root_] +90; 
 
 AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 20 * Math.pow( 2, height(righttarget)) )

 
 
 
 $(`#${righttarget}`).offset({"top" : `${AVLposttop[righttarget]}` ,  "left" : `${AVLpostleft[righttarget]}`})
     


  }
 

		// return true if at-least one node is present at given level
		return true;
	}

	let left = await printLevel(   tree[`${root_}treeleft`], level - 1);
	let right = await printLevel( tree[`${root_}treeright`], level - 1);

	return left || right;
}




// Function to print level order traversal of given binary tree
async function BalanceAll( root_)
{
	// start from level 1 -- till height of the tree
  let level = 1;

	// run till printLevel() returns false
	while ( await printLevel(root_, level)) {


  
    level++;



  }
    

    
}

*/

var leftheight = []
var rightheight = []

var heightpernode=0;
var heightpernode1=0;

function calcleftheight( _root)
{
    // Base case: empty tree has height 0
    if ($("#"+_root).length ==0)
        return 0;
 
    // recur for left and right subtree and consider maximum depth
  
    
    calcleftheight(tree[_root+"treeright"])

      heightpernode= 1+calcleftheight(tree[_root+"treeleft"])


     leftheight[_root] = heightpernode
   
    return heightpernode;
    
}

function calcrightheight( _root)
{
    // Base case: empty tree has height 0
    if ($("#"+_root).length ==0)
        return 0;
 
    // recur for left and right subtree and consider maximum depth
  
    
 
    calcrightheight(tree[_root+"treeleft"])

   heightpernode= 1+ calcrightheight(tree[_root+"treeright"])

   
     rightheight[_root] = heightpernode
   
    
    
     return heightpernode;

}


async function balancenodes(startnode)   {

  calcleftheight(startnode)
  calcrightheight(startnode)
  BalanceBST(startnode)
  
}



  async function insertbst(node_, key_) { 


    if ($(`#${node_}`).length == 0)  {

      await display("Tree Empty. Adding root node.");
      let vid =count;
       leaf(key_); 
       $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms linear"})
       $(`#${vid}`).animate({ "top" : "0px", "left" : "1900px"})

       $(document).scrollLeft(1200)
       $(document).scrollTop(0)

       
       return;
    }


    await hilight(node_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    hilight(node_, defaultcolor , "1200ms" , 1300 )


 
    /* Otherwise, recur down the tree */
    if (key_ <  parseInt( $(`#${node_}treeval`).text() , 10) ) {

            if (tree[`${node_}treeleft`] == "null") {

              await display("Correct place to insert the element = CurrentNode->left")
        let vid = count;
        leaf(key_);
     $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : speed+"ms linear"})
     $(`#${vid}`).offset({top: ($("#"+node_).offset().top+90 ) , left :($("#"+node_).offset().left-60) })


        return new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeleft` ,vid)
            resolve('')
            return;
           },speed+100)
            


        })
     
        
      
             }

             Log("Item smaller then current node, going left")

    await insertbst(tree[`${node_}treeleft`], key_);

      
    }
   
   
    else if (key_ >  parseInt( $(`#${node_}treeval`).text() , 10) )  {


               if (tree[`${node_}treeright`] == "null") {

                await display("Correct place to insert the element = CurrentNode->right")
        let vid = count;
        leaf(key_);


        $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : speed+"ms linear"})
        $(`#${vid}`).offset({top: ($("#"+node_).offset().top+90 ) , left :($("#"+node_).offset().left+60) })


        return new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeright` ,vid)
            resolve('')
            return;
           },speed+100)
            


        })
      
                 }


                 Log("Item larger then current node, going right")
                 await   insertbst(tree[`${node_}treeright`], key_); 

      
    }

    
    
} 
  


async function searchbst(ro , item) {

let precolor = document.getElementById(ro).style.backgroundColor;

  await hilight(ro, "rgb(109,209,0,1)" , "1200ms" , 1300 )

     hilight(ro, precolor , "1200ms" , 1300 )

  
    if ( $('#'+ro+'treeval').text() == item) {
  
     await  hilight(ro,"red")
      await display("Item found.")

    await  hilight(ro, precolor , "1200ms" , 1300 )
  
      return;
  
    }
  
    if (    ro  == "null"   ) {
  
      return;
  
    }
  
     if (     parseInt(   $('#'+ro+'treeval').text() ,  10  )   > item     ) {
  
      
      await display("Item is smaller than "+ $('#'+ro+'treeval').text() + " Going Left") 
     await searchbst(tree[ro+"treeleft"], item)
  
    }
  
  
    if (     parseInt(   $('#'+ro+'treeval').text() ,  10  )   < item     ) {
  
      await display("Item is larger than "+ $('#'+ro+'treeval').text() + " Going Right") 
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
      if (_key < parseInt(  $('#'+_root+"treeval").text() , 10) )  {
        
         tree[_root+`treeleft`] = await deletebst(tree[_root+`treeleft`], _key); 
  
         treefy(_root+`treeleft`, tree[_root+`treeleft`])
      }
      // If the _key to be deleted is greater than the _root's _key, 
      // then it lies in right subtree 
      else if (_key > parseInt( $('#'+_root+"treeval").text() , 10))  {
  
      tree[_root+`treeright`] = await deletebst(tree[_root+`treeright`], _key); 
  
      treefy(_root+`treeright`, tree[_root+`treeright`])
      }
  
  
      
      else
      { 
          // node with only one child or no child 
          if (tree[`${_root}treeleft`] == "null") 
          { 
              let temp = tree[`${_root}treeright`]; 
             $("#"+_root).remove();
             mySVG.redrawLines();
              return temp; 
          } 
          else if (tree[`${_root}treeright`] == "null") 
          { 
              let temp = tree[`${_root}treeleft`]; 
           
              $("#"+_root).remove();
             mySVG.redrawLines();
              return temp; 
          } 
    
          // node with two children: Get the inorder successor (smallest 
          // in the right subtree) 
    
          await display("getting Inorder Successor to replace");
  
          let temp = await minValueNode(tree[`${_root}treeright`]); 
  
          
          // Copy the inorder successor's content to this node 
          await display("Copy the inorder successor's content to this node");
          $('#'+_root+"treeval").text(  $('#'+temp+"treeval").text() );
    
          // Delete the inorder successor 
          await display("Delete the inorder successor");
          tree[`${_root}treeright`] = await deletebst(tree[`${_root}treeright`], $('#'+temp+"treeval").text()); 
          treefy(`${_root}treeright`,tree[`${_root}treeright`])
      } 
      return _root; 
  
      
  } 
  

  async function InsertBST (value) {

await insertbst(0, value);

let redrawev = setInterval(redraw,50);

$(".dragg").css("transition" , speed+"ms linear");

await waitforme (speed+100);

calcleftheight(0);
  calcrightheight(0);
    BalanceBST(0);
  await waitforme (speed+100);

  clearInterval(redrawev)

  }


  async function DeleteBST (value) {

    await deletebst(0, value);

    let redrawev = setInterval(redraw,50);

    $(".dragg").css("transition" , speed+"ms linear");

await waitforme (speed+100);

    await waitforme (speed+100);
    
    calcleftheight(0);
      calcrightheight(0);
        BalanceBST(0);
        await waitforme (speed+200);

  clearInterval(redrawev)
    
      }


      async function SearchBST (value) {

        await searchbst(0, value);
    
       
          }




  function leaf(element) {

  

     newnode = '<div id="'+count+'" style="transition:1200ms ;transform:scale(.8,.8);left:1250px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>    <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


    $("body").prepend(newnode)
    $("#"+count).draggable();

    tree[count+"treeleft"] = "null"
    tree[count+"treeright"] = "null"

    divbyelement[element] = count

    count = count +1;
    counttreenodes = counttreenodes + 1;


  }



  $(document).on("click","div.treenode" , function (e)  {


      
    if (clicktimes === 0) {

    first=  e.target.id;

    clicktimes = 1;

    }

    else if (clicktimes === 1) {

second = $('#'+e.target.id).parent().attr("id");


treefy(first,second)



clicktimes = 0;

    }

  })

/*
  createleaves([2,3,1,54,4,5,756,236,634,747,3252,2])

  doalign()
  
  build()
  
  movebranch("#1,#,3,#,7,#,8,#4,#9,#10")


  */
