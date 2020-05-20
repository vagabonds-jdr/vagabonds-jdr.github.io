var lastClickedHex;
var gridMap = { };

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


		for (i = 0; i<newHexes.length; i++)
		{
			gridMap[newHexes[i][1]][newHexes[i][0]]['nom'] = newHexes[i][2];
			gridMap[newHexes[i][1]][newHexes[i][0]]['descHex'] = newHexes[i][3];
		}
	generateMap(offsetx, offsety,x,y);
}

function displayHex (x,y)
{
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
		if ((eventsL[i]['x'] == x) && (eventsL[i]['y'] == y))
		{
			eventsL[i]['status'] = 'L';
			eventsL[i]['id'] = i;

			tableEvents.push(eventsL[i]);
		}

	}
	//on complète les events locaux si besoin
	rand_used =[]
	eventG_added = []
	while ( (tableEvents.length + eventG_added.length) < 4 )
	{	
		//on choisi un event global au hasard
		do
		{
		newRand = Math.floor(Math.random() * eventsG.length);
		}
		//tant qu'on l'as déjà assigné, on relance
		while (rand_used.includes(newRand))

		rand_used.push(newRand);
		eventsG[newRand]['status'] = 'G';
		eventsG[newRand]['id'] = newRand;
		eventG_added.push(eventsG[newRand]);
		//console.log(eventsG[newRand]);
	}

	let newHtml = '<div> <h3>' + gridMap[y][x]['nom'] + '</h3> <p>' + gridMap[y][x]['descHex'] + '</p> </div>';
	
	//on met un petit intitulé de catégorie
	newHtml += '<p><strong>Scénarios locaux</strong></p>'
	if(tableEvents.length > 0 )
	{
		//on fait les petits encarts pour les quêtes Locales
	for (let i = 0; i<tableEvents.length; i++)
	{
		 newHtml += '<div class="quest"  onclick=\"openEvent(' + tableEvents[i]['id'] + ', \'' + tableEvents[i]['status'] + '\')\" style= "background-image: url(images/events/'+ tableEvents[i]['image']+')" > <h3>'+ tableEvents[i]['nom'] + '</h3><p>' + tableEvents[i]['pitch'] + '...</p></div>';
	}
	}
	else
	{
		//Si nous n'avons pas d'events locaux
		newHtml += '<div><p>Il semblerait que cette zone ne possède pas de scénario local. </p></div>'

	}
	
	//si on a eu besoin d'ajouter des events globaux
	if(eventG_added.length > 0 )
	{
		//on met un petit intitulé de catégorie
		newHtml += '<p><strong>Scénarios génériques</strong></p>'
		//on fait les petits encarts pour les quêtes Globales
		for (let i = 0; i<eventG_added.length; i++)
		{
			newHtml += '<div class="quest"  onclick=\"openEvent(' + eventG_added[i]['id'] + ', \'' + eventG_added[i]['status'] + '\')\" style= "background-image: url(images/events/'+ eventG_added[i]['image']+')" > <h3>'+ eventG_added[i]['nom'] + '</h3><p>' + eventG_added[i]['pitch'] + '...</p></div>';
		}
	}
	
	document.getElementById("currentEvent").innerHTML = newHtml;

	document.getElementById('events').click();
}

	function openEvent(id, statut)
	{
		switch (statut)
		{
			case'L':
				console.log(eventsL[id]['nom']);
				displayWindowEvent(eventsL[id]);
				break;

			case'G':
				console.log(eventsG[id]['nom']);
				displayWindowEvent(eventsG[id]);
				break;

			default:
				console.log('erreur');
		}
	}






