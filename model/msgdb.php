<?php

include("connection.php");


function insert_message(){
    
//insert info into th users table    
    global $db;
    
    //INSERT INTO messages (message, user_id)
    $query = "INSERT INTO messages (msg_id, user_id, msg_time)  VALUES ('".$_POST['msg']."', ".$_POST['user_id'].")";


    $result = $db->query($query);
    
    echo json_encode("did it work");
}

function get_messages(){
    global $db;
    $query = "SELECT * FROM messages";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}


function update_message(){
//update info of users fron the users table    
             
}


function delete_message(){
 //remoove a row a user from the users table   
       
    
}

function insert_messages(){

        
}



//TESTING
insert_messages(); 
get_messages();

?> 