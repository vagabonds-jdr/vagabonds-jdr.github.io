////////////////////////////////////////ONGLETS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function openPage(pageName, elmnt, color) {
	// Hide all elements with class="mainscreen" by default */
	var i, mainscreen, navbtn;
	mainscreen = document.getElementsByClassName("mainscreen");
	for (i = 0; i < mainscreen.length; i++) {
		mainscreen[i].style.display = "none";
	}
	// Remove the background color of all tablinks/buttons
	navbtn = document.getElementsByClassName("navbtn");
	//navbtn.push(document.getElementsByClassName("active"));
	for (i = 0; i < mainscreen.length; i++) {
		navbtn[i].style.backgroundColor = "";
		//navbtn[i].className = "navbtn";
	}
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";

	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
	//elmnt.className = "active";
}

// Get the element with i?d="defaultOpen" and click on it
document.getElementById("defaultOpen").click();