<?php

include("connect.php");

//Create the Crud
function insert_password(){
global $db;
$query = "INSERT INTO passwords(password) VALUES ('".$_POST['password']."')";
$result = $db->query($query);
    
    
}

//Read the Crud
function view_passwords(){
    global $db;
    $query = "Select * FROM passwords";
    $result = $db ->query($query);
    echo json_encode($result->fetchAll());
    
    
}



    
 //update the passwords   
    

    
   function update_password(){

global $db; 
    
    $query = "UPDATE passwords SET password = '".$_POST['password']."'  WHERE id = 
    ".$_POST['id']."";
   
   
   $result = $db->query($query);
    echo json_encode("Updated!");
    
    
}

function delete_password (){
    
    //delete the passwords
    global $db; 
    $query = "DELETE FROM passwords WHERE id = ".$_POST['id']."";
    $result = $db->query($query);
    echo json_encode("DELETED");



}


?>