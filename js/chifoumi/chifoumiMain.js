document.addEventListener('DOMContentLoaded', function () {
    
    
    //*************************************************************************
    //déclencheurs
    
        //boutons
    const start = document.getElementById('chifoumi_start')
    const pierre = document.getElementById('pierre')
    const feuille = document.getElementById('feuille')
    const ciseaux = document.getElementById('ciseaux')
    const continuer = document.getElementById('chifoumi_continue')
    const reset = document.getElementById('chifoumi_reset')

    //*************************************************************************
    //gestionnaire d'événements
    

        //au clic sur start
    start.addEventListener('click', chifoumiLaunchGame)
    
        //au clic sur pierre
    pierre.addEventListener('click', isRock)
    
        //au clic sur feuille
    feuille.addEventListener('click', isLeaf)
    
        //au clic sur ciseaux
    ciseaux.addEventListener('click', isScissors)
    
        //au clic sur continuer
    continuer.addEventListener('click', continueGame)
    
        //au clic sur nouvelle partie
    reset.addEventListener('click', chifoumiNewGame)
    
});

