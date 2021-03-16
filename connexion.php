<?php

$servername = "localhost";
$username = "tduret";
$password = "plouf";


$conn = mysqli_connect($servername,$username,$password);

mysqli_select_db($conn,"tpjs");

?>