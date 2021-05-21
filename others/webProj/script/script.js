let logoDiv = document.getElementById("logoholder")
let contactField = document.getElementById("contactfield")
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let startedElement = document.getElementById("responsemessage");


let allInputs;
let firstName;
let lastName;
let email;
let contact;
let occupation;
let statusCode = "";

window.onload = function() {

    allInputs = document.getElementsByClassName("inputs");
    firstName = allInputs[0];
    lastName = allInputs[1];
    email = allInputs[2];
    contact = allInputs[3];
    occupation = allInputs[4];

}

function focusError(field) {
    field.style.border = "2px solid red";
    field.focus();
    setTimeout(() => {
        field.style.border = "";
    }, 3000)
}



function validateFirstName() {

    let isValidFirstName = firstName.value.length > 0;

    if (!isValidFirstName) {

        focusError(firstName);

        statusCode = "First Name";

    }

}



function validateLastName() {

    let isValidLastName = lastName.value.length > 0;

    if (!isValidLastName) {

        focusError(lastName);

        statusCode = "Last Name";

    }

}


function validateEmail() {

    let isValidEmail = emailRegEx.test(String(email.value).toLowerCase());

    if (!isValidEmail) {

        focusError(email);

        statusCode = "Email";

    }

}


function validatePhone() {

    let isValidContact = contact.value.length > 0;

    if (!isValidContact) {

        focusError(contact);

        statusCode = "Phone number";

    }

}

function validateOccupation() {

    let isValidOccupation = occupation.value.length > 0;

    if (!isValidOccupation) {

        focusError(occupation);

        statusCode = "Occupation";
    }


}



function validateForm() {


    if (statusCode.length == 0) validateFirstName();
    else return

    if (statusCode.length == 0) validateLastName();
    else return

    if (statusCode.length == 0) validateEmail();
    else return

    if (statusCode.length == 0) validatePhone();
    else return

    if (statusCode.length == 0) validateOccupation();
    else return


}



async function showStatus() {


    let responseText = "";
    let responseColor = "";

    if (statusCode.length == 0) {
        responseText = "Thank you, We will contact you soon.";
        responseColor = "rgb(109,209,0,1)"
        window.scrollTo(0, 0)
    } else {
        responseText = "Enter " + statusCode + " correctly";
        responseColor = "red"
    }

    startedElement.innerHTML = responseText
    startedElement.style.color = responseColor
    startedElement.style.display = "block"


    setTimeout(() => {

        startedElement.style.display = "none"

    }, 3000)



}



function clickSend() {


    statusCode = ""

    validateForm();

    showStatus();
    document.getElementById("contactform").scrollIntoView();


}