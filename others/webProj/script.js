
let logoDiv  = document.getElementById("logoholder")
let contactField  = document.getElementById("contactfield")
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function clickSend()  {

let allInputs = document.getElementsByClassName("inputs");

let status="";

let name = allInputs[0].value;
let email = allInputs[1].value;
let contact = allInputs[2].value;
let occupation = allInputs[3].value;


let isValidName = name.length > 0;
let isValidEmail = email.length >0;
let isValidEmailFormat = emailRegEx.test(String(email).toLocaleLowerCase());
let isValidContact = contact.length > 0;  
let isValidOccupation = occupation.length > 0;  

let responseText = "";
let responseColor = "";


if (isValidName && isValidEmail && isValidContact && isValidOccupation && !isValidEmailFormat) {
    responseText = "Incorrect Email";
    responseColor = "red"
}

else if (isValidName && isValidEmail && isValidContact && isValidOccupation) {
    responseText = "Thank you, We will contact you soon.";
    responseColor = "lightgreen"
}

else {
    responseText = "You are required to fill all the information properly.";
    responseColor = "red"
}


let startedElement =  document.getElementById("responsemessage");


    startedElement.innerHTML = responseText
    startedElement.style.color = responseColor
    startedElement.style.display = "block"

}


contactField.onkeypress = function (evt)  {

    let charCode = evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;


}


window.onscroll = function () {


if (window.scrollY > 210) {
logoDiv.style.opacity = ".4";
}

if (window.scrollY <= 120) {
    logoDiv.style.opacity = "0";
    }


}


document.getElementById("notebtn").onclick =function ()  {

document.getElementById("noteholder").style.maxHeight = "140px";


}