let sideBarMinimized = false;
let sideBar = document.querySelector('#side-bar');
let sideBarBtn = document.querySelector('#side-button');

function toggleSideBar() {
	if (sideBarMinimized) {
		sideBar.classList.toggle('side-bar-hide');
		sideBar.classList.toggle('side-bar-show');
		sideBarBtn.innerHTML = ">";
	} else {
		sideBar.classList.toggle('side-bar-show');
		sideBar.classList.toggle('side-bar-hide');
		sideBarBtn.innerHTML = "<";

	}
	sideBarMinimized = !sideBarMinimized;
}

function toggleDisplay(displayName) {
	let objectToDisplay = document.getElementById(displayName);
	if (objectToDisplay.style.display === "none") {
		document.getElementById('tables').click();
		objectToDisplay.style.display = "block";
		document.getElementById('fav-' + displayName).setAttribute('class', 'fas fa-star');
		
	} else {
		objectToDisplay.style.display = "none";
		document.getElementById('fav-' + displayName).setAttribute('class', 'far fa-star');
	}
}

function togglePanel(panel) {

	if (panel === 'tables') {
		document.getElementById('tables').setAttribute('class', 'side-menu-toggle-ON');
		document.getElementById('events').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('dice-roll').setAttribute('class', 'side-menu-toggle-OFF');
		//inclue le panneau contenant les tables favorites dans l'écran
		document.getElementById('docked-tables-id').setAttribute('class', 'docked-tables');
		document.getElementById('docked-dice-roll-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-events-id').setAttribute('class', 'out-of-tables');
		
	} else if (panel === 'events'){
		document.getElementById('tables').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('events').setAttribute('class', 'side-menu-toggle-ON');
		document.getElementById('dice-roll').setAttribute('class', 'side-menu-toggle-OFF');
		//sort le panneau contenant les tables favorites de l'écran
		document.getElementById('docked-events-id').setAttribute('class', 'docked-events');
		document.getElementById('docked-tables-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-dice-roll-id').setAttribute('class', 'out-of-tables');
	}
	else {
		document.getElementById('tables').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('events').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('dice-roll').setAttribute('class', 'side-menu-toggle-ON');
		//sort le panneau contenant les tables favorites de l'écran
		document.getElementById('docked-events-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-tables-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-dice-roll-id').setAttribute('class', 'docked-dice-roll');
	}
}