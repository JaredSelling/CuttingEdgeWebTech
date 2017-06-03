<?php

class Display

{
    private $db;

    function __construct($db) { 
        $this->db = $db;
    }
   
    public function lots() {
        $output = '';
        
        $stmt = $this->db->query("SELECT * FROM parts WHERE quantity = 'lots'");

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= '<li id="' . $row['id'] . '">' . $row['name'] . '</li>';
        }
        return $output;
    }
    
    public function enough() {
        $output = '';
        
        $stmt = $this->db->query("SELECT * FROM parts WHERE quantity = 'enough'");

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= '<li id="' . $row['id'] . '">' . $row['name'] . '</li>';
        }
        return $output;
    }

    public function none() {
        $output = '';
        
        $stmt = $this->db->query("SELECT * FROM parts WHERE quantity = 'none'");

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $output .= '<li id="' . $row['id'] . '">' . $row['name'] . '</li>';
        }
        return $output;
    }    
    
}

?>