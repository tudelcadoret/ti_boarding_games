//**************************************************************************
//code principal

//valeurs de base
let choicePlayer, choiceIA
let result
let scorePlayer = 0
let scoreIA = 0

//sections
const sectionRules = document.getElementById('chifoumi_rules')
const sectionChoice = document.getElementById('chifoumi_choice')
const sectionResults = document.getElementById('chifoumi_results')
const sectionEndGame = document.getElementById('chifoumi_endGame')
    
//affichage
const scoreP = document.getElementById('scorePlayer')
const scoreI = document.getElementById('scoreIA')
const resultat = document.getElementById('resultat')
let iframe = document.querySelector('.fa-laugh-wink')
const message = document.getElementById('message')


//************************************
    //choix de l'IA
function choixIA()
{
    //génère un entier aléatoire entre deux bornes
    let alea = entierAleatoire(0, 2);
    
    //renvoie le choix de l'IA et affiche le résultat
    let logI = document.getElementById('logIA')
    if(alea === 0)
    {
        choiceIA = "pierre"
        
        //création d'une image
        let compareIA = document.getElementById('compareIA')
        compareIA.innerHTML = ""
        let newImg = document.createElement('img')
        newImg.src = 'img/chifoumi/pierre.png'
        newImg.alt = 'pierre'
        compareIA.appendChild(newImg)
    }
    else if(alea === 1)
    {
        choiceIA = "feuille"
        
        //création d'une image
        let compareIA = document.getElementById('compareIA')
        compareIA.innerHTML = ""
        let newImg = document.createElement('img')
        newImg.src = 'img/chifoumi/feuille.png'
        newImg.alt = 'feuille'
        compareIA.appendChild(newImg)
    }
    else if(alea === 2)
    {
        choiceIA = "ciseaux"
        
        //création d'une image
        let compareIA = document.getElementById('compareIA')
        compareIA.innerHTML = ""
        let newImg = document.createElement('img')
        newImg.src = 'img/chifoumi/ciseaux.png'
        newImg.alt = 'ciseaux'
        compareIA.appendChild(newImg)
    }
    else
    {
        console.log("erreur dans le process")
    }
    
}


//****************************************************
    //fonction de fin de jeu
function chifoumiEndGame()
{
    //section resultats disparait
    displayNone(sectionResults);
    
    //section endGame apparait
    displayNone(sectionEndGame);
    
    let fin
    if(scorePlayer ===3)
    {
        fin = "Vous avez gagné la partie, bravo !"
    }
    else
    {
        fin = "Vous avez perdu, essayez de faire mieux la prochaine fois !"
    }
    
    //affichage des résultats
    message.innerHTML = fin
}

//****************************************************
    //fonction principale
function chifoumiGame()
{
    //choix de l'IA
    choixIA();
    
    //comparaison des résultats
    if(choicePlayer === choiceIA)
    {
        result = "Egalité"
    
        //modife l'iframe : neutral
        iframe.classList.remove('fa-sad-cry')
        iframe.classList.remove('fa-laugh-wink')
        iframe.classList.remove('defeat')
        iframe.classList.remove('victory')
        iframe.classList.add('fa-meh')
        iframe.classList.add('neutral')
    }
    else if(
        (choicePlayer === "pierre" && choiceIA === "ciseaux")
        || (choicePlayer === "feuille" && choiceIA === "pierre")
        || (choicePlayer === "ciseaux" && choiceIA === "feuille")
        )
    {  
        result = "Un point de plus pour vous !"
        
        //incrémente le score du joueur
        scorePlayer++;
        
        //modifie l'iframe : happy 
        iframe.classList.remove('fa-sad-cry')
        iframe.classList.remove('fa-meh')
        iframe.classList.remove('defeat')
        iframe.classList.remove('neutral')
        iframe.classList.add('fa-laugh-wink')
        iframe.classList.add('victory')
    }
    else if(
        (choicePlayer === "pierre" && choiceIA === "feuille")
        || (choicePlayer === "feuille" && choiceIA === "ciseaux")
        || (choicePlayer === "ciseaux" && choiceIA === "pierre")
        )
        {
            result = "L'IA a gagné ce point, dommage..."
            
            //incrémente le score de l'IA
            scoreIA ++;
            
            //modifie l'iframe : sad
            iframe.classList.remove('fa-meh')
            iframe.classList.remove('fa-laugh-wink')
            iframe.classList.remove('victory')
            iframe.classList.remove('neutral')
            iframe.classList.add('fa-sad-cry')
            iframe.classList.add('defeat')
        }
    
    //affichage des scores
    scoreP.innerHTML = scorePlayer
    scoreI.innerHTML = scoreIA
    
    //affichage des résultats
    resultat.innerHTML = result
    
    //fin du jeu
    if((scorePlayer === 3) || (scoreIA === 3))
    {
        chifoumiEndGame();
    }
    
}