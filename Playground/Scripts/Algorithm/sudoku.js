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


var board = [];
var N =9;
var UNASSIGNED = 0;


let Sudoku = [ [3, 0, 6, 5, 0, 8, 4, 0, 0], 
[5, 2, 0, 0, 0, 0, 0, 0, 0], 
[0, 8, 7, 0, 0, 0, 0, 3, 1], 
[0, 0, 3, 0, 1, 0, 0, 8, 0], 
[9, 0, 0, 8, 6, 3, 0, 0, 5], 
[0, 5, 0, 0, 9, 0, 6, 0, 0], 
[1, 3, 0, 0, 0, 0, 2, 5, 0], 
[0, 0, 0, 0, 0, 0, 0, 7, 4], 
[0, 0, 5, 2, 0, 6, 3, 0, 0] ]

const clearscreen = function(e)  {


    if(document.getElementById("qboard")) {

      document.getElementById("qboard").remove();
 
    }



    board=[]
    N =0;
}
  


function makeboard(n)   {

    $("body").append(`<table id="qboard" style ="position:absolute; transition:100ms linear; top:70px;left:15%;transform:scale(0.7,0.7);border-spacing:1px;" ></table>`);

    $("#qboard").append("<tr>");

    let suval;
    let defc = "black";
  
  
    for (let y = 0 ; y < n ; y++) {
  
      $("#qboard").append("<tr>");

      board.push([])
  
      for (let x = 0 ; x < n ; x++) {
  
       suval = Sudoku[y][x];

        if(Sudoku[y][x] == 0)  {

        suval = "";
        defc = "red"


        }

    if (y >=3 && y <=5 )   {

      if (x >=3 && x <=5) {
        $("#qboard").append( `<td class="sudo" id="q${(y)}-${(x)}" style="transition:${speed}ms linear;">  <div id="q${(y)}-${(x)}div" style="z-index:1; text-align:center;max-height:10px;">  <input class="inpsudo" id=in${y}-${x} maxlength="1" style="color:${defc}" value=${suval} ></div></td>`);
      }
      else
      $("#qboard").append( `<td class="sudo" id="q${(y)}-${(x)}" style="transition:${speed}ms linear;background-color:rgb(247, 255, 134);">  <div id="q${(y)}-${(x)}div" style="z-index:1; text-align:center;max-height:10px;">  <input class="inpsudo" id=in${y}-${x} maxlength="1" style="color:${defc}" value=${suval} ></div></td>`);
      

    }  


    else {


if (x >=3 && x <=5) {
  $("#qboard").append( `<td class="sudo" id="q${(y)}-${(x)}" style="transition:${speed}ms linear;background-color:rgb(247, 255, 134);">  <div id="q${(y)}-${(x)}div" style="z-index:1; text-align:center;max-height:10px;">  <input class="inpsudo" id=in${y}-${x} maxlength="1" style="color:${defc}" value=${suval} ></div></td>`);
}
else
$("#qboard").append( `<td class="sudo" id="q${(y)}-${(x)}" style="transition:${speed}ms linear;">  <div id="q${(y)}-${(x)}div" style="z-index:1; text-align:center;max-height:10px;">  <input class="inpsudo" id=in${y}-${x} maxlength="1" style="color:${defc}" value=${suval} ></div></td>`);

}


defc = "black"

          board[y][x] = 0;
       
      }
  
   $("#qboard").append("</tr>");
  }
  
     $("#qboard").append("</table>");

  


  }

  var rowr ,colc;



  function FindUnassignedLocation( obj)
  {
      for (obj.row = 0; obj.row < N; obj.row++) 
          for (obj.col = 0; obj.col < N; obj.col++)
              if (Sudoku[obj.row][obj.col] == 0) {
                  return true;
                }
                console.log("f")
      return false;
  }
   

 async function SolveSudoku()
  {


    var obj = {
      row : 0,
      col :0
    }


  
      // If there is no unassigned location,
      // we are done
      if (!FindUnassignedLocation(obj))
          return true;
   
      // Consider digits 1 to 9
      for (let num = 1; num <= 9; num++) 
      {
           


       
          // Check if looks promising
          if (await isSafe( obj.row, obj.col, num)) 
          {

            let defcol = document.getElementById(`q${obj.row}-${obj.col}`).style.backgroundColor;

               
              // Make tentative assignment
              Sudoku[obj.row][obj.col] = num;

            //  await hilight(`q${obj.row}-${obj.col}` , "red");

            
        
              document.getElementById(`in${obj.row}-${obj.col}`).value= num;

              await waitforme (speed+10);
              
              if (stats == 1 ) await pauser();
              
             // await hilight(`q${obj.row}-${obj.col}` , defcol);
   
              // Return, if success
              if (await SolveSudoku())
                  return true;
   
              // Failure, unmake & try again
              Sudoku[obj.row][obj.col] = 0;
              document.getElementById(`in${obj.row}-${obj.col}`).value= "";
              await waitforme (speed+10);
          }
      }
      
      // This triggers backtracking

      return false;
  }
   

  function UsedInRow( row,  num)
  {
      for (let col = 0; col < N; col++) {

          if (Sudoku[row][col] == num) {
              return true;
          }

        }

      return false;
  }
   
  /* Returns a boolean which indicates whether 
  an assigned entry in the specified column
  matches the given number. */
  function UsedInCol(  col,  num)
  {
      for (let row = 0; row < N; row++)
          if (Sudoku[row][col] == num)
              return true;
      return false;
  }
   
  /* Returns a boolean which indicates whether 
  an assigned entry within the specified 3x3 box 
  matches the given number. */
  function UsedInBox(  boxStartRow,boxStartCol,  num)
  {
      for (let row = 0; row < 3; row++)
          for (let col = 0; col < 3; col++)
              if (Sudoku[row + boxStartRow][col + boxStartCol] == num)
                  return true;
      return false;
  }
   
  /* Returns a boolean which indicates whether 
  it will be legal to assign num to the given 
  row, col location. */
  async  function isSafe(  row, col,  num)
  {

  

      let rt = !UsedInRow( row, num) && !UsedInCol( col, num) && !UsedInBox( row - row % 3, col - col % 3, num) && Sudoku[row][col] == 0;


      // boardcolor("0.2")

      // let r= row , c = col;
  
      // for (let c = 0; c < N; c++) {
  
      //   document.getElementById(`q${r}-${c}`).style.opacity = "1";
  
      // }
  
      // for (let r = 0; r < N; r++) {
  
      //   document.getElementById(`q${r}-${c}`).style.opacity = "1";
  
      // }
  
      // await waitforme(speed);
  
  return rt;
  
  }
   

