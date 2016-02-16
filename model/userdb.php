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
        $c = $_POST['c'];
        $email = $_POST['email'];
        
        
        $pw = md5($pw);
        
        //SELECT * FROM users WHERE email = 
        $chquery = "SELECT * FROM users WHERE email = :email";
        
        $ch = $db->prepare($chquery);
        
        $ch->execute(array(':email' => $email));
        
        $chresult = $ch->fetchAll(PDO::FETCH_ASSOC);
        
        if($chresult == null){
            
            //INSERT INTO users (username, password, avi, status, c, email) VALUES ('me', 'test', 'pic', '2', '#fff', 'ya@ya.com');
           
            $query = "INSERT INTO users (username, password, avi, status, c, email) VALUES (:un, :pw, :avi, :status, :c, :email);";
        
            $result = $db->prepare($query);
        
            $result->execute(array(':un' => $un, ':pw' => $pw, ':avi'=> $avi, ':status' => $status, ':c' => $c, ':email' => $email));
            
            echo json_encode(array('account' => 'new', 'info' => $result));
            
        } else {
           echo json_encode(array('account' => 'hasaccount', 'info' => $chresult)); 
        }
       
  
    }

    function get_user(){
        
        //read user information
        
        global $db;
        
        $email = $_POST['email'];
       
        //SELECT user_id, status FROM users WHERE username = 'fdsa';
        
        $query = "SELECT user_id, status FROM users WHERE email = :email;";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':email' => $email));
        
        $lresult = $result->fetchAll();
       
           
            $_SESSION['user_id'] = $lresult[0]['user_id'];

            $uid = $_SESSION['user_id'];

            $_SESSION['status'] = $lresult[0]['status'];

            $status = $_SESSION['status'];

            echo json_encode(array('user_id' => $uid, 'status' => $status));
            
    }


    function check_session(){
        
        if ($_SESSION['user_id'] == '') {
           
            echo json_encode ('nouser');
            
        } else {
          
            echo json_encode($_SESSION['user_id']);
       }
       


    }

 function showAllUsers(){
       
         global $db;
     
        $query = "SELECT * FROM users;";
        
        $result = $db->prepare($query);
     
        
        $result->execute();
        $users =  $result->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($users);
        
        
    }

    function update_user(){
        
        $uid = $_POST['user_id'];
        $un = $_POST['un'];
        
        $query = "UPDATE users SET username = :un, WHERE user_id =:uid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un, ':uid' => $uid));
        
        echo json_encode('updated username');
        
        
    }
    
    function delete_user(){
        
        $uid = $_POST['user_id'];
       
        
        $query = "DELETE FROM users WHERE user_id = :uid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':uid' => $uid));
        
        echo json_encode('deleted user');
        
    }

?>