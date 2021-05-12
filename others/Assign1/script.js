



let allInputFields = document.getElementsByClassName("inputfield")

let messageBox = document.getElementById("messageph");


const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

for (let i = 0; i < allInputFields.length; i++) {


    let allChilren = allInputFields[i].children;

    let fromFieldLabel = allChilren[0];
    let fromFieldTextarea = allChilren[1];
    let fromFieldUnderline = allChilren[2];


    fromFieldTextarea.oninput = function () {

        fromFieldLabel.style.cssText = `top:-5px;
        font-size: 10px;
        color: rgb(0, 103, 221);`

    }


    fromFieldTextarea.onfocus = function () {

        fromFieldUnderline.style.backgroundColor = "rgb(0, 103, 221)";


        fromFieldLabel.style.cssText = `top:-5px;
        font-size: 10px;
        color: rgb(0, 103, 221);`

    }


    fromFieldTextarea.onblur = function () {

        fromFieldUnderline.style.backgroundColor = "rgb(95, 95, 95)";



        if (fromFieldTextarea.value.length > 0) {

            fromFieldLabel.style.cssText = `top:-5px;
            font-size: 10px;
            color: rgb(0, 103, 221);`


        }

        else {

            fromFieldLabel.style.cssText = `top:15px;
            font-size: larger;
            color: rgb(129, 129, 129);`

        }


    }




}


function showCC(element) {

    let targetElement = document.getElementById(element)

    if (targetElement.style.display == "block") {

        targetElement.style.display = "none";

    }

    else {

        targetElement.style.display = "block";

    }




}







let toTextInput = document.getElementById("tofieldtextinput");
let ccTextInput = document.getElementById("ccfieldtextinput");
let bccTextInput = document.getElementById("bccfieldtextinput");

let validationArray = [toTextInput, ccTextInput, bccTextInput]

toTextInput.onkeydown = function (e) {

    if (e.key == " " || e.key == "Tab") {

        toTextInput.value += ";"

        return false;

    }


}

ccTextInput.onkeydown = function (e) {

    if (e.key == " " || e.key == "Tab") {

        ccTextInput.value += ";"

        return false;

    }


}


bccTextInput.onkeydown = function (e) {

    if (e.key == " " || e.key == "Tab") {

        bccTextInput.value += ";"

        return false;

    }


}



function checker() {



    for (let i = 0; i < validationArray.length; i++) {

        let receivingPeople = validationArray[i].value;

        if (validationArray[i].parentNode.style.display == "none") {
            continue;
        }

        let allPeople = receivingPeople.split(';')



        if (allPeople[0] == "") {
            alert("Check your Receipient list.")
            return;
        }

        for (let email of allPeople) {

            if (email == "") continue;


            if (!emailRegEx.test(String(email).toLowerCase())) {

                alert("Check your Receipient list.")

                return false;

            }


        }

    }

    if (!emailRegEx.test(String(document.getElementById("fromfieldtextinput").value).toLowerCase())) {

        alert("Check your email.")
        return;

    }





    if (document.getElementById("subfieldtextinput").value.length < 1) {

        let choice = confirm("Subject line is empty, do you still want to continue?")

    }


}



document.getElementById("boldbtn").onclick = function () {

    document.execCommand("bold");

}

document.getElementById("italicbtn").onclick = function () {

    document.execCommand("italic");

}

