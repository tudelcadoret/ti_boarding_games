//variables globales

    //affichage des messages d'erreurs
const errorInput = document.querySelector("span")
const errorFormat = document.getElementById("errorFormat")

//champs vérifiés
const nomValid = document.getElementById("nom")
const prenomValid = document.getElementById("prenom")
const pseudoValid = document.getElementById("pseudo")
const mailValid = document.getElementById("mail")

//regex
const regex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçïî]+([-'/s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçïî]+)?$/;
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


//callback

    //vérifie les saisies de l'utilisateur
function validation(event)
{
    //last name : champ vide
    if(nomValid.validity.valueMissing)
    {
        event.preventDefault()
        errorInput.textContent = "Vous avez un ou plusieurs champs manquants"
        nomValid.classList.add("inputNotValid")
    }
    //last name : mauvais format
    else if(regex.test(nomValid.value) == false)
    {
        event.preventDefault()
        errorFormat.textContent = "Vous avez un ou plusieurs champs au mauvais format"
        nomValid.classList.add("dataFormatNotValid")
    }
  
    //first name : champ vide
    if(prenomValid.validity.valueMissing)
    {
        event.preventDefault()
        prenomValid.classList.add("inputNotValid")
    }
    //first name : mauvais format
    else if(regex.test(prenomValid.value) == false)
    {
        event.preventDefault()
        errorFormat.textContent = "Vous avez un ou plusieurs champs au mauvais format"
        prenomValid.classList.add("dataFormatNotValid")
    }
    
    //pseudo : champ vide
    if(pseudoValid.validity.valueMissing)
    {
        event.preventDefault()
        pseudoValid.classList.add("inputNotValid")
    }
    //pseudo : mauvais format
    else if(regex.test(pseudoValid.value) == false)
    {
        event.preventDefault()
        errorFormat.textContent = "Vous avez un ou plusieurs champs au mauvais format"
        pseudoValid.classList.add("dataFormatNotValid")
    }
  
    //mail : champ vide
    if(mailValid.validity.valueMissing)
    {
        event.preventDefault()
        mailValid.classList.add("inputNotValid")
    }
    //mail : mauvais format
    else if(regexMail.test(mailValid.value) == false)
    {
        event.preventDefault()
        errorFormat.textContent = "Vous avez un ou plusieurs champs au mauvais format"
        mailValid.classList.add("dataFormatNotValid")
    }
}