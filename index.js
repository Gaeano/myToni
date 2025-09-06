
function revealText (){
    document.getElementById('intro').style.display = 'block';
    document.getElementById('waha').style.display = 'block';

    document.getElementById('showButton').style.display = 'none';
    document.getElementById('second').style.display='block';
    document.getElementById('yesButton').style.display='block';
    document.getElementById('noButton').style.display='block';

}

function noText(){

    document.getElementById('noText').style.display='block';
    document.getElementById('noButton2').style.display='block';
}

function sureText(){
    document.getElementById('sureText').style.display ='block';
    document.getElementById('noButton2').style.display='none';
    document.getElementById('form').style.display='block';
}

function openNextPage(){
    window.open("gallery.html", "_self");
}

let button = document.getElementById('noButton');

button.addEventListener("mouseover", function() {
    alert("nononnonon");
});