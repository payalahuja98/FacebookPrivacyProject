var modal = document.getElementById("tutorial_educational_modal");
var closeButton = document.getElementsByClassName("close_modal")[0];

window.addEventListener('load', function () {
	modal.style.display = "block";
})

closeButton.onclick = function() {
	modal.style.display = "none";
}