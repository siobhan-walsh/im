<?php

include('connection.php');


    function showAllRooms(){
        
        //for admin list
        global $db;
       
            $query = "SELECT * FROM chatroom";
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

        $query = "INSERT INTO chatroom (name, host_id) VALUES ( :name, :host_id);";
        
        $result = $db->prepare($query);
        $result->execute(array(':name' => $name, ":host_id" => $host_id));
        $result = $result->fetch();
        $result = count($result);
        
             $nquery = "SELECT chatroom_id FROM chatroom WHERE name = :name AND host_id = :host_id";
        
            $nresult = $db->prepare($nquery);
            $nresult->execute(array(':name' => $name, ":host_id" => $host_id));
            $nn = $nresult->fetch();
            echo json_encode($nn);
   
    }

  function addUserToRoom(){
  
        global $db;
        $crid = $_POST['crid'];
        $userid = $_POST['userid'];
        
        $query = "INSERT INTO chatroom_users (chatroom_id, user_id) VALUES (:crid, :userid);";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':crid' => $crid, ':userid' => $userid));
        
        echo json_encode('user added to chatroom');
    }


      function update_room(){
        global $db;
        
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