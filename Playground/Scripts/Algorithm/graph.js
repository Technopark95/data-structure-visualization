
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
    
var organized = {};
var organizedcopy = {};

var edgedata = [];
var edgecount = 0;

var distancemat = [];

var nametoidentity = {};

var direction = "-UD-";

$('body').append(`<input id ="graphinput" type="text" placeholder="Edge Weight"/>`);
$('#undirected_').css({"background-color" : "rgba(255,0,0,.5)"});

var vertexindex ="A";


var adjlist = new Map();
var graphmatrix,graphmatrixcl;

var NoOfVertex;

var nu =0;

var dist =[]; 
  
var sptSet =[]; 

var prevert;


var parent1 = []; 
  
var graphdata ={};

var u=0;

var floydmatrix=[]




const clearsceen = function()  {

    if(document.getElementById("distab")) {
document.getElementById("distab").remove();
document.body.appendChild(graphmatrixcl);
graphmatrixcl.style.display="none"

$("#distab").draggable();


    } 
  
    if(document.getElementById("postqueue")) document.getElementById("postqueue").remove();

    if(document.getElementById("dijkastratab")) document.getElementById("dijkastratab").remove();
    pointerarrow.style.display = "none";

 
}


const cleargraph = function()  {

    if(document.getElementById("distab")) {

      document.getElementById("distab").remove();

      $(".vert").remove();
 
    }
if(document.getElementById("postqueue")) document.getElementById("postqueue").remove();
if(document.getElementById("dijkastratab")) document.getElementById("dijkastratab").remove();
pointerarrow.style.display = "none";


    NoOfVertex = 0;
    vertexindex="A"

     organized = {};

 edgedata = [];
 edgecount = 0;

 distancemat = [];

 nametoidentity = {};
 nu = 0;
  dist =[]; 
  
 sptSet =[]; 

parent1=[]
u=0;
graphdata ={}
_lines = []

linemap = {}


  
}






function nextCharacter(c) { 
    return String.fromCharCode(c.charCodeAt(0) + 1); 
} 

  

 Graph = (t) => {

    _ctx.clearRect(0, 0,  10000, 4300);

    $(document).scrollLeft(0)
  $(document).scrollTop(0)

  
  
  NoOfVertex = t;

  $("body").append (`<table id="distab" style ="position:absolute; transition:100ms linear; top:135px" ></table>`);

  $("#distab").append("<tr>");

  $("#distab").append( `<td class="floyd" id="rw" style="background-color : rgba(255,255,255,0);">  <div id="crwdiv" style="z-index:1; text-align:center;"></div></td>`);


  for (let u =0 ; u < NoOfVertex ; u++)  {

    $("#distab").append( `<td class="floyd" id="c${(u)}" style="background-color : coral;">  <div id="c${(u)}div" style="z-index:1; text-align:center;"> <p id="c${(u)}val" style="color:black; text-align:center">Not set</p></div></td>`);

  }
  $("#distab").append("</tr>");


  for (let y = 0 ; y < NoOfVertex ; y++) {

    $("#distab").append("<tr>");
    distancemat.push([])
    floydmatrix.push([])


    
    $("#distab").append( `<td class="floyd" id="r${(y)}" style="background-color : coral;">  <div id="r${(y)}div" style="z-index:1; text-align:center;"> <p id="r${(y)}val" style="color:black; text-align:center">Not set</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#distab").append( `<td class="floyd showdis" id="${(y)}-${(x)}">  <div id="${(y)}-${(x)}div" style="z-index:1; text-align:center;"> <p id="${(y)}-${(x)}val" style="color:coral; text-align:center"></p>     <p id="${(y)}-${(x)}distance" style=" margin-top:-37px; color:coral; text-align:center; opacity:0%;"></p>  </div></td>`);

     
        if (y == x ) {
            distancemat[y][y] = 0;
            $(`#${(y)}-${(x)}val`).text("0")
            continue;
        }

    distancemat[y][x] = Math.min();
    $(`#${(y)}-${(x)}val`).html('&#8734;')
    }

    $("#distab").append("</tr>")


vertex(vertexindex)

vertexindex = nextCharacter(vertexindex)

document.getElementById("distab").style.display = "none";


}

$("#distab").draggable();





 }


 function  copydistintomain()  {



for (let i = 0 ;i < NoOfVertex ; i++) 
for (let j = 0 ;j < NoOfVertex ; j++) 
floydmatrix[i][j] = distancemat[i][j]



 }

 function chlc(start_ , end_ ,ac)  {


mySVG.changecolor (`${start_}` ,`${end_}` , ac);


 }




