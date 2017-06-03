<?php
require_once 'php-includes/connecwt.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>jQuery sortable connectWith</title>
        <link rel="stylesheet" href="css/style.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        
        <script>
            $(document).ready(function( {
                alert("working");
            }));
        </script>
        
    </head>
    
    <body>
        <h1>jQuery sortable connectWith</h1>
        <div id="left">
            <h2>Available now</h2>
            <ul id="available"><?php echo $display->available(); ?></ul>
        </div>
        <div id="right">
            <h2>Out of stock</h2>
            <ul id="out-of-stock"><?php echo $display->outofStock(); ?></ul>
        </div>
    </body>
</html>