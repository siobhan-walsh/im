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
        //098f6bcd4621d373cade4e832627b4f6
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
        ////////lahiru backup of 63 $query = "SELECT user_id, status FROM users WHERE email = :email;";
        $query = "SELECT user_id,username,c,email, status, avi FROM users WHERE email = :email;";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':email' => $email));
        
        $lresult = $result->fetch();
       
            $_SESSION['user_id'] = $lresult[0]['user_id'];

            $uid = $_SESSION['user_id'];

            $_SESSION['status'] = $lresult[0]['status'];

            $status = $_SESSION['status'];
        
            $_SESSION['username'] = $lresult[0]['username'];

            $name = $_SESSION['username'];
        
            $_SESSION['email'] = $lresult[0]['email'];

            $email = $_SESSION['email'];
        
            $_SESSION['c'] = $lresult[0]['c'];

            $c = $_SESSION['c'];
        
            $_SESSION['avi'] = $lresult[0]['avi'];

            $avi = $_SESSION['avi'];
            
            
           
            echo json_encode(array('user_id' => $uid, 'status' => $status));
            
    }


    function check_session(){
        session_start();
        if ($_SESSION['user_id'] == '') {
           
            echo json_encode ('nouser');
            
        } else {
          
            echo json_encode($_SESSION);
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
        
        global $db;
        
        $uid = $_SESSION['user_id'];
        $un = $_POST['un'];
        $email = $_POST['email'];
    
        
        $query = "UPDATE users SET username = :un, email = :email WHERE user_id =:uid";
        $result = $db->prepare($query);
        $result->execute(array(':un' => $un, ':uid' => $uid, ':email' => $email));
        
        $_SESSION['username'] = $un;
        $_SESSION['email'] = $email;
        
        echo json_encode('updated username');
        
        
    }


    function loginUser(){

        global $db;
        
        $email = $_POST['email'];
        $pw = $_POST['pw'];
        $pw = md5($pw);
       
        $query = "SELECT user_id, username,c,email, status, avi FROM users WHERE email = :email AND password = :pw;";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':email' => $email, ':pw' => $pw));
        
        $lresult = $result->fetchAll(PDO::FETCH_ASSOC); 
        
        if($lresult[0]['user_id'] == null){
            echo json_encode('user not found');
        } else {
       
            $_SESSION['user_id'] = $lresult[0]['user_id'];

            $uid = $_SESSION['user_id'];

            $_SESSION['status'] = $lresult[0]['status'];

            $status = $_SESSION['status'];
        
            $_SESSION['username'] = $lresult[0]['username'];

            $name = $_SESSION['username'];
        
            $_SESSION['email'] = $lresult[0]['email'];

            $email = $_SESSION['email'];
        
            $_SESSION['c'] = $lresult[0]['c'];

            $c = $_SESSION['c'];
        
            $_SESSION['avi'] = $lresult[0]['avi'];

            $avi = $_SESSION['avi'];
            
            
           
            echo json_encode($lresult[0]);
        }
       /*  $pw = $_POST['pw'];
         $pw = md5($pw);
        
        $un = $_POST['un'];
      
        $query = "SELECT * FROM users WHERE username = :un";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':un' => $un));
        
        $userinfo =  $result->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($userinfo); */
    }

    function logoutUser(){
        

        session_unset();
        session_destroy();
        echo json_encode('loggedout');
       
        
    }
    
    function deleteUser(){
         global $db;
        $uid = $_POST['uid'];
      
        $query = "DELETE FROM users WHERE user_id = :uid";
        
        $result = $db->prepare($query);
        
        $result->execute(array(':uid' => $uid));
        
        echo json_encode('byeeyeye');
        
    }


?>