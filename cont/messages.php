<?php

include('../model/messages.php');

    //CRUD messages

  if($_POST['method'] == 'insertmsg'){
      
      insert_msg();
      
  }

 if($_POST['method'] == 'showmsg'){
      
      show_msg();
      
  }

   
?>