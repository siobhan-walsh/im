<?php

    try {
        
        $db = new PDO("mysql:dbname=im;host=localhost", "root", "root");    
        session_start();
        
    } catch (PDOexception $e) {
        echo 'connection failed:' . $e->getMessage();
    }

?>