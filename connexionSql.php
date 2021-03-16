<?php

$servername="localhost";
$username="lngeth";
$password="0207";
$dbname="BDD_lngeth";

//création de la connexion
$connexion = mysqli_connect($servername,$username,$password);
//connexion à la database
mysqli_select_db($connexion, $dbname);

?>
