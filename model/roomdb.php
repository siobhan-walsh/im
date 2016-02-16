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
        $chat = $_POST['chat'];
        $name = $_POST['name'];
        $recipiant = $_POST['recipiant'];
        $query = "INSERT INTO chatRoom (chat, name, recipiant) VALUES (:chat, :name, :recipiant);";
        $result->execute(array(':chat' => $chat, ':name' => $name, ":recipiant" => $recipiant));
        $result = $db->prepare($query);
        
        echo json_encode($result);
        
    }


    function insertRoom(){

        //for admin list
        global $db;
        $ID = $_POST['roomID'];
        $query = "DELETE FROM chatRoom WHERE id = :ID";
        $result = $db->prepare($query);
        $result->execute(array(':ID' => $ID));
        echo json_encode('deleted user');
        
    }





?>