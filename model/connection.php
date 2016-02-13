<?php

    try {
        
        $db = new PDO("mysql:dbname=project;host=localhost", "root", "root");    

        
    } catch (PDOexception $e) {
        echo 'connection failed:' . $e->getMessage();
    }

?> 