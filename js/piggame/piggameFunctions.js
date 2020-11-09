//**************************************************************************
//fonctions du jeu

//affiche le pari et la cagnotte du joueur
function displayBetAndCagnotte()
{
    pariPlayer1.innerHTML = pariP1
    cagnottePlayer1.innerHTML = cagnotteP1
    
    pariPlayer2.innerHTML = pariP2
    cagnottePlayer2.innerHTML = cagnotteP2
}

//fin du jeu
function endGame()
{   
    //les sections des joueurs disparaissent
    piggameSectionP1.classList.remove('hidden')
    piggameSectionP1.classList.add('hidden')
    piggameSectionP2.classList.remove('hidden')
    piggameSectionP2.classList.add('hidden')
    
    //la section Btns disparait
    displayNone(piggameSectionBtns);
    
    //la section endGame apparait
    displayNone(piggameSectionEndGame);
    
    //message de fin de partie
    let fin = document.getElementById('message')
    if(cagnotteP1 >= 50)
    {
        fin.innerHTML = "Le joueur 1 a gagné la partie !"
    }
    else if(cagnotteP2 >= 50)
    {
        fin.innerHTML = "Le joueur 2 a gagné la partie !"
    }
}






    
