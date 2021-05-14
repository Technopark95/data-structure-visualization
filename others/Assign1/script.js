let allInputFields = document.getElementsByClassName("inputfield")

let messageBox = document.getElementById("messageph");

let boldInd = document.getElementById('boldindicator');
let ItalicInd = document.getElementById('italicindicator');
let boldIndLbl = document.getElementById('boldindicatorlbl');
let ItalicIndLbl = document.getElementById('italicindicatorlbl');
let colorswatch = document.getElementById("colorselect")
let sendButton = document.getElementById("sendbtn")
let receipientDiv = document.getElementById("tofieldtextinput")
let emailInputBox = document.getElementById("emailinput")


const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

for (let i = 0; i < allInputFields.length; i++) {


    let allChilren = allInputFields[i].children;

    let fromFieldLabel = allChilren[0];
    let fromFieldTextarea = allChilren[1];
    let fromFieldUnderline = allChilren[2];


    fromFieldTextarea.oninput = function () {

        fromFieldLabel.style.cssText = `top:-2px;
        font-size: 10px;
        color: red;`

    }


    if (i == 1) {

        emailInputBox.onfocus = function () {

            fromFieldUnderline.style.backgroundColor = "red";
            fromFieldLabel.style.cssText = `top:-2px;
        font-size: 10px;
        color: red;`

        }

        fromFieldTextarea.onfocus = function () {

            fromFieldUnderline.style.backgroundColor = "red";
            fromFieldLabel.style.cssText = `top:-2px;
        font-size: 10px;
        color: red;`

        }


        fromFieldTextarea.onblur = function () {

            fromFieldUnderline.style.backgroundColor = "rgb(95, 95, 95)";

            if (fromFieldTextarea.children.length > 1) {

                fromFieldLabel.style.cssText = `top:-2px;
            font-size: 10px;
            color: red;`


            }

            else {

                fromFieldLabel.style.cssText = `top:15px;
            font-size: larger;
            color: rgb(129, 129, 129);`

            }






        }



        emailInputBox.onblur = function () {

            fromFieldUnderline.style.backgroundColor = "rgb(95, 95, 95)";

            if (fromFieldTextarea.children.length > 1) {

                fromFieldLabel.style.cssText = `top:-2px;
            font-size: 10px;
            color: red;`


            }

            else {

                fromFieldLabel.style.cssText = `top:15px;
            font-size: larger;
            color: rgb(129, 129, 129);`

            }






        }




    }



    else {

        fromFieldTextarea.onfocus = function () {

            fromFieldUnderline.style.backgroundColor = "red";
            fromFieldLabel.style.cssText = `top:-2px;
        font-size: 10px;
        color: red;`

        }


        fromFieldTextarea.onblur = function () {

            fromFieldUnderline.style.backgroundColor = "rgb(95, 95, 95)";


            if (fromFieldTextarea.value.length > 0) {

                fromFieldLabel.style.cssText = `top:-2px;
            font-size: 10px;
            color: red;`


            }

            else {

                fromFieldLabel.style.cssText = `top:15px;
            font-size: larger;
            color: rgb(129, 129, 129);`

            }






        }


    }






}


function showCC(element) {

    let targetElement = document.getElementById(element)

    if (targetElement.style.display == "block") {

        targetElement.style.display = "none";

    } else {

        targetElement.style.display = "block";

    }




}



let toTextInput = document.getElementById("tofieldtextinput");
let ccTextInput = document.getElementById("ccfieldtextinput");
let bccTextInput = document.getElementById("bccfieldtextinput");

let validationArray = [ccTextInput, bccTextInput]



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

let done = 0;

function handleEffects(element) {

    messageBox.focus();

}

setInterval(function () {

    var isBold = document.queryCommandValue("Bold");
    var isItalic = document.queryCommandValue("Italic");



    if (isBold == 'true') {

        boldInd.style.backgroundColor = "blueviolet"
        boldIndLbl.style.color = "white";

    }

    else {

        boldInd.style.backgroundColor = "white"
        boldIndLbl.style.color = "black";


    }

    if (isItalic == 'true') {

        ItalicInd.style.backgroundColor = "blueviolet"
        ItalicIndLbl.style.color = "white";

    }

    else {

        ItalicInd.style.backgroundColor = "white"
        ItalicIndLbl.style.color = "black";


    }




}, 150)



document.getElementById("boldbtn").onclick = function () {


    handleEffects("boldindicator")
    document.execCommand("bold");

}

document.getElementById("italicbtn").onclick = function () {

    handleEffects("italicindicator")

    document.execCommand("italic");

}


colorswatch.onchange = function () {

    messageBox.focus();
    console.log(this.value)
    document.execCommand("foreColor", false, this.value);

}


function closeOnClick(element) {

    element.parentNode.remove();

}




toTextInput.onkeydown = function (e) {

    if (e.key == "Enter" || e.key == " " || e.key == "Tab") {

        let email = emailInputBox.value;

        if (!emailRegEx.test(String(email).toLowerCase())) {

            alert("Email incorrect.")

            e.preventDefault();
            return false;

        }

        inserter(email)

        emailInputBox.value = ""

        e.preventDefault();
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


function inserter(mail) {

    let domElement = document.createElement("div")

    domElement.classList.add("outeremail");

    domElement.innerHTML = `<p class="emailtemplate">${mail}</p><p style="margin-left:5px;font-size:107%;cursor:pointer;position:relative;right:5px;display:inline-block;" onclick="closeOnClick(this)">&times;</p> `

    receipientDiv.insertBefore(domElement, receipientDiv.lastElementChild)


}