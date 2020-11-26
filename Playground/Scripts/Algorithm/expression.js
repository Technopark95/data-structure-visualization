
   var expresstionstack = new Stack();

   var symboltopointer = {}

   let maxdepth = Math.max();

   let posarrayleft = [];
   let posarraytop = [];

   function getDepth(node, depth)
   {
       if (node != "null")
       {
          // node.depth = depth;
          
           if (maxdepth < depth) {

            maxdepth = depth;
           }
           getDepth(tree[`${node}treeleft`], depth + 1); // left sub-tree
           getDepth(tree[`${node}treeright`], depth + 1); // right sub-tree
       }

     
   }



   function updateDepth(node, depth)
   {
       if (node != "null")
       {
          // node.depth = depth;
          
           $(`#${node}height`).text((maxdepth-depth));

           updateDepth(tree[`${node}treeleft`], depth + 1); // left sub-tree
           updateDepth(tree[`${node}treeright`], depth + 1); // right sub-tree
       }

     
   }



   function ggg (nod) {


    let parentheight  =  height(nod);
    let leftchild = tree[`${nod}treeleft`];
    let rightchild = tree[`${nod}treeright`];
  
    
    let heightleftchild = height(leftchild);
    let heightrightchild = height(rightchild);
  
    let nodeoffset = $(`#${nod}`).offset();
  
   
    $(`#${leftchild}`).offset({ top: nodeoffset.top+130  , left : nodeoffset.left - ((heightleftchild + parentheight)*50) })
    $(`#${rightchild}`).offset({ top: nodeoffset.top+130  , left : nodeoffset.left  + ((heightrightchild + parentheight)*50) })
  

   }

   function alignexpressontree(nod)   {

if (nod == "null") {

    return;
}

ggg(nod);
    alignexpressontree(tree[`${nod}treeleft`]); // left sub-tree
    alignexpressontree(tree[`${nod}treeright`]); // right sub-tree


   }


 async function expr(s) {

    var st = new Stack()
    st.push('N'); 
    
    s = "("+s+")"
    let l = s.length; 
    let ns=""; 
    for(let i = 0; i < l; i++) 
    { 

   
        // If the scanned character is an operand, add it to output string. 
        if((s.charAt(i) >= 'a' && s.charAt(i) <= 'z')||(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')){ 
            
            ns+=s.charAt(i); 
    

        }
  
        // If the scanned character is an ‘(‘, push it to the stack. 
        else if(s.charAt(i) == '(') {
        st.push('('); 
       
        

        }
          
        // If the scanned character is an ‘)’, pop and to output string from the stack 
        // until an ‘(‘ is encountered. 
        else if(s.charAt(i) == ')') 
        { 
           
            while(st.top() != 'N' && st.top() != '(') 
            { 
                let c = st.top(); 
                st.pop(); 
                
               ns += c; 

              
            } 

            if(st.top() == '(') 
            { 
               
                let c = st.top(); 
                st.pop(); 
                

                
            } 
        } 
          
        //If an operator is scanned 
        else{ 
            while(st.top() != 'N' && prec(s.charAt(i)) <= prec(st.top())) 
            { 
                let c = st.top(); 
                st.pop(); 
                

                ns += c; 
             

    
            } 
            st.push(s.charAt(i));
           
        } 
  
    } 

      
  
    

    let PostFixed = ns;

    Log(PostFixed)


    for (let i =0 ; i < PostFixed.length ; ++i)   {

        symboltopointer[PostFixed.charAt(i)] = i;
        avl(PostFixed.charAt(i));
        $("#"+i).offset({top : 5000+120 , left:2000})

 
 

    }



   $(document).scrollTop(5000);
   $(document).scrollLeft(1600);

   let pos=0;

   let felementh = 5000+screen.height-400;
   let felementw = 2000;
 
   let copyy = [];


for (let i = 0 ; i < PostFixed.length ; ++i)  {



    if ((PostFixed.charAt(i) >= 'a' && PostFixed.charAt(i) <= 'z')||(PostFixed.charAt(i) >= 'A' && PostFixed.charAt(i) <= 'Z')) {


        expresstionstack.push(i);




    }


    else  {



       let rightelement = expresstionstack.top();
       expresstionstack.pop();
       let leftelement = expresstionstack.top();
       expresstionstack.pop();

     
 let oper =  i;

 
 treefy(`${oper}treeleft`  ,  leftelement );
 treefy(`${oper}treeright` , rightelement );

       expresstionstack.push(oper);



    }


    

    

}

let topnode =  expresstionstack.top();

$("#"+topnode).offset({left:2300})
  getDepth(topnode , 0);

  updateDepth(topnode,0);


for (let uu = 0 ; uu <= maxdepth ; ++uu) {
  alignexpressontree(topnode);

  await waitforme(500);
}


mySVG.redrawLines();

}


