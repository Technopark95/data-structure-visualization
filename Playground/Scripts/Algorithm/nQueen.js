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
var N;


const clearscreen = function (e) {


  if (document.getElementById("qboard")) {

    document.getElementById("qboard").remove();

  }



  board = []
  N = 0;
}



function makeboard(n) {

  $("body").append(`<table id="qboard" style ="position:absolute; transition:100ms linear; top:135px;left:200px;transform:scale(0.8,0.8);" ></table>`);

  $("#qboard").append("<tr>");


  for (let y = 0; y < n; y++) {

    $("#qboard").append("<tr>");
    board.push([])

    for (let x = 0; x < n; x++) {

      $("#qboard").append(`<td class="floyd" id="q${(y)}-${(x)}" style="transition:${speed}ms linear;">  <div id="q${(y)}-${(x)}div" style="z-index:1; text-align:center;max-height:10px;"> <p id="q${(y)}-${(x)}val" class="queens" style="position:absolute;z-index:3;color:white;max-height:5px;font-size:400%;margin:0;top:-10px;left:13px;opacity:0;transition:${speed}ms linear;">Q</p></div></td>`);

      board[y][x] = 0;

    }

    $("#qboard").append("</tr>");
  }

  $("#qboard").append("</table>");
  $("#qboard").draggable();



}


async function isSafe(row, col) {
  let i, j;

  Log("Check this row on left side")

  for (i = 0; i < col; i++) {


    //   document.getElementById(`q${row}-${i}`).style.backgroundColor = "red";

    await hilight(`q${row}-${i}`, "red")

    if (board[row][i] == 1) {

      //  document.getElementById(`q${row}-${i}`).style.backgroundColor = "purple";

      await hilight(`q${row}-${i}`, "purple")

      Log(`<span style="font-size:130%;">Collision Happened!</span>`)

      await waitforme(speed + 100)

      await boardcolor();

      await waitforme(speed + 100)

      return false;

    }

  }


  await waitforme(speed + 100)

  await boardcolor();

  Log("Check upper diagonal on left side")

  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {

    // document.getElementById(`q${i}-${j}`).style.backgroundColor = "red";

    await hilight(`q${i}-${j}`, "red")


    if (board[i][j] == 1) {

      //    document.getElementById(`q${i}-${j}`).style.backgroundColor = "purple";

      await hilight(`q${i}-${j}`, "purple")

      Log(`<span style="font-size:130%;">Collision Happened!</span>`)

      await waitforme(speed + 100)


      await boardcolor();


      await waitforme(speed + 100)

      return false;

    }

  }

  await waitforme(speed + 100)
  await boardcolor();

  Log("Check lower diagonal on left side")

  for (i = row, j = col; j >= 0 && i < N; i++, j--) {


    //  document.getElementById(`q${i}-${j}`).style.backgroundColor = "red";

    await hilight(`q${i}-${j}`, "red")

    if (board[i][j] == 1) {

      //   document.getElementById(`q${i}-${j}`).style.backgroundColor = "purple";

      await hilight(`q${i}-${j}`, "purple")

      Log(`<span style="font-size:130%;">Collision Happened!</span>`)

      await waitforme(speed + 100)

      await boardcolor();

      await waitforme(speed + 100)

      return false;

    }
  }


  await waitforme(speed + 100)

  await boardcolor();

  return true;
}




async function queensolver(col = 0) {
  /* base case: If all queens are placed 
    then return true */
  if (col >= N)
    return true;

  /* Consider this column and try placing 
     this queen in all rows one by one */
  for (let i = 0; i < N; i++) {
    /* Check if the queen can be placed on 
      board[i][col] */


    document.getElementById(`q${i}-${col}val`).style.opacity = "1";

    hilight(`q${i}-${col}`, "red")

    await waitforme(speed + 100);


    if (await isSafe(i, col) == 1) {
      /* Place this queen in board[i][col] */
      board[i][col] = 1;


      document.getElementById(`q${i}-${col}val`).style.opacity = "1";
      await waitforme(speed + 100)

      /* recur to place rest of the queens */
      if (await queensolver(col + 1) == 1) {

        return true;
      }


      /* If placing queen in board[i][col] 
         doesn't lead to a solution, then 
         remove queen from board[i][col] */
      board[i][col] = 0; // BACKTRACK 
      document.getElementById(`q${i}-${col}val`).style.opacity = "0";
      Log(`<span style="font-size:160%;color:coral;">BackTrack</span>`)
      await waitforme(speed + 100)
    }

    else {

      document.getElementById(`q${i}-${col}val`).style.opacity = "0";
      hilight(`q${i}-${col}`, defaultcolor)

      await waitforme(speed + 100);
    }
  }

  /* If the queen cannot be placed in any row in 
      this colum col  then return false */
  return false;
}



async function nQueensolve(num) {

  clearscreen();
  N = num;
  makeboard(N);
  let is_solved = await queensolver();

  if (!is_solved) {
    Log("Solution doesnt Exist for given input.");
  }

}


slider.onchange = function () {


  let x = document.getElementsByClassName("queens");
  let ie;
  for (ie = 0; ie < x.length; ie++) {
    x[ie].style.transition = speed + "ms linear";
  }


}




async function boardcolor() {


  let x = document.getElementsByClassName("floyd");
  let ie;
  for (ie = 0; ie < x.length; ie++) {


    x[ie].style.backgroundColor = defaultcolor;
  }



}