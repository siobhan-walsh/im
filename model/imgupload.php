<?php

include('connection.php');

    global $db;

    //echo 'work';

    var_dump($_POST);
    var_dump($_FILES);

    $uid = $_POST['userid'];
    $filename = substr(md5(rand()), 0, 7);
    $type = explode("/", $_FILES['images']['type'][0])[1];
    var_dump($type);
        

    if(!is_dir('../img/' . $uid . '/')){
        
        mkdir('../img/'. $uid . '/', 0775);
 
    }

   if( move_uploaded_file(

      $_FILES['images']['tmp_name'][0], '../img/'. $uid . '/' . $filename . '.' . $type                            
    )) {
       
       
         // insert the path to the database ../img/uid/avatar.jpg
       
     $path = '../img/'. $uid . '/' . $filename . '.' . $type  ;
       
      
       
       $query = "UPDATE users SET avi = :avi WHERE user_id = :uid;";
        
            $result = $db->prepare($query);
        
            $result->execute(array(':uid' => $uid, ':avi'=> $path));
            
            echo json_encode('wow');
        
   };

?>