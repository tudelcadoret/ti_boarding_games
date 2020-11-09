//GESTIONNAIRE D'EVENEMENTS

document.addEventListener('DOMContentLoaded', function() {

//vérifie les informations avant l'envoi du formulaire
   
   //déclencheur
   let formValid = document.getElementById("inscription")
   
   //gestionnaire d'évènements
   formValid.addEventListener('click', validation)
   
})