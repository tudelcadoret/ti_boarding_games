<?php

//connexion à la base de données
session_start();
include 'db/database.php';


//table forum_comment
if(isset($_GET['delete']))
{
    $delete = $_GET['delete'];

$delete_comment = $DB->query("
DELETE FROM forum_comment
WHERE id_comment_forum = ?",
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
    
    $comment = $_POST['comment'];
    $forum_id = $_POST['forum_id'];
    $user_id = $_POST['user_id'];
    
    //filtre : titre
    if(empty($comment))
    {
        $valid = false;
        $error_comment = "Merci de saisir un commentaire !";
    }
    
    //si tout est ok, envoi de la requête
    if($valid)
    {
        
    $id_forum = $_GET['id_forum'];
    
    
    $DB->insert("
    INSERT INTO `forum_comment`( `comment`, `forum_id`, `user_id`) 
    VALUES (?, ?, ?)",
    array($comment, $forum_id, $user_id));
    
    //table forum
    $forumDate = $DB->query("
    UPDATE `forum` 
    SET `date` = NOW()
    WHERE `id_forum` = ?
    ",
    array($forum_id));  
    }
}

//*****************************************************************************
//récupération des informations depuis la bdd

//table forum
$forum = $DB->query("
SELECT `id_forum`, `title`, `content`, `user_id_fk` 
FROM `forum`
WHERE id_forum = ?
",
array($_GET['id_forum']));
$forum = $forum->fetch();

//table forum_comment
$forum_comments = $DB->query("
SELECT `id_comment_forum`, `comment`, `forum_id`, `user_id`, `date_creation`, pseudo
FROM `forum_comment`
INNER JOIN usersList
ON forum_comment.user_id = usersList.id
WHERE forum_id = ?
ORDER BY date_creation DESC
",
array($_GET['id_forum']));
$forum_comments = $forum_comments->fetchAll();

//table users
$user_profil = $DB->query("
SELECT `id`, `pseudo`
FROM `usersList` 
WHERE id = ?", 
array($_SESSION['req']['id']));
$user_profil = $user_profil->fetch();


//inclusion du template
$title = "forumReadSubject";
$template = 'forumReadSubject.phtml';
include 'template/template.php';