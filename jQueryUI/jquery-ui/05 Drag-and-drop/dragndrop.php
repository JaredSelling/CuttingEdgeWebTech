<?php

require_once 'php-includes/connect.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>jQuery drag and drop to multiple destinations</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
        <script src="scripts/dragndrop.js"></script>
    </head>
    
    <body>
        <h1>jQuery drag and drop to multiple destinations</h1>
        
        <?php $colours = array('orange', 'blue', 'green', 'red');
        foreach ($colours as $colour) { 
            echo "\t\t<div class='box' id='" . $colour . "'>\n" .
            $display->box($colour) . "\t\t</div>\n";
        } ?>
    
    </body>
</html>