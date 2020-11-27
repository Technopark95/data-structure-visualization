
var length =0

var storedarray = []

var arr = ''

var tableobj

function array (typed)  {


  $(document).scrollLeft(0)
  $(document).scrollTop(0)

  length = typed.length 

     arr = '<table id="t1" style="position:absolute;border-collapse: collapse; margin-top:235px; margin-left:100px; text-align:center; transition-duration : 100ms;table-layout: fixed;" >'
  
    $("body").prepend(arr);
  
    $("#t1").draggable();
  

    $("#t1").append("<tr>");
  
  
    for (var i = 0 ; i < typed.length ; ++i)  {

      var r =typed[i]
  
  $("#t1").append(' <td id="aitem'+ i+'" class="arrayd" style="text-align:center; min-width:70px;">     <div id="aitemdiv'+ i+'"  style="text-align:center; position:absolute; z-index:1">         <p id="aitemindex'+i +'" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>'+i+'</p>             <p id= "aitemval'+i +'" class="arrayitem">'+ r +'</p>                        </div>  </td>')
  storedarray.push(r)


    }
    $("#t1").append("<tr>");
    $("#t1").append("</table>");

    tableobj = $("#t1")
  
    $("#iindex").show()
    $("#jindex").show()
    $("#kindex").show()
  
  }


 function temparray (sn ,cellid)  {

let tableid= `t${Math.ceil (Math.random()*10)}${ Math.ceil( Math.random()*10)}`


  let ar = `<table id="${tableid}" style="position:absolute;border-collapse: collapse; margin-top:535px; margin-left:100px; text-align:center; transition-duration : 100ms;table-layout: fixed;" ><tr>   </tr></table>`
  
  $("body").prepend(ar);

  $("#"+tableid).draggable( {
  });



  for (let i = 0 ; i < sn ; ++i)  {



$("#"+tableid).append(`<td id="${cellid}item${i}" class="arrayd" style="text-align:center; min-width:70px;">     <div id="${cellid}itemdiv${i}"  style="text-align:center; position:absolute; z-index:1">         <p id="${cellid}itemindex${i}" style="position:absolute; color:coral; margin-top:67px; margin-left:35px; font-size:37%";>${i}</p>             <p id= "${cellid}itemval${i}" class="arrayitem">0</p>                        </div>  </td>`)


  }

  tableobj = $("#"+tableid)

  return tableobj;

}




 async function swapp( vala,valb) {


    if (stats == 1  ) await pauser();

    return new Promise(resolve => {
var x =   $("#aitem"+vala).position()

var y =   $("#aitem" + valb).position()

var s = Math.abs(x.left  - y.left)

var a = $("#aitemval" +vala).text() 
var b = $("#aitemval" +valb).text()





$("#aitemval"+vala).animate({

  "color" : "black",
  "margin-top" : "170px"
  
  
  } ,1000, function()  {


    $("#aitemval"+vala).animate({

      "margin-left" : s+"px"
      
      
      } ,2000, function()  {
      
      
        $("#aitemval"+vala).animate({
      
          "color" : "white",
          "margin-top" : "20px"
          
          
          },1000 , function ()  {

            $("#aitemval"+vala).css({"margin-left" :"0px" ,"margin-top" :"20px" })


          })
          
      
      
      })




  })







  $("#aitemval"+valb).animate({

    "color" : "black",
    "margin-top" : "-105px"
    
    
    }, 1000 , function()  {
  
  
      $("#aitemval"+valb).animate({
  
        "margin-left" : "-"+(s*2 - 10)+"px"
        
        
        
        },2000 , function()  {
        
        
          $("#aitemval"+valb).animate({
        
            "color" : "white",
            "margin-top" : "20px"
            
            
            } ,1000 , function ()  {

              $("#aitemval"+valb).css({"margin-left" :"0px" , "margin-top" :"20px"  })

              $("#aitemval"+vala).text(b) 
              $("#aitemval"+valb).text(a) 

              

              resolve('resolved');

            })
            
        
        
        })
  
  
  
  
    })




  });



  }




