

window.onload = function () {

    let allInputs = document.getElementsByClassName("inputs");


    for (let i = 0; i < allInputs.length; i++) {

        allInputs[i].onblur = function () {

            if (allInputs[i].value.length > 0) {
                
                return false;
                
            }

        }


    }





}


function clickSend()  {


    let startedElement =  document.getElementById("startedmessage");

    startedElement.innerText = "We will contact you soon."

}