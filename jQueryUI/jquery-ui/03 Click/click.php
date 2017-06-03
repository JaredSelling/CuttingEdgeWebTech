<!DOCTYPE html>
<?php

require_once 'php-includes/connect.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<html>
    <head>
        <title>jQuery click UI</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/style.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        <script src="scripts/click.js"></script>
    </head>
    
    <body>
        <h1>jQuery click UI</h1>
        <div id="left">
            <h2>Available today</h2>
            <ul id="available">
                <?php echo $display->available(); ?>
            </ul>
            <div class="instructions" id="instructions-remove">
                Click to remove fruits from available list
            </div>
        </div>
        <div id="right">
            <h2>Out of stock</h2>
            <ul id="out-of-stock">
                <?php echo $display->outofStock(); ?>
            </ul>
            <div class="instructions" id="instructions-add">
                Click to add fruits to available list
            </div>            
        </div>
    </body>
</html>