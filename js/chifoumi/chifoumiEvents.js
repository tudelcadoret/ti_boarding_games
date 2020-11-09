//**************************************************************************
//callbacks

function test()
{
    console.log("fezfezfezà")
}

//lancement du jeu
function chifoumiLaunchGame()
{
    //section rules disparait
    displayNone(sectionRules);
    
    //section choice apparait
    displayNone(sectionChoice);
}

function continueGame()
{
    //section result disparait
    displayNone(sectionResults);
    
    //section choice apparait
    displayNone(sectionChoice);
}

//le joueur a choisi pierre
function isRock()
{
    //section choice disparait
    displayNone(sectionChoice);
    
    //section results apparait
    displayNone(sectionResults);
    
    //modifie la valeur de choicePlayer
    choicePlayer = "pierre"
    
    //affichage du choix
    
        //ciblage du parent
    let comparePlayer = document.getElementById('comparePlayer')
    
        //vidage du contenu
    comparePlayer.innerHTML = ""
    
        //création d'une image
    let newImg = document.createElement('img')
    newImg.src = 'img/chifoumi/pierre.png'
    newImg.alt = 'pierre'
    
        //insertion de l'image
    comparePlayer.appendChild(newImg)
    
    //fonction principale
    chifoumiGame();
}

//le joueur a choisi feuille
function isLeaf()
{
    //section choice disparait
    displayNone(sectionChoice);
    
    //section results apparait
    displayNone(sectionResults);
    
    //modifie la valeur de choicePlayer
    choicePlayer = "feuille"
    
    //affichage du choix
    
        //ciblage du parent
    let comparePlayer = document.getElementById('comparePlayer')
    
        //vidage du contenu
    comparePlayer.innerHTML = ""
    
        //création d'une image
    let newImg = document.createElement('img')
    newImg.src = 'img/chifoumi/feuille.png'
    newImg.alt = 'feuille'
    
        //insertion de l'image
    comparePlayer.appendChild(newImg)
    
    //fonction principale
    chifoumiGame();
}

//le joueur a choisi ciseaux
function isScissors()
{
    //section choice disparait
    displayNone(sectionChoice);
    
    //section results apparait
    displayNone(sectionResults);
    
    //modifie la valeur de choicePlayer
    choicePlayer = "ciseaux"
    
    //affichage du choix
    
        //ciblage du parent
    let comparePlayer = document.getElementById('comparePlayer')
    
        //vidage du contenu
    comparePlayer.innerHTML = ""
    
        //création d'une image
    let newImg = document.createElement('img')
    newImg.src = 'img/chifoumi/ciseaux.png'
    newImg.alt = 'ciseaux'
    
        //insertion de l'image
    comparePlayer.appendChild(newImg)
    
    //fonction principale
    chifoumiGame();
}

//réinitialise la partie
function chifoumiNewGame()
{
    scorePlayer = 0
    scoreIA = 0
    result = ""

    //affichage des scores
    scoreP.innerHTML = "score du joueur : " + scorePlayer
    scoreI.innerHTML = "score de l'IA : " + scoreIA
    
    //affichage des résultats
    resultat.innerHTML = result
    
    //section rules apparait
    displayNone(sectionRules);
    
    //section endGame disparait
    displayNone(sectionEndGame);
}