let int_nb_dices = 3;
let dice_list = [0,1,2];
var rollHistory =[''];

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