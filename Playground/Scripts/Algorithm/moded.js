

function createleaves(nnodes) {

    $(document).scrollLeft(0)
    $(document).scrollTop(0)

let i = 0 
for (; i < nnodes.length ; ++i) {


leaf( nnodes[i])

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