function graphy (id1 , id2 , distance , graphtype = "default")  {

   
    mySVG.drawLine({
       left_node:id1,
        right_node:id2,
        error:true,
        width:2,
        col : "coral",
        _text : distance,
        gtype : graphtype,
     
          
      });
    
edgedata.push([])

edgedata[edgecount][0] = id1;
edgedata[edgecount][1] = id2;
edgedata[edgecount][2] = distance;
edgedata[edgecount][3] = graphtype;

++edgecount;


      let a , b;
    
      a = Number(organized[id1] )
      b = Number( organized[id2] )


     let set_to_table1 = organized[id1], set_to_table2 = organized[id2];

      adjlist.get(id1).push(id2);

      distancemat[a][b] = distance;
      
      $(`#${(set_to_table1)}-${(set_to_table2)}val`).text(distance)
      
      $(`#${set_to_table1}${set_to_table2}distance`).text(`${id1}${id2}`)

      organized[`${a}-${b}`] = `${id1}${id2}`


      if (graphtype != "D") {
      adjlist.get(id2).push(id1);
      distancemat[b][a] = distance;
      $(`#${(set_to_table2)}-${(set_to_table1)}val`).text(distance)
      $(`#${set_to_table2}${set_to_table1}distance`).text(`${id2}${id1}`)
      organized[`${b}-${a}`] = `${id2}${id1}`

      }

    
          $( '#'+id1 ).draggable({
              start: function(event,ui) {if(event.shiftKey) return false;},
              drag: function(event, ui){mySVG.redrawLines();}
            });
            $( '#'+id2 ).draggable({
            start: function(event,ui) {if(event.shiftKey) return false;},
              drag: function(event, ui){mySVG.redrawLines();}
            });
    
            graphmatrixcl = document.getElementById("distab").cloneNode(true);

            organizedcopy = JSON.parse(JSON.stringify(organized))
    
        }
    




function vertex (label) {


let vertice = `<div id=${label} class="vert"> <p id=${label}name class="ver-label"> ${label}</p></div>`;

$("body").prepend(vertice)

$(`#${label}`).draggable({
    start: function(event,ui) {if(event.shiftKey) return false;}
  });


adjlist.set(label , []);

organized[nu] = label;

organized[label] =nu;

$(`#r${nu}val`).text(label)
$(`#c${nu}val`).text(label)

nu++;




}


async function BreadthFirst(startingNode) { 
  
    clearsceen()
    
  // create a visited array
  pqueue();

  let visited = []; 
  for (let g = 0; g < NoOfVertex; g++) 
      visited[g] = false; 

  // Create an object for queue 
  let q = new Queue(); 

  // add the starting node to the queue 
  visited[startingNode] = true; 
  q.enqueue_(startingNode); 
 await qins(startingNode);
 await waitforme(speed);

  // loop until queue is element 
  while (!q.isEmpty()) { 
      // get the element from the queue 
      let getQueueElement = q.dequeue_(); 
      await qout();
      await waitforme(speed);

      // passing the current vertex to callback funtion 
   //   console.log(getQueueElement); 
      Output(getQueueElement)
      await hilight(getQueueElement , "red" , "1000ms" , 1500) 
      await hilight(getQueueElement , defaultcolor, "600ms" , 610) 


      // get the adjacent list for current vertex 
      let get_List = adjlist.get(getQueueElement); 

      // loop through the list and add the element to the 
      // queue if it is not processed yet 
      for (let ie in get_List) { 
          let neigh = get_List[ie]; 

          if (!visited[neigh]) { 
              visited[neigh] = true; 
              q.enqueue_(neigh);
              await qins(neigh);
              await waitforme(speed); 
          } 
      } 
  } 
} 

async function bfs (S)  {

    await BreadthFirst(S);
}



async function dfs(startingNode) 
{ 
    clearsceen()
    let visited = []; 
    for (let ic = 0; ic < NoOfVertex; ic++) 
        visited[ic] = false; 
  
 await   DFSUtil(startingNode, visited); 
} 
  
