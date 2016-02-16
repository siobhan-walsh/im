<?php

include('connection.php');


    function showAllRooms(){
        
        //for admin list
        global $db;
       
        $query = "SELECT * FROM chatRoom";
            $result = $db->prepare($query);
            $lresult = $result->fetchAll();
        echo json_encode($lresult);
        
    }

    
    function insertRoom(){
        
        //for admin list
        global $db;
       
        $query = "INSERT INTO chatRoom (chat, name, recipiant) VALUES (:un, :avi, :status, :c);";
        $result->execute(array(':un' => $un, ':avi' => $avi, ":status" => $status, ":c" => $c));
        $result = $db->prepare($query);
        
        echo json_encode($result);
        
    }





?>