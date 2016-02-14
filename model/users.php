<?php

include('connection.php');

    //CRUD users



    function insert_user(){
        
        //insert info into users table
        
    
        global $db;
        
        $un = $_POST['un'];
        $pw = $_POST['pw'];
        $avi = $_POST['avi'];
        $status = $_POST['status'];
        $email = $_POST['email'];
        
        
        $pw = md5($pw);
        
        
        $chquery = "SELECT * FROM users WHERE email = :email";
        
        $ch = $db->prepare($chquery);
        
        $ch->execute(array(':email' => $email));
        
        $chresult = $ch->fetchAll(PDO::FETCH_ASSOC);
        
        if($chresult == null){
           
            $query = "INSERT INTO users (username, password, avi, status, email) VALUES (:un, :pw, :avi, :status, :email);";
        
            $result = $db->prepare($query);
        
            $result->execute(array(':un' => $un, ':pw' => $pw, ':avi'=> $avi, ':status' => $status, ':email' => $email));

            echo json_encode('inserted');
            
        }else{
           echo json_encode(array(status => 'hasaccount', info => $chresult)); 
        }
        
        
        
        /*
        $query = "INSERT INTO users (username, password, avi, status, email) VALUES (:un, :pw, :avi, :status, :email);";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un, ':pw' => $pw, ':avi'=> $avi, ':status' => $status, ':email' => $email));

        echo json_encode('inserted');
        */
         
    }
/*
    function login_user(){
        
        //insert info into users table
        session_start();
            
            
        global $db;
        
        $un = $_POST['un'];
        $pw = $_POST['pw'];
       
        $query = "SELECT user_id FROM users WHERE username = :un AND password = :pw;";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un, ':pw' => $pw));
        
        $lresult = $result->fetchAll();
            
        $_SESSION['user_id'] = $lresult[0]['user_id'];
            
        echo json_encode($_SESSION['user_id']);
         
    }


    function get_userinfo(){
        
        //read user information
        
        global $db;
        
        $uid = $_POST['uid'];
        
        $query = "SELECT * FROM users WHERE user_id = :uid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':uid' => $uid);
        
        echo json_encode($result);
        
    }

    function update_user(){
        
        //update user information
        
    }
    
    function delete_user(){
        
        //delete user
        //remove a row of user from the users table
    }
*/
?>