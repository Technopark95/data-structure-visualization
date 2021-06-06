
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



document.getElementById("cav1").remove();
let indicator = document.getElementById("ctrlhold")

skipbtn.style.display = "none";



let conwaygrid = document.getElementById("conwaygrid");

let CellularAutomata = [];
let FutureCA = [];

let cellrow = 70, cellcol = 130;

if (ismob) {
    cellcol = 85;
    cellrow = 130;
}


for (let i = 0; i < cellrow; i++) {

    CellularAutomata.push([])
    FutureCA.push([])

    conwaygrid.insertAdjacentHTML("beforeend", `<div id="cgr${i}" class="knuthtable"></div>`)


    for (let j = 0; j < cellcol; j++) {


        document.getElementById(`cgr${i}`).insertAdjacentHTML("beforeend", `<div id=cgc${i}-${j} class="conwaycells" style="background-color: coral;"><p style="display:none;">${i}</p><p style="display:none;">${j}</p></div>`)


        CellularAutomata[i][j] = 0;
        FutureCA[i][j] = 0;



        document.getElementById(`cgc${i}-${j}`).onclick = function () {


            let children = document.getElementById(`cgc${i}-${j}`).children

            let rowc = children[0].innerHTML
            let colc = children[1].innerHTML


            if (CellularAutomata[rowc][colc] == 0) {

                document.getElementById(`cgc${rowc}-${colc}`).style.backgroundColor = "black";

                CellularAutomata[rowc][colc] = 1;
            }

            else if (CellularAutomata[rowc][colc] == 1) {

                document.getElementById(`cgc${rowc}-${colc}`).style.backgroundColor = "coral";
                CellularAutomata[rowc][colc] = 0;

            }






        }

        document.getElementById(`cgc${i}-${j}`).onmouseenter = function(e) {

               if (!e.ctrlKey) {
                    return;
               }

               document.getElementById(`cgc${i}-${j}`).style.backgroundColor = "black";

               CellularAutomata[i][j] =1;





        }





    }



}



function countAliveNeighbor(m, n) {


    let neg = 0;

    for (let i = m - 1; i <= m + 1; i++) {


        for (let j = n - 1; j <= n + 1; j++) {

            neg += CellularAutomata[i][j];


        }

    }


    return neg - CellularAutomata[m][n];

}


function Generation() {


    for (let i = 1; i < cellrow - 1; i++) {


        for (let j = 1; j < cellcol - 1; j++) {


            let aliveadjacent = countAliveNeighbor(i, j);


            // rule for alive cells 
            if (CellularAutomata[i][j] == 1 && aliveadjacent < 2) {

                FutureCA[i][j] = 0;

            }

            else if ((CellularAutomata[i][j] == 1) && (aliveadjacent > 3)) {
                FutureCA[i][j] = 0;
            }



            else if ((CellularAutomata[i][j] == 1) && (aliveadjacent == 2 || aliveadjacent == 3)) {
                FutureCA[i][j] = 1;
            }


            // rule for dead cells
            else if (CellularAutomata[i][j] == 0 && (aliveadjacent == 3)) {

                FutureCA[i][j] = 1;

            }



            if (FutureCA[i][j] == 1) document.getElementById(`cgc${i}-${j}`).style.backgroundColor = "black";

            else if (FutureCA[i][j] == 0) document.getElementById(`cgc${i}-${j}`).style.backgroundColor = "coral";





        }


    }


    for (let i = 0; i < cellrow; i++) {


        for (let j = 0; j < cellcol; j++) {

            CellularAutomata[i][j] = FutureCA[i][j];
            FutureCA[i][j] = 0;



        }



    }


}


var stopper = 0;

async function startgeneration() {


    for (; ;) {

        Generation();


        await waitforme(speed);

        if (stopper == 1) {
            stopper = 0;
            break;
        };


    }



}


document.getElementById("play-btn2").onclick = function () {

    document.getElementById("play-btn2").style.display = "none";
    document.getElementById("pause-btn2").style.display = "";


    startgeneration();

}

document.getElementById("pause-btn2").onclick = function () {

    document.getElementById("play-btn2").style.display = "";
    document.getElementById("pause-btn2").style.display = "none";

    stopper = 1;

};



document.onkeydown = function(e)  {

    if (!e.ctrlKey) return;

    indicator.style.backgroundColor = "red";
    indicator.children[0].style.color = "white";




}

document.onkeyup = function(e)  {



    indicator.style.backgroundColor = "white";
    indicator.children[0].style.color = "black";




}