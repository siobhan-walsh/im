<?php

    //echo 'work';

    var_dump($_POST);
    var_dump($_FILES);

    $uid = $_POST['userid'];
    $filename = substr(md5(rand()), 0, 7);

    if(!is_dir('../img/' . $uid . '/')){
        
        mkdir('../img/'. $uid . '/', 0775);
 
    }

   if( move_uploaded_file(

      $_FILES['images']['tmp_name'][0], '../img/'. $uid . '/' . $filename . '.jpg'                               
    )) {
       
       //include db file
         // insert the path to the database ../img/uid/avatar.jpg
   };

?>