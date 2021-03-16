<?php

include 'connexionSql.php';

$sql = "SELECT Prestation.prestation FROM Prestation;";
$result=mysqli_query($connexion, $sql);
while ($row = mysqli_fetch_array($result)) {
    echo $row[0].',';
}

mysqli_close($connexion);

?>
