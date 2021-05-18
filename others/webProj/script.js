
let logoDiv  = document.getElementById("logoholder")

function clickSend()  {


    let startedElement =  document.getElementById("startedmessage");

    startedElement.innerText = "We will contact you soon."

}


window.onscroll = function () {


if (window.scrollY > 210) {
logoDiv.style.opacity = "1";
}

if (window.scrollY <= 120) {
    logoDiv.style.opacity = "0";
    }


}