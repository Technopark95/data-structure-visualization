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

 
   await Shiftleft(node_)
   await Shiftright(node_)



    
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
             Pullup(temp);
           
              return temp; 
          } 
          else if (tree[`${_root}treeright`] == "null") 
          { 
              let temp = tree[`${_root}treeleft`]; 
           
              document.getElementById(_root).remove();
             mySVG.redrawLines();
             Pullup(temp);
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

   await   DelShiftleft(_root)
   await   DelShiftright(_root)
      return _root; 
  
      
  } 
  

  async function InsertBST (value) {

    redrawevent =  requestAnimationFrame(redraw);

await insertbst(0, value);

await waitforme(speed+100)

cancelAnimationFrame(redrawevent)

  }


  async function DeleteBST (value) {

    redrawevent = requestAnimationFrame(redraw);

    await deletebst(0, value);

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
      