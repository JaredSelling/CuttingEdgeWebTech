<?php

require_once '../php-includes/connect.inc.php';

$id = $_GET['id'];
$available = $_GET['available'];

$stmt = $db->prepare("UPDATE fruits SET available = :available WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->bindParam(':available', $available);
$stmt->execute();

?>