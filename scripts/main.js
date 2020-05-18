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
var rollHistory =[''];
var gridMap = { };
var lastClickedHex;

//Images des Personnages selectionn�s
let img_partyPic = [0, 1, 2];
//nombre de paires de cartes de personnages dans le dossier images
let num_nbOfArch = 78;
//id des personnages Selectionn�s
let archList = [];
//ID des personnages propos�s
let archLobby = [0, 0, 0];

///////////////////////////////////Setup des Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var eventsL = [
 {x:'02' , y:'02', nom:'Seul face aux ténèbres', pitch:'Un chasseur de malédictions traverse les marais à la recherche d’un ours maudit', auteur:'Emeric Durdos' , image:'placeholder.jpg' }

, {x:'03' , y:'03', nom:'Au bout du chemin', pitch:'La silhouette d’un cavalier apparaît à l’horizon', auteur:'Emeric Durdos' , image:'artem-demura-vulture.jpg' }

, {x:'04' , y:'02', nom:'La balance inaltérable', pitch:'Dans les archives se trouve un parchemin crucial', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'08' , y:'93', nom:'L’auberge des Vaillances', pitch:'<em>Bravoure</em> propose un concours de boisson au groupe. ça tourne mal', auteur:'Emeric Durdos' , image:'placeholder.jpg' }
, {x:'08' , y:'98', nom:'L\'épreuve du pelerin pt.2', pitch:'Sur la plage, adossé à une statue se dresse le squelette d\'un moine qui ne semble pas avoir de jambes', auteur:'Emeric Durdos' , image:'artem-demura-ddsds.jpg'}

, {x:'09' , y:'97', nom:'L\'épreuve du pelerin pt.1', pitch:'Une statue se dresse sur l’avancée, couverte de neige, la silhouette encapuchonnée a vu son le visage se faire éroder par le vent', auteur:'Emeric Durdos' , image:'artem-demura-the-torch-of-the-blind.jpg'}
, {x:'09' , y:'99', nom:'Au nord', pitch:'Un homme blessé et malade boite vers le nord espérant trouver un refuge', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'09' , y:'99', nom:'A l’est', pitch:'Une petite cabane de bois est visible, elle est en mauvais état et pleine de poussière', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'09' , y:'99', nom:'Au sud', pitch:'Un petit groupe de malandrins avec des armes de fortunes errent', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'09' , y:'02', nom:'Des offrandes inattendues', pitch:'Des offrandes ont été faites dans le temple : un grand plateau contenant nourriture et encens se trouve au pied de la croix. L’encens est encore légèrement chaud', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'10' , y:'02', nom:'L’organisation des lieux', pitch:'Quelques détails sur les personnes qui vivent ici', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'10' , y:'02', nom:'La nonne maudite', pitch:'Rentrée du sud,elle ne dit plus un mot, elle ne dors plus et semble fuir.', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'10' , y:'02', nom:'L’agent infiltré', pitch:'Un malade atteint par le <strong>courroux ardent</strong> est allongé dans l’infirmerie', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'12' , y:'90', nom:'L’épreuve du pelerin', pitch:'Une silhouette encapuchonnée se détache à travers la brume. Portant une lanterne, elle est assise sur un rocher et regarde, immobile, l’horizon', auteur:'Emeric Durdos' , image:'artem-demura-tishina.jpg'}
, {x:'12' , y:'96', nom:'La garde de Foresbloue', pitch:'Ici les gardes sont fidèles à leur poste', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'12' , y:'98', nom:'Au sud', pitch:'Un miséreux se voit refusé l\'entrée à Viprince', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'12' , y:'00', nom:'Les risques des bas quartiers', pitch:'Le vol est loin d\'être le danger ', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'13' , y:'99', nom:'Un royaume en perdition', pitch:'Le roi est mort dans le secret et desormais ses fils, dévorés par l’avarice, se disputent la succession', auteur:'Emeric Durdos' , image:'throne.jpg'}

