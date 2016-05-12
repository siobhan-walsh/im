<?php


include("connect.php");




function insert_image(){
    
    //insert info into the users table
    global $db;
    
  $query = "INSERT INTO images (title, user_id, path) VALUES ('".$_POST['title']."', ".$_POST['user_id'].", '".$_POST['path']."')";
 
    ////$query = "INSERT INTO images (title, user_id, path) VALUES ('testTitle', 1, 'http://icons.iconarchive.com/icons/graphicpeel/balloons/256/Small-in-Pink-icon.png')";
    $result = $db->query($query);    
        
    
}


function getall(){
    global $db;
    $query = "SELECT * FROM images";
    $result = $db->query($query);
    $row = $result->fetchAll();
    echo json_encode($row);
}



function update_image(){

    
    
    
}


function delete_image(){
    

    
}

//testing

//insert_image();

?>
