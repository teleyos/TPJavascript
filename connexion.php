<?php

$servername = "localhost";
$username = "tduret";
$password = "plouf";

try{
    $conn = new PDO("mysql:host=$servername;dbname=$tpjs",$username,$password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}


?>