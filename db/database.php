<?php 

//déclaration d'une nouvelle classe
class connexionDB {
    
    //données de connexion
    private $host    = 'home.3wa.io';
    private $name    = 'live-31_tudel_projet_perso';
    private $user    = 'tudel';      
    private $pass    = '2cc575a8OTYwZWU4NTBjMDlmMWQ3OWY5YTdkYzI50c3e2deb';  
    private $connexion;
    
    //constructeur
    function __construct($host = null, $name = null, $user = null, $pass = null){
        if($host != null)
        {
            $this->host = $host;           
            $this->name = $name;           
            $this->user = $user;          
            $this->pass = $pass;
        }
        try{
            $this->connexion = new PDO('mysql:host=' . $this->host . ';port=3307 ;dbname=' . $this->name,
            $this->user, $this->pass, array(PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES UTF8', 
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
        }catch (PDOException $e){
            echo 'Erreur : Impossible de se connecter  à la BDD !';
            die();
        }
    }
    
    //fonction pour les requêtes SELECT
    public function query($sql, $data = array()){
        $req = $this->connexion->prepare($sql);
        $req->execute($data);
        return $req;
    }
    
    //fonction pour les requêtes UPDATE, DELETE et INSERT
    public function insert($sql, $data = array()){
        $req = $this->connexion->prepare($sql);
        $req->execute($data);
    }
}

//instanciation de connexionDB
$DB = new connexionDB();
