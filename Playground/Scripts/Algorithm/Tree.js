
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



  
 function height(N)  
{  
    if (N == "null") return 0;  

    
    return  parseInt( $(`#${N}height`).text(),10);  
}  
  


async function  preorder(CurrentNode) {

  
  if (CurrentNode == "null" || document.getElementById(CurrentNode) == null) {

    return ;

  }

  let precolor = document.getElementById(CurrentNode).style.backgroundColor;

    await hilight(CurrentNode , "red", "500ms"  ,700)
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
    await display("Going left of " + CurrentNode )
    await preorder(tree[CurrentNode+"treeleft"])
    await display("Going right of " + CurrentNode )
    await preorder(tree[CurrentNode+"treeright"])
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , precolor, "500ms"  ,700)
    

}


async function  inorder(CurrentNode ) {

    if (CurrentNode == "null" || document.getElementById(CurrentNode) == null) {
  
      return;
  
    }
  

    
    await display("Going left of " + CurrentNode )
    await inorder(tree[CurrentNode+"treeleft"])
    let precolor = document.getElementById(CurrentNode).style.backgroundColor;
    await hilight(CurrentNode , "red" , "500ms"  ,700)
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
    await display("Going right of " + CurrentNode )
    await inorder(tree[CurrentNode+"treeright"])
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , precolor , "500ms"  ,700)
    
  
  
  }



