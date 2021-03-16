<?php 

include_once("connexion.php");

function requete($req){
    $result = $conn->prepare($req);
    $result->fetchAll();
    
    if(count($result) > 0){
        while($result = $result->fetch()){
            echo $result['prenom']."<br/>";
        }
    }else{
        error("empty set or error");
    }
}

requete("select * from Client");

$conn->close();
?>