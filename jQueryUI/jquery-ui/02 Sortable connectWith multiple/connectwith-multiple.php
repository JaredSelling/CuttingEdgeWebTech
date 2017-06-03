<?php

require_once 'php-includes/connect.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>jQuery sortable ConnectWith multiple lists</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        <script src="scripts/connectwith-multiple.js"></script>
    </head>
    
    <body>
        <h1>jQuery sortable ConnectWith multiple lists</h1>
        <div id="left">
            <h2>Lots available</h2>
            <ul id="lots">
                <?php echo $display->lots(); ?>
            </ul>
        </div>
        <div id="center">
            <h2>Enough available</h2>
            <ul id="enough">
                <?php echo $display->enough(); ?>
            </ul>
        </div>
        <div id="right">
            <h2>Out of stock</h2>
            <ul id="none">
                <?php echo $display->none(); ?>
            </ul>
        </div>
    </body>
</html>