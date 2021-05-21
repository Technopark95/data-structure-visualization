window.onscroll = function() {


    if (window.scrollY > 210) {
        logoDiv.style.opacity = ".4";
    }

    if (window.scrollY <= 120) {
        logoDiv.style.opacity = "0";
    }


}


document.getElementById("notebtn").onclick = function() {
    document.getElementById("noteholder").style.maxHeight = "140px";
}