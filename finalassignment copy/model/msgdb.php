<?php


include("connect.php");




function insert_message(){
    
    //insert info into the users table
    global $db;
    
  $query = "INSERT INTO messages (message, user_id) VALUES ('".$_POST['msg']."', ".$_POST['user_id'].")";
 
    ////$query = "INSERT INTO images (title, user_id, path) VALUES ('testTitle', 1, 'http://icons.iconarchive.com/icons/graphicpeel/balloons/256/Small-in-Pink-icon.png')";
    $result = $db->query($query);    
        
    
}


function get_messages(){
    
        global $db;
        $query = "SELECT messages.message, users.username FROM messages
        LEFT JOIN users ON users.id = messages.user_id";
                
        $result = $db->query($query);
        echo json_encode($result->fetchAll());
    
    
}



function update_message(){

    
    
    
}


function delete_message(){
    

    
}

//testing

//insert_image();

?>