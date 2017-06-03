<?php

try {
    $db = new PDO( 'mysql:host=localhost;dbname=jquery_ajax;charset=utf8', 'root', '' );
}

catch(Exception $e) {
    echo "An error has occurred";
}



?>