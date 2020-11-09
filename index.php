<?php

//connexion à la base de données
session_start();
include 'db/database.php';
    

//inclusion du template
$title = "page d'accueil ";
$template = 'index.phtml';
include 'template/template.php';