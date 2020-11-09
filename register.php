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
    if( isset($_POST['inscription']) )
    {
        $nom  = htmlentities(trim($nom));
        $prenom = htmlentities(trim($prenom));
        $pseudo = htmlentities(trim($pseudo));
        $mail = htmlentities(strtolower(trim($mail)));
        $mdp = trim($mdp); 
        $confmdp = trim($confmdp); 
        
        //mise en place des filtres
        
            //vérification du nom
        if(empty($nom))
        {
            $valid = false;
            $erreur_nom = ("Merci de saisir un nom !");
        }       

            //vérification du prénom
        if(empty($prenom))
        {
            $valid = false;
            $erreur_prenom = ("Merci de saisir un prénom !");
        }     
        
            //vérification du pseudo
        if(empty($pseudo))
        {
            $valid = false;
            $erreur_pseudo = ("Merci de saisir un pseudo !");
        }  

            //vérification du mail
        if(empty($mail))
        {
            $valid = false;
            $erreur_mail = "Merci de saisir un mail !";
        }
                //format du mail
        elseif(!preg_match("/^[a-z0-9\-_.]+@[a-z]+\.[a-z]{2,3}$/i", $mail))
        {
            $valid = false;
            $erreur_mail = "Le format du mail est invalide, merci de recommencer !";

        }
            //disponibilité du mail
        else
        {
            $req_mail = $DB->query("
            SELECT `mail` 
            FROM usersList 
            WHERE `mail` = ?",
            array($mail));
            $req_mail = $req_mail->fetch();

            if(!empty($req_mail) )
            {
                $valid = false;
                $erreur_mail = "Ce mail existe déjà !";
            }
        }

            //vérification du mot de passe
        if(empty($mdp))
        {
            $valid = false;
            $erreur_mdp = "Merci de saisir un mot de passe !";

        }
        elseif($mdp != $confmdp)
        {
            $valid = false;
            $erreur_mdp = "Le mot de passe et sa confirmation ne correspondent pas !";
        }

            //ajout du nouvel utilisateur s'il n'y a aucune erreur
        if($valid)
        {

            //hashage du mdp
            $hash = password_hash($mdp, PASSWORD_DEFAULT);
            
            //date d'inscription
            $dateCreationCompte = date('Y-m-d H:i:s');
            
            //par défaut, l'inscrit n'est pas un admin
            $isAdmin = 0;

            //insertion des données dans la table utilisateur
            $DB->insert("
            INSERT INTO usersList (nom, prenom, mail, mdp, date_ajout, isAdmin, pseudo) 
            VALUES 
            (?, ?, ?, ?, ?, ?, ?)", 
            array($nom, $prenom, $mail, $hash, $dateCreationCompte, $isAdmin, $pseudo));
                
            $message = "Merci de vous être enregistré";
        }

    }
}

//inclusion du template
$title = "register";
$template = 'register.phtml';
include 'template/template.php';