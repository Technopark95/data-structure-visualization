
let logoDiv  = document.getElementById("logoholder")

let contactField  = document.getElementById("contactfield")


contactField.onkeypress = function (evt)  {

        let charCode = evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    

}


const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function clickSend()  {

let allInputs = document.getElementsByClassName("inputs");

let name = allInputs[0].value;
let email = allInputs[1].value;
let contact = allInputs[2].value;
let occupation = allInputs[3].value;




    let startedElement =  document.getElementById("responsemessage");
    startedElement.innerText = "We will contact you soon."

}


window.onscroll = function () {


if (window.scrollY > 210) {
logoDiv.style.opacity = ".4";
}

if (window.scrollY <= 120) {
    logoDiv.style.opacity = "0";
    }


}