// Recursive function which process and explore 
// all the adjacent vertex of the vertex with which it is called 
async function  DFSUtil(vert, visited) 
{ 
    visited[vert] = true; 
  //  console.log(vert);
    Output(vert)
        await hilight(vert , "red" , "1000ms" , 1500) 
        await hilight(vert , defaultcolor, "600ms" , 610)  
  
    let get_neighbours = adjlist.get(vert); 
  
    for (let ix in get_neighbours) { 
        let get_elem = get_neighbours[ix]; 
        if (!visited[get_elem]) 
           await DFSUtil(get_elem, visited); 
    } 
} 

async function FloydWarshall()   {

    clearsceen()

    graphmatrixcl = document.getElementById("distab").cloneNode(true);


    document.getElementById("distab").style.display=""

    copydistintomain();

    organized = JSON.parse(JSON.stringify(organizedcopy))

await display("Pick all vertices as transit one by one")

    for (let k = 0; k < NoOfVertex; k++)  
    {  
        // Pick all vertices as source one by one 
        await display(`Transit vertex = ${organized[k]}`) 
        await hilight(organized[k] , "red" , "2000ms" , 2400)
        

        
        for (let i = 0; i < NoOfVertex; i++)  
        {  
            // Pick all vertices as destination for the  
            // above picked source
            await display(`Source = ${organized[i]}`) 

         
         
         
               for (let j = 0; j < NoOfVertex; j++)  
                 {  
                // If vertex k is on the shortest path from  
                // i to j, then update the value of dist[i][j] 
                await hilight(`${i}-${j}` , "rgb(109,209,0,1)" , "1000ms" , 1000)
                      hilight(`${i}-${j}` , defaultcolor , "1000ms" , 500) 

                if (floydmatrix[i][k] + floydmatrix[k][j] < floydmatrix[i][j]) { 
                floydmatrix[i][j] = floydmatrix[i][k] + floydmatrix[k][j];
            
                let sliceddistance1 = organized[`${i}-${k}`];
                let sliceddistance2 = organized[`${k}-${j}`];

                sliceddistance2 = sliceddistance2.slice(1,sliceddistance2.length)

                organized[`${i}-${j}`] = sliceddistance1 + sliceddistance2;
                
                $(`#${i}-${j}distance`).text(`${sliceddistance1}${sliceddistance2}`)

 
              await  display(`${organized[i]}${organized[k]} + ${organized[k]}${organized[j]} < ${organized[i]}${organized[j]},Update.`)
                       hilight(`${i}-${k}` , "rgb(109,209,0,1)" , "2000ms" , 2100)
                 await hilight(`${k}-${j}` , "rgb(109,209,0,1)" , "2000ms" , 2400)
               

                await hilight(`${(i)}-${(j)}` , "red" , "2000ms" , 2500)
                $(`#${(i)}-${(j)}val`).text(floydmatrix[i][j])
                await hilight(`${(i)}-${(j)}` , defaultcolor , "2000ms" , 2400)



                hilight(`${i}-${k}` , defaultcolor , "2000ms" , 2100)
                await hilight(`${k}-${j}` , defaultcolor , "2000ms" , 2400)


                }
                
                else {
             Log(`${organized[i]}${organized[k]} + ${organized[k]}${organized[j]} > ${organized[i]}${organized[j]}, Dont change.`)

                }

            }  

         
        }
        await hilight(organized[k] , defaultcolor , "2000ms" , 2400)  
    }  
  

}


async function minDistance(dist, sptSet) 
{ 
    // Initialize min value 
    let min = Math.min() , min_index=0; 
  
    for (let v = 0; v < NoOfVertex; v++) {

        if (sptSet[v] == false){
        await hilight(`dijkastra${v}`, "rgb(109,209,0,1)" , "800ms" , 800 )
        hilight(`dijkastra${v}`, defaultcolor , "800ms" , 800 )
        }
        if (sptSet[v] == false && dist[v] <= min)  {
        
           
            
      hilight(`dijkastra${min_index}`, defaultcolor , "1200ms" , 1300 )
            min = dist[v]
            min_index = v
        await    hilight(`dijkastra${min_index}`, "blueviolet" , "1000ms" , 1000 )

    }

    }
  
    $(".dijkastracells").css({"background-color" : defaultcolor})
    return min_index; 
} 

