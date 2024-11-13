<?php
include "connection.php";

$transaction_id= $_POST["id"];


$query = $connection->prepare("DELETE FROM transactions WHERE id = ?;");

$query->bind_param("i",$transaction_id);

$query->execute();

if($connection->affected_rows >0){
    echo  json_encode([
        "message"=>"Successfully deleted row",
    ]);
}
else{
    echo  json_encode([
        "message"=>$connection->error,
    ]);
}