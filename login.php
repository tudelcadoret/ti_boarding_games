<?php 

//connexion à la base de données
session_start();
include 'db/database.php';

//en cas de session active, l'utilisateur est renvoyé vers l'accueil
if (isset($_SESSION['req']['id'])){
    header('Location: index'); 
    exit;
}

//variables
$message = null;
$valid = true;

//si $_POST contient des informations, elles sont traîtées
if(!empty($_POST))
{
    extract($_POST);
    
    //récupération des informations du formulaire
    if( isset($_POST['connexion']) )
    {
        $mail = htmlentities(strtolower(trim($mail)));
        $mdp = trim($mdp); 
        
        //mise en place des filtres

            //vérification du mail
        if(empty($mail))
        {
            $valid = false;
            $erreur_mail = "Merci de saisir un mail !";
        }

            //vérification du mot de passe
        if(empty($mdp))
        {
            $valid = false;
            $erreur_mdp = "Merci de saisir un mot de passe !";
        }

            //vérification de la présence du mail et du mdp dans la bdd
        $req = $DB->query("
        SELECT * 
        FROM usersList 
        WHERE mail = ?",
        array($mail)
        );
        $req = $req->fetch();
            
        //si aucun résultat 
        if(empty($req['id'])){
            $valid = false;
        }
        //si résultat existe
        else
        {
            if(password_verify($mdp, $req['mdp']))
            {
                //si résultat présent
                if ($valid){
                    
                    $_SESSION['req']['id'] = $req['id'];
                    $_SESSION['req']['nom'] = $req['nom'];
                    $_SESSION['req']['prenom'] = $req['prenom'];
                    $_SESSION['req']['mail'] = $req['mail'];
                    $_SESSION['req']['isAdmin'] = $req['isAdmin'];
                    
                    $message = "Connexion réussie !";
                } 
            }
        }
    }
}

//inclusion du template
$title = "login";
$template = 'login.phtml';
include 'template/template.php';