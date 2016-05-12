<?php



try {
    
    
    $db = new PDO ("mysql:dbname=gallery;host=localhost", "root", "root");
    
    
    
} catch (PDOException $e) {
    
    
    echo "FAIL";
    
    
    
}






?>