<!doctype html>
<html lang="fr">
    
    <head>
        <meta charset="UTF-8">
        
        <!-- obligatoire pour les media queries / à mettre de préférence dans une autre meta-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- titre -->
        <title>Games&tutus</title>
        
        <!-- font awesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
        
        <!-- normalize.css -->
        <link href="css/normalize.css" rel="stylesheet">
        
        <!--fichier css-->
        <link href="css/style.css" rel="stylesheet">
        
    </head>
    
    <body>
        
        <header class="container">
                
            <nav class="flex">
                
                <a href="index"><i class="fas fa-home"></i>Accueil</a>
                <a href="games"><i class="fas fa-chess"></i>Nos jeux</a>

                <!-- si une connexion est active -->
                <?php if(isset($_SESSION['req'])) : ?>
                
                    <!-- possibilité de voir la page de profil -->
                    <a href="forum"><i class="fab fa-blogger-b"></i>Forum</a>
                    <a href="user"><i class="fas fa-users"></i>Mon profil</a>
                
                    <!-- si admin connecté -->
                    <?php if($_SESSION['req']['isAdmin'] == 1) : ?>
                        <a href="admin"><i class="fas fa-user-shield"></i>Administration</a>
                    <?php endif ?>
                
                    <!-- si utilisateur connecté -->
                    <?php if(isset($_SESSION['req']['id'])) : ?>
                        <a href="logout"><i class="fas fa-sign-out-alt"></i>Se déconnecter</a>
                    <?php endif ?>

                <?php endif ?>
                
                <!-- si aucune connexion active -->
                <?php if(!isset($_SESSION['req'])) : ?>
                    <a href="login"><i class="fas fa-sign-in-alt"></i>Se connecter</a>
                <?php endif ?> 
                
            </nav>
            
        </header>
            
            <?php include $template ?>
            
        <footer>
            
            <div class="flex">
                <address>
                    <p>Me contacter</p>
                    <a href="mailto:tudel.cadoret@gmail.com">tudel.cadoret@gmail.com</a><br>
                    <a href="tel:+0630332199">0630332199</a>
                </address>
                <p><a href="#"><i class="fab fa-facebook-square"></i></a></p>
                <p><a href="#"><i class="fab fa-twitter-square"></i></a></p>
                <p><a href="#"><i class="fab fa-linkedin"></i></a>
                
            </div>
            
        </footer>
        
        <!-- utilities -->
        <script src="js/utilities.js"></script>
        
        <!-- register validator -->
        <script src="js/registerFormValidator/registerFormValidator.events.js"></script>
        <script src="js/registerFormValidator/registerFormValidator.main.js"></script>
        
        <!-- chifoumi -->
        <script src="js/chifoumi/chifoumiEvents.js"></script>
        <script src="js/chifoumi/chifoumiFunctions.js"></script>
        <script src="js/chifoumi/chifoumiMain.js"></script>
        
        <!-- pig game -->
        <script src="js/piggame/piggameEvents.js"></script>
        <script src="js/piggame/piggameFunctions.js"></script>
        <script src="js/piggame/piggameMain.js"></script>
        
        <script src="js/main.js"></script>
        
    </body>
</html>