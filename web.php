<?php 

include_once("connexion.php");

$req="select * from Client where nom like '".$_GET['id']."%'";
$result = mysqli_query($conn,$req);

while($ligne=mysqli_fetch_array($result)){
    echo $ligne['prenom'];
}

mysqli_close($conn);
?>