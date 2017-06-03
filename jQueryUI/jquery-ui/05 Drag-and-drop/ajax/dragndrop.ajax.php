<?php

require_once '../php-includes/connect.inc.php';

$id = $_GET['id'];
$box = $_GET['box'];

$stmt = $db->prepare("UPDATE toys SET box = :box WHERE id = :id");
$stmt-> bindParam(':id', $id);
$stmt-> bindParam(':box', $box);
$stmt->execute();

?>