//////////////////////////////VARIABLES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let img_Map = document.querySelector('#Map');
let img_archList = ['0', '1', '2', '3', '4'];
let b_defineName = document.querySelector('#b_userChanging');
let b_randChar = document.querySelector('#b_randChar');
let b_SelectChar1 = document.querySelector('#b_select01');
let b_SelectChar2 = document.querySelector('#b_select02');
let b_SelectChar3 = document.querySelector('#b_select03');
let sideBar = document.querySelector('#side-bar');
let sideBarBtn = document.querySelector('#side-button');
let b_partMinimize = document.querySelector('#min-party-i');
let sideBarMinimized = false;
let StartDone = false;
let partyMinimized = false;
let int_nb_dices = 3;
let dice_list = [0,1,2];

//Images des Personnages selectionn�s
let img_partyPic = [0, 1, 2];
//nombre de paires de cartes de personnages dans le dossier images
let num_nbOfArch = 78;
//id des personnages Selectionn�s
let archList = [];
//ID des personnages propos�s
let archLobby = [0, 0, 0];

///////////////////////////////////Setup des variables\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function Start() {
	/* alert('setup');*/
	img_archList[0] = document.querySelector('#selectPic01');
	img_archList[1] = document.querySelector('#selectPic02');
	img_archList[2] = document.querySelector('#selectPic03');
	img_archList[3] = document.querySelector('#selectPic04');
	img_archList[4] = document.querySelector('#selectPic05');
	img_partyPic = document.getElementsByClassName("partyCards");
	/*img_partyPic[0] = document.querySelector('#partyPic01');
	img_partyPic[1] = document.querySelector('#partyPic02');
	img_partyPic[2] = document.querySelector('#partyPic03');*/
	dice_list[0] = document.getElementById('dice1');
	dice_list[1] = document.getElementById('dice2');
	dice_list[2] = document.getElementById('dice3');

	b_SelectChar1.disabled = true;
	b_SelectChar2.disabled = true;
	b_SelectChar3.disabled = true;
	StartDone = true;
}
//////////////////////////////CREATION DE GROUPE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Modification simultan�e des 3 boutons de selection.
function ReWriteSelectButtons(text) {

	b_SelectChar1.setAttribute('text', text);
	b_SelectChar2.setAttribute('text', text);
	b_SelectChar3.setAttribute('text', text);
	// alert(b_SelectChar1.getAttribute('text'));
}

//randomisation des ID des cartes propos�es
function randomizeArchetype() {

	b_SelectChar1.setAttribute('disable', true);
	b_SelectChar2.setAttribute('disable', false);
	b_SelectChar3.setAttribute('disable', false);
	randomizeLobby(0);
	randomizeLobby(1);
	randomizeLobby(2);

}

//boucle de randomization + pr�vention de doublons au sein du loby et avec ceux d�j� collectionn�s
function randomizeLobby(a) {
	let num_charID = Math.floor(Math.random() * (num_nbOfArch - 1)) + 1;
	archLobby[a] = num_charID;
	if (archLobby[a] === archLobby[0] && a != 0) {
		randomizeLobby();
	}
	if (archLobby[a] === archLobby[1] && a != 1) {
		randomizeLobby();
	}
	if (archLobby[a] === archLobby[2] && a != 2) {
		randomizeLobby();
	}

	if (archLobby[a] === archList[0]) {
		randomizeLobby();
	}
	if (archLobby[a] === archList[1]) {
		randomizeLobby();
	}
	if (archLobby[a] === archList[2]) {
		randomizeLobby();
	}
}

//Mise � jour des cartes de personnage selectionnables
function refreshLobby() {
	//alert('refresh lobby');
	let i;
	for (i = 0; i != 3; i++) {

		img_archList[i].setAttribute('src', 'images/' + archLobby[i] + '-A.png');

	}
	b_SelectChar1.disabled = false;
	b_SelectChar2.disabled = false;
	b_SelectChar3.disabled = false;
}

//Flip la carte selectionable a
function flipCard(a) {
	if (StartDone === false) {
		Start();
	}
	//alert('flipCard0');
	let img = document.querySelector('#selectPic0' + (a + 1));
	//alert(img);
	let src = img.getAttribute('src');
	img.style.transform = "rotateY(90deg)";
	setTimeout(function e() {
	//on regarde le chemin et en fonction de son ID de arch lobby on en deduit ce qu'on doit trouver.
	if (src === 'images/' + archLobby[a] + '-A.png') {
		img.setAttribute('src', 'images/' + archLobby[a] + '-B.png');
	} else {
		img.setAttribute('src', 'images/' + archLobby[a] + '-A.png');
	}
	img.classList.remove("flip1");
	}, 200);
	setTimeout(function f() {
		img.style.transform = "rotateY(0deg)";;
	}, 200);

	img.classList.remove("flip2");

}

