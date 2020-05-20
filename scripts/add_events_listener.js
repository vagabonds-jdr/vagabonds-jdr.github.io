////////////////////////
////     EVENTS     ////
////////////////////////
let img_Map = document.querySelector('#Map');
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