

var ii=0 , data;


$.getJSON("Alignment.json" , function(result) {


  data = result


})


  function arraynodes() 
  { 
  
      if ( ii == length ) {
          counttreenodes = length;
          count =length;
          return;
      
    
       }
  
      var newnode = '<div id="'+ii+'"  class="dragg" > <div class="treenode" id="'+ ii+"treetop" +'" style="margin-left:35px;"></div>  <div class="treenode" id="'+ ii+"treeleft" +'" style="margin-left:18px; margin-top:70px;"></div>   <div class="treenode" id="'+ ii+"treeright" +'" style="margin-left:54px; margin-top:70px;"></div> <p  style="position:absolute;color:coral; font-size:70%; left:20px;" id="'+ ii+"bottom" +'">'+ii +'</p>    <p  id="'+ ii+"treeval" +'" class="t">'+storedarray[ii]+'</p>   </div>';
  
      $("body").prepend(newnode)
        $("#"+ii).draggable();
      
  
        tree[ii+"treeleft"] = "null"
        tree[ii+"treeright"] = "null"
    ii = ii + 1
        rootoftree = newnode
        arraynodes()
  
  } 
  
  
  
  function build() 
  { 
  
     
  
      for (var  i =0 ;  i < counttreenodes ; i++)  {
  
  
  if ( (2*(i))+1 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var leftc = (2*(i))+1;
  
      treefy(i+"treeleft" , leftc)
  
  }
  
  if ( (2*(i))+2 >= counttreenodes ) {
      break;
  }
  
  else {
  
      var rightc = (2*(i))+2;
  
      treefy(i+"treeright" , rightc)
  
  }
  
  
  
      }
  
  
  
  
  }  
  
  function buildheap()  {
  
      arraynodes();
  
      build();
  
  }
  
  
  async function gottopoint (i,j)   {
  
    if (stats == 1  ) await pauser();
  
      return new Promise(resolve => {
  
  
      var element1 = $("#"+i);
      var top1 = element1.position().top;
      var left1 = element1.position().left;
  
  
      var  element2 = $("#"+j);
      var top2 = element2.position().top;
      var left2 = element2.position().left;
  
      var  element1text = $("#"+i+"treeval").text();
      var  element2text = $("#"+j+"treeval").text();
  
      element1.css({ "top": (top2)+"px", "left": (left2)+"px" ,"transition-duration" :"1500ms" },3500, function() {
  
  
      })
  
      element2.css({ "top": (top1)+"px", "left": (left1)+"px","transition-duration" :"1500ms" } , 3500, function() {
  
  
      })
     
  
      setTimeout(function() {
  
        element1.css({"position" : "absolute" , "top": (top1)+"px", "left": (left1)+"px" ,"transition-duration" :"0ms"})
  
         element2.css({"position" : "absolute" , "top": (top2)+"px", "left": (left2)+"px" ,"transition-duration" :"0ms"})
  
         $("#"+j+"treeval").text(element1text)
         $("#"+i+"treeval").text(element2text);
  
         resolve('resolved')
  
      },1480)
  
  
  
  
  
      })
  
  
  
  
  }
  
  
    
  
  
  
  
  
  
  // Heapsort
  
  
  async function heapify( len,  ind) 
  { 
      ind = Math.floor(ind)
      var largest = ind; // Initialize largest as root 
      var l = 2*ind + 1; // left = 2*i + 1 
      var r = 2*ind + 2; // right = 2*i + 2 
    
      
      // If left child is larger than root 
      if (l < len && storedarray[l] > storedarray[largest]) 
          largest = l; 
    
      // If right child is larger than largest so far 
      if (r < len && storedarray[r] > storedarray[largest]) 
          largest = r; 
    
      // If largest is not root 
      if (largest != ind) 
      { 
           hilight(ind , "red" , "1s" ,1100)
        //  swap(st[ind], st[largest]); 
        await hilight(largest , "red" , "1s" ,1100)
          var te = storedarray[ind];
          storedarray[ind] = storedarray[largest];
          storedarray[largest] = te;
  
       await   gottopoint(ind ,largest)
       await swapp(ind,largest)
        hilight(ind , defaultcolor , "1s" ,1100)
       await hilight(largest , defaultcolor , "1s" ,1100)
    
          // Recursively heapify the affected sub-tree 
      await    heapify(len, largest); 
      } 
  } 
    
  // main function to do heap sort 
  async function HeapSort() 
  { 
     await arraynodes()
      await doalign()
     await build()
      // Build heap (rearrange array) 
      await display('Building Heap')
      for (var ind = length / 2 - 1; ind >= 0; ind--) 
      await   heapify(length, ind); 
    
      await display('Heap Built')
      // One by one extract an element from heap 
      for (var ind=length-1; ind>0; ind--) 
      { 
          // Move current root to end 
       //   swap(st[0], st[ind]); 
  
          var te = storedarray[0];
          storedarray[0] = storedarray[ind];
          storedarray[ind] = te;
          await display('Swap last element with root node')
          await  gottopoint(0 ,ind)
          await swapp(0,ind)
          await turnred(ind)
          await hilight(ind, "purple" ,"1s" ,1100)
    
          // call max heapify on the reduced heap 
          await display('Building Heap')
          await   heapify( ind, 0); 
      } 
  } 
  
  
  
  var t , l
  var el_pos = { }
  
  var posar = {}
  

  function alignanimate(d , duration_ , timeout_)  {
  
  
      var tt = data[d]["top"];
      var ll = data[d]["left"];
  
  var ff = $("#"+d)
  
      ff.css({"transition-duration" : "2000ms" , "left" :"0px" ,"top" :"0px"})
  
      ff.offset({top:tt , left :ll})
      
  
  
  return new Promise (resolve => {
  
    
      
      setTimeout(function() {
        
  resolve('resolved')
      },timeout_)
  
  
  
  
  })
  
  }
  
  
   async function doalign(duration_="3000ms" , timeout_=200)  {
  
    
  for ( var d=0 ; d < counttreenodes ; d++ ) {
  
     
  
    await   alignanimate(d , duration_ , timeout_);
  }
  
  
  
  
  
  }