async  function SelectionSort() {
    let len = storedarray.length;
    for (let isel = 0; isel < len; isel++) {
        let min = isel;
        
      
        for (let jsel = isel + 1; jsel < len; jsel++) {
         
          await ij(isel , jsel);

          await hilight("aitem"+(jsel) , "red",  "1s" , 1100)
          hilight("aitem"+(jsel),  defaultcolor ,  "1s" , 1100 )
            if (storedarray[min] > storedarray[jsel]) {
               hilight("aitem"+(min) ,  defaultcolor ,  "1s" , 1100)
                min = jsel;
            await   hilight("aitem"+(min) , "blueviolet", "1s" , 1100)
            }
        }
        if (min != isel) {
          await  display("Swapping index " + isel + " with index" + min)
            let tmp = storedarray[isel];
            storedarray[isel] = storedarray[min];
            storedarray[min] = tmp;
            await swapp(isel ,min )
            hilight("aitem"+(min) , defaultcolor ,  "1s" , 1100)
            
        }
        await hilight("aitem"+(isel) , "coral"  ,  "1s" , 1100)
    }
 
}





 
  async  function BubbleSort(){

    var lene = storedarray.length;
    
    $("#iindex").text("j")
    $("#jindex").text("j+1")

    for (let i=0; i < lene-1; i++){
        for (let j=0; j < lene-i-1; j++){
          await ij(j , j+1);
          await display('Comparing index j=' + (j) + ' and j+1=' + (j+1) ) 
          hilight("aitem"+(j) , "red" , "1000ms" , 1100)  
              await hilight("aitem"+(j+1), "red" , "1000ms" , 1100) 
            if (storedarray[j] > storedarray[j+1]){
              var temp = storedarray[j];
              storedarray[j] = storedarray[j+1];
              storedarray[j+1] = temp;
              await display('Element array['+ (j) +'] > array[' + (j+1)+ '] , Swapping')
              
             await swapp(j,j+1)
             
            }
            
            else {
              await display('Element array['+ (j) +'] < array[' + (j+1)+ '] , Skip')  
            }
            hilight("aitem"+(j) , defaultcolor, '1s' , 900)  
             hilight("aitem"+(j+1) ,defaultcolor,'1s' , 900)

             
              
              
        }

       
    }

    $("#iindex").text("i").hide()
    $("#jindex").text("j").hide()
}



async function InsertionSort() {
  for (var i1 = 1; i1 < storedarray.length; i1++) {
    await I(i1,"a")
    var j1 = i1 - 1
    var temp = storedarray[i1]
   await hilight(`aitem${i1}` , "red" ,"1100ms",1100)
    
    await display('Inserting '+ (temp)  +' to correct index')
    await hilight(`aitem${i1}` , defaultcolor ,"1100ms",1100)
      
    while (j1 >= 0 && storedarray[j1] > temp) {

      await display('Comparing  array[' + (j1) + '] => '+ (storedarray[j1])  + ' > ' + (temp) + '.Move element to right.');
      await J(j1 ,"a");
      await moveright(j1);
      storedarray[j1 + 1] = storedarray[j1];
      j1--;
    
      
    }
    await display('Correct place at index = ' + (j1+1) )
    storedarray[j1+1] = temp

    await insert(temp ,j1+1 );
  
  }
 
}


async function merge( l,  m,  r) 
{ 
    let i, j, k; 
    let n1 = Math.floor( m - l + 1); 
    let n2 = Math.floor( r - m); 
  
    /* create temp arrays */
    let L = [], R = [];
  
    let Larrgraphics = await temparray(n1, "l");
    let Rarrgraphics = await temparray(n2, "r");
    
    let parentarrayoffset = ($("#t1").offset());
    $(Larrgraphics).offset({top: parentarrayoffset.top+200})
    $(Rarrgraphics).offset({top:parentarrayoffset.top+340})

    $("#iindex").show();
  $("#jindex").hide();
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) {


        L[i] = storedarray[l + i];
        await I(i,"l")
     await   insert(storedarray[l + i] , i , "l")
        
        
    }


    $("#jindex").show();
    $("#iindex").hide();
    for (j = 0; j < n2; j++)  {

        R[j] = storedarray[m + 1 + j];
        await J(j,"r")
     await   insert(storedarray[m + 1 + j] , j , "r")

        
    }

    $("#jindex").show();
    $("#iindex").show();
  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    I(0,"l")
    J(0,"r")
    while (i < n1 && j < n2) { 
        if (L[i] <= R[j]) { 
          await I(i , "l")
          storedarray[k] = L[i]; 
      await hilight(`litem${i}` , "red" , "800ms",800)
      await hilight(`litem${i}` , defaultcolor , "800ms",800)
      await K(k, "a")
          await   insert(L[i] , k , "a")
            i++; 
        } 
        else { 
          storedarray[k] = R[j]; 
          await J(j, "r")
          await hilight(`ritem${j}` , "red" , "800ms",800)
      await hilight(`ritem${j}` , defaultcolor , "800ms",800)
     
      await K(k, "a")
           await   insert(R[j] , k , "a")
            j++; 
        } 
        k++; 
    } 
  
    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) { 
     
      storedarray[k] = L[i]; 
      await I(i , "l")
      await hilight(`litem${i}` , "red" , "800ms",800)
      await hilight(`litem${i}` , defaultcolor , "800ms",800)
      await K(k, "a")
    await  insert(L[i] , k , "a")
        i++; 
        k++; 
    } 
  
    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) { 
      
      storedarray[k] = R[j];
      await J(j, "r")
      await hilight(`ritem${j}` , "red" , "800ms",800)
      await hilight(`ritem${j}` , defaultcolor , "800ms",800)
      await K(k, "a")
      await   insert(R[j] , k , "a")
        j++; 
        k++; 
    } 


    Larrgraphics.remove()
    Rarrgraphics.remove()


} 
  
/* l is for left index and r is right index of the 
   sub-array of arr to be sorted */
