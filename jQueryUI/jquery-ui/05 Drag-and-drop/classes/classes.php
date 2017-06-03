<?php

class Display

{
    private $db;

    function __construct($db) { 
        $this->db = $db;
    }

    
    public function box($colour) {
        $output = "";
        
        $stmt = $this->db->prepare("SELECT * FROM toys WHERE box = :colour");
        $stmt->bindParam(':colour', $colour);
        $stmt->execute();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= "\t\t\t<div id='" . $row["id"] . "'>" . $row["name"] .
            "</div>\n";
        }

        return $output;
    }    


    
}

?>