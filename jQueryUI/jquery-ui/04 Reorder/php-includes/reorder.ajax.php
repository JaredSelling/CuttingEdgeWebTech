<?php

require_once 'connect.inc.php';

$items = $_GET['item'];
$count = 1;

foreach ($items as $item) {
    $stmt = $db->query("UPDATE menu SET `order` = $count WHERE id = $item");
    $stmt->execute();
    $count++;

}

?>