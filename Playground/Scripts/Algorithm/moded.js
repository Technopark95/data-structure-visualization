
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

function createleaves(nnodes) {

    $(document).scrollLeft(0)
    $(document).scrollTop(0)

let i = 0 
for (; i < nnodes.length ; ++i) {


heapleaf( nnodes[i])

}


counttreenodes = i;

if (i > 30) {

    counttreenodes = 30;
}


}
//roopam.23828@lpu.co.in
//sahil.24886@lpu.co.in

function createnodes(nnodes) {

    $(document).scrollLeft(0)
  $(document).scrollTop(0)

    for (let i = 0 ; i < nnodes.length ; ++i) {


        addnode( nnodes[i])
        
        }
        
    
    
    
    }
    

 async   function traverse()  {



for (var t = 0 ; t < storedarray.length ; t++) {

     
    await  hilight("aitem"+(t) , "rgb(109,209,0,1)" , "500ms",700)
    hilight("aitem"+(t) , defaultcolor , "500ms" , 700)
    Output(storedarray[t])

}



    }


    async   function search(item)  {



        for (var t = 0 ; t < storedarray.length ; t++) {
        
            if  (item == storedarray[t]) {

                await  hilight("aitem"+(t) , "rgb(255,0,0,1)" , "6000ms",6500)
                Output("Found at index " + t)
                break;
            }

            await  hilight("aitem"+(t) , "rgb(109,209,0,1)" , "500ms",700)
            hilight("aitem"+(t) , defaultcolor , "500ms" , 700)
          
        
        }
        
        
        
            }