async function ms(  l,  r) 
{ 
    if (l < r) { 
        // Same as (l+sr)/2, but avoids overflow for 
        // large l and h 
        let m = Math.floor (l + (r - l) / 2); 
  
     
       await ms( l, m); 
       
       await ms( m + 1, r); 
       await cutoutarray(l,r)
       await merge( l, m, r); 

    } 
} 


 async function MergeSort()  {


 await  ms (0 , storedarray.length-1)

   $("#iindex").hide()
   $("#jindex").hide()
   $("#kindex").hide()


}







async function BinarySearch(value){

  $("#kindex").text("mid").show();

  await display( 'set first = 0')
  await hilight("aitem0", "blueviolet" , "1000ms" , 1100)
  var firstIndex  = 0

  I(firstIndex ,  "a" )

  var    lastIndex   = storedarray.length - 1

  J(lastIndex ,  "a" )

      await display( 'set last = '+lastIndex)
      await hilight("aitem"+(lastIndex), "blueviolet" , "1000ms" , 1100)

   var   middleIndex = Math.floor((lastIndex + firstIndex)/2);
   K(middleIndex ,  "a" )
      await display( 'set mid = (first+last)/2')
      await hilight("aitem"+(middleIndex), "rgb(109,209,0,1)", "1000ms" , 2100)




  while(storedarray[middleIndex] != value && firstIndex < lastIndex)
  {
     
     if (value < storedarray[middleIndex])
      {
        
        await hilight("aitem"+(middleIndex) , defaultcolor , "1000ms" , 1100)
         await display( 'search item '+ value +' is smaller array[' + middleIndex + ']')
         await display( 'set last = mid-1')
          hilight("aitem"+lastIndex ,  defaultcolor , "1000ms" , 1100)
          lastIndex = middleIndex - 1;
          J(lastIndex ,  "a" )
          await hilight("aitem"+lastIndex , "blueviolet" ,  "1000ms" , 1100)
      } 
    else if (value > storedarray[middleIndex])
      {
        await hilight("aitem"+(middleIndex) ,defaultcolor ,  "1000ms" , 1100)
        await display( 'search item '+ value +' is larger array[' + middleIndex + ']')
         await display( 'set first = mid+1')
          hilight("aitem"+firstIndex ,defaultcolor ,  "1000ms" , 1100)
          firstIndex = middleIndex + 1;
          I(firstIndex ,  "a" )
          await hilight("aitem"+firstIndex , "blueviolet" ,  "1000ms" , 1100)
      }
    
      await hilight("aitem"+(middleIndex),defaultcolor ,  "1000ms" , 1100)
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
      await display( 'set mid = (first+last)/2')
      K(middleIndex ,  "a" )
      await hilight("aitem"+(middleIndex), "rgb(109,209,0,1)" ,  "2000ms" , 2100)
  
  }

if (storedarray[middleIndex] == value){

  await display( 'Item Found' )
  Output('Item Found at index = ' + middleIndex)
}

else{

  await display( 'Item Doesnt exist' )
  Output('Item Doesnt exist return -1')
}


}


 async  function insert(value ,index , cellid="a") {
    if (stats == 1  ) await pauser();

    return new Promise ( resolve => {
    $(`#${cellid}itemval${index}`).css({opacity:"0%"})

    $(`#${cellid}itemval${index}`).text(value)

    $(`#${cellid}itemval${index}`).animate({opacity:"100%"} , 1000)


    setTimeout (function()  {

      resolve('resolved')
          },1000)
          

    })

  }



  function moveleft(index)  {

    $("#aitemval"+(index-1)).animate({opacity:"0%"} , 500)

    $("#aitemval"+(index)).animate({"margin-left":"-160px" , "opacity":"0%" },1000 ,function()  {

        $("#aitemval"+(index-1)).text($("#aitemval"+(index)).text())

        $("#aitemval"+(index-1)).animate({"opacity":"100%"} , 500 , function()  {

          $("#aitemval"+(index)).animate({"margin-left":"0px" , "opacity":"0%" })
  
        })
    })


}

async function moveright(index)  {

  if (stats == 1  ) await pauser();

  return new Promise ( resolve => {

  $("#aitemval"+(index+1)).animate({opacity:"0%"} , 500)

  $("#aitemval"+(index)).animate({"margin-left":"90px" , "opacity":"0%" },1000 ,function()  {

      $("#aitemval"+(index+1)).text($("#aitemval"+(index)).text())

      $("#aitemval"+(index+1)).animate({"opacity":"100%"} , 500 , function()  {

        $("#aitemval"+(index)).animate({"margin-left":"0px" , "opacity":"0%" })

      })

     
  })


  setTimeout (function()  {

    resolve('resolved')
        },2000)
        

  })

}


var index = length-2

/*

async function insertAt(value ,index , i =length-2) {

  if (stats == 1  ) await pauser();



  
setTimeout( function()  {


  insertAt(value , index , i-1)

}, 2000);


  
  }
  
*/

 async function  insertAt (value , index)  {

  for (let i = length-2 ; i >=index ; --i)  {

    storedarray[i+1] = storedarray[i];
   await moveright(i);


  }



    storedarray[index] = value;
    insert(value ,index)
 


  


  }






