<?php

include('connection.php');

    //CRUD users


    function insert_msg(){
        
        //insert info into users table
        
        global $db;
        
        $msg = $_POST['msg'];
        $uid = $_POST['uid'];
       
        //INSERT INTO messages (msg, user_id) VALUES ('hey man', 1);
        $query = "INSERT INTO messages (msg, user_id) VALUES (:msg, :uid);";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':msg' => $msg, ':uid' => $uid));
        
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
    function get_msg(){
        
        //read user information
        
    }

    function update_msg(){
        
        //update user information
   
    }
    
    function delete_msg(){
        
        //delete user
        //remove a row of user from the users table
    }

?>