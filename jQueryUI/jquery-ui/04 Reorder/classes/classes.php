<?php

class Display

{
    private $db;

    function __construct($db) { 
        $this->db = $db;
    }
    
    public function listItems() {
        $output = '';
        
        $stmt = $this->db->query("SELECT * FROM list ORDER BY display_order"); 

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= "\n\t\t\t\t<li id='item_" . $row["id"] . "'>" . $row["name"] . "</li>";
        }
        return $output;
    }
    
}

?>