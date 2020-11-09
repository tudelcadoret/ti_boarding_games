//****************************************************************************
//callbacks

//valeurs de base
let pariP1 = 0
let cagnotteP1 = 0
let pariP2 = 0
let cagnotteP2 = 0
let turn = 0

//sections 
const piggameSectionRules = document.getElementById('piggame_rules')
const piggameSectionP1 = document.getElementById('piggame_joueur1')
const piggameSectionP2 = document.getElementById('piggame_joueur2')
const piggameSectionBtns = document.getElementById('piggame_buttons')
const piggameSectionEndGame = document.getElementById('piggame_endGame')
    
//affichage
const pariPlayer1 = document.getElementById('pariPlayer1')
const cagnottePlayer1 = document.getElementById('cagnottePlayer1')
const pariPlayer2 = document.getElementById('pariPlayer2')
const cagnotteIA = document.getElementById('cagnotteIA')
const imgDice = document.getElementById('dice_img')
const emo = document.getElementById('emo')


//***************************************************************

//lance la partie
function piggameStartGame()
{
    //section rules apparait
    displayNone(piggameSectionRules);
    
    //section joueur1 apparait
    displayNone(piggameSectionP1);
    
    //section buttons apparait
    displayNone(piggameSectionBtns);
}


//****************************************************************

//intervient lorsqu'un joueur fait 1 au dé
function passTurnDice1  ()
{
    //pointeurs
    const draw = document.getElementById('piggame_draw')
    const addPoint = document.getElementById('piggame_addPoints')
    const passTurn = document.getElementById('piggame_passTurn')
    
    //change la visibilité des boutons
    displayNone(draw);
    displayNone(addPoint);
    displayNone(passTurn);
    
    //change la visibilité des sections de joueur
    displayNone(piggameSectionP1);
    displayNone(piggameSectionP2);
}

//****************************************************************

