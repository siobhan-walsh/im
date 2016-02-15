<?php

include('connection.php');

    //CRUD users


    function insert_user(){
        
        //insert info into users table
        
        global $db;
        
        
        
        $un = $_POST['un'];
        $avi = $_POST['avi'];
        $c = $_POST['c'];
        $status = $_POST['status'];
        
        $query = "INSERT INTO users (username, avi, status, c) VALUES (:un, :avi, :status, :c);";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un, ':avi' => $avi, ":status" => $status, ":c" => $c));
        
        
        get_user();
       
         
    }

    function get_user(){
        
        //read user information
        
        global $db;
        
        $un = $_POST['un'];
       
        $query = "SELECT user_id FROM users WHERE username = :un;";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un));
        
        $lresult = $result->fetchAll();
        
        $_SESSION['user_id'] = $lresult[0]['user_id'];
        
        $uid = $_SESSION['user_id'];
        
        echo json_encode($uid);
        
    }


    function check_session(){
        
        if ($_SESSION['user_id'] == '') {
           
            echo json_encode ('nouser');
            
        } else {
          
            echo json_encode($_SESSION['user_id']);
       }
       


    }


    function update_user(){
        
        //update user information
        
    }
    
    function delete_user(){
        
        //delete user
        //remove a row of user from the users table
    }

?>