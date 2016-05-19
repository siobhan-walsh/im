<?php

include('connection.php');

    global $db;

    $uid = $_POST['userid'];
    $filename = substr(md5(rand()), 0, 7);
    $type = explode("/", $_FILES['images']['type'][0])[1];
    
    if(!is_dir('../img/' . $uid . '/')){
        
        mkdir('../img/'. $uid . '/', 0775);
        
 
    }

   if( move_uploaded_file(

      $_FILES['images']['tmp_name'][0], '../img/'. $uid . '/' . $filename . '.' . $type                            
    )) {
     
       
     $path = './img/'. $uid . '/' . $filename . '.' . $type  ;
       
    echo $path;
        
   };

?>