<?php

include('connection.php');


    function showAllChatrooms(){
      
        global $db;
       
            $query = "SELECT * FROM chatroom";
            $result = $db->prepare($query);
            $result->execute();
            $lresult = $result->fetchAll();
            echo json_encode($lresult);
        
    }

    function showMyRooms(){

        global $db;
        $uid = $_POST['uid'];
        
        $query = "SELECT chatroom.name, chatroom_users.chatroom_id
                FROM chatroom_users
                INNER JOIN chatroom ON chatroom.chatroom_id = chatroom_users.chatroom_id
                WHERE chatroom_users.user_id = :uid";
        
            $result = $db->prepare($query);
            $result->execute(array(":uid" => $uid));
            $crresult = $result->fetchAll();
            echo json_encode($crresult);
        
    }
    
    function showUsersInChatRoom(){
         
        global $db;
       
        
        $crid = $_POST['crid'];
        
        $query = "SELECT users.username, users.user_id, users.avi, users.email, users.c FROM users LEFT JOIN chatroom_users ON users.user_id = chatroom_users.user_id WHERE chatroom_users.chatroom_id = :crid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(":crid" => $crid));
        
        $messages = $result->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($messages);
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


      function updateChatroom(){
        global $db;
        
        $cid = $_POST['crid'];
        $name = $_POST['name'];
        
        $query = "UPDATE chatroom SET name = :name WHERE chatroom_id =:cid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':name' => $name, ':cid' => $cid));
        
        echo json_encode('updated chatroom name');
        
        
    }


    function deleteChatroom(){

      
        global $db;
        $ID = $_POST['crid'];
        $query = "DELETE FROM chatroom WHERE chatroom_id = :ID";
        $result = $db->prepare($query);
        $result->execute(array(':ID' => $ID));
        echo json_encode('deleted user');
        
    }





?>