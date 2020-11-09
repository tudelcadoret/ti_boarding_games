<?php 

//connexion à la base de données
session_start();
include 'db/database.php';

//récupération du nom et de la description des jeux
$req_games = $DB->query("
SELECT `game_name`, `game_description`
FROM games
",
array());
$req_games = $req_games->fetchAll();

//inclusion du template
$title = "gameslist";
$template = 'games.phtml';
include 'template/template.php';
