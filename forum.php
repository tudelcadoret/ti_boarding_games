<?php

//connexion à la base de données
session_start();
include 'db/database.php';




//table forum_comment
if(isset($_GET['delete']))
{
    $delete = $_GET['delete'];

$delete_subject = $DB->query("
DELETE FROM forum
WHERE id_forum = ?",
array($delete));
}


//******************************************************************************
//modifications des informations

//variable
$valid = true;

//si $_POST contient des informations, elles sont traîtées
if(!empty($_POST))
{
    extract($_POST);
    
    $title = $_POST['title'];
    $content = $_POST['content'];
    $user_id = $_POST['user_id'];
    
    //filtre : titre
    if(empty($title))
    {
        $valid = false;
        $error_title = "Merci de saisir un titre !";
    }
    
    //filtre : commentaire
    if(empty($content))
    {
        $valid = false;
        $error_content = "Merci de saisir un commentaire !";
    }
    
    //si tout est ok, envoi de la requête
    if($valid)
    {
        $DB->insert("
        INSERT INTO `forum`(`title`, `content`, `user_id_fk`) 
        VALUES (?, ?, ?)",
        array($title, $content, $user_id));
    }
}


//*****************************************************************************
//récupération des informations depuis la bdd

//table forum
$forums = $DB->query("
SELECT `id_forum`, `title`, `content`, `user_id_fk`, `date`, `pseudo`
FROM `forum`
INNER JOIN usersList 
ON forum.user_id_fk = usersList.id
",
array());
$forums = $forums->fetchAll();

//table users
$user_profil = $DB->query("
SELECT `id`, `pseudo`
FROM `usersList` 
WHERE id = ?", 
array($_SESSION['req']['id']));
$user_profil = $user_profil->fetch();


//inclusion du template
$title = "forum";
$template = 'forum.phtml';
include 'template/template.php';