async function  postorder(CurrentNode ) {

    if (CurrentNode == "null" ||  document.getElementById(CurrentNode) == null) {
  
      return;
  
    }
  
    await display("Going left of " + CurrentNode )
    await postorder(tree[CurrentNode+"treeleft"])
    await display("Going right of " + CurrentNode )
    await postorder(tree[CurrentNode+"treeright"])
    let precolor = document.getElementById(CurrentNode).style.backgroundColor;
    await hilight(CurrentNode , "red", "500ms"  ,700)
    Output( document.getElementById(CurrentNode+"treeval").innerHTML)
    await display("returning from " + CurrentNode )
    await hilight(CurrentNode , precolor, "500ms"  ,700)
  
  
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

        let precolor = document.getElementById(root_).style.backgroundColor;

        await  hilight(root_ , "red")
        Output( document.getElementById(root_+"treeval").innerHTML)
        await   hilight(root_ ,precolor )
  
        q.deQueue();
        await  qout();
 
        let leftchild = tree[root_+"treeleft"];
        let rightchild = tree[root_+"treeright"];
        



        if (leftchild != "null") {

          Log("Push Left child")
          q.enQueue(leftchild);
          await   qins(leftchild);
        
        }
            
 
        /*Enqueue right child */
        if (rightchild != "null") {

          Log("Push Right child")
        q.enQueue(rightchild);
        await qins(rightchild);

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



 


 
  // Level-order-traverse
var AVLpostleft = [], AVLposttop =[];
AVLpostleft[0] = 1905;
AVLposttop[0] = 150;



 function BalanceAll(_node)
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
  
  // AVLposttop[lefttarget] =  AVLposttop[root_] +85;  
  // AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 20 * Math.pow( 2, height(lefttarget)) )
  
   document.getElementById(lefttarget).style.top = parseInt(document.getElementById(root_).style.top)+85+"px";
    document.getElementById(lefttarget).style.left = parseInt(document.getElementById(root_).style.left)- ( 20 * Math.pow( 2, height(lefttarget)) )+"px";
  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
  //  AVLposttop[righttarget] =  AVLposttop[root_] +85; 
   

  //  AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 20 * Math.pow( 2, height(righttarget)) )
   

   document.getElementById(righttarget).style.top = parseInt(document.getElementById(root_).style.top)+85+"px";
    document.getElementById(righttarget).style.left = parseInt(document.getElementById(root_).style.left)+ ( 20 * Math.pow( 2, height(righttarget)) )+"px";
  

  
  
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
  
  // AVLposttop[lefttarget] =  AVLposttop[root_] +90;  
  // AVLpostleft[lefttarget] =  AVLpostleft[root_]  - ( 30 * Math.pow( 2, rightheight[lefttarget]) )
  
  document.getElementById(lefttarget).style.top = parseInt(document.getElementById(root_).style.top)+85+"px";


  
     
    }
    
  
    if (righttarget != "null" ) {
  
  
  
  //  AVLposttop[righttarget] =  AVLposttop[root_] +90; 
   
  //  AVLpostleft[righttarget] =  AVLpostleft[root_]  + ( 30 * Math.pow( 2, leftheight[righttarget]) )
  
   
  
  document.getElementById(righttarget).style.top = parseInt(document.getElementById(root_).style.top)+85+"px";
     
  
  
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

  BalanceBST(startnode)
  
}


function leftmost(rootnode)  {

  let leftmostnode = rootnode;


  while(tree[`${leftmostnode}treeleft`] != "null")  {

    leftmostnode = tree[`${leftmostnode}treeleft`];

  }

  return leftmostnode;

}


function rightmost(rootnode)  {

  let rightmostnode = rootnode;

  while(tree[`${rightmostnode}treeright`] != "null")  {

    rightmostnode = tree[`${rightmostnode}treeright`];

  }

  return rightmostnode;

}





      async function SearchBST (value) {

        await searchbst(0, value);
    
       
          }



          async function redrawsplay  ()  {

            if (tree.length == 0) return;
        
            _ctx.clearRect(0, 0,  10000, 4300);
        
            for (let source in tree) {
        
                let destination = tree[source];
                if(destination != "null") {
        
              //  mySVG.connect({left_node:source , right_node:destination+"treetop"})
        
              try {
                    
                if ( source == undefined || source == "null" || destination == undefined || destination == "null"  ) {
                 continue;
                }
                      //To decide colour of the line
                    
                          
                          _ctx.font = "30px Segoe UI";
        
                
                         _left_node = document.getElementById(source);
                         _right_node = document.getElementById(destination+"treetop");
            
            
                         clientrectleft = _left_node.getBoundingClientRect();
                         clientrectright = _right_node.getBoundingClientRect();
                         leftnodeoffsetx = clientrectleft.left +document.documentElement.scrollLeft;
                         leftnodeoffsety = clientrectleft.top +document.documentElement.scrollTop;
                         rightnodeoffsetx = clientrectright.left +document.documentElement.scrollLeft;
                         rightnodeoffsety = clientrectright.top +document.documentElement.scrollTop;
            
                         dax = (rightnodeoffsetx+ _right_node.offsetHeight/2) - (leftnodeoffsetx+ _left_node.offsetWidth/2);
                         day = (rightnodeoffsety+ _right_node.offsetHeight/2) - (leftnodeoffsety+ _left_node.offsetHeight/2);
                         dangle = Math.atan2(day ,dax);
            
                         rightx = (_right_node.offsetWidth/2) * Math.cos(135+dangle) + (rightnodeoffsetx+ _right_node.offsetWidth/2) ;
                         righty  = (_right_node.offsetHeight/2) * Math.sin(135+dangle) + (rightnodeoffsety + (_right_node.offsetHeight / 2)) ;
            
                         leftx = (_left_node.offsetWidth/2) * Math.cos(.05+dangle) + (leftnodeoffsetx+ _left_node.offsetWidth/2) ;
                         lefty  = (_left_node.offsetHeight/2) * Math.sin(.05+dangle) + (leftnodeoffsety + (_left_node.offsetHeight / 2)) ;
            
                        //Get Left point and Right Point
                        _left.x = leftx
                        _left.y = lefty
                        _right.x = rightx
                        _right.y = righty
            
                          ele1_x = _left.x;
                          ele1_y = _left.y;
                          ele2_x = _right.x;
                          ele2_y = _right.y;
            
        
                          _ctx.beginPath();
                        
                        _ctx.moveTo(_left.x, _left.y );
                      
                        _ctx.lineTo((_right.x), (_right.y));
                        
                        _ctx.lineWidth =  2;
                        _ctx.strokeStyle = _color;
            
                        _ctx.stroke();
            
                        
                    
            
                      //_lines[li].resize = _lines[li].resize || false;
                    
                  } catch (err) {
                    if (_error) alert('Mandatory Fields are missing or incorrect');
                  }
        
                }
        
                
            
        
                      
        
              }
            
            redrawevent = requestAnimationFrame(redrawsplay)
           
           }
           


           function calcheight( _root)
 {
     // Base case: empty tree has height 0
     if ($("#"+_root).length ==0)
         return 0;
  
     // recur for left and right subtree and consider maximum depth
     let heightpernode =  1 + Math.max(calcheight(tree[_root+"treeleft"]), calcheight(tree[_root+"treeright"]));
     $(`#${_root}height`).text(heightpernode)
     
     return heightpernode;
 }


  function leaf(element) {

  
    newnode = '<div id="'+count+'" style="transform:scale(.8,.8);left:1250px;top:150px;transition:'+ speed+'ms linear;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>   <div style="position:absolute; text-align:center; top:65px; left:38px;height:1px; width:20px;"><p  style="color:white;margin-top:-2px;margin-left:-15px; font-size:50%; " id="'+ count+"height" +'">'+"1" +'</p></div>   <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


    document.body.insertAdjacentHTML("afterbegin",newnode)
   $("#"+count).draggable({drag:function(){mySVG.Splaylines()}});

   tree[count+"treeleft"] = "null"
   tree[count+"treeright"] = "null"

   count = count +1;
   counttreenodes = counttreenodes + 1;

return count-1;


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

