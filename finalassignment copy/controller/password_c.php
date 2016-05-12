

<?php

include("../model/password.php");

if($_POST['method'] == "insert"){
   insert_password(); 
    
    
}

if($_POST['method'] == "view"){
  view_passwords(); 
    
    
}


if($_POST['method'] == "update"){
  update_password(); 
    
    
}


if($_POST['method'] == "delete"){
delete_password(); 
    
    
}

?>