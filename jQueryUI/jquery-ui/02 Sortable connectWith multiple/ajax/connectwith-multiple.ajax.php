<?php

require_once '../php-includes/connect.inc.php';

$id = $_GET['id'];
$quantity = $_GET['quantity'];

$stmt = $db->prepare("UPDATE parts SET quantity = :quantity WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->bindParam(':quantity', $quantity);
$stmt->execute()

?>