// A utility function to print the constructed distance arra
// Function that implements Dijkstra's single source shortest path algorithm 
// for a graph represented using adjacency matrix representation 
async function Dijkstra( src) { 

    clearsceen()
    
    pointerarrow.style.display="";

    $("body").append (`<table id="dijkastratab" style ="position:absolute; transition:100ms linear; top:200px" ></table>`);

    $("#dijkastratab").append("<tr>");
    
    $("#dijkastratab").append( `<td class="floyd" id="dijkastrarw" style="background-color : rgba(0,0,0,0.5);">  <div id="dijkastracrwdiv" style="z-index:1; text-align:center;"></div></td>`);
    
    
    for (let u =0 ; u < NoOfVertex ; u++)  {
    
      $("#dijkastratab").append( `<td class="floyd" id="dijkastrac${(u)}" style="background-color : coral;">  <div id="dijkastrac${(u)}div" style="z-index:1; text-align:center;"> <p id="dijkastrac${(u)}val" style="color:black; text-align:center">${organized[u]}</p></div></td>`);
    
    }
    
    $("#dijkastratab").append("</tr>").draggable();

    $("#dijkastratab").append("<tr>");

    $("#dijkastratab").append( `<td class="floyd" id="dijkastrarow" style="background-color : coral;">  <div id="dijkastrarowdiv" style="z-index:1; text-align:center;"> <p id="dijkastrarowval" style="color:black; text-align:center">${src}</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#dijkastratab").append( `<td class="floyd dijkastracells" id="dijkastra${(x)}">  <div id="dijkastra${(x)}div" style="z-index:1; text-align:center;"> <p id="dijkastra${(x)}val" style="color:coral; text-align:center"></p>  </div></td>`);

     
        if (organized[src] == x ) {
            $(`#dijkastra${(x)}val`).text("0")
            continue;
        }

    $(`#dijkastra${(x)}val`).html('&#8734;')
    }

    $("#dijkastratab").append("</tr>");

    $("#dijkastratab").append("<tr>");


    $("#dijkastratab").append( `<td class="floyd" id="dijkastraspt" style="background-color : coral;">  <div id="dijkastrasptdiv" style="z-index:1; text-align:center;"> <p id="dijkastrasptval" style="color:black; text-align:center">Processed?</p></div></td>`);

    for (let x = 0 ; x < NoOfVertex ; x++) {

        $("#dijkastratab").append( `<td class="floyd dijkastracells" id="dijkastraspt${(x)}">  <div id="dijkastraspt${(x)}div" style="z-index:1; text-align:center;"> <p id="dijkastraspt${(x)}val" style="color:coral; text-align:center"></p>  </div></td>`);

    
    $(`#dijkastraspt${(x)}val`).text('false')
    }

    $("#dijkastratab").append("</tr>");


    // Initialize all distances as INFINITE and stpSet[] as false 
    for (let i = 0; i < NoOfVertex; i++) 
        dist[i] = Math.min(), sptSet[i] = false; 

    // Distance of source vertex from itself is always 0 
      dist[organized[src]] = 0; 
  
    // Find shortest path for all vertices 
    for (let count = 0; count < NoOfVertex ; count++) { 
         
        await display(`Pick the minimum distance vertex from the set of vertices not yet processed.`)
         
      
         u = await minDistance(dist, sptSet); 


            pointerarrow.style.top = $("#"+organized[u]).offset().top+"px" 
            pointerarrow.style.left = $("#"+organized[u]).offset().left-50+"px"
       
      
        await hilight(`dijkastrac${(u)}` , "rgb(109,209,0,1)" , "1200ms" , 1300 )
  
        await display(` Mark the picked vertex as processed`)
        sptSet[u] = true;
        await hilight(`dijkastraspt${(u)}` , "rgb(109,209,0,1)" , "1200ms" , 1300 )
              hilight(`dijkastraspt${(u)}` , defaultcolor , "1200ms" , 1300 )
        $(`#dijkastraspt${(u)}val`).text('true') 
  
        await display(` Update dist value of the adjacent vertices of the picked vertex.`)

        for (let v = 0; v < NoOfVertex; v++) {

             hilight( organized[v] , "rgb(109,209,0,1)" , "1200ms" , 1300 )
              
            await display(`Current picked Vertex ${organized[v]}`)

           let gval = distancemat[u][v];
           if (distancemat[u][v] == Math.min()) gval =0;
          
            if (!sptSet[v] && gval && dist[u] != Math.min() && dist[u] + gval < dist[v])  {
                dist[v] = dist[u] + gval;

                
                await hilight(`dijkastra${v}`, "rgb(109,209,0,1)" , "1200ms" , 1300 )
                 hilight(`dijkastra${v}`, defaultcolor , "1200ms" , 1300 )

                $(`#dijkastra${v}val`).text(dist[v]);

            }
            hilight( organized[v] , defaultcolor , "1200ms" , 1300 )
        }

        await hilight(`dijkastrac${(u)}` , "coral" , "1200ms" , 1300 )
    } 
  
} 







