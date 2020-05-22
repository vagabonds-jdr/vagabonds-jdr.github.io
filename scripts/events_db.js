///////////////////////////////////Setup des Events\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var eventsL = [


/*------02----------------------------------------------------------------------------------------------*/   

    {x:'02' , y:'02', 
            nom:'Seule face aux ténèbres', 
            pitch:'Un chasseur de malédictions traverse les marais à la recherche d’un ours maudit', 
            text:'Un chasseur de malédictions, large d’épaule et de grande taille, l’armure usée ,traverse les marais à la recherche d’un ours maudit. Sous son armure c’est en réalité une femme.'
            + ' </p><strong>Céleste</strong> : ancienne combattante des servenatifs. Elle vouée à son culte jusqu’à frôler le fanatisme. Elle porte une grande hallebarde et Si elle retire son casque on peut admirer un beau visage de femme mure , fin, bardé de cicatrices et belle chevelure rousse coiffée à la manière habituelle des servenatifs : les cheveux du sommet de son crâne sont attachés en queue de cheval tandis que le reste est rasé.</p>' 
            + ' <p><strong>Ours maudit</strong> : Ce dernier attaquerait les villageois de la région. Cet ours était sacré et c’est surement ce qui l’a empêché de mourir à cause de la malédiction. Il est désormais difforme, deux mâchoires. Il vit dans  une grotte sur la paroie d’une cuvette légèrement inondée.</p>'
            + ClasseCombat(8,'Ours maudit'), 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg' }
 
   
/*-------03---------------------------------------------------------------------------------------------*/   

   , {x:'03' , y:'03', 
            nom:'Au bout du chemin', 
            pitch:'La silhouette d’un cavalier apparaît à l’horizon', 
            text:'La silhouette d’un cavalier apparaît à l’horizon, mais lorsqu’il approche, c’est en fait un monstre : les jambes du cavalier se sont fusionnés avec le corps de son cheval décapité tandis que le cavalier, couvert de sang a vu sa tête remplacée par celle du cheval. Cet amalgame continue d’avancer en titubant, le bruit des sabots donnant vie à cette vision cauchemardesque. Si les joueurs ne parlent pas en sa présence,  il avancera sans se soucier d’eux. En cas de combat, chaque blessures donnera lieu à un test de mental pour éviter d’être maudit. (la difficulté augmentant à chaque blessures)' 
            + ClasseCombat(6,'Cavalier noir'), 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-vulture.jpg' }

/*-------04---------------------------------------------------------------------------------------------*/      
   , {x:'04' , y:'02', 
            nom:'La balance inaltérable', 
            pitch:'Dans les archives se trouve un parchemin crucial', 
            text:'Dans les archives, un parchemin indique qu’une malédiction est la source d’une chute irrémédiable vers la folie et le mal. Seule une magie de protection divine suffisamment puissante peut en venir à bout. Aucun humain n’en est capable.' 
            + ClasseCombat(1,'Moine corrompu'), 
            auteur:'Emeric Durdos' , 
            image:'Ashina_Outskirts_01.png'}


/*-------08---------------------------------------------------------------------------------------------*/   
   , {x:'08' , y:'93', 
            nom:'L’auberge des Vaillances', 
            pitch:'<em>Bravoure</em> propose un concours de boisson au groupe. ça tourne mal', 
            text:'L’auberge des Vaillances : cet établissement accueillant et chaleureux ne rassemble pas énormément de clients. L’un d’eux, Bravoure propose un concours de boisson au groupe. ça tourne mal :  Les joueurs se font détrousser ? capturer ? <ul> <li> <em>Bravoure</em> : Cet homme  d\'âge mûr est un chef de gang qui saoule les voyageurs pour abuser d’eux. La tenancière de l’auberge qui est sa petite soeur reçoit une partie du butin lorsqu’elle l’aide pour ses exactions.</li>' 
            + ClasseCombat(3,'Bravoure') 
            +' <li><em>Pipeis</em> : Gérante de l’auberge des Vaillances. elle aime son auberge plus que tout et passe beaucoup de temps à s’en occuper. </li> </ul>', 
            auteur:'Emeric Durdos' , 
            image:'klaus-pillon-baseofoperations-klauspillon-final-label.jpg' }
   
   , {x:'08' , y:'92', 
            nom:'Les archives', 
            pitch:'Dans le palais se trouve des archives qui contiennent des parchemins', 
            text:'Dans le palais se trouve des <strong>archives</strong> qui contiennent des parchemins évoquant des grottes dans les montagnes.', 
            auteur:'Emeric Durdos' , 
            image:'andreas-rocha-oldbookshop02.jpg' }
   
   , {x:'08' , y:'92', 
            nom:'Un bon départ', 
            pitch:'Si vos joueurs commencent ici', 
            text:'C’est Argencier qui embauche les pjs pour montrer qu’ils peuvent sécuriser le pays. Ces envoyés sont doté d’une broche (En mode “facile”, les broches permettent d\'accéder inconsciemment aux souvenirs de leurs anciens porteurs).', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg' }
   
   , {x:'08' , y:'98', 
            nom:'L\'épreuve du pelerin pt.2', 
            pitch:'Sur la plage, adossé à une statue se dresse le squelette d\'un moine qui ne semble pas avoir de jambes', 
            text:'Si un personnage traverse la plage en longueur avec le handicap du pèlerin, il aperçoit (il est le seul à pouvoir le voir) alors un cadavre de moine (les jambes n’ont pas d’os s’il vérifie) portant une amulette. Cette dernière confère le trait “protection divine” si le personnage ne le possède pas, sinon il réduit de 1 le nombre de D6 à mettre sur le statut de plus il acquiert la spécialité “voyage”.De plus, il récupère l’usage de ses jambes.', 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-ddsds.jpg'}


/*-------09---------------------------------------------------------------------------------------------*/   
   
   , {x:'09' , y:'97', 
            nom:'L\'épreuve du pelerin pt.1', 
            pitch:'Une statue se dresse sur l’avancée, couverte de neige, la silhouette encapuchonnée a vu son le visage se faire éroder par le vent', 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-the-torch-of-the-blind.jpg'}
   
   , {x:'09' , y:'99', 
            nom:'Au nord', 
            pitch:'Un homme blessé et malade boite vers le nord espérant trouver un refuge', 
            text:'un homme blessé et malade boite vers le nord espérant trouver un refuge. Il n’est pas habillé chaudement, ses pieds et ses mains sont nécrosés.', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
   , {x:'09' , y:'99', 
            nom:'A l’est', 
            pitch:'Une petite cabane de bois est visible, elle est en mauvais état et pleine de poussière', 
            text:' Une petite cabane de bois est visible, elle est en mauvais état et pleine de poussière. Elle est composée d’une seule et unique salle. Elle est un peu en désordre, le lit est sale et défait.', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
            
   , {x:'09' , y:'99', 
            nom:'Au sud', 
            pitch:'Un petit groupe de malandrins avec des armes de fortunes errent', 
            text:'Un groupe de trois hommes avec des armes de fortunes. Ce sont des bandits qui attaquent les voyageurs faibles et/ou isolés : ils sont lâches et profondément méchants.' 
            + ClasseCombat(2,'Bandit improvisé'), 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
            
   , {x:'09' , y:'02', 
            nom:'Des offrandes inattendues', 
            pitch:'Des offrandes ont été faites dans le temple', 
            text:'En traversant la forêt, les personnages tombent sur un petit <strong>temple isolé</strong> et très modeste.' 
            +'<p>Les 4 colonnes soutenant le toit de tuiles sont enlacées dans un lierre luxuriant sur lesquels des petites fleurs rosées ont fait apparition. Dans l’obscurité de la toiture une <strong>croix de pierre</strong> se dresse, son allure sinistre tranche étonnamment avec son cadre paradisiaque. La pierre brute et rugueuse évoque celle utilisée pour faire les tombes. <strong>Des offrandes</strong> ont été faites dans le temple : un <strong>grand plateau</strong> contenant nourriture et encens se trouve au pied de la croix. L’encens est encore légèrement chaud.</p>'
            + '<p>Une partie de ces offrandes provient du prieuré de Vidieu. Une moniale honore ce temple en échange d’une aide sous forme de médicaments. Les relations entre les deux groupes étant mal vues, elle cache ses agissements.</p>'
            + '<p>Un groupe se terre dans la forêt, il est tourné vers une spiritualité alternative. ils portent des vêtements traditionnels longs ainsi que des masques inexpressifs. Ils ont une allure fantomatique.Ils observent les voyageurs passant à proximité de leurs lieux de cultes qui sont de petits temples isolés et très modestes.</p>'
            + '<p>Si les voyageurs prennent la direction du nord-est (1002) pendant la nuit, ils peuvent croiser le chemin de soeur <strong>Cointelie</strong> qui essaiera autant que possible de les éviter.</p>' , 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}


/*-------10---------------------------------------------------------------------------------------------*/   

   , {x:'10' , y:'02', 
            nom:'L’organisation des lieux', 
            pitch:'Quelques détails sur les personnes qui vivent ici', 
            text:'<h2>Personnages</h2>'
            + '<p>Les moniales sont chauve (signe d’humilité), elles portent quasiment toutes de longues robes noires ainsi que des bandes de tissu blanches autour du visage et du coup.</p>'
            + '<p><strong>Emie</strong> : moniale, jeune femme, habits encore usés par le voyage.</p>'
            + '<p><strong>Bottanne</strong> : Infirmière en chef, femme mure.</p>'
            + '<p><strong>Cointelie</strong> : Infirmière, ronde. Elle s’occupe des malades et des petites taches à l’infirmerie. Elle sort la nuit dans la forêt située au sud-ouest.</p>'
            + '<p><strong>Branide</strong> : infirmière,grande et fine. Elle s\'occupe des malades et des herbes médicinales du jardin.</p>'
            + '<p><strong>Lunablesse</strong> : chancelière, beau visage, mûre. C’est elle qui reporte sur un registre toute arrivée et tout départ du prieuré.</p>'
            + '<p><strong>Aitette</strong> : Hôtelière, elle a un visage et doux et la conversation facile. Elle s’occupe de l\'accueil des voyageurs et de leur confort. Elle fait aussi le ménage et le linge.</p>'
            + '<p><strong>Akio</strong> : Doyenne du prieuré, c’est elle qui dirige la vie ici..</p>'
            + '<p>Le cœur du bâtiment est la chapelle. Tout autour se dressent les bâtiments nécessaires à la vie : </p>'
            + '<ul>'
            + '<li><em>Cloître</em></li>'
            + '<li><em>Salle principale</em>, </li>'
            + '<li><em>Bibliothèque</em>, situé dans une pièce accessible depuis la chapelle, on y trouve tous les ouvrages médicaux nécessaires aux soins des voyageurs. Dans les archives, un parchemin indique que d’antiques amulettes aux puissants pouvoirs ont été perdues il y a plusieurs siècles de cela.</li>'
            + '<li><em>Dortoirs</em> : accolé au cloître et au réfectoire. C’est ici que dorment les voyageurs en bonne santé ainsi que les moniales du prieuré. </li>'
            + '<li><em>Réfectoire</em> : grande salle où mangent l’ensemble des personnes présentes dans le prieuré. </li>'
            + '<li><em>Cuisine</em> : En comparaison de l’affluence dans le prieuré, la cuisine semble petite mais elle est très bien organisée. Une porte mène au réfectoire tandis que la seconde donne sur le magasin à provision. </li>'
            + '<li><em>Magasins à provisions</em></li>'
            + '<li><em>Infirmerie</em>, les stocks sont très faibles.</li>'
            + '<li><em>Jardins</em> : on y trouve le potager qui commence a s’épuiser ainsi qu’un carrés d\'herbes médicinales.</li>'
            + '</ul>', 
            auteur:'Emeric Durdos' , 
            image:'pierre-etienne-travers-old-monastery-by-pe-travers-d958fai-1.jpg'}
   
   , {x:'10' , y:'02', 
            nom:'La nonne maudite', 
            pitch:'Rentrée du sud,elle ne dit plus un mot, elle ne dors plus et semble fuir.', 
            text:'</p>L’une d’elles est rentrée du sud : <strong>Emie</strong>. Elle y est partie pour raccompagner un enfant du nord dans sa famille, il as perdu ses parents il y quelques temps. Depuis son retour, elle ne dit plus un mot, elle ne dors plus et semble fuir la compagnie pour se réfugier dans la chambre.</p>' 
            + '</p>Un personnage doté du talent adéquat peut détecter des traces malédiction : cette malédiction semble très puissante car de tels effets ne devraient pas affecter autant une personne. Pour soigner cette jeune femme, il faut le talent <strong>Espoir</strong> ou <strong>Malédiction</strong>.</p>', 
            auteur:'Emeric Durdos' , 
            image:'jane-lysa-mary-line.jpg'}
   
   , {x:'10' , y:'02', 
            nom:'L’agent infiltré', 
            pitch:'Un malade atteint par le <strong>courroux ardent</strong> est allongé dans l’infirmerie', 
            text:'<p>Un malade atteint de la <strong>peste</strong> est allongé dans l’infirmerie, il est au bord de la mort.</p>' 
            + '<p><em>Si les personnages ne font rien pour se débarrasser du corps proprement (le bruler ?) les autres personnages autour vont contracter la maladie et le couvent sera condamné.</em></p>', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}

   
/*-------11---------------------------------------------------------------------------------------------*/   



/*-------12---------------------------------------------------------------------------------------------*/   

   , {x:'12' , y:'90', 
            nom:'L’épreuve du pelerin', 
            pitch:'Une silhouette encapuchonnée se détache à travers la brume. Portant une lanterne, elle est assise sur un rocher et regarde, immobile, l’horizon', 
            text:'<p>Sur ce petit bord de littoral se trouve une maison en ruines. Délabrée et usée par le sel, il ne reste plus grand choses. Elle semble avoir été habité par une famille de marins.</p>'
            + '<p>Depuis la maison (uniquement) on peut apercevoir une silhouette encapuchonnée portant une lanterne, elle est assise sur un rocher et regarde, immobile, l’horizon. </p>'
            + '<p>Si un personnage s\'assoit là où le silhouette se tenait, il va perdre la vue jusqu\'à ce qu’il se couvre les yeux avec de l’eau de mer.  S’il retrouve la vue ainsi, il pourra voir un squelette assis portant une amulette à son cou. Les autres ne pourrons pas le voir.</p>'
            + '<p>Cette amulette confère le trait “protection divine” si le personnage ne le possède pas, sinon il réduit de 1 le nombre de D6 à mettre sur le statut. et la spécialité observation.</p>', 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-tishina.jpg'}
   
   , {x:'12' , y:'96', 
            nom:'Au nom du Roi !', 
            pitch:'Si vos joueurs commencent ici', 
            text:'Les personnages sont des envoyés du roi. Ils sont embauchés pour compenser la disparition des troupes de réserve placées au sud. Ainsi, ils sont chargés de maintenir la sécurité et la justice. Ils possèdent des postes où ils peuvent déposer des lettres à l’attention de leurs semblables ( chaque panneau est une page où les joueurs peuvent écrire).', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg' }
   
   , {x:'12' , y:'96', 
            nom:'La garde de Foresbloue', 
            pitch:'Ici les gardes sont fidèles à leur poste', 
            text:'<p>Ce port est le point de départ pour accéder à Argençier depuis Grandilage. Son nom venant de la teinte du feuillage des arbres relativement bleuté qui sont désormais grisâtre. Ancien port prospère, la population y est pauvre et affamée. Seules quelques maigres réserves de riz subsistent encore. Le riz y est donc vendu extrèmement cher. Il est aussi un point de tension entre le roi et le clan <strong>Shinrai.</strong></p>'
            
            + '<h2>La garde de Foresbloue</h2>'
            + '<p><strong>Ranald</strong> : Large et d\'âge mûr, il est le chef de la garde de la ville depuis de plusieurs dizaines d’années. Il fait des rondes avec quelques gardes en armes pour essayer de débusquer les espions envoyé par le clan Shinrai ainsi que maintenir l’ordre. Il a des manières un peu rustres.<p>'
            + ClasseCombat(5,'Ranald')
            
            + '<p><strong>Joel</strong> : Grand et élégant, il est légèrement plus vieux que Ronald. Il fait parti de la garde de Ronald mais en réalité c’est un espion au service du clan shinrai qui veille à ce que Ronald ne découvre rien de compromettant vis à vis du clan d’Argençier. Il a une bonne connaissance de la politique Radienne.</p>'
            
            + ClasseCombat(4,'Joel')
            
            + '<p><strong>Côme</strong> : Le plus jeune de la brigade, c’est un natif d’une quinzaine d’année. Il est déterminé à servir Foresbloue mais son manque d’expérience le rends facilement manipulable. Il est reconnaissant pour le poste que Ronald a bien voulu lui accorder.</p>'
            + ClasseCombat(3,'Côme')
            
            + '<p><strong>Thibaud</strong> : Visage fin et larges épaules, ce garde est un combattant de métier au sang chaud. Si Ronald n’était pas là pour lui servir de garde-fou, qui sait à quel genre d’exactions il se livrerait. C’est donc à lui que l’on confie les tâches les moins délicates ou les moins bien vues. Collecte d\'impôts ou exécutions, il ne fait pas de différence si bien que  lorsqu\'il est de sortie cela n’augure rien de bon.</p>'
            + ClasseCombat(6,'Thibaud')
            
            + '<p><strong>Ysangrin</strong> : Ancien fermier, Ysangrin a été recruté pour compléter la garde il y a de nombreuses années. Il a donc une certaine proximité avec la population. C’est lui qui as pris la charge de la formation de Côme. Il n’aime pas Thibaud qui devrait être en prison selon lui. Il respecte autant Ronald et Joel qui sont des hommes pleins d’expérience même s’il existe une certaine rivalité.</p>' 
            + ClasseCombat(4,'Ysangrin')
            
            , auteur:'Emeric Durdos' , 
            image:'jakub-rozalski-holycrusader.jpg'}
   
   , {x:'12' , y:'98', 
            nom:'Au sud', 
            pitch:'Un miséreux se voit refusé l\'entrée à Viprince', 
            text:'<p>Des montagnes forment un arc qui part du sud ouest au nord empêchant d\'accéder aux zones situées derrière.</p>'
            + '<p><strong>Au sud</strong> Un paysan (Chrétien) se trouve devant la porte nord de Viprince, il a une charrette avec lui ainsi qu\'une vache pour la tirer.</p>'
            + '<p><strong>Chrétien</strong> : Agriculteur venu de Valenche pour vendre ses récoltes de seigle. Il ne peut pas rentrer car il n’as pas l’argent pour payer la récente taxe du contenu de sa charrette. Il a l’habitude de payer ses taxes en nature et est très étonné de ne pas pouvoir le faire ici. Les personnages pourront lui rendre service en accomplissant une tâche pour lui.</p>'
            
            + '<p>Le garde explique que cette taxe est là pour éviter la circulation trop importante de marchandises (Les agriculteurs de focharesse sont dispensés de cette taxe) dans les hauts-quartiers et que s\'il souhaite ne pas payer cette taxe, il doit passer par la porte sud. </p>'
            , auteur:'Emeric Durdos' , 
            image:'artem-demura-33333.jpg'}
   
   , {x:'12' , y:'99', 
            nom:'Paranoïa', 
            pitch:'La Bourgeoisie de Viprince vie dans ces quartiers et est terrorisée par les autres', 
            text:'La Bourgeoisie de Viprince vie dans ces quartiers. Beaucoup de ces derniers sont armés afin de se défendre face aux voleurs et autres malandrins. Ils abattent les malades à vue, les gardes venant débarrasser les corps plus tard. Heureusement, ce sont les domestiques qui s’occupent de toutes les tâches de vie, garantissant l’isolement de la noblesse envers le petit peuple.' 
            + ClasseCombat(3,'Bourgeois armé'), 
            auteur:'Emeric Durdos' , 
            image:'pasted-image-0.png'}
   
   , {x:'12' , y:'00', 
            nom:'Les risques des bas quartiers', 
            pitch:'Le vol est loin d\'être le plus grand danger', 
            text:'<p>Situés près du port, les rues étroites des bas quartiers était le centre des activités commerciales de la ville. Désormais la maladie y est omniprésente, malgré les bûchers de corps quotidien organisés au port par les médecins de peste des corps en jonchent les ruelles tentaculaires. La population reste relativement dense. Un grand marché aux poissons se déroule tous les matins sur les quais.</p>'
            + '<p>Si les personnages fortunés ne sont pas accompagnés par un guide local,  ils vont être victimes de vols. Lorsqu’ils quittent la zone, les PJs doivent réussir un test de <strong>Corps assez dur</strong> pour ne pas tomber malade.</p>', 
            auteur:'Emeric Durdos' , 
            image:'pasted-image-0.png'}

   
/*-------13---------------------------------------------------------------------------------------------*/   

   , {x:'13' , y:'99', 
            nom:'Un royaume en perdition', 
            pitch:'Le roi est mort dans le secret et desormais ses fils, dévorés par l’avarice, se disputent la succession', 
            text:'pitch', 
            auteur:'Emeric Durdos' , 
            image:'throne.jpg'}
 
   
/*-------14---------------------------------------------------------------------------------------------*/   

   , {x:'14' , y:'94', 
            nom:'Une famille en danger', 
            pitch:'Un cri de femme provient d’une maison au bord de la route, devant un cheval est attaché', 
            text:'<p>Un cri de femme provient d’une maison au bord de la route, un cheval est attaché à la palissade qui en fait le tour tandis que la porte de la bâtisse est entrouverte. </p>'
            + '<p>A l\'intérieur un homme de grande stature tenant une lame teintée de sang. Le cadavre d’un homme décapité étendu sur la toile qui recouvre le sol en terre battue. La mare de sang arrive au pieds d’une femme terrorisée (<em>Jadelle</em>) qui tient sa fille (<em>Caelia</em>) dans ses bras. <em>Godefroy</em> va profiter au maximum de la situation</p>'
            + '<p><strong>Jadelle</strong> : Comme son mari elle passe ses journées à travailler la terre et s’occuper de sa fille. Il y a de nombreuses années, elle a couché avec un soldat d’une garnison ayant fait halte non loin de chez elle. Ce dernier est reparti le lendemain sans demander son reste.</p>'
            + '<p><strong>Caelia</strong> : Fille de Jadelle, elle a l’habitude de vendre les produits que ces parents fabriquent en ville ou sur la route.</p>'
            + '<p><strong>Godefroy, le combattant déserteur</strong> : Cet homme violent et sauvage reviens pour retrouver Jadelle avec qui il a eu une aventure d’un soir. Son côté possessif lui a dicté de revenir reprendre sa propriété. En arrivant il a tué le mari de Jadelle. Il considère que tout ce qui est dans cette maison lui revient.</p>'
            + ClasseCombat(6,'Godefroy, le combattant déserteur'), 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-srub-cover.jpg'}
   
   , {x:'14' , y:'95', 
            nom:'L\'affreux garde-chasse', 
            pitch:'Un garde-chasse purulent aux proportions grotesque ramasse ses collets', 
            text:'Un garde-chasse purulent aux proportions grotesque ramasse ses collets, il rentre dans sa tente. Il accueille les voyageurs avec un sourire de façade tout en leur donnant des titres tels que “seigneur” ou “maître”.'
            + ClasseCombat(5,'Wilfrid, le garde-chasse purulent'), 
            auteur:'Emeric Durdos' , 
            image:'reiko-gross-swamp-of-sadness2.jpg'}
   
   , {x:'14' , y:'99', 
            nom:'Perdus d\'avance', 
            pitch:'Si vos joueurs commencent ici', 
            text:'<p>Si on commence dans la prison : vous êtes dans une cellule. Au sol, le cadavre du garde terrassé par la maladie. Il est appuyé contre la grille et la clée de la grille est accessible dans une poche.  <p>'
            + ClasseCombat(5,'Garde malade'), 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}

   
/*-------15---------------------------------------------------------------------------------------------*/   

   , {x:'15' , y:'88', 
            nom:'Embuscade sur le pont !', 
            pitch:'Ils sont attaqués par des bandits', 
            text:'Au bord du fleuve à été aménagé un petit pont permettant de rejoindre l’autre rive. Si jamais des gens traversent ce pont, ils sont attaqués par <strong>6 bandits</strong> !' 
            + ClasseCombat(4,'Bandit organisé'), 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
   , {x:'15' , y:'90', 
            nom:'Un bon repas', 
            pitch:'Un boucher du marché noir propose de la viande', 
            text:'<strong>Odilon</strong> : Un boucher du marché noir propose de la viande, qu’est-elle ? du chien ? du rat ? de l’humain', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
   , {x:'15' , y:'94', 
            nom:'Le voyageur rouillé', 
            pitch:'Un noble couvert d’une armure rouillée complète qui parcourt la région', 
            text:'<p><strong>Théobald</strong> : Un noble couvert d’une armure rouillée complète qui parcourt la région en direction du Nord à pied, son cheval étant mort. Son kabuto masque son visage purulent. Il s’aide de sa lance pour marcher.</p>'
            + '<p>C’est un ancien chef de cavalerie qui as vu toute son unitée tomber sous la maladie alors qu’ils reviennent de Viprince où ils souhaitaient présenter leurs hommages au roi.</p>'
            +ClasseCombat(6,'Théobald '), 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
   , {x:'15' , y:'95', 
            nom:'Rencontre nocturne', 
            pitch:'Si le garde-chasse est toujours en vie (1495), il va venir détrousser les voyageurs pendant la nuit.', 
            text:'<p>Si le garde-chasse est toujours en vie (1495), il va venir détrousser les voyageurs pendant la nuit.</p> <p>les personnages devront réussir un test de <strong>Corps Moyen (4+)</strong> pour se réveiller. S’ils n’y arrivent pas, le garde-chasse repartira avec le contenu de leur sac </p>'
            + ClasseCombat(5,'Wilfrid, le garde-chasse purulent'), 
            auteur:'Emeric Durdos' , 
            image:'artem-demura-wod-cover-v2.jpg'}

   
/*-------16---------------------------------------------------------------------------------------------*/   


/*-------17---------------------------------------------------------------------------------------------*/   

   
/*-------18---------------------------------------------------------------------------------------------*/   

   , {x:'18' , y:'88', 
            nom:'Un délit subjectif', 
            pitch:'Quatres individus volent les cultures, sont ils affamés ? pillards ?', 
            text:'Quatres individus volent les cultures, sont ils affamés ? pillards ?', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
   , {x:'18' , y:'89', 
            nom:'Le loup blessé', 
            pitch:'A l’est : les restes d’un campement sont visibles, les braises sont encore chaudes', 
            text:'<strong>A l’est</strong> : les restes d’un campement sont visibles, si les personnages analysent la zone: à en juger par la taille du foyer ainsi que la marque sur le sol un homme seul. Le bois environnant a été coupé et des copeaux de bois parsèment le sol. <em>(Valdémar est parti au Nord-est)</em>', 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
 
   
/*-------19---------------------------------------------------------------------------------------------*/   

   , {x:'19' , y:'88', 
            nom:'Au sud-ouest', 
            pitch:'Dernier survivant de Grivière Valdémar traque les bandits qui ont détruit son village', 
            text:'<strong>Au sud-ouest</strong> : un homme armé d’une pique de bois et de couteaux : <strong>Valdémar</strong> ! C’est le dernier survivant de Grivière, il est à la recherche des bandits qui ont détruit son village. Sa recherche de vengeance l’aveugle, il refuse que le moindre obstacle se dresse devant sa route.'
            + ClasseCombat(2,'Valdémar') , 
            auteur:'Emeric Durdos' , 
            image:'placeholder.jpg'}
   
                   
   ];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////EVENT GLOBAUX//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   var eventsG = [

   { nom: 'Les maraudeurs', 
        pitch: 'Des cavaliers attaquent un village (vue de loin)', 
        text:'Des cavaliers attaquent un village (vue de loin)', 
        auteur:'Emeric Durdos' , 
        image:'zhihui-su-2.jpg' },

   { nom: 'Event Générique 2', 
        pitch: 'Ces events servent à completer les zones moins écrites', 
        text:'pitch', 
        auteur:'Emeric Durdos' , 
        image:'artem-demura-baba-v-lodke6.jpg' }

   ,{ nom: 'Obstacle', 
        pitch: 'Un obstacle naturel ou pont de cordes/bois.', 
        auteur:'Emeric Durdos' , 
        text:'Un obstacle naturel ou pont de cordes/bois.' ,
        image:'artem-demura-baba-v-lodke6.jpg' }
   
   ,{ nom: 'Event Générique 4', 
        pitch: 'test4', 
        auteur:'Emeric Durdos' , 
        text:'pitch' ,
        image:'artem-demura-baba-v-lodke6.jpg' }
   
                   ];
   