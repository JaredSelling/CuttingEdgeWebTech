<?php

class Display

{
    private $db;
    
    function __construct($db) { 
        $this->db = $db;
    }
    
    public function available() {
        $output = '';
        $stmt = $this->db->query("SELECT * FROM fruits WHERE available = 'yes'");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= "\n\t\t\t\t<li id='" . $row['id'] . "'>" . $row['name'] . "</li>";
        }
        return $output;
    }
    
    public function outofStock() {
        $output = '';
        $stmt = $this->db->query("SELECT * FROM fruits WHERE available = 'no'");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= "\n\t\t\t\t<li id='" . $row['id'] . "'>" . $row['name'] . "</li>";
        }
        return $output;
    }
    
}

?>