// Find set of vertex i 
async function find( in_) 
{ 
  
    while ( in_ != parent1[in_])  {

       
        in_ = parent1[in_]; 
    }
    return in_; 
} 
  
// Does union of i and j. It returns 
// false if i and j are already in same 
// set. 
async function union1(in_,  jn_) 
{ 
    let a = await find(in_); 
    let b = await find(jn_); 
    parent1[a] = b; 
} 
  
// Finds MST using Kruskal's algorithm 
async function Kruskal() 
{ 

    clearsceen()
    let mincost = 0; // Cost of min MST. 
    await mySVG.kruskalize()
  await mySVG.redrawLines();

    // Initialize sets of disjoint sets. 
    for (let i = 0; i < NoOfVertex; i++) 
        parent1[i] = i; 
  
    // Include minimum weight edges one by one 
    let edge_count = 0; 
    
    while (edge_count < NoOfVertex - 1) { 
        await display("Find the next legal smallest edge.")
        let min = Math.min(), a = -1, b = -1; 
        for (let i = 0; i < NoOfVertex; i++) { 
            for (let j = 0; j < NoOfVertex; j++) {

                if (i ==j)continue;


                if ( distancemat[i][j] < min && await find(i) == await find(j) )  {

                    await Log(`Discard ${organized[i]} <--> ${organized[j]}  edge.`);

                }

                if ( await find(i) != await find(j) && distancemat[i][j] < min) { 

                 
                   
                    min = distancemat[i][j]; 

                   if (a >-1 && b > -1) { await  chlc(organized[a] , organized[b] , "rgb(0,0,0,0.11)")
                   await waitforme(speed)
                }

                    a = i; 
                    b = j; 

                  await  chlc(organized[a] , organized[b] , "coral");

                  await waitforme(speed)

                    await display(`Next smaller unprocessed edge : <br>${organized[a]} <--> ${organized[b]}`);

                    
                } 


            } 
        } 
  
        await  union1(a, b); 

        await display(`The smallest unprocessed edge : <br>${organized[a]} <--> ${organized[b]}`)
    
    await  chlc(organized[a] , organized[b] , "blue")
    await waitforme(speed)

      
    ++edge_count;
    } 

    await mySVG.kruskalize("coral")

    
} 









$(document).on('mouseenter' , 'td.showdis' , function(e) {


    let texttoupid = e.target.id;

$(`#${texttoupid}val`).css({"opacity" : "0%" , "transition-duration": "600ms"})

$(`#${texttoupid}distance`).css({"opacity" : "100%" , "transition-duration": "600ms"})


})

$(document).on('mouseleave' , 'td.showdis' , function(e) {


    let texttoupid = e.target.id;

$(`#${texttoupid}val`).css({ "opacity" : "100%" , "transition-duration": "600ms"})

$(`#${texttoupid}distance`).css({"opacity" : "0%" , "transition-duration": "600ms"})
    

})



$(document).on('click' , 'td.showdis' , function(e) {

mySVG.kruskalize();

    let texttoupid = e.target.id;

    let path_ =   $(`#${texttoupid}distance`).text();

    for (let i = 0 ; i < path_.length-1 ; ++i)  {


        chlc (path_.charAt(i) , path_.charAt(i+1)  ,"black")
    }
 

     mySVG.kruskalize("coral")

})




clicktimes = 0

