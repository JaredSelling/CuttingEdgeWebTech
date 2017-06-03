<?php

require_once '../php-includes/connect.inc.php';

$ids = $_GET['item'];
$display_order = 1;

foreach ($ids as $id) {
    $stmt = $db->prepare("UPDATE list SET display_order = :display_order WHERE id = :id");
    $stmt->bindParam(':id' , $id);
    $stmt->bindParam(':display_order' , $display_order);
    $stmt->execute();

    $display_order++;

}

?>