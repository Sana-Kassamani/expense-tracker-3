<?php

include "connection.php";

$type= $_POST["type"];
$id=$_POST["id"];

$query = $connection->prepare("SELECT SUM(amount) as sum from transactions where Users_id= ? and type=?;");

$query->bind_param("is", $id,$type);

$query->execute();

$result = $query->get_result();

if($result->num_rows>0)
{

    $total = $result-> fetch_assoc();
    echo json_encode(
            $total["sum"],
        
        );
}