async function SudokuSolver() {



for (let i = 0 ; i < N ; i++) {

for (let j = 0 ; j <N ; j++)  {

  

if (document.getElementById(`in${i}-${j}`).value == "") {

  Sudoku[i][j]  = 0;

}

else
Sudoku[i][j]  = Number( document.getElementById(`in${i}-${j}`).value);


document.getElementById(`in${i}-${j}`).setAttribute("readonly" , true);

}


}



let result = await SolveSudoku();

if (result == true) {

  Log(`<span style="font-size:140%;color:coral;">Solved</span>`)
}

else {

  Log(`<span style="font-size:140%;color:coral;">Solution Doesnt exist</span>`)
}


for (let i = 0 ; i < N ; i++) {

  for (let j = 0 ; j <N ; j++)  {
  
    
    document.getElementById(`in${i}-${j}`).removeAttribute("readonly");
  
  }
  
  
  }



}



slider.onchange= function() {


    let x = document.getElementsByClassName("queens");
    let ie;
    for (ie = 0; ie < x.length; ie++) {
      x[ie].style.transition = speed+"ms linear";
    }
    
    
  }




async function boardcolor(valu)  {


    let x = document.getElementsByClassName("sudo");
    let ie;
    for (ie = 0; ie < x.length; ie++) {

      x[ie].style.opacity = valu;
    }



}


// document.getElementById("suimg").onchange = async function() {


//   var formData = new FormData(document.getElementById("form1"));
    
//   let rr = await   $.ajax({
//        url: "http://sudokusazyv2.azurewebsites.net/api/get_json",
//        type: "POST",
//        data: formData,
//        cache: false,
//        contentType: false,
//        processData: false
//      });

//      let i = 0;


//      for (let u = 0;u <81;u+=9){


//        let row = rr.predictions.slice(u,u+9);


//        for (let j = 0 ; j < 9 ; j++) {


//       Sudoku[i][j] = Number(row[j]);

//       if (Sudoku[i][j] == 0) {

//         document.getElementById(`in${i}-${j}`).style.color = "red"
//         document.getElementById(`in${i}-${j}`).value = ""
        
//       }

//       else {
//       document.getElementById(`in${i}-${j}`).style.color = "black"
//       document.getElementById(`in${i}-${j}`).value = Sudoku[i][j]
//       }


//        }
        
//         ++i;

//     }



// }


placeholdermessage = `click sudoku cells to input values then write SudokuSolver()`;


window.onload = async function WindowLoad(event) {

  let adder = ""

for (let i = 0 ; i < placeholdermessage.length ; ++i) {
adder = adder + placeholdermessage[i];

codehere.placeholder = adder

await waitforme(70)

}
            
 }

makeboard(9)

