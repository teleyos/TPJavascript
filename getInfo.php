<?php

include ('connexionSql.php');

$id=$_GET['id'];

//création de la requète
$sql = "SELECT * FROM Client WHERE codeClient=".$id.";";
//récupération des résultats
$result = mysqli_query($connexion,$sql);
//mise en forme des données récupérées
$row = mysqli_fetch_array($result);
echo $row['civilite'].','.$row['nom'].','.$row['prenom'].','.$row['adresse'].','.$row['codePostal'].','.$row['ville'];
//fermeture de la session
mysqli_close($connexion);

?>
