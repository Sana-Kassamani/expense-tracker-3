<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET,POST");

$host = "localhost";
$db_user = "root";
$pass = "";
$db_name = "expense_trackerdb";
$port= 3308;

$connection = new mysqli($host,$db_user,$pass,$db_name,$port);

if($connection->connect_error){
    die("Connection failed: " . $connection->connect_error);
}
