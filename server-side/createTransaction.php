<?php

include "connection.php";

$type = $_POST["type"] ;
$amount = $_POST["amount"];
$date = $_POST["date"] ;
$notes = $_POST["notes"] ;
$user_id = $_POST["userId"];



$query = $connection->prepare("INSERT INTO transactions (type, amount, date, notes, Users_id) VALUES (?, ?, ?, ?, ?)");

$query->bind_param("sdssi", $type, $amount, $date, $notes, $user_id);

$query->execute();
if($connection->affected_rows >0){
    echo  json_encode([
        "message"=>"Successfully added row",
    ]);
}
else{
    echo  json_encode([
        "message"=>$connection->error,
    ]);
}


