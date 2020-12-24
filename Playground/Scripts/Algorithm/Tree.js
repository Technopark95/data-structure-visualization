
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
      left_node:first,
      right_node:second+'treetop',
      error:true,
      col : color_,
      width:2,
        
    });
  
 //   var par = $("#"+first).parent().attr("id");
    let par;
    
    if (document.getElementById(first) != null){
      par = document.getElementById(first).parentNode.id
    }


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
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
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
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
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
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , "rgba(75,0,130, 0.842)", "500ms"  ,700)
  
  
  }


 async function levelorder(_node)
{
    // Base Case
    if (document.getElementById(_node) == 0)  return;
 
    // Create an empty queue for level order traversal
    let q = new Q();
    pqueue();
    // Enqueue Root and initialize height
    q.enQueue(_node);

   await qins(_node);
 
    

    while (q.isEmpty() == false)
    {
        // Print front of queue and remove it from queue
        let root_ = (q.front).data;
       
        Output( document.getElementById(root_+"treeval").innerHTML)
  
  
  
        q.deQueue();
        await  qout();
 
        let leftchild = tree[root_+"treeleft"];
        let rightchild = tree[root_+"treeright"];
        



        if (leftchild != "null") {
          let leftchildcolor = document.getElementById(leftchild).style.backgroundColor;
          q.enQueue(leftchild);
          await   qins(leftchild);
        await  hilight(leftchild , "red")
       await   hilight(leftchild ,leftchildcolor )
        }
            
 
        /*Enqueue right child */
        if (rightchild != "null") {

          let rightchildcolor = document.getElementById(rightchild).style.backgroundColor;

        q.enQueue(rightchild);
        await qins(rightchild);

        await  hilight(rightchild , "red")
        await  hilight(rightchild ,rightchildcolor )

        }
            
    }

document.getElementById("postqueue").remove();
}





 async function preorderstack(root_) 
  { 
      // Base Case 
      if (root_ == "null") 
         return; 
    
      stack(10)
      pointerarrow.style.display = "";
     await push(root_); 
    
    
      while (isEmpty() == false) 
      { 
          
          await display(`Pop element from stack and print`);
          await pop();
          let curr = popped; 
  
          pointerarrow.style.transition = `300ms linear`;
          pointerarrow.style.top = parseInt(document.getElementById(curr).style.top)+50+"px"
          pointerarrow.style.left = parseInt(document.getElementById(curr).style.left)-50+"px";

          
          await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                  hilight(curr, defaultcolor , "1200ms" , 1300 )

                  Output( document.getElementById(curr+"treeval").innerHTML)
    


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

      pointerarrow.style.display = "none";
  }




  async function inorderstack(root_) 
  { 
      stack(10);
      let curr = root_; 

      pointerarrow.style.display="";
    
      while (curr != "null" || isEmpty() == false) 
      { 
          
             await display("Reach the left most Node of the current Node");
          while (curr !=  "null") 
          { 
        
            if (curr != "null"){

              pointerarrow.style.transition = `300ms linear`;
              pointerarrow.style.top = parseInt(document.getElementById(curr).style.top)+25+"px"
              pointerarrow.style.left = parseInt(document.getElementById(curr).style.left)-60+"px";
              
            } 
            

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

          pointerarrow.style.transition = `300ms linear`;
          pointerarrow.style.top = parseInt(document.getElementById(curr).style.top)+25+"px"
          pointerarrow.style.left = parseInt(document.getElementById(curr).style.left)-60+"px";


          await display(`Current node = ${popped} (popped element)`);
          await hilight(curr, "rgb(109,209,0,1)" , "1200ms" , 1300 )
          hilight(curr, defaultcolor , "1200ms" , 1300 )
      
          Output( document.getElementById(curr+"treeval").innerHTML)
    
         await display("Left sub tree completed. Now, going right subtree");
       
         
             curr = tree[`${curr}treeright`]; 
    
      } /* end of while */

      pointerarrow.style.display = "none";

  } 



 async function postorderstack(root_) 
  { 
      // Check for empty tree 
      pointerarrow.style.display = "";
       stack(10); 
       do { 
          // Move to leftmost node 
          while (root_ != "null") 
          { 
              await display(`Push root's right child and then root to stack.`)
              if (tree[root_+"treeright"] != "null") {

                pointerarrow.style.transition = `300ms linear`;
                pointerarrow.style.top = parseInt(document.getElementById(tree[root_+"treeright"]).style.top)+50+"px"
                pointerarrow.style.left = parseInt(document.getElementById(tree[root_+"treeright"]).style.left)-50+"px";

                await hilight(tree[root_+"treeright"], "blueviolet" , "1200ms" , 1300 )
                      hilight(tree[root_+"treeright"], defaultcolor , "1200ms" , 1300 )
              await push(tree[root_+"treeright"]); 

              }
             
              pointerarrow.style.transition = `300ms linear`;
              pointerarrow.style.top = parseInt(document.getElementById(root_).style.top)+50+"px"
              pointerarrow.style.left = parseInt(document.getElementById(root_).style.left)-50+"px";

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

            pointerarrow.style.transition = `300ms linear`;
            pointerarrow.style.top = parseInt(document.getElementById(root_).style.top)+50+"px"
            pointerarrow.style.left = parseInt(document.getElementById(root_).style.left)-50+"px";

            await hilight(root_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                  hilight(root_, defaultcolor , "1200ms" , 1300 )
              Output( document.getElementById(root_+"treeval").innerHTML)
              root_ = "null"; 
          } 
      } while ( isEmpty() == false);

      pointerarrow.style.display = "none";
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
	if (_lines.length == 0) return;
			
			_ctx.clearRect(0, 0,  10000, 4300);

				for (let li = 0 ; li < _lines.length ;li++) {
				
            try {
            
            
              
          if ( _lines[li].left_node == undefined || _lines[li].left_node == "null" || _lines[li].right_node == undefined || _lines[li].right_node == "null"  ) {
            return;
          }
                //To decide colour of the line
              
                    _color = _lines[li].col || "coral";
                    
                    _ctx.font = "30px Segoe UI";
      
                    _dash = [0,0];
          
                  let _left_node = document.getElementById(_lines[li].left_node);
                  let _right_node = document.getElementById(_lines[li].right_node);
      
      
                  let clientrectleft = _left_node.getBoundingClientRect();
                  let clientrectright = _right_node.getBoundingClientRect();
                  let leftnodeoffsetx = clientrectleft.left +document.documentElement.scrollLeft;
                  let leftnodeoffsety = clientrectleft.top +document.documentElement.scrollTop;
                  let rightnodeoffsetx = clientrectright.left +document.documentElement.scrollLeft;
                  let rightnodeoffsety = clientrectright.top +document.documentElement.scrollTop;
      
                  let dax = (rightnodeoffsetx+ _right_node.offsetHeight/2) - (leftnodeoffsetx+ _left_node.offsetWidth/2);
                  let day = (rightnodeoffsety+ _right_node.offsetHeight/2) - (leftnodeoffsety+ _left_node.offsetHeight/2);
                  let dangle = Math.atan2(day ,dax);
      
                  let rightx = (_right_node.offsetWidth/2) * Math.cos(135+dangle) + (rightnodeoffsetx+ _right_node.offsetWidth/2) ;
                  let righty  = (_right_node.offsetHeight/2) * Math.sin(135+dangle) + (rightnodeoffsety + (_right_node.offsetHeight / 2)) ;
      
                  let leftx = (_left_node.offsetWidth/2) * Math.cos(.05+dangle) + (leftnodeoffsetx+ _left_node.offsetWidth/2) ;
                  let lefty  = (_left_node.offsetHeight/2) * Math.sin(.05+dangle) + (leftnodeoffsety + (_left_node.offsetHeight / 2)) ;
      
                  //Get Left point and Right Point
                  _left.x = leftx
                  _left.y = lefty
                  _right.x = rightx
                  _right.y = righty
      
                    ele1_x = _left.x;
                    ele1_y = _left.y;
                    ele2_x = _right.x;
                    ele2_y = _right.y;
      
                    if (_lines[li]._text == undefined) {
                      _lines[li]._text = ""
                    }
      
                    _ctx.beginPath();
                  
                  _ctx.moveTo(_left.x, _left.y );
                
                  _ctx.lineTo((_right.x), (_right.y));
                  
                  _ctx.lineWidth = _lines[li].width || 2;
                  _ctx.strokeStyle = _color;
      
                  _ctx.stroke();
      
                  
      f = 0;
      
                  _ctx.font = "20px Segoe ui";
                  _ctx.fillText(_lines[li]._text,(_right.x +_left.x)/2 ,( _right.y + _left.y)/2);
      
              
      
              
      
                //_lines[li].resize = _lines[li].resize || false;
              
            } catch (err) {
              if (_error) alert('Mandatory Fields are missing or incorrect');
            }
          
	
				  }
  
 redrawevent= requestAnimationFrame(redraw)
 
 }
 
 


 
  // Level-order-traverse
var AVLpostleft = [], AVLposttop =[];
AVLpostleft[0] = 1905;
AVLposttop[0] = 150;



async function BalanceAll(_node)
{
    // Base Case
    if (document.getElementById(_node) == null)  return;
 
    // Create an empty queue for level order traversal
    let q = new Q();
 
    // Enqueue Root and initialize height
    q.enQueue(_node);
 
    

    while (q.isEmpty() == false)
    {
        // Print front of queue and remove it from queue
        let root_ = (q.front).data;
       
    
      
    let lefttarget = tree[`${root_}treeleft`];
    let righttarget = tree[`${root_}treeright`];

  
    if (lefttarget != "null" ) {
  
  AVLposttop[lefttarget] =  AVLposttop[root_] +85;  
  AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 20 * Math.pow( 2, height(lefttarget)) )
  
   document.getElementById(lefttarget).style.top = AVLposttop[lefttarget]+"px";
    document.getElementById(lefttarget).style.left = AVLpostleft[lefttarget]+"px";
  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
   AVLposttop[righttarget] =  AVLposttop[root_] +85; 
   

   AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 20 * Math.pow( 2, height(righttarget)) )
   

    document.getElementById(righttarget).style.top = AVLposttop[righttarget]+"px";
    document.getElementById(righttarget).style.left = AVLpostleft[righttarget]+"px";

  

  
  
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


async function BalanceBST(_node)
{
    // Base Case
    if (document.getElementById(_node) == null)  return;
 
    // Create an empty queue for level order traversal
    let q = new Q();
 
    // Enqueue Root and initialize height
    q.enQueue(_node);
 
    

    while (q.isEmpty() == false)
    {
        // Print front of queue and remove it from queue
        let root_ = (q.front).data;
       

      
    let lefttarget = tree[`${root_}treeleft`];
    let righttarget = tree[`${root_}treeright`];
  
  
  
  
    if (lefttarget != "null" ) {
  
  AVLposttop[lefttarget] =  AVLposttop[root_] +90;  
  AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 30 * Math.pow( 2, rightheight[lefttarget]) )
  
  document.getElementById(lefttarget).style.top = AVLposttop[lefttarget]+"px";
  document.getElementById(lefttarget).style.left = AVLpostleft[lefttarget]+"px";

  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
  
   AVLposttop[righttarget] =  AVLposttop[root_] +90; 
   
   AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 30 * Math.pow( 2, leftheight[righttarget]) )
  
   
  
   document.getElementById(righttarget).style.top = AVLposttop[righttarget]+"px";
   document.getElementById(righttarget).style.left = AVLpostleft[righttarget]+"px";

     
  
  
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




var leftheight = []
var rightheight = []

var heightpernode=0;
var heightpernode1=0;

function calcleftheight( _root)
{
    // Base case: empty tree has height 0
    if (document.getElementById(_root) ==null)
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
    if (document.getElementById(_root) ==null)
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


    if (document.getElementById(node_) ==null)  {

      await display("Tree Empty. Adding root node.");
      let vid =count;
       leaf(key_); 

      document.getElementById(vid).style.transition = speed+"ms linear";
      document.getElementById(vid).style.left = "1900px";
       
       window.scrollTo(1200,0)

       
       return;
    }


    await hilight(node_, "rgb(109,209,0,1)" , "1200ms" , 1300 )
    hilight(node_, defaultcolor , "1200ms" , 1300 )


 
    /* Otherwise, recur down the tree */
    if (key_ <   parseInt(document.getElementById(node_+"treeval").innerHTML ) ) {

            if (tree[`${node_}treeleft`] == "null") {

              await display("Correct place to insert the element = CurrentNode->left")
        let vid = count;
        leaf(key_);
        let videlement = document.getElementById(vid)
      videlement.style.transition = speed+"ms linear";
      videlement.style.top = parseInt( document.getElementById(node_).style.top)+85+"px";
      videlement.style.left = parseInt( document.getElementById(node_).style.left)-35+"px";


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
   
   
    else if (key_ >  parseInt(document.getElementById(node_+"treeval").innerHTML ) )  {


               if (tree[`${node_}treeright`] == "null") {

                await display("Correct place to insert the element = CurrentNode->right")
        let vid = count;
        leaf(key_);
        let videlement = document.getElementById(vid)
        videlement.style.transition = speed+"ms linear";
        videlement.style.top = parseInt( document.getElementById(node_).style.top)+85+"px";
        videlement.style.left = parseInt( document.getElementById(node_).style.left)+35+"px";


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
  
         treefy(_root+`treeleft`, tree[_root+`treeleft`])
      }
      // If the _key to be deleted is greater than the _root's _key, 
      // then it lies in right subtree 
      else if (_key > parseInt(document.getElementById(_root+"treeval").innerHTML ))  {
  
      tree[_root+`treeright`] = await deletebst(tree[_root+`treeright`], _key); 
  
      treefy(_root+`treeright`, tree[_root+`treeright`])
      }
  
  
      
      else
      { 
          // node with only one child or no child 
          if (tree[`${_root}treeleft`] == "null") 
          { 
              let temp = tree[`${_root}treeright`]; 
             document.getElementById(_root).remove();
             mySVG.redrawLines();
              return temp; 
          } 
          else if (tree[`${_root}treeright`] == "null") 
          { 
              let temp = tree[`${_root}treeleft`]; 
           
              document.getElementById(_root).remove();
             mySVG.redrawLines();
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
          treefy(`${_root}treeright`,tree[`${_root}treeright`])
      } 
      return _root; 
  
      
  } 
  

  async function InsertBST (value) {

await insertbst(0, value);

 redrawevent = requestAnimationFrame(redraw);

$(".dragg").css("transition" , speed+"ms linear");

await waitforme (speed+100);

calcleftheight(0);
  calcrightheight(0);
    BalanceBST(0);
  await waitforme (speed+100);

  cancelAnimationFrame(redrawev)

  }


  async function DeleteBST (value) {

    await deletebst(0, value);

    redrawevent = requestAnimationFrame(redraw);

    $(".dragg").css("transition" , speed+"ms linear");

await waitforme (speed+100);

    await waitforme (speed+100);
    
    calcleftheight(0);
      calcrightheight(0);
        BalanceBST(0);
        await waitforme (speed+200);

        cancelAnimationFrame(redrawev)
    
      }


      async function SearchBST (value) {

        await searchbst(0, value);
    
       
          }




  function leaf(element) {

  

     newnode = '<div id="'+count+'" style=" transition:'+ speed+ 'ms linear;transform:scale(.8,.8);left:1250px;top:150px;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>    <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


     document.body.insertAdjacentHTML("afterbegin",newnode)
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

