<?php 

//connexion à la base de données
session_start();
include 'db/database.php';



//******************************************************************************
//modifications des informations

//variables
$valid = true;
$regex = '/\d/';


//si $_POST contient des informations, elles sont traîtées
if(!empty($_POST))
{
    extract($_POST);
    
    //**********************************************************************
    //games list
    
    if(isset($_POST['updateGamesList']))
    {
        $game_id = htmlspecialchars($_POST['game_id']);
        $game_name = htmlspecialchars($_POST['game_name']);
        $game_description = htmlspecialchars($_POST['game_description']);
        
        //filtre : la description ne doit pas être vide
        if(empty($game_description))
        {
            $valid = false;
            $error_description = "Vous ne pouvez pas saisir une description vide pour : ".$game_name;
        }
        
        //filtre : la description du jeu ne doit pas être numérique
        if(preg_match($regex, $game_description))
        {
            $valid = false;
            $error_description = "La description pour le ".$game_name." ne doit pas contenir de chiffre !";
        }
        
        //filtre : la saisie de la description ne doit pas dépasser 50 caractères
        $str = strlen(trim($game_description));
        if($str >= 50)
        {
            $valid = false;
            $error_description = "La description pour le ".$game_name." ne doit pas dépasser 50 caractères !";
        }
            
        //si tout est ok, envoi de la requête
        if($valid)
        {
            $DB->insert("
            UPDATE `games` 
            SET `game_description` = ?
            WHERE `game_id` = ?
            ",
            array($game_description, $game_id));
        }
    }
}


//*****************************************************************************
//récupération des informations depuis la bdd

//table usersList
$req_users = $DB->query("
SELECT `id`, `nom`, `prenom`, `mail`, `mdp`, `date_ajout`, `isAdmin`, `pseudo` 
FROM `usersList`
",
array());
$req_users = $req_users->fetchAll();

//table games
$req_games = $DB->query("
SELECT `game_id`, `game_name`, `game_description`
FROM games
",
array());
$req_games = $req_games->fetchAll();


//*****************************************************************************
//inclusion du template
$title = "admin";
$template = 'admin.phtml';
include 'template/template.php';