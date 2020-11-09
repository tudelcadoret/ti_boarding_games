document.addEventListener('DOMContentLoaded', function () {
    
    
    //*************************************************************************
    //déclencheurs
    
    const start = document.getElementById('piggame_start')
    const draw = document.getElementById('piggame_draw')
    const addPoint = document.getElementById('piggame_addPoints')
    const passTurn = document.getElementById('piggame_passTurn')
    const reset = document.getElementById('piggame_reset')


    //*************************************************************************
    //gestionnaire d'événements
    
        //au clic sur start
    start.addEventListener('click', piggameStartGame)
    
        //au clic sur lancer un dé
    draw.addEventListener('click', resultThrowDice)
    
        //au clic sur ajouter les points
    addPoint.addEventListener('click', addPointsToCagnotte)
    
        //au clic sur passer la main
    passTurn.addEventListener('click', passTurnDice1)
    
        //au clic sur rejouer
    reset.addEventListener('click', piggameNewGame)
    
});



