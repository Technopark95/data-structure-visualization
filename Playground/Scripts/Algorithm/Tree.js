




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
            drag: function(event, ui){mySVG.redrawLines();}
          });
          $( '#'+second ).draggable({
            drag: function(event, ui){mySVG.redrawLines();}
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


 


function movebranch(ID,leftpx=0,toppx=0)   {

 
  
  $(ID).animate({"left" : "+="+leftpx ,"top" : "+="+toppx})
  
  
  
  }

  var wholebranch = "";

  function returnwholebranch(noderoot)  {



    if (noderoot == "null") {
  
      return;
  
    }
  

  wholebranch = wholebranch + "#"+noderoot+",";

returnwholebranch(tree[`${noderoot}treeleft`]);
returnwholebranch(tree[`${noderoot}treeright`]);

  }

  function SyncMoveBranch(noderoot,leftpx=0,toppx=0)   {

    returnwholebranch(noderoot);

    let branch = wholebranch.slice(0,wholebranch.length-1);


    movebranch(branch , leftpx,toppx);

    wholebranch= "";




  }


  


//slidenode('2',100,200)

  async function insertbst(node_, key_) { 


    if ($(`#${node_}`).length == 0)  {

      await display("Tree Empty. Adding root node.");
      let vid =count;
       leaf(key_); 
       $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms linear"})
       $(`#${vid}`).animate({ "top" : "0px", "left" : "43%"})
       
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
     $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms"})
     $(`#${vid}`).offset({top: ($("#"+node_).offset().top+130 ) , left :($("#"+node_).offset().left-150) })


        return new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeleft` ,vid)
            resolve('')
            return;
           },2100)
            


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


        $(`#${vid}`).css({ "top" : "0px", "left" : "0px","transition" : "2000ms"})
        $(`#${vid}`).offset({top: ($("#"+node_).offset().top+130 ) , left :($("#"+node_).offset().left+150) })


        return new Promise(resolve => {


          setTimeout(()=> {
            treefy(`${node_}treeright` ,vid)
            resolve('')
            return;
           },2100)
            


        })
      
                 }


                 Log("Item larger then current node, going right")
                 await   insertbst(tree[`${node_}treeright`], key_); 

      
    }
    
} 
  


async function searchbst(ro , item) {


  await hilight(ro, "rgb(109,209,0,1)" , "1200ms" , 1300 )

  
    if ( $('#'+ro+'treeval').text() == item) {
  
     await  hilight(ro,"red")
      await display("Item found.")
  
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
      } 
      return _root; 
  
      
  } 
  




  function leaf(element) {

     newnode = '<div id="'+count+'" style="transition:500ms ;"  class="dragg" > <div class="treenode" id="'+ count+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ count+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ count+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ count+"bottom" +'">'+count +'</p>    <p  id="'+ count+"treeval" +'" class="t">'+element+'</p>   </div>';


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
