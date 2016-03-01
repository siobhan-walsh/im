<?php

include('connection.php');

    //CRUD users


    function insert_msg(){
        
        //insert info into users table
        
        global $db;
        
        $msg = $_POST['msg'];
        $uid = $_SESSION['user_id'];
       
        //INSERT INTO chatroom (host_id, name) VALUES (1, 'joe');
        //INSERT INTO messages (msg, user_id, chatroom_id) VALUES ('hey man', 1, 1);
        $query = "INSERT INTO messages (msg, user_id, chatroom_id) VALUES (:msg, :uid, :chid);";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':msg' => $msg, ':uid' => $uid, ':chid' => 1));
        
        echo json_encode('message inserted');
         
    }
    
    function show_msg(){
        
        //insert info into users table
        
        global $db;
        
        //"SELECT messages.msg, users.username, users.avi, user.c FROM messages LEFT JOIN users ON users.user_id = messages.user_id";
        
        $uid = $_SESSION['user_id'];
        
        $query = "SELECT messages.msg, users.user_id, users.username, users.avi, users.c FROM messages LEFT JOIN users ON users.user_id = messages.user_id";
        
        $result = $db->prepare($query);
        
        $result->execute();
        
        $messages = $result->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($messages);
         
    }

/* check if last message == last message in db */

    function update_msg(){
        
        $mid = $_POST['msg_id'];
        $msg = $_POST['msg'];
        
        
        $query = "UPDATE messages SET msg = :msg, WHERE msg_id =:mid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':msg' => $msg, ':mid' => $mid));
        
        echo json_encode('updated message');
        
        
    }

    function delete_msg(){
        
        $mid = $_POST['msg_id'];
       
        
        $query = "DELETE FROM messages WHERE msg_id = :mid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':mid' => $mid));
        
        echo json_encode('deleted msg');
        
    }
?>