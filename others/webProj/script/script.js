let logoDiv = document.getElementById("logoholder")
let contactField = document.getElementById("contactfield")
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validateForm() {


    let allInputs = document.getElementsByClassName("inputs");

    let firstName = allInputs[0];
    let lastName = allInputs[1];
    let email = allInputs[2];
    let contact = allInputs[3];
    let occupation = allInputs[4];


    let isValidFirstName = firstName.value.length > 0;

    if (!isValidFirstName) {

        firstName.style.border = "2px solid red";
        firstName.focus();

        setTimeout(() => {

            firstName.style.border = "";

        }, 3000)
        return "First name";
    }


    let isValidLastName = lastName.value.length > 0;

    if (!isValidLastName) {

        lastName.style.border = "2px solid red";
        lastName.focus();

        setTimeout(() => {

            lastName.style.border = "";

        }, 3000)
        return "Last name";
    }

    let isValidEmail = emailRegEx.test(String(email.value).toLowerCase());

    if (!isValidEmail) {

        email.style.border = "2px solid red";
        email.focus();

        setTimeout(() => {

            email.style.border = "";

        }, 3000)
        return "email";
    }


    let isValidContact = contact.value.length > 0;


    if (!isValidContact) {

        contact.style.border = "2px solid red";
        contact.focus();

        setTimeout(() => {

            contact.style.border = "";

        }, 3000)
        return "contact";
    }



    let isValidOccupation = occupation.value.length > 0;


    if (!isValidOccupation) {

        occupation.style.border = "2px solid red";
        occupation.focus();

        setTimeout(() => {

            occupation.style.border = "";

        }, 3000)
        return "occupation";
    }


    return 0;



}



function showStatus(status) {


    let responseText = "";
    let responseColor = "";

    if (status == 0) {
        responseText = "Thank you, We will contact you soon.";
        responseColor = "white"
    } else {
        responseText = "Enter " + status + " correctly";
        responseColor = "red"
    }


    let startedElement = document.getElementById("responsemessage");


    startedElement.innerHTML = responseText
    startedElement.style.color = responseColor
    startedElement.style.display = "block"


    setTimeout(() => {

        startedElement.style.display = "none"

    }, 3000)



}



function clickSend() {

    let status = validateForm();

    showStatus(status);
}