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
      
        $name = $_POST['name'];
        $host_id = $_SESSION['user_id'];

        $query = "INSERT INTO chatRoom (name, host_id) VALUES ( :name, :host_id);";
        
        $result = $db->prepare($query);
        $result->execute(array(':name' => $name, ":host_id" => $host_id));
        
        
        echo json_encode('newroom inserted');
        
    }

    function update_room(){
        
        $cid = $_POST['cid'];
        $name = $_POST['name'];
        
        $query = "UPDATE chat SET name = :name, WHERE id =:cid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':name' => $name, ':cid' => $id));
        
        echo json_encode('updated chatroom name');
        
        
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