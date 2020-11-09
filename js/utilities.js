//FONCTIONS GENERALES

//génère un nombre aléatoire entre deux bornes
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}


//ajoute/supprime la classe 'hide' à un élément html
    function displayNone(el) 
{
    el.classList.toggle('hidden')
}