/*
$(document).on("click","div.vert" , function (e)  {


      
    if (clicktimes === 0) {


        if ($(e.target).parent("div.vert").length) {

            

            first=  $("#"+e.target.id).parent().attr("id");

           
        }

    else  first=  e.target.id;

    clicktimes = 1;
    $("#graphinput").css({"visibility" : " hidden"})

    }

    else if (clicktimes === 1) {

        if ($(e.target).parent("div.vert").length) {
        
            second =  $(e.target).parent().attr("id");

        }


        else  second=  e.target.id;

let mousex = e.clientX;
let mousey = e.clientY;

$("#graphinput").css({ "top" :`${mousey}px`, "left" :`${mousex}px`  , "visibility" : "visible"})
$("#graphinput").focus();
//graphy(first,second,0)



clicktimes = 0;

    }

  })

  */


  $("#graphinput").change( function()  {

let weight = Number( $("#graphinput").val())

$("#graphinput").css({"visibility" : " hidden"})

$("#graphinput").val("")

    graphy(first,second,weight ,direction)

    Log(`Add edge ${first}${second}`)


  })

  $("#undirected_ ").on("mouseenter" , function() {

    $("#undirected_").css({"left":"250px", "transition-duration" : "300ms"})


  })

  $("#undirected_").on("mouseleave" , function() {

    $("#undirected_").css({"left":"0px", "transition-duration" : "300ms"})


  })


  $("#directed_ ").on("mouseenter" , function() {

    $("#directed_").css({"left":"250px", "transition-duration" : "300ms"})


  })

  $("#directed_").on("mouseleave" , function() {

    $("#directed_").css({"left":"0px", "transition-duration" : "300ms"})


  })





  // click events



  $("#undirected_ ").on("click" , function() {

    $("#undirected_").css({"background-color" : "rgba(255,0,0,.5)", "transition-duration" : "300ms"})

    $("#directed_").css({"background-color" : "rgba(0,0,0,.5)", "transition-duration" : "300ms"})

    direction = "-UD-"

  })

  $("#directed_ ").on("click" , function() {

    $("#directed_").css({"background-color" : "rgba(0,0,255,.5)", "transition-duration" : "300ms"})

    $("#undirected_").css({"background-color" : "rgba(0,0,0,.5)", "transition-duration" : "300ms"})

    direction = "D"
  })



  var servertime = 0;



  var serv;
  $(document).ajaxStart(  function()  {

   

    $("body").append(`<img style="position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%) ;z-index: 20; height:40%;" id="loaderx" src="../loader-3.gif">`)

   

    
    })

    
    $(document).ajaxComplete(function(){

    $("#loaderx").remove();

   });
  


 async function importgraph(name,pass)  {

    cleargraph();
    _ctx.clearRect(0, 0,  10000, 4300);

window.scrollTo(0,0)


let firebaseref = firebase.database().ref(name)


let datasnapshot = await firebaseref.once("value");


    if (datasnapshot.val() == null)  {
        Output("Graph Doesnt exist")
        return;
    }
  


    graphdata = datasnapshot.val();


   NoOfVertex= graphdata["Nodes"];

   Graph(NoOfVertex);

   Log(`Graph(${NoOfVertex})`)

   document.getElementById("distab").style.display = "none";

   for (let ver = 0 ; ver < NoOfVertex ; ++ver)  {

   let tt = graphdata[organized[ver]]["top"];
   let ll = graphdata[organized[ver]]["left"];

   let ff = $("#"+organized[ver])

   ff.offset({top:tt , left :ll})


   }


   
   let edgeinfo = graphdata["Edge"];
   let noofedge = edgeinfo.length;



   for (let ed = 0 ; ed < noofedge ; ++ed)  {

       
       graphy(edgeinfo[ed][0] ,edgeinfo[ed][1] ,edgeinfo[ed][2] ,edgeinfo[ed][3] );

       Log(`Add edge ${edgeinfo[ed][0]}${edgeinfo[ed][1]}`)
   
   
       }



 }

async function exportgraph(name) {

       
let firebasedatabse = firebase.database()

let CheckIfExist = firebasedatabse.ref(name);

 let check =await CheckIfExist.once("value");


    if (check.val() != null)  {

        Output("Try again with different graphname")
        return;

    }
  




let firebaseref = firebasedatabse.ref();



   let posar ={};
let el_pos = {};



el_pos["Nodes"] = NoOfVertex;


   for ( let sig = 0 ; sig < NoOfVertex ; sig = sig +1) {
   
   
     t = $("#"+organized[sig]).offset().top
     l = $("#"+organized[sig]).offset().left
     
       posar['top'] = t;
       posar['left'] = l;
   
       el_pos[organized[sig]] = posar
   
       posar = {}
   
}

el_pos["Edge"] = edgedata;


   firebaseref.child(name).set(el_pos)

   
Output("Graph saved successfully")



   }


  window.onload = async function()  {     
      document.body.insertAdjacentHTML("beforeend" , `<img id = "animationplay" src="../loader-3.gif"  style= "position:fixed; top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1"/>`);  
      await importgraph("Final2") 
    
      document.getElementById("animationplay").remove();
    
    }