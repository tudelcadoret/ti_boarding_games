<?php 

//connexion à la base de données
session_start();
include 'db/database.php';

//en cas de session non-active, l'utilisateur est renvoyé vers l'accueil
if(!isset($_SESSION['req']['id'])){
    header('Location: index'); 
    exit;
}


//******************************************************************************
//modifications des informations

//variables
$valid = true;
$regex = '/\d/';

//si $_POST contient des informations, elles sont traîtées
if(!empty($_POST))
{
    extract($_POST);
    
    if(isset($_POST['updateUser']))
    {
        $newNom = $_POST['newNom'];
        $nom = $_POST['nom'];
        
        $newPrenom = $_POST['newPrenom'];
        $prenom = $_POST['prenom'];
        
        $newPseudo = $_POST['newPseudo'];
        $pseudo = $_POST['pseudo'];
        
        //filtre : le nom ne doit pas comporter de chiffre
        if(preg_match($regex, $newNom))
        {
            $valid = false;
            $error_nom = "Le nom saisi ne doit pas contenir de chiffre !";
        }
        
        //filtre : le prénom ne doit pas comporter de chiffre
        if(preg_match($regex, $newPrenom))
        {
            $valid = false;
            $error_prenom = "Le prénom saisi ne doit pas contenir de chiffre !";
        }
        
        //pour avoir la possibilité de remplir un seul, ou plusieurs, champs(s)
        if(($nom != $newNom) && (!empty($newNom)))
        {
            $nom = $newNom;
        }
        
        if(($prenom != $newPrenom) && (!empty($newPrenom)))
        {
            $prenom = $newPrenom;
        }
        
        if(($pseudo != $newPseudo) && (!empty($newPseudo)))
        {
            $pseudo = $newPseudo;
        }
        
        //si tout est ok, envoi de la requête
        if($valid)
        {
            $DB->insert("
            UPDATE usersList
            SET nom = ?, prenom = ?, pseudo = ?
            WHERE id = ?",
            array($nom, $prenom, $pseudo, $_SESSION['req']['id']));
        }
    }
    
}


//*****************************************************************************
//récupération des informations depuis la bdd

//table users
$user_profil = $DB->query("
SELECT `id`, `nom`, `prenom`, `mdp`, `pseudo`
FROM `usersList` 
WHERE id = ?", 
array($_SESSION['req']['id']));
$user_profil = $user_profil->fetch();



//inclusion du template
$title = "user";
$template = 'user.phtml';
include 'template/template.php';