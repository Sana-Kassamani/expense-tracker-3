<?php

include "connection.php";

$type = $_POST["type"] ;
$amount = $_POST["amount"];
$date = $_POST["date"] ;
$notes = $_POST["notes"] ;
$id = $_POST["id"];


$query = $connection->prepare("UPDATE transactions SET type = ?, amount = ?, date = ? , notes = ? WHERE id = ?;");

$query->bind_param("sdssi", $type, $amount, $date, $notes, $id);

$query->execute();



if($connection->affected_rows >0){
    echo "successful";
}
else{
    
    echo $connection->error;
}