//lance un dé et affiche la face correspondante
function resultThrowDice()
{
    //vide le contenu de la div
    imgDice.innerHTML = ""
    
    //génère un entier de 1 à 6
    let throwDice =  entierAleatoire(1,6)
    
    //crée une nouvelle image
    let newImg = document.createElement('img')
    switch (throwDice) {
        case 1 : 
            newImg.src = 'img/piggame/dice_face_one.png'
            newImg.alt = 'Un'
            break;
        case 2 : 
            newImg.src = 'img/piggame/dice_face_two.png'
            newImg.alt = 'Deux'
            break;
            
        case 3 : 
            newImg.src = 'img/piggame/dice_face_three.png'
            newImg.alt = 'Trois'
            break;
            
        case 4 : 
            newImg.src = 'img/piggame/dice_face_four.png'
            newImg.alt = 'Quatre'
            break;
            
        case 5 : 
            newImg.src = 'img/piggame/dice_face_five.png'
            newImg.alt = 'Cinq'
            break;
            
        case 6 : 
            newImg.src = 'img/piggame/dice_face_six.png'
            newImg.alt = 'Six'
            break;
        
        default: console.log("erreur dans le programme")
    }
    
    //ajoute la classe createdImage à newImg
    newImg.classList.add('createdImage')
    
    //insert l'image dans le dom après la div imgDice
    imgDice.appendChild(newImg);
    
    //si Joueur1 obtient 1 au dé
    if((throwDice === 1) && (turn === 0))
    {
        pariP1 = 0
        turn = 1
        
        //pouce baissé
        emo.innerHTML = ""
        let newPouceBas = document.createElement('img')
        newPouceBas.src = 'img/piggame/pouce_bas.png'
        newPouceBas.alt = 'Pouce baissé'
        newPouceBas.classList.add('createdImage')
        emo.appendChild(newPouceBas);
        
        //affichage 
        const result = document.getElementById('result')
        result.innerHTML = "Aïe... Vous avez fait 1, vous devez passer la main."
        
        //révèle le bouton pour passer la main
        const draw = document.getElementById('piggame_draw')
        const addPoint = document.getElementById('piggame_addPoints')
        const passTurn = document.getElementById('piggame_passTurn')
        displayNone(draw);
        displayNone(addPoint);
        displayNone(passTurn);
    }
    //si Joueur2 obtient 1 au dé
    else if((throwDice === 1) && (turn === 1))
    {
        pariP2 = 0
        turn = 0
        
        //pouce baissé
        emo.innerHTML = ""
        let newPouceBas = document.createElement('img')
        newPouceBas.src = 'img/piggame/pouce_bas.png'
        newPouceBas.alt = 'Pouce baissé'
        newPouceBas.classList.add('createdImage')
        emo.appendChild(newPouceBas);
        
        //affichage 
        const result = document.getElementById('result')
        result.innerHTML = "Aïe... Vous avez fait 1, vous devez passer la main."
        
        //révèle le bouton pour passer la main
        const draw = document.getElementById('piggame_draw')
        const addPoint = document.getElementById('piggame_addPoints')
        const passTurn = document.getElementById('piggame_passTurn')
        displayNone(draw);
        displayNone(addPoint);
        displayNone(passTurn);
    }
    //si Joueur1 ne fait pas 1 au dé
    else if((throwDice != 1) && (turn === 0))
    {
        pariP1 = pariP1 + throwDice
        
        //pouce levé
        emo.innerHTML = ""
        let newPouceHaut = document.createElement('img')
        newPouceHaut.src = 'img/piggame/pouce_haut.png'
        newPouceHaut.alt = 'Pouce levé'
        newPouceHaut.classList.add('createdImage')
        emo.appendChild(newPouceHaut);
        
        //affichage 
        const result = document.getElementById('result')
        result.innerHTML = "Vous n'avez pas fait 1, c'est encore votre tour !"
    }
    //si Joueur2 ne fait pas 1 au dé
    else if((throwDice != 1) && (turn === 1))
    {
        pariP2 = pariP2 + throwDice
        
        //pouce levé
        emo.innerHTML = ""
        let newPouceHaut = document.createElement('img')
        newPouceHaut.src = 'img/piggame/pouce_haut.png'
        newPouceHaut.alt = 'Pouce levé'
        newPouceHaut.classList.add('createdImage')
        emo.appendChild(newPouceHaut);
        
        //affichage 
        const result = document.getElementById('result')
        result.innerHTML = "Vous n'avez pas fait 1, c'est encore votre tour !"
    }
    
    //affiche le pari du joueur
    displayBetAndCagnotte();
}

//***************************************************************

//ajoute les points à la cagnotte
function addPointsToCagnotte()
{
    //vide la face du dé
    imgDice.innerHTML = ""
    
    //vide l'image de pouce
    emo.innerHTML = ""
    
    //vide le résultat
    const result = document.getElementById('result')
    result.innerHTML = ""
    
    //modifie la valeur de la cagnotte
    if(turn === 0)
    {
        cagnotteP1 = cagnotteP1 + pariP1
        
        //la valeur du pari du joueur retombe à 0
        pariP1 = 0
        
        //changement : joueur vers IA
        turn = 1
    }
    else if(turn === 1)
    {
        cagnotteP2 = cagnotteP2 + pariP2
        
        //la valeur du pari de l'IA retombe à 0
        pariP2 = 0
        
        //changement : IA vers joueur
        turn = 0
    }
    
    //affiche le pari et la cagnotte du joueur
    displayBetAndCagnotte();
    
    //change la visibilité des sections de joueur
    displayNone(piggameSectionP1);
    displayNone(piggameSectionP2);
    
    
    //fin de partie
    if((cagnotteP1 >= 50) || (cagnotteP2 >= 50))
    {
        endGame();
    }
}

//***************************************************************

//nouvelle partie
function piggameNewGame()
{
    //réinitialise les valeurs
    pariP1 = 0
    pariP2 = 0
    cagnotteP1 = 0
    cagnotteP2 = 0
    turn = 0
    
    //affiche les valeurs
    displayBetAndCagnotte();
    
    //section rules apparait
    displayNone(piggameSectionRules);
    
    //section endGame disparait
    displayNone(piggameSectionEndGame);
}