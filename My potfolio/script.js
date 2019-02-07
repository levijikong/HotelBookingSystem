// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// PICTURE FLIP.

var k = 0;

var imgSrc1 = Capture.PNG;
var imgSrc2 = Capture2.PNG;

var grid1 = document.getElementById("grid1");

grid1.onmouseover = flip;
grid1.style.transitionDuration = "1s";

function flip() {
    k += 180;
    grid1.style.transform = "rotatey(" + k + "deg)";
    setTimeout(changeImgSrc(), 300);
}
function changeImgSrc() {
	return function() {
  	    if(grid1.getAttribute("src") === imgSrc1)
			grid1.src = imgSrc2;
  	    else
    	    grid1.src = imgSrc1;
    }
}

$(document).ready(function(){
    $("#grid1").flip({
      axis: 'y',
      trigger: 'hover'
    });
  });