, {x:'14' , y:'94', nom:'Une famille en danger', pitch:'Un cri de femme provient d’une maison au bord de la route, devant un cheval est attaché', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'14' , y:'95', nom:'L\'affreux garde-chasse', pitch:'Un garde-chasse purulent aux proportions grotesque ramasse ses collets', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'14' , y:'99', nom:'Perdus d\'avance', pitch:'Si vos joueurs commencent ici', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'15' , y:'88', nom:'Embuscade sur le pont !', pitch:'Ils sont attaqués par des bandits', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'15' , y:'90', nom:'Un bon repas', pitch:'Un boucher du marché noir propose de la viande', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'15' , y:'94', nom:'Le voyageur rouillé', pitch:'Un noble couvert d’une armure rouillée complète qui parcourt la région', auteur:'Emeric Durdos' , image:'placeholder.jpg'}
, {x:'15' , y:'95', nom:'Rencontre nocturne', pitch:'Si le garde-chasse est toujours en vie (1495), il va venir détrousser les voyageurs pendant la nuit.', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

, {x:'18' , y:'88', nom:'Un délit subjectif', pitch:'Quatres individus volent les cultures, sont ils affamés ? pillards ?', auteur:'Emeric Durdos' , image:'placeholder.jpg'}

				
];
var eventsG = [
{ nom: 'Les maraudeurs', pitch: 'Des cavaliers attaquent un village (vue de loin)', auteur:'Emeric Durdos' , image:'artem-demura-baba-v-lodke6.jpg' },
{ nom: 'EventGénérique2', pitch: 'test2', auteur:'Emeric Durdos' , image:'artem-demura-baba-v-lodke6.jpg' }
,{ nom: 'Event Générique 3', pitch: 'test3', auteur:'Emeric Durdos' , image:'artem-demura-baba-v-lodke6.jpg' }
,{ nom: 'Event Générique 4', pitch: 'test4', auteur:'Emeric Durdos' , image:'artem-demura-baba-v-lodke6.jpg' }

				];

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
/////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function formatDate(date) 
{
	var d = new Date(date),
		minute = ''+(d.getMinutes());
		hour = ''+(d.getHours());
		day = '' + d.getDate(),
        month = '' + (d.getMonth() + 1),
        year = d.getFullYear();

	if (month.length < 2) 
		{
		month = '0' + month;
		}
    if (day.length < 2) 
		{
		day = '0' + day;
		}
	if (hour.length < 2) 
		{
		hour = '0' + hour;
		}
	if (minute.length < 2) 
        {
		minute = '0' + minute;
		}

    return (day + "/" + month + ", " + hour + " : " + minute);
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
	if (!Start)
	{Start();}
	let result = "- (" + formatDate(Date.now()) + ") Resultat : ";
let dicesClass_list = ["fas fa-dice-one","fas fa-dice-two","fas fa-dice-three","fas fa-dice-four","fas fa-dice-five","fas fa-dice-six"];
//Supprime toutes les classes de dés présentes sur dice_list[o]

			let roll = Math.floor(Math.random() * 6);

			dice_list[0].setAttribute( 'class',dicesClass_list[roll]);
			if (roll == 0)
			{
				result += " " + "<strong class=\"critical\">" + (roll+1) + "</strong>";
			}
			else
			{
				result += " " + (roll+1);
			}
			

	if (int_nb_dices>1)
	{
		 roll = Math.floor(Math.random() * 6);
		dice_list[1].setAttribute( 'class',dicesClass_list[roll]);

		if (roll == 0)
			{
				result += " " + "<strong class=\"critical\">" + (roll+1) + "</strong>";
			}
			else
			{
				result += " " + (roll+1);
			}

				if ( int_nb_dices>2)
					{

						roll = Math.floor(Math.random() * 6);
						dice_list[2].setAttribute( 'class',dicesClass_list[roll]);

						if (roll == 0)
							{
								result += " " + "<strong class=\"critical\">" + (roll+1) + "</strong>";
							}
							else
							{
								result += " " + (roll+1);
							}
					}
	}
HistoryNewEntry (result);
}