//Mise � jour des cartes de personnage selectionn�es
function refreshParty() {
	//alert('refresh lobby');
	let i;
	for (i = 0; i != 5; i++) {
		if (archList[i] != null) {
			img_partyPic[i].setAttribute('src', 'images/' + archList[i] + '-A.png');
			img_partyPic[i].style.display = "inline-block";
		} else {
			img_partyPic[i].setAttribute('src', 'images/0-A.png');
			img_partyPic[i].style.display = "none";
		}

	}
	b_partMinimize.setAttribute('class', 'far fa-window-minimize');
	partyMinimized = false;
}

//Mise � jour des cartes de personnage selectionn�es
function minimizeParty() {
	if (partyMinimized) {

		refreshParty();
	} else {
		let i;
		for (i = 0; i != 5; i++) {
			img_partyPic[i].style.display = "none";

		}
		b_partMinimize.setAttribute('class', 'fas fa-caret-square-up');
		partyMinimized = !partyMinimized;
	}


	//b_partMinimize.classList.toggle();

}
//Flip la carte selectionn�e a
function flipCardSelected(a) {
	//alert('flipCard0');
	if (StartDone === false) {
		Start();
	}
	let img = document.querySelector('#partyPic0' + (a + 1));
	//alert(img);
	let src = img.getAttribute('src');
	img.style.transform = "rotateY(90deg)";
	//on regarde le chemin et en fonction de son ID de arch lobby on en deduit ce qu'on doit trouver.

	setTimeout(function e() {

		if (archList[a] != null) {
			if (src === 'images/' + archList[a] + '-A.png') {
				img.setAttribute('src', 'images/' + archList[a] + '-B.png');
			} else {
				img.setAttribute('src', 'images/' + archList[a] + '-A.png');
			}
		} else {
			if (src === 'images/0-A.png') {
				img.setAttribute('src', 'images/0-B.png');
			} else {
				img.setAttribute('src', 'images/0-A.png');
			}
		}
		img.classList.remove("flip1");
	}, 200);

	setTimeout(function f() {
		img.style.transform = "rotateY(0deg)";;
	}, 200);

	img.classList.remove("flip2");

}

function deleteCardSelected(nb) {
	archList.splice(nb, 1);
	refreshParty();
}

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
		
	} else if (panel === 'events'){
		document.getElementById('tables').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('events').setAttribute('class', 'side-menu-toggle-ON');
		document.getElementById('dice-roll').setAttribute('class', 'side-menu-toggle-OFF');
		//sort le panneau contenant les tables favorites de l'écran
		document.getElementById('docked-tables-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-dice-roll-id').setAttribute('class', 'out-of-tables');
	}
	else {
		document.getElementById('tables').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('events').setAttribute('class', 'side-menu-toggle-OFF');
		document.getElementById('dice-roll').setAttribute('class', 'side-menu-toggle-ON');
		//sort le panneau contenant les tables favorites de l'écran
		document.getElementById('docked-tables-id').setAttribute('class', 'out-of-tables');
		document.getElementById('docked-dice-roll-id').setAttribute('class', 'docked-dice-roll');
	}
}

function buttonSelectLobby(nb) {
	if (StartDone === false) {
		Start();
	}
	//alert('bouton 03');
	if (archLobby[nb] != 0 && archLobby[nb] != null) {
		archList.push(archLobby[nb]);
		randomizeArchetype();
		refreshLobby();
	} else {
		alert('Veuillez cliquer sur "Archetypes aleatoires avant');
	}
	refreshParty();
}
function rollTheDice()
{
	if (!Start){Start();}
let dicesClass_list = ["fas fa-dice-one","fas fa-dice-two","fas fa-dice-three","fas fa-dice-four","fas fa-dice-five","fas fa-dice-six"];
//Supprime toutes les classes de dés présentes sur dice_list[o]

			dice_list[0].setAttribute( 'class',dicesClass_list[Math.floor(Math.random() * 6)]);
	if (int_nb_dices>1)
	{

			dice_list[1].setAttribute( 'class',dicesClass_list[Math.floor(Math.random() * 6)]);
				if ( int_nb_dices>2)
					{
						dice_list[2].setAttribute( 'class',dicesClass_list[Math.floor(Math.random() * 6)]);
					}
	}

}

function fixNbDices(nb)
{
	int_nb_dices = int_nb_dices + nb;

	if (int_nb_dices>3){ int_nb_dices = 3;}

	if (int_nb_dices<1){ int_nb_dices = 1;}
	let i;
		for (i = 0; i != 3; i++) 
		{
			if ((int_nb_dices-1)>=i)
			{
			dice_list[i].style.display = "inline";
			}
			else
			{
			dice_list[i].style.display = "none";
			}
		}

}
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
Start();

////////////////////////
////     EVENTS     ////
////////////////////////

//Map activation du brouillard de guerre 
img_Map.addEventListener('click', function () {
	let mySrc = img_Map.getAttribute('src');
	if (mySrc === 'images/map00.png') {
		img_Map.setAttribute('src', 'images/map03.png');
	} else {
		img_Map.setAttribute('src', 'images/map00.png');
	}
});

//Bouton de relance des personnages : click
b_randChar.addEventListener('click', function () {
	if (StartDone === false) {
		Start();
	}
	randomizeArchetype();
	//ReWriteSelectButtons('Choisir ce personnage');
	refreshLobby();
});
