<?php

include('connection.php');


    function showAllRooms(){
        
        //for admin list
        global $db;
       
            $query = "SELECT * FROM chatRoom";
            $result = $db->prepare($query);
            $result->execute();
            $lresult = $result->fetchAll();
        echo json_encode($lresult);
        
    }

    
    function insertRoom(){
        
        //for admin list
        global $db;
        $chat = $_POST['chat'];
        $name = $_POST['name'];
        $recipient = $_POST['recipient'];
        $query = "INSERT INTO chatRoom (chat, name, recipient) VALUES (:chat, :name, :recipient);";
        
        $result = $db->prepare($query);
        $result->execute(array(':chat' => $chat, ':name' => $name, ":recipient" => $recipient));
        
        
        echo json_encode('newroom inserted');
        
    }


    function deleteRoom(){

        //for admin list
        global $db;
        $ID = $_POST['roomID'];
        $query = "DELETE FROM chatRoom WHERE id = :ID";
        $result = $db->prepare($query);
        $result->execute(array(':ID' => $ID));
        echo json_encode('deleted user');
        
    }





?>