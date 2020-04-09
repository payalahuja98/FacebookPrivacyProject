var modal = document.getElementById("tutorial_educational_modal");
var closeButton = document.getElementsByClassName("close_modal")[0];

window.addEventListener('load', function () {
	var shownCount = window.sessionStorage.getItem("shownCount");
	if(shownCount === null || shownCount < 2) {
		modal.style.display = "block";
	}
})

closeButton.onclick = function() {
	modal.style.display = "none";

	var shownCount = window.sessionStorage.getItem("shownCount");
	if (shownCount === null) {
		window.sessionStorage.setItem("shownCount", 1);
	} else {
		window.sessionStorage.setItem("shownCount", shownCount+1);
	}
}

function submitCustomAdFeedback() {
	document.getElementById("actual-ad-feedback").style.display="none";
	document.getElementById("ad-thank-you-message").style.display="block";
}