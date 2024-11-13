<?php

include "connection.php";

$id=$_GET["id"];

$response = $connection->prepare("SELECT * FROM transactions WHERE id=?;");
$response-> bind_param("i",$id);

$response->execute();

$result = $response->get_result();

if($result->num_rows >0){
    $resultObject=$result->fetch_assoc();
    echo json_encode($resultObject);
}
else{
    $response = [
        "message"=>"NO data"
    ];
    echo json_encode($response);
}