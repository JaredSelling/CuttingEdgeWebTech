<?php

require_once 'php-includes/connect.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>jQuery drag and drop to reorder list items</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        <script src="scripts/reorder-with-button.js"></script>
    </head>
    
    <body>
        <div id="reorder">
            <h1>jQuery drag and drop to reorder list items</h1>
            <ul id="list-items"><?php echo $display->listItems(); ?></ul>
                       
            <div id="update-message"></div>
            <button id="update-button">Click to save new order</button>
        </div>
        
        
        
    </body>
</html>