function HistoryNewEntry(entry)
{
	let content = "<tr><td>" + entry + "</td></tr>";
	for (let i = (rollHistory.length-1); i>0; i--)
	{
		content += "<tr><td>" + rollHistory[i] + "</td></tr>";
	}

	rollHistory.push(entry);
	document.getElementById("DiceHistory").innerHTML = content;
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
//////////////////////////////////////////HexMap\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function generateMap(offsetx, offsety, x, y)
{
	vert = offsety;
	
	html = "";
	while (vert < ( y + offsety))
	{
		if ( (vert % 2) === 0)
			{
				html += "<div class=\"even-line\">";
				
			}
			else
			{
				html += "<div class=\"odd-line\">";
			}
		horizont = offsetx;
		while (horizont < (x + offsetx) )
		{
				let idx = horizont;
				let idy = vert;
				let keyX = "";
				let keyY = "";
				//formatisation des coordonées de l'hex
				while (idx>=100)
				{
					idx -= 100;
				}
				if (idx < 10)
				{
					keyX += '0';
				}
				keyX += idx;


				while (idy >= 100)
				{
					idy -= 100;
				}
				if (idy < 10)
				{
					keyY += '0'
				}
				keyY += idy;


				if ( (idx % 2) === 0)
				{
					html += "<div class=\"even-hexagon\" ";
				}
				else
				{
					html += "<div class=\"odd-hexagon\" ";
				}

				html += " onclick=\"displayHex("+ keyX +","+ keyY +")\" id=\"" + keyX +"-"+ keyY + "\"><span class=\"hexText\">" + keyX + keyY + "</span></div>";

				horizont++;
		}

		html += "</div>";
		vert++;
	}
	document.getElementById("Hex-map").innerHTML = html;
}
function generateMapArray (offsetx, offsety, x, y)
{
	vert = offsety;
	while (vert < ( y + offsety))
	{
		
		
		horizont = offsetx;
		lineTable =[];
		while (horizont < (x + offsetx) )
		{	
			let idx = horizont;
			let keyX = "";
			horizont++;
			//formatisation des coordonées de l'hex
			while (idx>=100)
			{
				idx -= 100;
			}
			if (idx < 10)
			{
				keyX += '0';
			}
			keyX += idx;
			lineTable[keyX] = { nom: 'Zone inexplorée' , descHex : 'Cette partie du monde n\'est pas encore décrite. N\'hésitez pas à proposer des choses.'};
			
		}
		let idy = vert;
		let keyY = "";
		while (idy >= 100)
		{
			idy -= 100;
		}
		if (idy < 10)
		{
			keyY += '0'
		}
		keyY += idy;
		gridMap[keyY] = lineTable; 
		vert ++;	
	}

	//console.dir(gridMap);
	newHexes = [
		//['x','y','nom','descHex' ],
		
		
		//02-xx
		['02','02', 'Marais brumeux' , 'Il fait sombre, les arbres sont gris'],
		
		['02','03','Campagne' , 'Des champs s\'étendent à perte de vue' ],
		
		
		//03-xx
		['03','03','Route de Campagne','une route passe entre les champs vallonnés qui s\'étendent à perte de vue' ],
		
		
		//04-xx
		['04','02','Montimpera','Signifiant Mont de l\'Empereur, ce grand temple-forteresse est le siège du Clan des Séniaux. Réputé imprenable, cette abbaye fortifiée regroupe les plus précieuses reliques et archives théologique du royaume y sont entreposées. Il servait de lieu de pèlerinage à tous les croyants du pays.'+"\n"+'La forteresse est complètement fermée et semble délabré de l\'extérieur.' ],
		
		
		//05-xx
		['05','01','Forêt sinistre','<p> Des hommes pendus nus par les mains immobiles, ils semblent presque faire partie de la forêt.</p>'+'<p>Leur visage décrit un état de terreur inconcevable. Leurs  mains et l’arbre se sont mélangés. Leur dos est couvert de lacérations horribles, leur peau semble déformée et fondue tandis que des plaques noires tachent leur peau. Les yeux sont révulsés et leur mâchoire semble déboitée.</p>' ],
		
		['05','02','Route Côtière',' ' ],


		//07-xx
		['07','92','Argençier (Jardin du palais)','Ce sont de beaux jardins verdoyants.' ],


		//08-xx
		['08','93','Argençier (Sud)','<p> La ville de d’Argençier est organisée autour de la colline.</p>'+'<p> Lieux notables :</p>' + '<p> - <strong>L’auberge des Vaillances : </strong> cet établissement accueillant et chaleureux ne rassemble pas énormément de clients.</p>' ],
		
		['08','98','La plage de Chesperie','<p>Il fait froid, l’eau est glacée, de fins morceau de glace sont ballotés par les vagues. Le paysage lunaire est enveloppé d’une brume blanche d’où s\'échappent d’immenses statues sombres de vieilles divinités oubliées depuis plusieurs siècles.</p>'],
		
		['08','99','La toundra','<p>Un cadavre dans la toundra, il tient un couteau à la main et dans sa poche un carnet parle de la maladie ainsi que de l\'épreuve d’avarice du pèlerin.</p>' ],
		
		
		//09-xx
		['09','92','Argençier (Est)','<p>Organisé autour de la colline</p>' ],
		
		['09','97','La plage de Chesperie (Nord)','<p>Il fait froid, l’eau est glacée, de fins morceau de glace sont ballotés par les vagues.</p>'
		+ '<p>Sur l’avancée de terre se trouve une statue couverte de neige, elle représente personnage encapuchonnée dont le visage à été érodée par le vent. Elle porte une lanterne de métal à la main.</p>'
		+ 'Elle fait face à un ouest couvert par la brume.' 
		],
		
		['09','99','La toundra','<p>Ce sont des plaines couvertes de d’une légère couche de glace, il fait extrêmement froid. Quelques rares arbres parsèment le paysage, sans eux, ce lieu aurait l’air d’un véritable de désert de glace mortel.</p>'],
		
		['09','02','Petit temple isolé ( Forêt)','En traversant la forêt, les personnages tombent sur un petit <strong>temple isolé </strong> et très modeste. Les 4 colonnes soutenant le toit de tuiles sont enlacées dans un lierre luxuriant sur lesquels des petites fleurs rosées ont fait apparition. Dans l’obscurité de la toiture une <strong>croix de pierre</strong> se dresse, son allure sinistre tranche étonnamment avec son cadre paradisiaque. La pierre brute et rugueuse évoque celle utilisée pour faire les tombes. Des <strong>offrandes</strong> ont été faites dans le temple : un <strong>grand plateau</strong> contenant nourriture et encens se trouve au pied de la croix. L’encens est encore légèrement chaud.' ],
		
		
		//10-xx
		['10','95','Islachac','<p>Connue pour ses excellents poissons et ses paysages de rêves, les îles d’Islachac sont l’étape intermédiaire entre Grandilage et Argençier.</p>'
			+ '<p>Parsemé de petits hameaux, les rares habitants y sont petits, maigres et ont la peau grisâtre. Les villageois pêchent à la main, ils sont très à l’aise dans l’eau.</p>' 
			+ '<p>Islachac n’as pas d’archives. Si un joueur recherche des documents, on lui conseillera d’aller dans une plus grande ville ou dans un lieu du clergé.</p>'],
		
			['10','01','Campagne ?','<p>Au sud, un bâtiment est visible.</p>' ],
		
		['10','02','Prieuré de l\'ordre de Vidieu','<p>Habité par des moniales, ces dernières s’occupent des voyageurs.</p>' ],
		
		['10','03','Campagne ?','<p>Au nord, un bâtiment est visible.</p>' ],
		
		
		//11-xx
		['11','00','Porte de Viprince (sud)','<p>Des anciennes écuries sont présentes, un carrosse en très mauvais état est toujours à l’intérieur.</p>'
		+ '<p>On ne va plus dans le sud du pays depuis quelques mois. Les voyageurs n’arrivent plus du sud et la population est trop occupée avec la maladie pour aller voir de quoi il en retourne.</p>' ],
		
		['11','01','Campagne ?','<P>Au sud-ouest, un bâtiment est visible.</P>' ],
		
		['11','02','Campagne ?','<P>Au nord-ouest, un bâtiment est visible.</P>' ],
		
		
		//12-xx
		['12','90','La vieille bâtisse du littoral','<P>Sur ce petit bord de littoral se trouve une maison en ruines. Délabrée et usée par le sel, il ne reste plus grand choses. Elle semble avoir été habité par une famille de marins.</P>' ],
		
		['12','96','Foresbloue','<p>Ce port est le point de départ pour accéder à Argençier depuis Grandilage. Son nom venant de la teinte du feuillage des arbres relativement bleuté qui sont désormais grisâtre. Ancien port prospère, la population y est pauvre et affamée. Seules quelques maigres réserves de riz subsistent encore. Le riz y est donc vendu extrèmement cher. Il est aussi un point de tension entre le roi et le clan <em>Shinrai</em>.</p>'
		+ '<p>Le cocher a disparu depuis quelques semaines, les voyages en carrosses ne sont donc plus assurés.</p>' ],
		
		['12','97','Forêt?','<p>Au Sud et à l’Est on trouve des montagnes qui bloquent tout passage.</p>' ],
		
		['12','98','Porte nord de Viprince / Chemin Montagneux','<p>Des montagnes forment un arc qui part du sud ouest au nord empêchant d\'accéder aux zones situées derrière.</p>' ],
		
		['12','99','Viprince (Haut quartiers)','<p>La Bourgeoisie de Viprince vie dans ces quartiers. Beaucoup de ces derniers sont armés afin de se défendre face aux voleurs et autres malandrins. Ils abattent les malades à vue, les gardes venant débarrasser les corps plus tard. Heureusement, ce sont les domestiques qui s’occupent de toutes les tâches de vie, garantissant l’isolement de la noblesse envers le petit peuple.</p>' ],
		
		['12','00','Viprince (Bas quartiers)','<p>Situés près du port, les rues étroites des bas quartiers était le centre des activités commerciales de la ville. Désormais la maladie y est omniprésente, malgré les bûchers de corps quotidien organisés au port par les médecins de peste des corps en jonchent les ruelles tentaculaires. La population reste relativement dense. Un grand marché aux poissons se déroule tous les matins sur les quais.</p>' ],

		
		//13-xx
		['13','95','Carrefour en Forêt','<P>Une pancarte faite de bois indique la direction : “A l’est Foresbloue, au sud Focharesse et Viprince au nord Quartande et Valenche”</P>' ],

		['13','96','Passage du Col de la montagne','<p>Le col escarpé n’est pas stable, en cas d’intempéries des éboulements peuvent avoir lieu. S’ils sont pris dans un glissement de terrain et qu’ils survivent, ils changent d’Hex aléatoirement.</p>' ],
		
		['13','97','Focharesse','<p>Petit village encastré en bas de la vallée, on y cultive de très grande quantités de riz pour Viprince et ses alentours.</p>'
		+'<p>La route commerciale reliant Viprince au Nord de l\'île traverse le village. De nombreux voyageurs passent par ce village, ils sont de bons consommateurs. Le village possède une auberge pour qu’ils puissent passer la nuit au village.</p>'
		 ],
		['13','98','Rempart nord de Viprince (Campagne) ','<p>Au nord les rizières commencent à apparaître.</p>' 
		+ '<p>Un campement de miséreux se trouve devant la ville</p>'],
		
		['13','99','Viprince (palais royal)','<p>Le roi est mort, la famille royale a choisi de ne rien révéler.  La reine a souhaité que le roi soit laissé sur son trône à coté duquel elle peut siéger alors qu’elle se laisse mourir de chagrin.</p>'
		+'<p>Ses fils dévorés par l’avarice, se disputent la succession.</p>'
		+'<p>La garde royale a reçu l’ordre de ne laisser filtrer aucun individu ou objet.</p>'
		+'<p>Les six gardes d’honneur du roi, ayant failli à leur mission de le guérir, se sont donnés la mort. Leurs corps, percés d’une lame, sont toujours assis face à l’horizon. Leur service continuant auprès de leur maître dans l’au-delà. On peut en trouver un par tour du palais.</p>' ],
		
		['13','00','Viprince (port royal)',' ' ],


		//14-xx
		['14','91','Les champs de Quartande (Nord)','Ces champs profitent de la Queu pour irriguer leur raisins. Cette nouvelle nourriture importée par les colons se conserve très bien et offre une très bonne base pour de nombreux aliments pour la région. Le vin annuel à toujours été la fierté de Quartande mais cette année les récoltes sont très faibles.' ],

		['14','94','Maison de Campagne',' ' ],

		['14','95','Camp du garde-chasse (Forêt)','<p>Une tente est dréssée, du gibier est pendu sechant au soleil</p>' ],

		['14','96','Camp abandonné (Route de campagne)','Des cadavres empestant la maladie en armures légère jonchent le sol. Leur campement est encore dressé, des énormes corbeaux s’y nourrissent. Ils portent un peu <strong>d’argent</strong> sur eux, de la <strong>nourriture</strong> (contaminée), une <strong>lettre</strong> où un noble invite le roi au mariage de son fils et lui demande son aide pour ramener la sécurité dans le Nord.'
		 + '<p>Un amas de chevaux calcinés est visible à l’écart du camp.</p>'
		 ],

		['14','98','Côtes','Au sud se trouve Viprince,les remparts sont visibles de loin.' ],

		['14','99', 'La prison de Viprince','<p>La grande prison se dresse au nord de Viprince. Elle est uniquement accessible par la mer : un ponton permet aux bateaux de s’y arrêter pour déposer les prisonniers.</p>' 
		+ '<p>A l’interieur, des gardes malades se baladent dans la prison .</p>'
		],

		['14','00','Viprince (Le Phare)','<p> Seul bâtiment plus haut que le palais, le phare a été dressé face à la mer, il y a de nombreux siècles, pour guider les colons de l’est lors de leurs premiers échanges commerciaux.</p>' ],

		//15-xx
		['15','88','Petit pont sur la Queu','Au bord du fleuve à été aménagé un petit pont permettant de rejoindre l’autre rive.'],

		['15','89','Abbaye de vidieu','Au bord du chemin se trouve une abbaye de l’ordre de vidieu. Les nonnes ont subi plusieurs attaques et ont décidé de se défendre. Elles sont extrêmement méfiantes.' ],

		['15','90','Quartande','<p>Quartande est une ville provinciale de taille respectable, la plus grande de la région.</p>'
		+ '<p>Un temple est en construction, il n’est pas encore fini. Le dignitaire de la ville, particulièrement croyant, à décidé de faire construire cet édifice pour les protéger en ces temps de crise.</p>' 
		],

		['15','91','Champs de Quartande (Sud)','Ces champs profitent de la Queu pour irriguer leur raisins. Cette nouvelle nourriture importée par les colons se conserve très bien et offre une très bonne base pour de nombreux aliments pour la région. Le vin annuel à toujours été la fierté de Quartande mais cette année les récoltes sont très faibles.' ],

		['15','94','Route de Campagne',' ' ],

		['15','95','Route de Campagne',' ' ],

		//16-xx
		['16','88','Campagne de Valenche',' ' ],

		['16','89','Valenche','<p>Petit village situé le long du *nom de fleuve*, il a longtemps joui de sa position éloignée pour développer la chasse. Désormais victime de pillages réguliers, les habitants ont soit fuis soit abandonner toute idée de se battre.</p>' ],


		//18-xx
		['18','89','Grivière','<p><strong>Au nord</strong> : Vous voici à Grivière est un petit village tranquille de la région, les champs qui l’entoure doivent servir pour le bétail. </p>' 
		+ '<p>Enfin, c’est ce qu’il devait être autrefois. Il n’en reste plus que des ruines. Entre la pierre abattue et le bois calciné, des restes humains sont visibles : les corbeaux sont déjà passés par là.  Les autres habitants sont bien visibles : drapés d’un long voile noir, les corps démembrés sont pendus à des arbres, leur silhouette sinistre se balançant au rythme du vent.</p>'
		+ '<p>Hors du village, quelques tombes pointent à l’horizon. Elles semblent relativement récentes.</p>'
		+ '<p><strong>A l’est </strong>: les restes d’un campement sont visibles, si les personnages analysent la zone: à en juger par la taille du foyer ainsi que la marque sur le sol un homme seul. Le bois environnant a été coupé et des copeaux de bois parsèment le sol. <em>(Valdémar est parti au Nord-est)</em></p>'
		],
		

		//19-xx
		['19','86','Côtes','<p>Une ancienne forteresse en ruine. C’est ici que l\'ordre des servenatifs.</p>' ],

		['19','88','Montagne',' ' ],




		];
		for (i = 0; i<newHexes.length; i++)
		{
			//console.log(newHexes[i][1]+','+ newHexes[i][0] + '=' + newHexes[i][2] + "\n");
			gridMap[newHexes[i][1]][newHexes[i][0]]['nom'] = newHexes[i][2];
			gridMap[newHexes[i][1]][newHexes[i][0]]['descHex'] = newHexes[i][3];
		}
	generateMap(offsetx, offsety,x,y);
}

function displayHex (x,y)
{
	//console.log('read before : '+ x + ',' + y);
	if (x < 10)
	{
		x = '0' + x;
	}
	if (y < 10)
	{
		y = '0' + y;
	}
 ////MAJ de la MAP pour fixer la position
	//remet l'ancien hex en mode normal
	if (lastClickedHex != null)
	{
		if(lastClickedHex.getAttribute('class') == 'even-clicked')
		{
			lastClickedHex.setAttribute('class', 'even-hexagon');
		}
		else if(lastClickedHex.getAttribute('class') == 'odd-clicked')
		{
			lastClickedHex.setAttribute('class', 'odd-hexagon');
		}
	}
	//On récupère le nouvel Hex
	lastClickedHex = document.getElementById( x + '-' + y);

	//On le met en mode cliqué
	if(lastClickedHex.getAttribute('class') == 'even-hexagon')
	{
		lastClickedHex.setAttribute('class', 'even-clicked');
	}
	else if(lastClickedHex.getAttribute('class') == 'odd-hexagon')
	{
		lastClickedHex.setAttribute('class', 'odd-clicked');
	}
	tableEvents = [];
	//On récupère tout les events locaux
	for (let i = 0; i<eventsL.length; i++)
	{
		//console.log ('test events');
		if ((eventsL[i]['x'] == x) && (eventsL[i]['y'] == y))
		{
			tableEvents.push(eventsL[i]);
		}

	}
	//on complète les events locaux si besoin
	eventG_Added =[]
	while (tableEvents.length < 4 )
	{	
		//on choisi un event global au hasard
		do
		{
		newRand = Math.floor(Math.random() * eventsG.length);
		}
		//tant qu'on l'as déjà assigné, on relance
		while (eventG_Added.includes(newRand))
		eventG_Added.push(newRand);
		tableEvents.push(eventsG[newRand]);
		console.log(newRand);
	}

	let newHtml = '<div> <h3>' + gridMap[y][x]['nom'] + '</h3> <p>' + gridMap[y][x]['descHex'] + '</p> </div>';
	
	//on fait les petits encarts pour les quêtes
	for (let i = 0; i<tableEvents.length; i++)
	{
		 newHtml += '<div class="quest" style= "background-image: url(images/events/'+ tableEvents[i]['image']+')" > <h3>'+ tableEvents[i]['nom'] + '</h3><p>' + tableEvents[i]['pitch'] + '...</p></div>';
	}
	document.getElementById("currentEvent").innerHTML = newHtml;

	document.getElementById('events').click();
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
generateMapArray(1,84,22,23);

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
